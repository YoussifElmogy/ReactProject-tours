import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project'
function App() {

  const [loading,setloading] = useState(true);
  const [tours,setTours] =useState([]);

    const handleremove=(id)=>{
    const newtours = tours.filter((tour)=>
    tour.id!==id
    )
    setTours(newtours);

  }

  const fetchdata= async ()=> {
    try {
      const response = await fetch(url);
      const content = await response.json();
      setloading(false);
      setTours(content);
      
      
    } catch (error) {

      setloading(false);
      console.log(error);
      
    }
  }
  useEffect(()=>{
    fetchdata();

  },[])

  if(tours.length===0){
    return (
      <main>
        <div className="title">
          <h2>no tours left</h2>
          <button className="btn" onClick={fetchdata} >refresh tours</button>
        </div>
      </main>
    )
  }

  return <main>
    {loading? <Loading></Loading> : 
    <Tours tours={tours} handleremove={handleremove} ></Tours>
    }

  </main>
}

export default App
