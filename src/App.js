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
  if (!test) {
    console.log("Condition test failed", conditions)
  }

  return test
}

const calcLocationKeys = (locationID, keyState, bossState, characterState) => {

  // Get the right keys
  const keys = extractProps(locationID, keyState)
  const bosses = extractProps(locationID, bossState)
  const characters = extractProps(locationID, characterState)

  // Get the chain for the location
  const loc = config.locations.find(item => item.id === locationID)
  let chain = loc.chain.slice(0, loc.chain.length)

  if (chain.length < keys.length + bosses.length + characters.length) {
    console.log("WARNING: calculation of location keys availability + actual length mismatch")
  }

  return chain.map(c => {
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
    return config.keys.find(k => k.id === id)
  })
}

const calcLocationAvailability = (locationID, keyState, bossState) => {
  const loc = config.locations.find(item => item.id === locationID)
  let chain = loc.chain.slice(0, loc.chain.length - 1)

  for (let i = 0; i < chain.length; i++) {
    if (!chain.conditions) {
      continue
    }
    if (checkConditions(chain[i].conditions, keyState, bossState)) {
      return true
    }
  }

  return false
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

    if (Boolean(keys.find(k => k === id))) {
      return this.setKeyState(id, type, null)
    }

    const count = config
      .locations.find(item => item.id === locationID)
      .chain.filter(x => 
        x.type === type && 
        (x.conditions ? checkConditions(x.conditions, this.state.keyState, this.state.bossState) : true)
      ).length

    if (keys.length < count) {
      return this.setKeyState(id, type, this.state.activeLocation)
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
        const key = keys[i]
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
      <div className="App">
        <table><tbody>
          <tr><td>
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
          </td>
            <td>
              <div className="keys-container">
                <div id="keys">
                  {buildKeyRows('key', keyState)}
                </div>
                <div id="bosses">
                  {buildKeyRows('boss', bossState)}
                </div>
                <div id="characters">
                  {buildKeyRows('character', characterState)}
                </div>
              </div>
            </td></tr>
        </tbody></table>
      </div>
    )
  }
}

const defaultState = {

  // State objects are maps of keyIDs to locationIDs
  keyState: {},
  bossState: {},
  characterState: {},

  activeLocation: 'baron-inn',
}

export default App
