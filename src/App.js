import React from 'react'
import Location from './core/Location'
import Key from './core/Key'
import './App.css'
import config from './config'

const defaultState = {
  appConfig: [
    'key', 
    'boss', 
    'character'
  ],

  // State objects are maps of keyIDs to locationIDs
  keyState: {}, // { keyID: locID, ... }
  bossState: {}, // { keyID: locID, ... }
  characterState: {}, // { keyID : [ locID, ... ], ... }

  locationState: {}, // { locationID: { ...key }, ... }
  activeLocation: 'intro',
}

const findKey = id => config.keys.find(k => k.id === id)
// const findLocation = id => config.locations.find(k => k.id === id)
const getKeyStateName = type => type + 'State'

// Helper for determining which locations to render based on filters
const locationFilter = (loc, appConfig) =>
  loc.chain.reduce((ret, next) => ret || appConfig.includes(next.type), false)

// Initializes the state of locations by populating with empty keys
const initLocationState = appConfig => {
  return config.locations.reduce((locations, next) => {
    const array = next.chain.map(ch => findKey('empty-' + ch.type))

    if (array.length > 0) {
      let prop = {}
      prop[next.id] = { ...next, keys: array }
      return Object.assign(locations, prop)
    }
    return locations
  }, {})
}

// Calculate each key's active state from a location's key array
// Returns an array of key objects
const calcActiveKeys = (loc, locState, keyState, bossState) => {
  // keys and chain must be the same length
  const { keys, chain } = locState[loc]

  return keys.map((k, it) => ({ 
    ...checkKeySpecial(k, locState), 
    slot: it, // also include the slot number
    active: chain[it].conditions ? checkConditions(chain[it].conditions, keyState, bossState) : true 
  }))
}

// Used to determine if a location should be highlighted and useable.
// Returns a boolean value
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

// Check the conditions of an event chain within the location config
const checkConditions = (conditions, keyState, bossState) => {
  let test = true;

  // each element in the conditions array is a single condition,
  // and each condition in the array must logically AND to pass
  for (let i = 0; i < conditions.length; i++) {
    const cond = conditions[i]
    if (Array.isArray(cond)) {
      // a sub-array denotes a pair of "or" conditions
      // e.g. [ 'hook', 'magma' ] == hook OR magma
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

// Pass in a key and check if it meets the conditions of the "special"
// Used to handle Cecil turning into a paladin after ordeals is done,
// and Rydia growing up after dwarf castle is done.
const checkKeySpecial = (key, locationState) => {
  if (config.specials.hasOwnProperty(key.id)) {
    const num = config.specials[key.id].condition.num
    const loc = locationState[config.specials[key.id].condition.location]
    const count = loc ? loc.keys.reduce((acc, next) => {
      return acc + (next.id.startsWith('empty') ? 0 : 1)
    }, 0) : 0

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

    this.state.locationState = initLocationState(defaultState.appConfig)

  }

  // Handle a change in filter options
  onFilter = type => {
    this.setState({
      appConfig: 
        this.state.appConfig.includes(type) ? 
        this.state.appConfig.filter(c => c !== type) :
        [ ...this.state.appConfig, type ]
    })
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

    const keyloc = this.state[getKeyStateName(type)][id]
    if (type !== 'character' && keyloc) {
      // bosses and keys will be a string designating their location
      // if key or boss exists somewhere already, unset it
      const slot = locationState[keyloc].keys.findIndex(k => k.id === id)
      return this.unsetKey(id, type, keyloc, slot)
    } else if (keyloc && keyloc.length > 0 && keyloc.find(loc => loc === activeLocation)) {
      // characters will be an array of locations
      // unset it only if it is already at the active location
      const index = keyloc.findIndex(loc => loc === activeLocation)
      const slot = locationState[keyloc[index]].keys.findIndex(k => k.id === id)
      return this.unsetKey(id, type, keyloc[index], slot)
    }

    // set the key if there is room at this location
    for (let i = 0; i < keys.length; i++) {
      if (keys[i].type === type && keys[i].id.startsWith('empty')) {
        if (chain[i].conditions ? checkConditions(chain[i].conditions, keyState, bossState) : true) {
          return this.setKey(id, type, activeLocation, i)
        }
      }
    }
  }

  // helper method to encapsulate setting a key
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

  // helper method to encapsulate unsetting a key
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

  // updates the state of locations
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

  // updates the state of keys
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
            {appConfig.includes('key') && <div id="keys" className="key-section">
              {buildKeyRows('key', keyState)}
            </div>}
            {appConfig.includes('character') && <div id="characters" className="char-section">
              {buildKeyRows('character', characterState)}
            </div>}
            {appConfig.includes('boss') && <div id="bosses" className="boss-section no-border">
              {buildKeyRows('boss', bossState)}
            </div>}
          </div>
          <div className="location-container">
            {
              Object.keys(locationState).map(loc =>
                locationFilter(locationState[loc], appConfig) ?
                  <Location
                    id={loc}
                    key={loc}
                    keys={calcActiveKeys(loc, locationState, keyState, bossState)
                      .filter(k => appConfig.includes(k.type))}
                    graphic={locationState[loc].graphic}
                    onSelect={this.onLocationSelect}
                    onKeySelect={this.onLocationKeySelect}
                    available={calcLocationAvailability(loc, keyState, bossState)}
                    active={activeLocation === loc}
                  />
                  : false)
            }
          </div>
        </div>
        <div className="options">
          <p><u>Filter options</u></p>

          <input id="key-filter" type="checkbox" checked={appConfig.includes('key')} onChange={() => this.onFilter('key')} />
          <label htmlFor="key-filter">Keys</label> ...

          <input id="boss-filter" type="checkbox" checked={appConfig.includes('boss')} onChange={() => this.onFilter('boss')}/>
          <label htmlFor="boss-filter">Bosses</label> ...

          <input id="char-filter" type="checkbox" checked={appConfig.includes('character')} onChange={() => this.onFilter('character')}/>
          <label htmlFor="char-filter">Characters</label> ...

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
