const dH = 32;
const dW = 32;

const keys = [
  {
    type: 'key',
    id: 'empty-key',
    graphic: {
      uri: 'img/no-key.png',
      alt: 'Slot for a Key Item',
      width: dW,
      height: dH
    }
  },
  {
    type: 'boss',
    id: 'empty-boss',
    graphic: {
      uri: 'img/no-boss.png',
      alt: 'Slot for a Boss',
      width: dW,
      height: dH
    }
  },
  {
    type: 'character',
    id: 'empty-character',
    graphic: {
      uri: 'img/no-character.png',
      alt: 'Slot for a Character',
      width: dW,
      height: dH
    }
  },

  // Keys

  {
    type: 'key',
    id: 'crystal',
    graphic: {
      uri: 'img/keys/test-key.png',
      alt: 'Crystal',
      width: dW,
      height: dH
    }
  },
  {
    type: 'key',
    id: 'pass',
    graphic: {
      uri: 'img/keys/test-key.png',
      alt: 'Pass',
      width: dW,
      height: dH
    }
  },
  {
    type: 'key',
    id: 'hook',
    graphic: {
      uri: 'img/keys/test-key.png',
      alt: 'Hook',
      width: dW,
      height: dH
    }
  },
  {
    type: 'key',
    id: 'darkness',
    graphic: {
      uri: 'img/keys/test-key.png',
      alt: 'Darkness Crystal',
      width: dW,
      height: dH
    }
  },
  {
    type: 'key',
    id: 'earth',
    graphic: {
      uri: 'img/keys/test-key.png',
      alt: 'Earth Crystal',
      width: dW,
      height: dH
    }
  },
  {
    type: 'key',
    id: 'twinharp',
    graphic: {
      uri: 'img/keys/test-key.png',
      alt: 'Twinharp',
      width: dW,
      height: dH
    }
  },
  {
    type: 'key',
    id: 'package',
    graphic: {
      uri: 'img/keys/test-key.png',
      alt: 'Package',
      width: dW,
      height: dH
    }
  },
  {
    type: 'key',
    id: 'sandruby',
    graphic: {
      uri: 'img/keys/test-key.png',
      alt: 'Sandruby',
      width: dW,
      height: dH
    }
  },
  {
    type: 'key',
    id: 'baron',
    graphic: {
      uri: 'img/keys/test-key.png',
      alt: 'Baron Key',
      width: dW,
      height: dH
    }
  },
  {
    type: 'key',
    id: 'magma',
    graphic: {
      uri: 'img/keys/test-key.png',
      alt: 'Magma Key',
      width: dW,
      height: dH
    }
  },
  {
    type: 'key',
    id: 'tower',
    graphic: {
      uri: 'img/keys/test-key.png',
      alt: 'Tower Key',
      width: dW,
      height: dH
    }
  },
  {
    type: 'key',
    id: 'luca',
    graphic: {
      uri: 'img/keys/test-key.png',
      alt: 'Luca Key',
      width: dW,
      height: dH
    }
  },
  {
    type: 'key',
    id: 'adamant',
    graphic: {
      uri: 'img/keys/test-key.png',
      alt: 'Adamant',
      width: dW,
      height: dH
    }
  },
  {
    type: 'key',
    id: 'legend',
    graphic: {
      uri: 'img/keys/test-key.png',
      alt: 'Legend Sword',
      width: dW,
      height: dH
    }
  },
  {
    type: 'key',
    id: 'pan',
    graphic: {
      uri: 'img/keys/test-key.png',
      alt: 'Pan',
      width: dW,
      height: dH
    }
  },
  {
    type: 'key',
    id: 'spoon',
    graphic: {
      uri: 'img/keys/test-key.png',
      alt: 'Spoon',
      width: dW,
      height: dH
    }
  },
  {
    type: 'key',
    id: 'rat',
    graphic: {
      uri: 'img/keys/test-key.png',
      alt: 'Rat Tail',
      width: dW,
      height: dH
    }
  },
  {
    type: 'key',
    id: 'pink',
    graphic: {
      uri: 'img/keys/test-key.png',
      alt: 'Pink Tail',
      width: dW,
      height: dH
    }
  },

  // Bosses
  {
    type: 'boss',
    id: 'd-mist',
    graphic: {
      uri: 'img/bosses/test-boss.png',
      alt: 'D. Mist',
      width: dW,
      height: dH
    }
  },
  {
    type: 'boss',
    id: 'b-soldiers',
    graphic: {
      uri: 'img/bosses/test-boss.png',
      alt: 'Baron Soldiers',
      width: dW,
      height: dH
    }
  },
  {
    type: 'boss',
    id: 'octomamm',
    graphic: {
      uri: 'img/bosses/test-boss.png',
      alt: 'Octomamm',
      width: dW,
      height: dH
    }
  },
  {
    type: 'boss',
    id: 'antlion',
    graphic: {
      uri: 'img/bosses/test-boss.png',
      alt: 'Antlion',
      width: dW,
      height: dH
    }
  },
  {
    type: 'boss',
    id: 'waterhag',
    graphic: {
      uri: 'img/bosses/test-boss.png',
      alt: 'Waterhag',
      width: dW,
      height: dH
    }
  },
  {
    type: 'boss',
    id: 'mombomb',
    graphic: {
      uri: 'img/bosses/test-boss.png',
      alt: 'MomBomb',
      width: dW,
      height: dH
    }
  },
  {
    type: 'boss',
    id: 'gauntlet',
    graphic: {
      uri: 'img/bosses/test-boss.png',
      alt: 'Fabul Gauntlet',
      width: dW,
      height: dH
    }
  },
  {
    type: 'boss',
    id: 'milon',
    graphic: {
      uri: 'img/bosses/test-boss.png',
      alt: 'Milon',
      width: dW,
      height: dH
    }
  },
  {
    type: 'boss',
    id: 'milonz',
    graphic: {
      uri: 'img/bosses/test-boss.png',
      alt: 'Milon Z.',
      width: dW,
      height: dH
    }
  },
  {
    type: 'boss',
    id: 'dkc',
    graphic: {
      uri: 'img/bosses/test-boss.png',
      alt: 'Dark Knight Cecil',
      width: dW,
      height: dH
    }
  },
  {
    type: 'boss',
    id: 'b-guards',
    graphic: {
      uri: 'img/bosses/test-boss.png',
      alt: 'Baron Guards',
      width: dW,
      height: dH
    }
  },
  {
    type: 'boss',
    id: 'yang-boss',
    graphic: {
      uri: 'img/bosses/test-boss.png',
      alt: 'Yang',
      width: dW,
      height: dH
    }
  },
  {
    type: 'boss',
    id: 'baigan',
    graphic: {
      uri: 'img/bosses/test-boss.png',
      alt: 'Baigan',
      width: dW,
      height: dH
    }
  },
  {
    type: 'boss',
    id: 'kainazzo',
    graphic: {
      uri: 'img/bosses/test-boss.png',
      alt: 'Kainazzo',
      width: dW,
      height: dH
    }
  },
  {
    type: 'boss',
    id: 'darkelf',
    graphic: {
      uri: 'img/bosses/test-boss.png',
      alt: 'Dark Elf',
      width: dW,
      height: dH
    }
  },
  {
    type: 'boss',
    id: 'sisters',
    graphic: {
      uri: 'img/bosses/test-boss.png',
      alt: 'Magus Sisters',
      width: dW,
      height: dH
    }
  },
  {
    type: 'boss',
    id: 'valvalis',
    graphic: {
      uri: 'img/bosses/test-boss.png',
      alt: 'Valvalis',
      width: dW,
      height: dH
    }
  },
  {
    type: 'boss',
    id: 'calbrena',
    graphic: {
      uri: 'img/bosses/test-boss.png',
      alt: 'Calbrena',
      width: dW,
      height: dH
    }
  },
  {
    type: 'boss',
    id: 'golbez',
    graphic: {
      uri: 'img/bosses/test-boss.png',
      alt: 'Golbez',
      width: dW,
      height: dH
    }
  },
  {
    type: 'boss',
    id: 'lugae',
    graphic: {
      uri: 'img/bosses/test-boss.png',
      alt: 'Lugae & Balnab',
      width: dW,
      height: dH
    }
  },
  {
    type: 'boss',
    id: 'eblan-king-queen',
    graphic: {
      uri: 'img/bosses/test-boss.png',
      alt: 'King & Queen Eblan',
      width: dW,
      height: dH
    }
  },
  {
    type: 'boss',
    id: 'rubicant',
    graphic: {
      uri: 'img/bosses/test-boss.png',
      alt: 'Rubicant',
      width: dW,
      height: dH
    }
  },
  {
    type: 'boss',
    id: 'evilwall',
    graphic: {
      uri: 'img/bosses/test-boss.png',
      alt: 'EvilWall',
      width: dW,
      height: dH
    }
  },
  {
    type: 'boss',
    id: 'odin',
    graphic: {
      uri: 'img/bosses/test-boss.png',
      alt: 'Odin',
      width: dW,
      height: dH
    }
  },
  {
    type: 'boss',
    id: 'Asura',
    graphic: {
      uri: 'img/bosses/test-boss.png',
      alt: 'asura',
      width: dW,
      height: dH
    }
  },
  {
    type: 'boss',
    id: 'leviathan',
    graphic: {
      uri: 'img/bosses/test-boss.png',
      alt: 'Leviathan',
      width: dW,
      height: dH
    }
  },
  {
    type: 'boss',
    id: 'bahamut',
    graphic: {
      uri: 'img/bosses/test-boss.png',
      alt: 'Bahamut',
      width: dW,
      height: dH
    }
  },
  {
    type: 'boss',
    id: 'fiends',
    graphic: {
      uri: 'img/bosses/test-boss.png',
      alt: 'Elemental Fiends',
      width: dW,
      height: dH
    }
  },
  {
    type: 'boss',
    id: 'cpu',
    graphic: {
      uri: 'img/bosses/test-boss.png',
      alt: 'CPU',
      width: dW,
      height: dH
    }
  },
  {
    type: 'boss',
    id: 'paledim',
    graphic: {
      uri: 'img/bosses/test-boss.png',
      alt: 'Pale Dim',
      width: dW,
      height: dH
    }
  },
  {
    type: 'boss',
    id: 'plague',
    graphic: {
      uri: 'img/bosses/test-boss.png',
      alt: 'Plague',
      width: dW,
      height: dH
    }
  },
  {
    type: 'boss',
    id: 'd-lunar',
    graphic: {
      uri: 'img/bosses/test-boss.png',
      alt: 'Lunar Dragons',
      width: dW,
      height: dH
    }
  },
  {
    type: 'boss',
    id: 'ogopogo',
    graphic: {
      uri: 'img/bosses/test-boss.png',
      alt: 'Ogopogo',
      width: dW,
      height: dH
    }
  },
  {
    type: 'boss',
    id: 'wyvern',
    graphic: {
      uri: 'img/bosses/test-boss.png',
      alt: 'Wyvern',
      width: dW,
      height: dH
    }
  },

  // Characters

  {
    type: 'character',
    id: 'cecil',
    graphic: {
      uri: 'img/characters/cecil-normal.png',
      alt: 'Cecil (Dark Knight)',
      width: dW,
      height: dH
    }
  },
  {
    type: 'character',
    id: 'cecil-paladin',
    graphic: {
      uri: 'img/characters/cecil-paladin-normal.png',
      alt: 'Cecil (Paladin)',
      width: dW,
      height: dH
    }
  },
  {
    type: 'character',
    id: 'kain',
    graphic: {
      uri: 'img/characters/kain-normal.png',
      alt: 'Kain',
      width: dW,
      height: dH
    }
  },
  {
    type: 'character',
    id: 'rydia',
    graphic: {
      uri: 'img/characters/rydia-normal.png',
      alt: 'Rydia (Child)',
      width: dW,
      height: dH
    }
  },
  {
    type: 'character',
    id: 'rydia-adult',
    graphic: {
      uri: 'img/characters/rydia-adult-normal.png',
      alt: 'Rydia (Adult)',
      width: dW,
      height: dH
    }
  },
  {
    type: 'character',
    id: 'tellah',
    graphic: {
      uri: 'img/characters/tellah-normal.png',
      alt: 'Tellah',
      width: dW,
      height: dH
    }
  },
  {
    type: 'character',
    id: 'edward',
    graphic: {
      uri: 'img/characters/edward-normal.png',
      alt: 'Edward',
      width: dW,
      height: dH
    }
  },
  {
    type: 'character',
    id: 'rosa',
    graphic: {
      uri: 'img/characters/rosa-normal.png',
      alt: 'Rosa',
      width: dW,
      height: dH
    }
  },
  {
    type: 'character',
    id: 'yang',
    graphic: {
      uri: 'img/characters/yang-normal.png',
      alt: 'Yang',
      width: dW,
      height: dH
    }
  },
  {
    type: 'character',
    id: 'porom',
    graphic: {
      uri: 'img/characters/porom-normal.png',
      alt: 'Porom',
      width: dW,
      height: dH
    }
  },
  {
    type: 'character',
    id: 'palom',
    graphic: {
      uri: 'img/characters/palom-normal.png',
      alt: 'Palom',
      width: dW,
      height: dH
    }
  },
  {
    type: 'character',
    id: 'cid',
    graphic: {
      uri: 'img/characters/cid-normal.png',
      alt: 'Cid',
      width: dW,
      height: dH
    }
  },
  {
    type: 'character',
    id: 'fusoya',
    graphic: {
      uri: 'img/characters/fusoya-normal.png',
      alt: 'FuSoYa',
      width: dW,
      height: dH
    }
  },

]

export default keys