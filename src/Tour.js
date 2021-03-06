import React, { useState } from 'react';

const Tour = ({id,image,info,price,name ,handleremove}) => {
  const [readmore,setreadmore] = useState(false);

  return <article>

    <div className="single-tour">
    <img src={image} alt={name} />
    <footer>
      <div className="tour-info">
        <h4>{name}</h4>
        <h4 className="tour-price" >${price}</h4>
      </div>
      <p>{readmore? info : `${info.substring(0,200)}...`}
      <button onClick={()=>setreadmore(!readmore)}>
        {readmore? 'show less' : 'read more'}
      </button>
      </p>
      <button className="delete-btn" onClick={()=>handleremove(id)} >not interested</button>
    </footer>
    </div>

  </article>;
};

export default Tour;
