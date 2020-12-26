import React,{useEffect,useState} from 'react';
import {Link} from 'react-router-dom';
import './Style.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {
    Button,
    Card,
    CardActions,
    CardContent,
    Grid,
    Typography
  } from "@material-ui/core";



function Search() {

    var matchId = "playerfind";
    //console.log('match',match);
  const [playerfind,setplayerfind] = useState([]);
  const [search,setsearch] = useState("");
  const [query,setquery] = useState('shakib');
  console.log(query);

  const updateSearch = e =>{
    setsearch(e.target.value);
    //console.log({search})
  }
  
  const getsearch = e =>{
    e.preventDefault();
    setquery(search);
    setsearch('');
  }
  useEffect(()=>{
    getplayerlist();
    console.log(playerfind);
  },[query])

  const getplayerlist =async()=>{
    const response = await fetch(`https://cricapi.com/api/playerFinder/?name=${query}&apikey=el3BqjZxc5MmxjbNyIYdPfnO9aT2`);
    const playerlist = await response.json();
    setplayerfind(playerlist.data);
    console.log(playerlist);

}
    
    return (
        <div className="App">
        <CardActions>
        <Grid container justify="center">
         <div className="input-box">
        <form className="search-form" onSubmit={getsearch}><br></br>
        <input className="search-bar" placeholder="Search Your Favourite Player" type="text" value={search} onChange={updateSearch}></input><br></br><br></br>
        <button className="btn btn-primary" type="submit" >Search</button>
        </form>
        </div>
      </Grid>
      </CardActions>
      <CardActions>
      <Grid container justify="center">
      <h2><b><u>All Results</u></b></h2>
      </Grid>  
      </CardActions>
      
        
     {playerfind.length?(
        <div> 
             {(() => {
                let team1= [];
                 for(let i=0; i< playerfind?.length;i++){
                    team1.push( 
                   <CardActions>
                     <Grid container justify="center">
                       
                    <div className="playercard">
                        <h4><br></br>
                        <Link to={`/MatchCard/${matchId}/${playerfind[i]?.pid}`}>
                        {i+1}. {playerfind[i]?.name}
                        </Link>
                        </h4><br></br>
                    </div>
                    </Grid>
                   </CardActions>
                  
                      )
                    
                 }
                 return team1;
            })()} 
       </div>

     ):(
      <CardActions>
      <Grid container justify="center">
      <div className="playercard">
         <h5>Search again...</h5>
      </div>
      </Grid>
      </CardActions>
     )}
     
          
        <br></br>
       </div>

    );
}
 
export default Search;