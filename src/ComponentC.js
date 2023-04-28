import React from 'react'
import { userContext } from './Home'

const ComponentC = () => {
  return (
    <div>
        <userContext.Consumer>
            {value => <div>{value}</div>}
        </userContext.Consumer>
    </div>
  )
}

export default ComponentC