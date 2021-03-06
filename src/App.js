import React,{useEffect,useState} from 'react';
import './App.css';
import MatchCard from './components/MatchCard';
import { BrowserRouter as Router, Switch , Route } from 'react-router-dom';
import Test from './components/Test';
import './components/Style.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom';
import PlayerInfo from './components/PlayerInfo';
import Search from './components/Search';
import useStyles from './LogoStyle';
import ProjectLogo from './components/image/ProjectLogo.png';





function App() {
  const classes =  useStyles();

return(
      
       <div className="App">
           <div  className={classes.logoContainer}>
             <img src={ProjectLogo}  className={classes.alanLogo} alt="owner photo"/>
           </div>
   
      
           <Router>
             <Switch>
                 <Route path="/" exact component={MatchCard}/>
                 <Route path="/MatchCard/:id" exact component={Test} />
                 <Route path="/MatchCard/:id/:playerId" component={PlayerInfo} />
                 <Route path="/search" component={Search} />
             </Switch>
          </Router>

           
      <p className="creater"  style={{textAlign:"center"}}><b>Created by</b><a href="https://web.facebook.com/zafrulhasan.nasim" target="_blank"><b>Zafrul Hasan Nasim</b> </a></p>
    

</div>


  
      
      )





    }
export default App;