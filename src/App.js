import React from 'react'
import Location from './core/Location'
import Key from './core/Key'
import './App.css'
import config from './config'

const defaultState = {
  appConfig: {
    keys: true,
    bosses: true,
    characters: true
  },

  // State objects are maps of keyIDs to locationIDs
  keyState: {}, // keyID: locID
  bossState: {}, // keyID: locID
  characterState: {}, // keyID : [ locID, ... ]

  locationState: {}, // locationID: { ...key }
  activeLocation: 'intro',
}

const findKey = id => config.keys.find(k => k.id === id)
// const findLocation = id => config.locations.find(k => k.id === id)
const getKeyStateName = type => type + 'State'

const initLocationState = (keys, bosses, characters) => {
  return config.locations.reduce((locations, next) => {
    const array = next.chain.reduce((arr, chain) => {
      switch (chain.type) {
        case 'key':
          return keys ? [...arr, findKey('empty-key')] : arr
        case 'boss':
          return bosses ? [...arr, findKey('empty-boss')] : arr
        case 'character':
          return characters ? [...arr, findKey('empty-character')] : arr
        default:
          return arr
      }
    }, [])

    if (array.length > 0) {
      let prop = {}
      prop[next.id] = { ...next, keys: array }
      return Object.assign(locations, prop)
    }
    return locations
  }, {})
}

// keys and chain must be the same length
const calcActiveKeys = (loc, locState, keyState, bossState) => {
  const { keys, chain } = locState[loc]

  return keys.map((k, it) => {
    const ret = { ...checkKeySpecial(k, locState), active: chain[it].conditions ? checkConditions(chain[it].conditions, keyState, bossState) : true }
    return ret
  })
}

const calcLocationAvailability = (locationID, keyState, bossState) => {
  const loc = config.locations.find(location => location.id === locationID)

  for (let i = 0; i < loc.chain.length; i++) {
    if (!loc.chain[i].conditions) {
      return true
    }
    if (checkConditions(loc.chain[i].conditions, keyState, bossState)) {
      return true
    }
  }

  return false
}

const checkConditions = (conditions, keyState, bossState) => {
  let test = true;
  for (let i = 0; i < conditions.length; i++) {
    const cond = conditions[i]
    if (Array.isArray(cond)) {
      test = test &&
        (
          (Boolean(keyState[cond[0]]) || Boolean(keyState[cond[1]])) ||
          (Boolean(bossState[cond[0]]) || Boolean(bossState[cond[1]]))
        )
    } else {
      test = test &&
        (
          (Boolean(keyState[cond]) || Boolean(bossState[cond]))
        )
    }
  }

  return test
}

