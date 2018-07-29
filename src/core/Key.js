import React from 'react'
import PropTypes from 'prop-types'
import './Key.css'

const Key = ({ type, id, graphic, onSelect, active, slot }) => (
  <div
    id={id}
    className={`Key${(active ? ' active' : '')}`}
    onClick={() => onSelect ? onSelect(id, type, slot) : {}}>
    <img
      src={graphic.uri}
      alt={graphic.alt}
      title={graphic.alt}
      width={graphic.width}
      height={graphic.height} />
  </div>
)

Key.propTypes = {
  type: PropTypes.oneOf(['key', 'boss', 'character']).isRequired,
  id: PropTypes.string.isRequired,
  graphic: PropTypes.shape({
    uri: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
  }).isRequired,
  onSelect: PropTypes.func,
  active: PropTypes.bool
}

export default Key
