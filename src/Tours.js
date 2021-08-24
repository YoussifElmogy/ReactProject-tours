import React from 'react';
import Tour from './Tour';
const Tours = ({ tours, handleremove}) => {
  return <section>
    <div className="title">
      <h2>Our Tours</h2>
      <div className="underline"></div>

    </div>
    <div>
      {tours.map((tour)=>{
        return <Tour handleremove={handleremove} key={tour.id} {...tour} ></Tour>

      })}

    </div>
  </section>
};

export default Tours;
