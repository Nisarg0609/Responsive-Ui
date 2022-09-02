import React from 'react';
import './article.css';

const Article = ({ imgUrl, date, text }) => (
  <div className="gpt3__blog-container_article">
    <div className="gpt3__blog-container_article-image">
      <img src={imgUrl} alt="blog_image" />
    </div>
    <div className="gpt3__blog-container_article-content">
      <div>
        <p className='p-small'>{date}</p>
        <h3 className='headtext-small'>{text}</h3>
      </div>
      <p className='p-medium'>Read Full Article</p>
    </div>
  </div>
);

export default Article;