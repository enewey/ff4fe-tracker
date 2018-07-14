import React from 'react'
import PropTypes from 'prop-types'
import './Key.css'

const Key = ({type, id, graphic, onSelect, active}) => (
  <div id={id} className={`Key ${(active ? 'active' : false)}`} onClick={onSelect ? onSelect : () => true}>
    <img src={graphic.uri} alt={graphic.uri} width={graphic.width} height={graphic.height} />
  </div>
)

Key.propTypes = {
  type: PropTypes.oneOf(['key','boss','character']).isRequired,
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
