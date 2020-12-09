import React,{useEffect,useState} from 'react';
import './App.css';
import MatchCard from './components/MatchCard';
import { BrowserRouter as Router, Switch , Route } from 'react-router-dom';
import Test from './components/Test';
import images from './components/image/images.jpeg';
import './components/Style.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom';
import PlayerInfo from './components/PlayerInfo';
import Search from './components/Search';
import FindPlayer from './components/FindPlayer';






function App() {
      return(
      
      
      
<div className="App">
<p className="Apptitle"><b>Welcome To Nasim's Live Cricket App</b></p><br></br>





       
  
       
        

{/*allmatches.map((allmatch) =>(
  <MatchCard team1={allmatch["team-1"]} 
  team2={allmatch["team-2"]} 
  toss={allmatch.toss_winner_team} 
  match_start={allmatch.matchStarted} 
  match_win={allmatch.winner_team} 
  match_id={allmatch.unique_id}
  match_time={allmatch.dateTimeGMT}
  
  ></MatchCard>

))*/}


<Router>

 <Switch>
 
   <Route path="/" exact component={MatchCard}/>
   <Route path="/MatchCard/:id" exact component={Test} />
   <Route path="/MatchCard/:id/:playerId" component={PlayerInfo} />
   <Route path="/search" component={Search} />
 </Switch>
  
</Router>


</div>


  
      
      )





    }
export default App;