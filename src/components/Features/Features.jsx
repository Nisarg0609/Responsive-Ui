import React from 'react'
import Feature from '../../containers/Feature/Feature'
import './features.css'

const Features = () => {
  return (
    <div className='app__features section__padding' id='features'>
        <div className="app__features-header">
            <h2 className='headtext-medium gradient-text'>The Future is Now and You Just Need to Realize It. Step into Future Today. & Make it Happen.</h2>
            <p className='p-medium'>Request Early Access to Get Started</p>
        </div>

        <div className="app__features-all_features">
            <div className="feature">
                <Feature title="Improving end distrusts instantly" content="From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded." direction="row"/>
            </div>
            <div className="feature">
                <Feature title="Become the tended active" content="Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to." direction="row"/>
            </div>
            <div className="feature">
                <Feature title="Message or am nothing" content="Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address." direction="row"/>
            </div>
            <div className="feature">
                <Feature title="Really boy law county" content="Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush.." direction="row"/>
            </div>
        </div>
    </div>
  )
}

export default Features