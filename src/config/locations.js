const dH = 32;
const dW = 32;

const locations = [
  
  // Main World
  {
    id: 'intro',
    chain: [
      { type: 'character' },
      { type: 'character' },
      { type: 'key' }
    ],
    graphic: {
      uri: 'img/locations/intro.png',
      alt: 'Intro at Baron',
      width: dW,
      height: dH
    }
  },
  {
    id: 'damcyan',
    chain: [
      { type: 'character' }
    ],
    graphic: {
      uri: 'img/locations/damcyan.png',
      alt: 'Damcyan Castle',
      width: dW,
      height: dH
    }
  },
  {
    id: 'mysidia',
    chain: [
      { type: 'character' },
      { type: 'character' }
    ],
    graphic: {
      uri: 'img/locations/mysidia.png',
      alt: 'Mysidia',
      width: dW,
      height: dH
    }
  },
  {
    id: 'tororia',
    chain: [
      { type: 'key' }
    ],
    graphic: {
      uri: 'img/locations/tororia.png',
      alt: 'Tororia Castle',
      width: dW,
      height: dH
    }
  },
  {
    id: 'adamant-grotto',
    chain: [
      { type: 'key', conditions: ['hook', 'rat'] },
      // { type: 'key', conditions: ['hook', 'pink'] }
    ],
    graphic: {
      uri: 'img/locations/adamant-grotto.png',
      alt: 'Adamant Grotto',
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
      uri: 'img/locations/mist-village.png',
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
      uri: 'img/locations/kaipo.png',
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
      uri: 'img/locations/watery.png',
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
      uri: 'img/locations/mist-cave.png',
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
      uri: 'img/locations/baron-castle.png',
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
      uri: 'img/locations/baron-inn.png',
      alt: 'Baron Inn',
      width: dW,
      height: dH
    }
  },
  {
    id: 'antlion',
    chain: [
      { type: 'boss' },
      { type: 'key' }
    ],
    graphic: {
      uri: 'img/locations/antlion.png',
      alt: 'Antlion\'s Nest',
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
      uri: 'img/locations/hobs.png',
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
      uri: 'img/locations/fabul.png',
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
      uri: 'img/locations/fabul-wife.png',
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
      uri: 'img/locations/magnes.png',
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
      uri: 'img/locations/ordeals.png',
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
      uri: 'img/locations/zot.png',
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
      uri: 'img/locations/eblan.png',
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
      uri: 'img/locations/dwarf-castle.png',
      alt: 'Dwarf Castle',
      width: dW,
      height: dH
    }
  },
  // {
  //   id: 'sylvan-cave',
  //   chain: [
  //     // { type: 'key', conditions: [ 'pan', [ 'magma', 'hook' ] ] }
  //   ],
  //   graphic: {
  //     uri: 'img/locations/sylvan-cave.png',
  //     alt: 'Sylvan Cave',
  //     width: dW,
  //     height: dH
  //   }
  // },
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
      uri: 'img/locations/feymarch.png',
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
      uri: 'img/locations/sealed.png',
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
      uri: 'img/locations/babil.png',
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
      uri: 'img/locations/palace.png',
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
      uri: 'img/locations/bahamut.png',
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
      uri: 'img/locations/lunar.png',
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
      uri: 'img/locations/giant.png',
      alt: 'Giant of Bab-Il',
      width: dW,
      height: dH
    }
  },
]

export default locations