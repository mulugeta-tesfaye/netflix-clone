import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import "./Player.css"
import back_arrow_icon from '../../assets/back_arrow_icon.png'
const Player = () => {

  const {id} = useParams()
  const navigate = useNavigate()
  const [apiData, setApiData] = useState({
    name:'',
    key:'',
    published_at:'',
    typeof:''
  });
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1OTEzZTQ0MGY4ODY0NWM0NDA1Y2E4NjVkOGU1YjdmMyIsIm5iZiI6MTc0MTQzODkyMi4yNzQsInN1YiI6IjY3Y2MzZmNhMDVhZGZiOWViOTViYWIyOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.w0dXSySV9a_TJaWU8H0wVyLCFOMmBtH5oSTIGrxuPCc'
    }
  };

  useEffect(() => {
    
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
      .then(res => res.json())
      .then(res =>res.results[0])
      .then(res =>setApiData(res))
      .catch(err => console.error(err));
  }, [])
  
  return (
    <div className='player'>
      
      <img src={back_arrow_icon} alt="back arrow icon"onClick={()=>navigate(-1)}/>
     
      <iframe src={`https://www.youtube.com/embed/${apiData.key}`} frameborder="0" width='90%' height='90%' title='trailer' allowFullScreen></iframe>
      <div className="player-info">
        <p>{apiData.published_at.slice(0,10)}</p>
        <p>{apiData.name}</p>
        <p>{apiData.type}</p>
      </div>
     </div>
  )
}

export default Player