import React,{useState,useEffect} from 'react';
import './Matchcard.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import images from './image/images.jpeg';
import {Link} from 'react-router-dom';
import '../App.css';






function MatchCard() {
  
  const [allmatches,setmatches] = useState();
  useEffect(()=>{
    getmatchInfo();
    console.log(allmatches);
  },[])

//api_1 arfan= nJDrD5PVkBVf8hkkuTWGBBaqOe52
//api2 goole_pc= el3BqjZxc5MmxjbNyIYdPfnO9aT2
  
  const getmatchInfo =async()=>{
    const response = await fetch("https://cricapi.com/api/matches/el3BqjZxc5MmxjbNyIYdPfnO9aT2");
   //const response = await fetch("https://cricapi.com/api/cricketScore/?unique_id=1216524&apikey=el3BqjZxc5MmxjbNyIYdPfnO9aT2");
   //const response = await fetch("https://cricapi.com/api/fantasySummary/?unique_id=1216524&apikey=el3BqjZxc5MmxjbNyIYdPfnO9aT2");
   const matchlist = await response.json();
   setmatches(matchlist.matches);
   //console.log({allmatches});
   console.log(matchlist)
    }
  




    return (
      
        <div className="App" style={{textAlign:'center',justifyContent:'center'}}>

          
          <Link to ={'/search'}>
             <button className="btn btn-outline-success btn-fw" >
              Click for Search Any Player 
            </button>
          </Link>
         
 <div class="container">
     <div className="row">
       {allmatches && allmatches.map((allmatch) =>(
         <div className="card" style={{background:'rgb(214, 214, 218)'}}>
            <div className="card-header">
              <h4>{allmatch["team-1"]} <h4 className="versus">VS</h4> {allmatch["team-2"]}</h4>
                <p style={{fontSize:'13px'}}>{allmatch?.type} Match</p>
           </div>
        <div className="card-body">
          <p>
             Toss Winner team : {allmatch.toss_winner_team}<br></br>
             Match Winner team : {allmatch.winner_team}<br></br>
             <p className="versus">Starting time {new Date(allmatch.dateTimeGMT).toLocaleString()}</p>
          </p>
          <Link to={`/MatchCard/${allmatch.unique_id}`}>
            <button className="btn btn-primary"> Show Detail</button>
          </Link>
         
        </div>
      </div>
      ))}
      </div>
  </div> 
</div> 
      
    );
}

export default MatchCard;