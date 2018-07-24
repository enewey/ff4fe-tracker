const dH = 32;
const dW = 32;

const keys = [
  {
    type: 'key',
    id: 'empty-key',
    graphic: {
      uri: 'img/empty-key.png',
      alt: 'Slot for a Key Item',
      width: dW,
      height: dH
    }
  },
  {
    type: 'boss',
    id: 'empty-boss',
    graphic: {
      uri: 'img/empty-boss.png',
      alt: 'Slot for a Boss',
      width: dW,
      height: dH
    }
  },
  {
    type: 'character',
    id: 'empty-character',
    graphic: {
      uri: 'img/empty-character.png',
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
      uri: 'img/keys/crystal.png',
      alt: 'Crystal',
      width: dW,
      height: dH
    }
  },
  // {
  //   type: 'key',
  //   id: 'pass',
  //   graphic: {
  //     uri: 'img/keys/pass.png',
  //     alt: 'Pass',
  //     width: dW,
  //     height: dH
  //   }
  // },
  {
    type: 'key',
    id: 'hook',
    graphic: {
      uri: 'img/keys/hook.png',
      alt: 'Hook',
      width: dW,
      height: dH
    }
  },
  {
    type: 'key',
    id: 'darkness',
    graphic: {
      uri: 'img/keys/darkness.png',
      alt: 'Darkness Crystal',
      width: dW,
      height: dH
    }
  },
  {
    type: 'key',
    id: 'earth',
    graphic: {
      uri: 'img/keys/earth.png',
      alt: 'Earth Crystal',
      width: dW,
      height: dH
    }
  },
  {
    type: 'key',
    id: 'twinharp',
    graphic: {
      uri: 'img/keys/twinharp.png',
      alt: 'Twinharp',
      width: dW,
      height: dH
    }
  },
  {
    type: 'key',
    id: 'package',
    graphic: {
      uri: 'img/keys/package.png',
      alt: 'Package',
      width: dW,
      height: dH
    }
  },
  {
    type: 'key',
    id: 'sandruby',
    graphic: {
      uri: 'img/keys/sandruby.png',
      alt: 'Sandruby',
      width: dW,
      height: dH
    }
  },
  {
    type: 'key',
    id: 'baron',
    graphic: {
      uri: 'img/keys/baron.png',
      alt: 'Baron Key',
      width: dW,
      height: dH
    }
  },
  {
    type: 'key',
    id: 'magma',
    graphic: {
      uri: 'img/keys/magma.png',
      alt: 'Magma Key',
      width: dW,
      height: dH
    }
  },
  {
    type: 'key',
    id: 'tower',
    graphic: {
      uri: 'img/keys/tower.png',
      alt: 'Tower Key',
      width: dW,
      height: dH
    }
  },
  {
    type: 'key',
    id: 'luca',
    graphic: {
      uri: 'img/keys/luca.png',
      alt: 'Luca Key',
      width: dW,
      height: dH
    }
  },
  {
    type: 'key',
    id: 'adamant',
    graphic: {
      uri: 'img/keys/adamant.png',
      alt: 'Adamant',
      width: dW,
      height: dH
    }
  },
  {
    type: 'key',
    id: 'legend',
    graphic: {
      uri: 'img/keys/legend.png',
      alt: 'Legend Sword',
      width: dW,
      height: dH
    }
  },
  {
    type: 'key',
    id: 'pan',
    graphic: {
      uri: 'img/keys/pan.png',
      alt: 'Pan',
      width: dW,
      height: dH
    }
  },
  {
    type: 'key',
    id: 'spoon',
    graphic: {
      uri: 'img/keys/spoon.png',
      alt: 'Spoon',
      width: dW,
      height: dH
    }
  },
  {
    type: 'key',
    id: 'rat',
    graphic: {
      uri: 'img/keys/rat.png',
      alt: 'Rat Tail',
      width: dW,
      height: dH
    }
  },
  {
    type: 'key',
    id: 'pink',
    graphic: {
      uri: 'img/keys/pink.png',
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
      uri: 'img/bosses/d-mist.png',
      alt: 'D. Mist',
      width: dW,
      height: dH
    }
  },
  {
    type: 'boss',
    id: 'b-soldiers',
    graphic: {
      uri: 'img/bosses/b-soldiers.png',
      alt: 'Baron Soldiers',
      width: dW,
      height: dH
    }
  },
  {
    type: 'boss',
    id: 'octomamm',
    graphic: {
      uri: 'img/bosses/octomamm.png',
      alt: 'Octomamm',
      width: dW,
      height: dH
    }
  },
  {
    type: 'boss',
    id: 'antlion',
    graphic: {
      uri: 'img/bosses/antlion.png',
      alt: 'Antlion',
      width: dW,
      height: dH
    }
  },
  {
    type: 'boss',
    id: 'waterhag',
    graphic: {
      uri: 'img/bosses/waterhag.png',
      alt: 'Waterhag',
      width: dW,
      height: dH
    }
  },
  {
    type: 'boss',
    id: 'mombomb',
    graphic: {
      uri: 'img/bosses/mombomb.png',
      alt: 'MomBomb',
      width: dW,
      height: dH
    }
  },
  {
    type: 'boss',
    id: 'gauntlet',
    graphic: {
      uri: 'img/bosses/gauntlet.png',
      alt: 'Fabul Gauntlet',
      width: dW,
      height: dH
    }
  },
  {
    type: 'boss',
    id: 'milon',
    graphic: {
      uri: 'img/bosses/milon.png',
      alt: 'Milon',
      width: dW,
      height: dH
    }
  },
  {
    type: 'boss',
    id: 'milonz',
    graphic: {
      uri: 'img/bosses/milonz.png',
      alt: 'Milon Z.',
      width: dW,
      height: dH
    }
  },
  {
    type: 'boss',
    id: 'dkc',
    graphic: {
      uri: 'img/bosses/dkc.png',
      alt: 'Dark Knight Cecil',
      width: dW,
      height: dH
    }
  },
  {
    type: 'boss',
    id: 'b-guards',
    graphic: {
      uri: 'img/bosses/b-guards.png',
      alt: 'Baron Guards',
      width: dW,
      height: dH
    }
  },
  {
    type: 'boss',
    id: 'yang-boss',
    graphic: {
      uri: 'img/bosses/yang-boss.png',
      alt: 'Yang',
      width: dW,
      height: dH
    }
  },
  {
    type: 'boss',
    id: 'baigan',
    graphic: {
      uri: 'img/bosses/baigan.png',
      alt: 'Baigan',
      width: dW,
      height: dH
    }
  },
  {
    type: 'boss',
    id: 'kainazzo',
    graphic: {
      uri: 'img/bosses/kainazzo.png',
      alt: 'Kainazzo',
      width: dW,
      height: dH
    }
  },
  {
    type: 'boss',
    id: 'darkelf',
    graphic: {
      uri: 'img/bosses/darkelf.png',
      alt: 'Dark Elf',
      width: dW,
      height: dH
    }
  },
  {
    type: 'boss',
    id: 'sisters',
    graphic: {
      uri: 'img/bosses/sisters.png',
      alt: 'Magus Sisters',
      width: dW,
      height: dH
    }
  },
  {
    type: 'boss',
    id: 'valvalis',
    graphic: {
      uri: 'img/bosses/valvalis.png',
      alt: 'Valvalis',
      width: dW,
      height: dH
    }
  },
  {
    type: 'boss',
    id: 'calbrena',
    graphic: {
      uri: 'img/bosses/calbrena.png',
      alt: 'Calbrena',
      width: dW,
      height: dH
    }
  },
  {
    type: 'boss',
    id: 'golbez',
    graphic: {
      uri: 'img/bosses/golbez.png',
      alt: 'Golbez',
      width: dW,
      height: dH
    }
  },
  {
    type: 'boss',
    id: 'darkimps',
    graphic: {
      uri: 'img/bosses/darkimps.png',
      alt: 'Dark Imps',
      width: dW,
      height: dH
    }
  },
  {
    type: 'boss',
    id: 'lugae',
    graphic: {
      uri: 'img/bosses/lugae.png',
      alt: 'Lugae & Balnab',
      width: dW,
      height: dH
    }
  },
  {
    type: 'boss',
    id: 'eblan-king-queen',
    graphic: {
      uri: 'img/bosses/eblan-king-queen.png',
      alt: 'King & Queen Eblan',
      width: dW,
      height: dH
    }
  },
  {
    type: 'boss',
    id: 'rubicant',
    graphic: {
      uri: 'img/bosses/rubicant.png',
      alt: 'Rubicant',
      width: dW,
      height: dH
    }
  },
  {
    type: 'boss',
    id: 'evilwall',
    graphic: {
      uri: 'img/bosses/evilwall.png',
      alt: 'EvilWall',
      width: dW,
      height: dH
    }
  },
  {
    type: 'boss',
    id: 'odin',
    graphic: {
      uri: 'img/bosses/odin.png',
      alt: 'Odin',
      width: dW,
      height: dH
    }
  },
  {
    type: 'boss',
    id: 'asura',
    graphic: {
      uri: 'img/bosses/asura.png',
      alt: 'asura',
      width: dW,
      height: dH
    }
  },
  {
    type: 'boss',
    id: 'leviathan',
    graphic: {
      uri: 'img/bosses/leviathan.png',
      alt: 'Leviathan',
      width: dW,
      height: dH
    }
  },
  {
    type: 'boss',
    id: 'bahamut',
    graphic: {
      uri: 'img/bosses/bahamut.png',
      alt: 'Bahamut',
      width: dW,
      height: dH
    }
  },
  {
    type: 'boss',
    id: 'fiends',
    graphic: {
      uri: 'img/bosses/fiends.png',
      alt: 'Elemental Fiends',
      width: dW,
      height: dH
    }
  },
  {
    type: 'boss',
    id: 'cpu',
    graphic: {
      uri: 'img/bosses/cpu.png',
      alt: 'CPU',
      width: dW,
      height: dH
    }
  },
  {
    type: 'boss',
    id: 'paledim',
    graphic: {
      uri: 'img/bosses/paledim.png',
      alt: 'Pale Dim',
      width: dW,
      height: dH
    }
  },
  {
    type: 'boss',
    id: 'plague',
    graphic: {
      uri: 'img/bosses/plague.png',
      alt: 'Plague',
      width: dW,
      height: dH
    }
  },
  {
    type: 'boss',
    id: 'd-lunar',
    graphic: {
      uri: 'img/bosses/d-lunar.png',
      alt: 'Lunar Dragons',
      width: dW,
      height: dH
    }
  },
  {
    type: 'boss',
    id: 'ogopogo',
    graphic: {
      uri: 'img/bosses/ogopogo.png',
      alt: 'Ogopogo',
      width: dW,
      height: dH
    }
  },
  {
    type: 'boss',
    id: 'wyvern',
    graphic: {
      uri: 'img/bosses/wyvern.png',
      alt: 'Wyvern',
      width: dW,
      height: dH
    }
  },
  {
    type: 'boss',
    id: 'zeromus',
    graphic: {
      uri: 'img/bosses/zeromus.png',
      alt: 'Zeromus',
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
    id: 'edge',
    graphic: {
      uri: 'img/characters/edge-normal.png',
      alt: 'Edge',
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