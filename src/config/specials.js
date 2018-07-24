const dH = 32;
const dW = 32;

const specials = {
    'cecil': {
        condition: { location: 'ordeals', num: 4 },
        newgraphic: {
            uri: 'img/characters/cecil-paladin-normal.png',
            alt: 'Cecil (Paladin)',
            width: dW,
            height: dH
        },
        oldgraphic: {
            uri: 'img/characters/cecil-normal.png',
            alt: 'Cecil (Paladin)',
            width: dW,
            height: dH
        }
    },
    'rydia': {
        condition: { location: 'dwarf-castle', num: 3 },
        newgraphic: {
            uri: 'img/characters/rydia-adult-normal.png',
            alt: 'Rydia (Adult)',
            width: dW,
            height: dH
        },
        oldgraphic: {
            uri: 'img/characters/rydia-normal.png',
            alt: 'Rydia (Adult)',
            width: dW,
            height: dH
        }
    }
}

export default specials
