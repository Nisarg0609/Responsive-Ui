import React from 'react'
import './feature.css'

const Feature = ({title,content,direction}) => {
  return (
      <div className={direction} >
          <div className="app__feature-title">
              <div className='blank-line'/>
              <h3 className='headtext-e_small'>{title}</h3>
          </div>

          <div className="app__feature-content">
          <p className='p-small'>{content}</p></div>
      </div>
  )
}

export default Feature