import React from 'react'
import './Brand.css'
import {google,slack,atlassian,dropbox,shopify} from './imports.js'

const Brand = () => {
  return (
     <div className="app__brand section__padding">
         <div className="google brand-logo">
            <img src={google} alt="google img" />
         </div>
         <div className="slack brand-logo">
            <img src={slack} alt="slack img" />
         </div>
         <div className="atlassian brand-logo">
            <img src={atlassian} alt="atlassian img" />
         </div> 
         <div className="dropbox brand-logo">
            <img src={dropbox} alt="dropbox img" />
         </div>
         <div className="shopify brand-logo">
            <img src={shopify} alt="shopify img" />
         </div>
     </div>
  )
}

export default Brand