const checkKeySpecial = (key, locationState) => {
  if (config.specials.hasOwnProperty(key.id)) {
    const num = config.specials[key.id].condition.num
    const count = locationState[config.specials[key.id].condition.location].keys.reduce((acc, next) => {
      return acc + (next.id.startsWith('empty') ? 0 : 1)
    }, 0)

    if (count >= num) {
      return { ...key, graphic: config.specials[key.id].newgraphic }
    } else {
      return { ...key, graphic: config.specials[key.id].oldgraphic }
    }
  }
  return key
}

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      ...defaultState
    }

    this.state.locationState = initLocationState(
      defaultState.appConfig.keys,
      defaultState.appConfig.bosses,
      defaultState.appConfig.characters)

  }

  // Function to handle clicks on a location
  onLocationSelect = id => {
    console.log('Location selected', id)
    this.setState({
      activeLocation: id
    })
  }

  onLocationKeySelect = (id, type, slot, locID) => {
    // if an empty slot was clicked, ignore it.
    if (id.startsWith('empty')) {
      return true
    }

    return this.unsetKey(id, type, locID, slot)
  }

  // Function to handle clicks on a key (add it to selected location)
  onKeySelect = (id, type) => {
    const { locationState, activeLocation, keyState, bossState } = this.state
    const { chain, keys } = locationState[activeLocation]

    // if key exists somewhere already, unset it
    const keyloc = this.state[getKeyStateName(type)][id]
    if (type !== 'character' && keyloc) {
      const slot = locationState[keyloc].keys.findIndex(k => k.id === id)
      return this.unsetKey(id, type, keyloc, slot)
    } else if (keyloc && keyloc.length > 0 && keyloc.find(loc => loc === activeLocation)) {
      const index = keyloc.findIndex(loc => loc === activeLocation)
      const slot = locationState[keyloc[index]].keys.findIndex(k => k.id === id)
      return this.unsetKey(id, type, keyloc[index], slot)
    }

    for (let i = 0; i < keys.length; i++) {
      if (keys[i].type === type && keys[i].id.startsWith('empty')) {
        if (chain[i].conditions ? checkConditions(chain[i].conditions, keyState, bossState) : true) {
          return this.setKey(id, type, activeLocation, i)
          // this.setKeyState(id, type, activeLocation)
          // return this.setLocationState(id, type, activeLocation, i)
        }
      }
    }
  }

  setKey = (keyID, type, locID, slot) => {
    const kstate = this.state[getKeyStateName(type)]

    if (type === 'character') {
      const locs = kstate[keyID] || []
      this.setKeyState(keyID, type, [...locs, locID])
    } else {
      if (kstate[keyID]) { this.setLocationState('empty-' + type, type, kstate[keyID], slot) }
      this.setKeyState(keyID, type, locID)
    }

    return this.setLocationState(keyID, type, locID, slot)
  }

  unsetKey = (keyID, type, locID, slot) => {
    const kstate = this.state[getKeyStateName(type)]

    if (type === 'character') { // if it's a character, pop off the last item of the array
      const locs = kstate[keyID] || []
      this.setKeyState(keyID, type, locs.filter(loc => loc !== locID))
    } else {
      this.setKeyState(keyID, type, null)
    }
    return this.setLocationState('empty-' + type, type, locID, slot)
  }

  setLocationState = (keyID, type, locID, slot) => {
    let base = { ...this.state }
    const keys = [...base.locationState[locID].keys]
    base.locationState[locID].keys = [
      ...keys.slice(0, slot),
      findKey(keyID ? keyID : 'empty-' + type),
      ...keys.slice(slot + 1, keys.length)
    ]

    return this.setState(base)
  }

  setKeyState = (id, type, loc) => {
    let base = { ...this.state }
    base[getKeyStateName(type)][id] = loc

    return this.setState(base)
  }

  render() {

    const { keyState, bossState, characterState, activeLocation, locationState, appConfig } = this.state
    console.log('Render state', this.state)

    const buildKeyRows = (type, kstate) => {
      let ret = []
      let innerRet = []
      let keys = config.keys.filter(key => key.type === type && !key.id.startsWith('empty-'))

      for (let i = 0; i < keys.length; i++) {
        const key = checkKeySpecial(keys[i], locationState)
        innerRet.push(<Key
          id={key.id}
          key={key.id}
          type={key.type}
          graphic={key.graphic}
          onSelect={this.onKeySelect}
          active={Array.isArray(kstate[key.id]) ? kstate[key.id].length > 0 : Boolean(kstate[key.id])}
        />)
        if (i % 6 === 5 || i === keys.length - 1) {
          ret.push(<div key={i} className="key-row">{innerRet}</div>)
          innerRet = []
        }
      }

      return ret
    }

    return (
      <div className="container">
        <div className="App">
          <div className="keys-container">
            {appConfig.keys && <div id="keys" className="key-section">
              {buildKeyRows('key', keyState)}
            </div>}
            {appConfig.bosses && <div id="bosses" className="key-section">
              {buildKeyRows('boss', bossState)}
            </div>}
            {appConfig.characters && <div id="characters" className="key-section no-border">
              {buildKeyRows('character', characterState)}
            </div>}
          </div>
          <div id="locations">
            {
              config.locations.map(loc =>
                locationState.hasOwnProperty(loc.id) ?
                  <Location
                    id={loc.id}
                    key={loc.id}
                    keys={calcActiveKeys(loc.id, locationState, keyState, bossState)}
                    graphic={loc.graphic}
                    onSelect={this.onLocationSelect}
                    onKeySelect={this.onLocationKeySelect}
                    available={calcLocationAvailability(loc.id, keyState, bossState)}
                    active={activeLocation === loc.id}
                  /> : false)
            }
          </div>
        </div>
        <div className="info">
          <p>Selected: <b>{config.locations.find(loc => loc.id === activeLocation).graphic.alt}</b></p>
          <p>
            <a href="https://www.ff4-free-enterprise.com/" target="_blank" rel="noopener noreferrer">FFIV Free Enterprise</a> Location Tracker v0.1 ... <a href="https://github.com/enewey/ff4fe-tracker" target="_blank" rel="noopener noreferrer">View on Github</a><br />
            By narcodis (narcodis#4559 on Discord)<br />
            Icons provided by SchalaKitty
          </p>
          <p>
            Instructions: Select on a location (on the right), then click keys/bosses/characters to mark them at the selected location.
            <br />
            Click on keys/bosses/characters that are already marked to unmark them.
            <br />
            If a location/key is not unlocked, you will not be able to mark keys for that location.
          </p>
          <b><u>Key/Legend</u></b>
          <table>
            <tbody>
              <tr>
                <td><img src="img/empty-key.png" title="Slot for a Key" alt="key" /></td><td>Slot for a Key</td>
              </tr>
              <tr>
                <td><img src="img/empty-boss.png" title="Slot for a Boss" alt="boss" /></td><td>Slot for a Boss</td>
              </tr>
              <tr>
                <td><img src="img/empty-character.png" title="Slot for a Character" alt="character" /></td><td>Slot for a Character</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}

export default App
