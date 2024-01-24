import React from 'react'
import ChildrenComponent from './ChildrenComponent'

const FatherComponent = () => {
  return (
    <>
        <h1>Father Component</h1>
        <ChildrenComponent btnText= 'submit' />
    </>
  )
}

export default FatherComponent
