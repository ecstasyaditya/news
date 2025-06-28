import React, { Component } from 'react';

export class NewsUpdate extends Component {

  render() {
    let { title, imageUrl, newsUrl,source,author } = this.props;

    return (
      <div className='my-3 '>
        <div className='card' style={{width:"25rem"}}>
          <div className='card-header bg-warning'>
            {source}
          </div>
          <img 
            src={imageUrl} 
            className="card-img-top" 
            alt={title || 'News image not available'} 
            height="200px"
            width="400px"
          />
          <div className="card-body">
            <h5 className='title'>{title ? title : "No Title Available"}</h5>
            <a href={newsUrl} target="_blank" rel="noopener noreferrer" className='btn btn-primary'>
              Read More
            </a>
          </div>
        
        </div>
        <div className='card-footer text-danger'><cite title='source title'>By:{author?" "+source: author || " anonymous"}</cite>
        </div>
      </div>
    );
  }
}

export default NewsUpdate;
