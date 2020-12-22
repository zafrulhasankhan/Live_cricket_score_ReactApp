import React,{useState,useEffect} from 'react';
//import './Style.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import images from './image/images.jpeg';
import {Link} from 'react-router-dom';
import '../App.css';
import {
    Button,
    Card,
    CardActions,
    CardContent,
    Grid,
    Typography,
    CardActionArea,
    CardMedia
  } from "@material-ui/core";



function MatchCard() {
  const [allmatches,setmatches] = useState();
  useEffect(()=>{
    getmatchInfo();
    console.log(allmatches);
  },[])

//api_1 arfan= nJDrD5PVkBVf8hkkuTWGBBaqOe52
//api2 goole_pc= el3BqjZxc5MmxjbNyIYdPfnO9aT2
  
  const getmatchInfo =async()=>{
    const response = await fetch("https://cricapi.com/api/matches/nJDrD5PVkBVf8hkkuTWGBBaqOe52");
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
         
         {allmatches && allmatches.map((allmatch) =>(
        
          <Card  key={allmatch.unique_id} style={{
                 background: allmatch.matchStarted ? " black" : "#cccccc",
                 marginTop: 15,
                 marginLeft:'10%',
                 justifyContent:'center',
                 display:"flex",
                 flexDirection:'column',
                 width:'80%',
                 height:'80%',
                 color: allmatch.matchStarted ? "white":"black",
                 boxShadow: '2px 18px 20px 20px #666666'
              }} >
        
        <CardContent>
          <Grid container justify="center" alignItems="center" spacing={4}> 
            <Grid item>
                <Typography variant="h5">{allmatch["team-1"]}</Typography>
            </Grid>
          
            <Grid item>
              <h2 className="versus">VS</h2>
            </Grid>
            <Grid item>
              <Typography variant="h5">{allmatch["team-2"]}</Typography>
            </Grid>
          </Grid>
        </CardContent>

        <CardActions>
           <Grid container justify="center">
               <h5>Toss Winner team : {allmatch.toss_winner_team}</h5>
          </Grid>
        </CardActions>
        <CardActions>
           <Grid container justify="center">
              <h5>Match Winner team : {allmatch.winner_team}</h5>
           </Grid>
        </CardActions>
       
        <CardActions>
          <Grid container justify="center">
            <Link to={`/MatchCard/${allmatch.unique_id}`}>
            <button
              className="btn btn-primary"
              variant="outlined"
              color="secondary"
            >
              Show Detail
            </button>
           </Link>
            <button
              style={{ marginLeft: 5 }}
              variant="outlined"
              color="primary"
              className="btn btn-danger"
            >
              Starting time {new Date(allmatch.dateTimeGMT).toLocaleString()}
            </button>
          </Grid>
        </CardActions>
    </Card>
))}
      
  </div>  
      
    );
}

export default MatchCard;