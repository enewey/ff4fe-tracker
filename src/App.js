import React from 'react'
import Location from './core/Location'
import Key from './core/Key'
import './App.css'
import config from './config'

// Extract properties from an object where set[prop] == value
const extractProps = (value, set) => {
  let ret = []
  for (let prop in set) {
    if (set.hasOwnProperty(prop)) {
      if (set[prop] === value) {
        ret.push(prop)
      }
    }
  }
  return ret
}

const calcLocationKeys = (locationID, keyState, bossState, characterState) => {

  // Get the right keys
  const keys = extractProps(locationID, keyState)
  const bosses = extractProps(locationID, bossState)
  const characters = extractProps(locationID, characterState)

  // Get the chain for the location
  const loc = config.locations.find(item => item.id === locationID)

  if (loc.chain.length < keys.length + bosses.length + characters.length) {
    console.log("WARNING: calculation of location keys availability + actual length mismatch")
  }

  let ret = loc.chain.map(c => {
    let id
    switch (c.type) {
      case 'key':
        id = keys.length > 0 ? keys.pop() : 'empty-key'
        break
      case 'boss':
        id = bosses.length > 0 ? bosses.pop() : 'empty-boss'
        break
      case 'character':
        id = characters.length > 0 ? characters.pop() : 'empty-character'
        break
      default:
        id = 'empty-key'
    }
    return Object.assign(
      { active: c.conditions ? checkConditions(c.conditions, keyState, bossState) : true }, 
      config.keys.find(k => k.id === id)
    )

  })

  return ret
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

const checkKeySpecial = (key, keyState, bossState, characterState) => {
  if (config.specials.hasOwnProperty(key.id)) {
    let loc = config.specials[key.id].condition.location
    let num = config.specials[key.id].condition.num
    let count = []
    count.splice(0,0,...Object.keys(keyState).filter(k => keyState[k] === loc))
    count.splice(0,0,...Object.keys(bossState).filter(k => bossState[k] === loc))
    count.splice(0,0,...Object.keys(characterState).filter(k => characterState[k] === loc))
    if (count.length >= num) {
      return Object.assign(key, { graphic: config.specials[key.id].newgraphic })
    } else {
      return Object.assign(key, { graphic: config.specials[key.id].oldgraphic })
    }
  }
  return key
}

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = defaultState

    this.onLocationSelect = this.onLocationSelect.bind(this)
    this.onLocationKeySelect = this.onLocationKeySelect.bind(this)
    this.onKeySelect = this.onKeySelect.bind(this)
  }

  // Function to handle clicks on a location
  onLocationSelect = ev => {
    console.log('Location selected', ev.currentTarget.id)
    this.setState({
      activeLocation: ev.currentTarget.id
    })
  }

  onLocationKeySelect = (id, type) => {
    this.setKeyState(id, type, null)
  }

  // Function to handle clicks on a key (add it to selected location)
  onKeySelect = (id, type) => {

    const locationID = this.state.activeLocation
    let keys

    switch (type) {
      case 'key':
        keys = extractProps(locationID, this.state.keyState)
        break
      case 'boss':
        keys = extractProps(locationID, this.state.bossState)
        break
      case 'character':
        keys = extractProps(locationID, this.state.characterState)
        break
      default:
        keys = []
    }

    // If key is already selected, deselect the key.
    if (Boolean(keys.find(k => k === id))) {
      return this.setKeyState(id, type, null)
    }

    const chain = config
      .locations.find(item => item.id === locationID)
      .chain.filter(x =>
        x.type === type &&
        (x.conditions ? checkConditions(x.conditions, this.state.keyState, this.state.bossState) : true)
      )

    if (keys.length < chain.length) {
      return this.setKeyState(id, type, this.state.activeLocation)
    }

    if (chain.filter(c => c.conditions).length > 0) {
      console.log('Conditions not met', chain)
    }
  }

  setKeyState = (id, type, state) => {
    let base = {}
    base[id] = state

    switch (type) {
      case 'key':
        this.setState({ keyState: Object.assign(this.state.keyState, base) })
        break
      case 'boss':
        this.setState({ bossState: Object.assign(this.state.bossState, base) })
        break
      case 'character':
        this.setState({ characterState: Object.assign(this.state.characterState, base) })
        break
      default:
        break
    }
  }

  render() {

    const { keyState, bossState, characterState, activeLocation } = this.state

    const buildKeyRows = (type, kstate) => {
      let ret = []
      let innerRet = []
      let keys = config.keys.filter(key => key.type === type && !key.id.startsWith('empty-'))

      for (let i = 0; i < keys.length; i++) {
        const key = checkKeySpecial(keys[i], keyState, bossState, characterState)
        innerRet.push(<Key
          id={key.id}
          key={key.id}
          type={key.type}
          graphic={key.graphic}
          onSelect={this.onKeySelect}
          active={Boolean(kstate[key.id])}
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
            <div id="keys" className="key-section">
              {buildKeyRows('key', keyState)}
            </div>
            <div id="bosses" className="key-section">
              {buildKeyRows('boss', bossState)}
            </div>
            <div id="characters" className="key-section no-border">
              {buildKeyRows('character', characterState)}
            </div>
          </div>
          <div id="locations">
            {
              config.locations.map(loc =>
                <Location
                  id={loc.id}
                  key={loc.id}
                  keys={calcLocationKeys(loc.id, keyState, bossState, characterState)}
                  graphic={loc.graphic}
                  onSelect={this.onLocationSelect}
                  onKeySelect={this.onLocationKeySelect}
                  available={calcLocationAvailability(loc.id, keyState, bossState)}
                  active={activeLocation === loc.id}
                />)
            }
          </div>
        </div>
        <div className="info">
          <p>Selected: <b>{config.locations.find(loc => loc.id === activeLocation).graphic.alt}</b></p>
          <p>
            <a href="https://www.ff4-free-enterprise.com/" target="_blank" rel="noopener noreferrer">FFIV Free Enterprise</a> Location Tracker v0.1<br/>
            By narcodis (narcodis#4559 on Discord)
          </p>
          <p>
            Instructions: Select on a location (on the right), then click keys/bosses/characters to mark them at the selected location.
            <br/>
            Click on keys/bosses/characters that are already marked to unmark them.
            <br/>
            If a location/key is not unlocked, you will not be able to mark keys for that location.
          </p>
          <b><u>Key/Legend</u></b>
          <table>
            <tbody>
            <tr>
            <td><img src="img/empty-key.png" title="Slot for a Key" alt="key"/></td><td>Slot for a Key</td>
            </tr>
            <tr>
            <td><img src="img/empty-boss.png" title="Slot for a Boss" alt="boss"/></td><td>Slot for a Boss</td>
            </tr>
            <tr>
            <td><img src="img/empty-character.png" title="Slot for a Character" alt="character"/></td><td>Slot for a Character</td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}

const defaultState = {

  // State objects are maps of keyIDs to locationIDs
  keyState: {},
  bossState: {},
  characterState: {},

  activeLocation: 'intro',
}

export default App
