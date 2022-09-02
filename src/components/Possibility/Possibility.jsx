import React from 'react'
import './Possibility.css'
import possibility from '../../assets/possibility.png'

const Possibility = () => {
  return (
    <div className='app__possibility section__padding' id='possibilities'>
        <div className="app__possibility-image">
            <img src={possibility} alt="possibility img" />
        </div>

        <div className="app__possibility-content">
            <p className='p-large'>Request Early Access to Get Started</p>
            <h2 className='headtext-medium gradient-text'>The possibilities are
            beyond your imagination</h2>
            <p className='p-small'>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
            <p className='p-medium'>Request Early Access to Get Started</p>
        </div>
    </div>
  )
}

export default Possibility