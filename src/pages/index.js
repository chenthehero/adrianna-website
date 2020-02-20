import React from "react"
import {Link} from "gatsby"
import Header from "../components/header"
import Nav from "../components/navbar"


export default () => (
  <div style={{ color: `purple` }}>
    <Link to="/about/">Contact</Link>
    <Header headerText="Hello Gatsby"/>
    
    
  </div>
)
