import React from 'react'
import PropTypes from 'prop-types'

const ChildrenComponent = ({btnText}) => {
  return (
    <button>{btnText}</button>
  )
}

ChildrenComponent.PropTypes = {
    btnText: PropTypes.string.isRequired
}

export default ChildrenComponent
