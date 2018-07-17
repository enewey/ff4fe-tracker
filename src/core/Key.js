import React from 'react'
import PropTypes from 'prop-types'
import './Key.css'

const Key = ({type, id, graphic, onSelect, active, used}) => (
  <div id={id} className={`Key${(active ? ' available' : '')}`} onClick={() => onSelect ? onSelect(id,type) : {}}>
    <img src={graphic.uri} alt={graphic.alt} width={graphic.width} height={graphic.height} />
  </div>
)

Key.handleClick = ev => {

}

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
