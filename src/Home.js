import React, { useState } from 'react'
import ComponentC from './ComponentC'
import Practice from './Practice'
import Property from './Property'
import StateManage from './StateManage'
import Change from './Change'
import Fetch from './Fetch'
import Login from './Login'
import Axios from './Axios'
import Register from './Register'
import Counter from './Counter'
import Tododup from './Tododup'

export const userContext = React.createContext();

const Home = () => {

  const [text, setText] = useState("Stackular Website")

  return (
    <div>
        <h1 className="main">Home</h1>
        <h1 style={{textAlign : "center", backgroundColor:"yellow"}}>This is Home Page</h1>
        <userContext.Provider value={text}>
          <ComponentC />
        </userContext.Provider>

        <Practice />
        <Property />
        {/* <StateManage /> */}
        <Change />
        <Counter />
        <Fetch />
        <Login />
        <Axios />
        <Register />
        <Tododup />
        
    </div>

  )
}

export default Home