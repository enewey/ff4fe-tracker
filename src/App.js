import React from 'react'
import Location from './core/Location'
import Key from './core/Key'
import './App.css'
import config from './config'

const extractProps = (value, set) => {
  let ret = []
  for (let prop in set) {
    if (set.hasOwnProperty(prop)) {
      if (set.prop === value) {
        ret.push(prop)
      }
    }
  }
  return ret
}

const checkConditions = (conditions, keyState, bossState) => {
  console.log('checkConditions', conditions)
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

const calcLocationKeys = (locationID, keyState, bossState, characterState) => {

  // Get the right keys
  const keys = extractProps(locationID, keyState)
  const bosses = extractProps(locationID, bossState)
  const characters = extractProps(locationID, characterState)

  // Get the chain for the location
  const loc = config.locations.find(item => item.id === locationID)
  let chain = loc.chain.slice(0, loc.chain.length)

  // Remove any items from the chain for which conditions have not been met
  for (let i = 0; i < chain.length; i++) {
    if (!chain.conditions) {
      continue
    }
    if (!checkConditions(chain[i].conditions, keyState, bossState)) {
      chain.splice(i, 1)
      i--
    }
  }

  if (chain.length < keys.length + bosses.length + characters.length) {
    console.log("WARNING: calculation of location keys availability + actual length mismatch")
  }

  return chain.map(c => {
    switch (c.type) {
      case 'key':
        return keys.length > 0 ? keys.pop() : config.keys[0]
      case 'boss':
        return bosses.length > 0 ? bosses.pop() : config.keys[1]
      case 'character':
        return characters.length > 0 ? characters.pop() : config.keys[2]
      default:
        return config.keys[0]
    }
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
    console.log('Location: ', ev.currentTarget)
    this.setState({
      activeLocation: ev.currentTarget.id
    })
  }

  onLocationKeySelect = ev => {
    ev.stopPropagation()
    console.log('Location Key: ', ev.target)
  }

  // Function to handle clicks on a key (add it to selected location)
  onKeySelect = ev => {
    console.log('Key: ', ev.currentTarget)
  }

  render() {

    const { keyState, bossState, characterState, activeLocation } = this.state

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
                  {
                    config.keys.map(key => key.type === 'key' && !key.id.startsWith('empty-') ?
                      <Key
                        id={key.id}
                        key={key.id}
                        type={key.type}
                        graphic={key.graphic}
                        onSelect={this.onKeySelect}
                        active={Boolean(keyState[key.id])}
                      /> : false)
                  }
                </div>
                <div id="bosses">
                  {
                    config.keys.map(key => key.type === 'boss' && !key.id.startsWith('empty-') ?
                      <Key
                        id={key.id}
                        key={key.id}
                        type={key.type}
                        graphic={key.graphic}
                        onSelect={this.onKeySelect}
                        active={Boolean(bossState[key.id])}
                      /> : false)
                  }
                </div>
                <div id="characters">
                  {
                    config.keys.map(key => key.type === 'character' && !key.id.startsWith('empty-') ?
                      <Key
                        id={key.id}
                        key={key.id}
                        type={key.type}
                        graphic={key.graphic}
                        onSelect={this.onKeySelect}
                        active={Boolean(characterState[key.id])}
                      /> : false)
                  }
                </div>
              </div>
            </td></tr>
        </tbody></table>
      </div>
    )
  }
}

const defaultState = {
  keyState: {
    'empty-key': null,
    crystal: null,
    pass: null,
    hook: null,
    darkness: null,
    earth: null,
    twinharp: null,
    package: null,
    sandruby: null,
    baron: null,
    magma: null,
    tower: null,
    luca: null,
    adamant: null,
    legend: null,
    pan: null,
    spoon: null,
    rat: null,
    pink: null
  },

  bossState: {
    'empty-boss': null,
    'd-mist': null,
    'b-soldiers': null,
    octomamm: null,
    antlion: null,
    waterhag: null,
    mombomb: null,
    gauntlet: null,
    milon: null,
    milonz: null,
    dkc: null,
    'b-guards': null,
    'yang-boss': null,
    baigan: null,
    kainazzo: null,
    darkelf: null,
    sisters: null,
    valvalis: null,
    calbrena: null,
    golbez: null,
    lugae: null,
    'eblan-king-queen': null,
    rubicant: null,
    evilwall: null,
    odin: null,
    asura: null,
    leviathan: null,
    bahamut: null,
    fiends: null,
    cpu: null,
    paledim: null,
    plague: null,
    'd-lunar': null,
    ogopogo: null,
    wyvern: null
  },

  characterState: {
    'empty-character': null,
    cecil: null,
    'cecil-paladin': null,
    kain: null,
    rydia: null,
    'rydia-adult': null,
    tellah: null,
    edward: null,
    rosa: null,
    yang: null,
    porom: null,
    palom: null,
    cid: null,
    fusoya: null
  },

  activeLocation: 'baron-inn',
}

export default App
