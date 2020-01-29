import React from 'react'
import PropTypes from 'prop-types'
import Key from './Key'
import './Location.css'

const Location = ({ id, keys, graphic, onSelect, onKeySelect, available, active }) => {

    return (
        <div
            id={id}
            className={`Location${(active ? ' selected' : '')}${(available ? ' available' : '')}`}
            onClick={() => onSelect(id)} >
            <img
                src={graphic.uri}
                width={graphic.width}
                height={graphic.height}
                alt={graphic.alt}
                title={graphic.alt} />
            <div className='divider' />
            {
                keys.map((v,i) =>
                    <Key
                        key={`${v.id}-${i}`}
                        type={v.type}
                        id={v.id}
                        note={v.note}
                        graphic={v.graphic}
                        onSelect={
                            (kid, ktype, kslot) => onKeySelect(kid, ktype, kslot, id)
                        }
                        slot={v.slot}
                        active={Boolean(v.active)}
                    />)
            }
        </div>
    )
}

Location.propTypes = {
    id: PropTypes.string.isRequired,
    keys: PropTypes.arrayOf(
        PropTypes.shape({
            type: PropTypes.oneOf(['boss', 'key', 'character']).isRequired,
            id: PropTypes.string.isRequired,
            graphic: PropTypes.shape({
                uri: PropTypes.string.isRequired,
                alt: PropTypes.string.isRequired,
                width: PropTypes.number.isRequired,
                height: PropTypes.number.isRequired
            }).isRequired,
            active: PropTypes.bool,
            slot: PropTypes.number
        })
    ),
    graphic: PropTypes.shape({
        uri: PropTypes.string.isRequired,
        alt: PropTypes.string.isRequired,
        width: PropTypes.number.isRequired,
        height: PropTypes.number.isRequired
    }),
    onSelect: PropTypes.func.isRequired,
    onKeySelect: PropTypes.func.isRequired,
    available: PropTypes.bool
}

export default Location
