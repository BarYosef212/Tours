import React from 'react';
import { useState } from 'react';

const Tour = ({ id, image, info, name, price, removeTour }) => {
  const [readMore, setReadMore] = useState(false);
  return (
    <article className='single-tour'>
      <img src={image} alt={name} className='img' />
      <span className='tour-price'>${price}</span>
      <div className='tour-info'>
        <h5 className='tour-info'>{name}</h5>
        <p>
          {readMore ? info : `${info.substring(0, 200)}...`}
          <button
            className='info-btn'
            type='button'
            onClick={() => setReadMore(!readMore)}
          >
            {readMore ? 'Show less' : 'Read more'}
          </button>
          <button
            type='button'
            className='btn btn-block delete-btn'
            onClick={() => {
              removeTour(id);
            }}
          >
            not interested
          </button>
        </p>
      </div>
    </article>
  );
};

export default Tour;
