import React from 'react'
import './whatGPT3.css'
import Feature from '../../containers/Feature/Feature'

const WhatGPT3 = () => {
  return (
    <div className='app__wgpt3 section__padding section__margin' id='wgpt3'>
        <div className="app__wgtp3-content_group-A">
            <Feature title="What is GPT-3" content="We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by." direction='row'/>
        </div>

        <div className="app__gtp3-content-header">
            <h2 className='headtext-medium gradient-text'>The possibilities are beyond your imagination</h2>
            <p className='p-medium'>Explore the Library</p>
        </div>

        <div className="app__wgtp3-content_group-B">
            <div className="content-1 content">
                <Feature title="Chatbots" content="We so opinion friends me message as delight. Whole front do of plate heard oh ought." direction="column"/>
            </div>

            <div className="content-2 content">
                <Feature title="Knowledgebase" content='At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b' direction="column"/>
            </div>

            <div className="content-3 content">
                <Feature title="Education" content="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b" direction="column"/>
            </div>
        </div>
    </div>
  )
}

export default WhatGPT3