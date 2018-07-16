const dH = 32;
const dW = 32;

const locations = [
  
  // Main World

  {
    id: 'adamant-cave',
    chain: [
      { type: 'key', conditions: ['hook', 'rat'] },
      { type: 'key', conditions: ['hook', 'pink'] }
    ],
    graphic: {
      uri: 'img/locations/test-location.png',
      alt: 'Adamant Cave',
      width: dW,
      height: dH
    }
  },
  {
    id: 'mist-village',
    chain: [
      { type: 'key', conditions: ['d-mist'] },
      { type: 'boss', conditions: ['package'] },
      { type: 'character', conditions: ['package'] }
    ],
    graphic: {
      uri: 'img/locations/test-location.png',
      alt: 'Village of Mist',
      width: dW,
      height: dH
    }
  },
  {
    id: 'kaipo',
    chain: [
      { type: 'character', conditions: ['sandruby'] }
    ],
    graphic: {
      uri: 'img/locations/test-location.png',
      alt: 'Kaipo',
      width: dW,
      height: dH
    }
  },
  {
    id: 'watery',
    chain: [
      { type: 'boss' }
    ],
    graphic: {
      uri: 'img/locations/test-location.png',
      alt: 'Watery Pass',
      width: dW,
      height: dH
    }
  },
  {
    id: 'mist-cave',
    chain: [
      { type: 'boss' }
    ],
    graphic: {
      uri: 'img/locations/test-location.png',
      alt: 'Misty Cave',
      width: dW,
      height: dH
    }
  },
  {
    id: 'baron-castle',
    chain: [
      { type: 'boss',       conditions: ['baron'] },
      { type: 'boss',       conditions: ['baron'] },
      { type: 'character',  conditions: ['baron'] },
      { type: 'key',        conditions: ['baron'] },
      { type: 'boss',       conditions: ['baron'] }
    ],
    graphic: {
      uri: 'img/locations/test-location.png',
      alt: 'Baron Castle',
      width: dW,
      height: dH
    }
  },
  {
    id: 'baron-inn',
    chain: [
      { type: 'boss' },
      { type: 'boss' },
      { type: 'character' },
      { type: 'key' }
    ],
    graphic: {
      uri: 'img/locations/test-location.png',
      alt: 'Baron Inn',
      width: dW,
      height: dH
    }
  },
  {
    id: 'hobs',
    chain: [
      { type: 'boss' },
      { type: 'character' }
    ],
    graphic: {
      uri: 'img/locations/test-location.png',
      alt: 'Mt Hobs',
      width: dW,
      height: dH
    }
  },
  {
    id: 'fabul',
    chain: [
      { type: 'boss' },
      { type: 'key' }
    ],
    graphic: {
      uri: 'img/locations/test-location.png',
      alt: 'Fabul',
      width: dW,
      height: dH
    }
  },
  {
    id: 'fabul-wife',
    chain: [
      { type: 'key', conditions: [ [ 'magma', 'hook' ] ] },
      { type: 'key', conditions: ['pan', [ 'magma', 'hook' ] ] }
    ],
    graphic: {
      uri: 'img/locations/test-location.png',
      alt: 'Fabul - Yang\'s Wife',
      width: dW,
      height: dH
    }
  },
  {
    id: 'magnes',
    chain: [
      { type: 'boss', conditions: ['twinharp'] },
      { type: 'key',  conditions: ['twinharp'] }
    ],
    graphic: {
      uri: 'img/locations/test-location.png',
      alt: 'Magnes Cave',
      width: dW,
      height: dH
    }
  },
  {
    id: 'ordeals',
    chain: [
      { type: 'boss' },
      { type: 'boss' },
      { type: 'key' },
      { type: 'boss' }
    ],
    graphic: {
      uri: 'img/locations/test-location.png',
      alt: 'Mt. Ordeals',
      width: dW,
      height: dH
    }
  },
  {
    id: 'zot',
    chain: [
      { type: 'boss',       conditions: ['earth'] },
      { type: 'character',  conditions: ['earth'] },
      { type: 'character',  conditions: ['earth'] },
      { type: 'boss',       conditions: ['earth'] },
      { type: 'key',        conditions: ['earth'] }
    ],
    graphic: {
      uri: 'img/locations/test-location.png',
      alt: 'Tower of Zot',
      width: dW,
      height: dH
    }
  },
  {
    id: 'eblan',
    chain: [
      { type: 'character',  conditions: ['hook'] },
      { type: 'boss',       conditions: ['hook'] },
      { type: 'boss',       conditions: ['hook'] }
    ],
    graphic: {
      uri: 'img/locations/test-location.png',
      alt: 'Cave of Eblan',
      width: dW,
      height: dH
    }
  },

  // Underground

  {
    id: 'dwarf-castle',
    chain: [
      { type: 'boss',       conditions: [ [ 'magma', 'hook' ] ] },
      { type: 'character',  conditions: [ [ 'magma', 'hook' ] ] },
      { type: 'boss',       conditions: [ [ 'magma', 'hook' ] ] },
      { type: 'key',        conditions: [ [ 'magma', 'hook' ] ] }
    ],
    graphic: {
      uri: 'img/locations/test-location.png',
      alt: 'Dwarf Castle',
      width: dW,
      height: dH
    }
  },
  {
    id: 'sylph',
    chain: [
      { type: 'key', conditions: [ 'pan', [ 'magma', 'hook' ] ] }
    ],
    graphic: {
      uri: 'img/locations/test-location.png',
      alt: 'Sylph Cave',
      width: dW,
      height: dH
    }
  },
  {
    id: 'feymarch',
    chain: [
      { type: 'key',  conditions: [ [ 'magma', 'hook' ] ] },
      { type: 'boss', conditions: [ [ 'magma', 'hook' ] ] },
      // key K2+
      { type: 'boss', conditions: [ [ 'magma', 'hook' ] ] }
      // key K2+
    ],
    graphic: {
      uri: 'img/locations/test-location.png',
      alt: 'Feymarch',
      width: dW,
      height: dH
    }
  },
  {
    id: 'sealed',
    chain: [
      { type: 'key',  conditions: [ 'luca', [ 'magma', 'hook' ] ] },
      { type: 'boss', conditions: [ 'luca', [ 'magma', 'hook' ] ] }
    ],
    graphic: {
      uri: 'img/locations/test-location.png',
      alt: 'Sealed Cave',
      width: dW,
      height: dH
    }
  },
  {
    id: 'babil',
    chain: [
      { type: 'boss', conditions: [ [ 'magma', 'hook' ] ] },
      { type: 'key',  conditions: [ [ 'magma', 'hook' ] ] },
      { type: 'boss', conditions: [ 'tower', [ 'magma', 'hook' ] ] },
      { type: 'key',  conditions: [ 'tower', [ 'magma', 'hook' ] ] }
    ],
    graphic: {
      uri: 'img/locations/test-location.png',
      alt: 'Tower of Babil',
      width: dW,
      height: dH
    }
  },

  // Moon

  {
    id: 'palace',
    chain: [
      { type: 'character', conditions: [ 'darkness' ] }
    ],
    graphic: {
      uri: 'img/locations/test-location.png',
      alt: 'Crystal Palace',
      width: dW,
      height: dH
    }
  },
  {
    id: 'bahamut',
    chain: [
      { type: 'boss', conditions: [ 'darkness' ] }
    ],
    graphic: {
      uri: 'img/locations/test-location.png',
      alt: 'Bahamut\'s Cave',
      width: dW,
      height: dH
    }
  },
  {
    id: 'lunar',
    chain: [
      { type: 'boss', conditions: [ 'darkness' ] },
      { type: 'boss', conditions: [ 'darkness' ] },
      { type: 'boss', conditions: [ 'darkness' ] },
      { type: 'boss', conditions: [ 'darkness' ] },
      { type: 'boss', conditions: [ 'darkness' ] }
    ],
    graphic: {
      uri: 'img/locations/test-location.png',
      alt: 'Lunar Subterrane',
      width: dW,
      height: dH
    }
  },
  {
    id: 'giant',
    chain: [
      { type: 'boss', conditions: [ 'darkness' ] },
      { type: 'boss', conditions: [ 'darkness' ] }
    ],
    graphic: {
      uri: 'img/locations/test-location.png',
      alt: 'Giant of Bab-Il',
      width: dW,
      height: dH
    }
  },
]

export default locations