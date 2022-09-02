import React from 'react'
import './cta.css'

const Cta = () => {
  return (
      <div className="app__cta section__margin">
          <div className="app__cta-content">
              <p className='p-medium'>Request Early Access to Get Started</p>
              <h3 className='headtext-e_small'>Register Today & start exploring the endless possibilities.</h3>
          </div>

          <div className="app__cta-button">
              <button className='p-large' type='button'>Get Started</button>
          </div>
      </div>
  )
}

export default Cta