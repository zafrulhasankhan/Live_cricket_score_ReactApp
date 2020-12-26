import React,{useState,useEffect} from 'react';
import './Style.css';
import {Link} from 'react-router-dom';
import {
    Button,
    Card,
    CardActions,
    CardContent,
    Grid,
    Typography
  } from "@material-ui/core";


function PlayerInfo({match}) {
    console.log('match',match);
    console.log(match.params.playerId)
    const [playerdata,setplayerdata] = useState([]);
    const [batting,setbatting] = useState([]);
    const [bowling, setbowling] = useState([]);
    useEffect(()=>{
    getplayerInfo();
    },[])

    const getplayerInfo =async()=>{
    const response = await fetch(`https://cricapi.com/api/playerStats/?pid=${match.params.playerId}&apikey=el3BqjZxc5MmxjbNyIYdPfnO9aT2`);
    const playerDetails = await response.json();
    setplayerdata(playerDetails);
    setbatting(playerDetails.data.batting);
    setbowling(playerDetails.data.bowling);
    console.log(playerDetails);
    }
    return (
        <div>

           <Link to ={'/search'}>
             <button className="btn btn-outline-success btn-fw" >
              Click for Search Any Player 
            </button>
            </Link><br></br><br></br>
            <Card  style={{
         // background: allmatch.matchStarted ? " black" : "#cccccc",
          background:"#cccccc",
          marginTop: 15,
          marginLeft:'10%',
          justifyContent:'center',
          display:"flex",
          flexDirection:'column',
          width:'80%',
          height:'80%',
          boxShadow: '2px 18px 20px 20px #666666'
         
          
        }} >
        
        <CardContent>
          
          <Grid container justify="center" alignItems="center" spacing={4}>
              <div  className="container"><br></br>
               <div style={{overflowX:'auto'}}>
                <img src={playerdata.imageURL} style={{height:230,width:200}} alt="Image not found"></img>
                <h5 className="playerName">{playerdata.name}</h5>
                <p>{playerdata.profile}</p><br></br>
                <div style={{textAlign:"left"}}>
                <p><span style={{color:"blue","font-weight":"bold"}}>FullName : </span><i><b>{playerdata.fullName}.</b></i></p>
                <p><span style={{color:"blue","font-weight":"bold"}}>Country : </span><i><b>{playerdata.country}.</b></i></p>
                <p><span style={{color:"blue","font-weight":"bold"}}>Born : </span><i><b>{playerdata.born}.</b></i></p>
                <p><span style={{color:"blue","font-weight":"bold"}}>Age : </span><i><b>{playerdata.currentAge}.</b></i></p>
                <p><span style={{color:"blue","font-weight":"bold"}}>Batting Style: </span><i><b>{playerdata.battingStyle}.</b></i></p>
                <p><span style={{color:"blue","font-weight":"bold"}}>Bowling Style: </span><i><b>{playerdata.bowlingStyle}.</b></i></p>
                <p><span style={{color:"blue","font-weight":"bold"}}>Playing role: </span><i><b>{playerdata.playingRole}.</b></i></p>
                <p><span style={{color:"blue","font-weight":"bold"}}>Major Teams: </span><i><b>{playerdata.majorTeams}.</b></i></p>
                </div><br></br><br></br>
             </div>

               <h2><b><u>Batting Statistics</u></b></h2>
               <div style={{overflowX:'auto',overflowY:'auto'}}>
                <table responsive  className="batting">
                    
                <thead>
              <tr>
                <th>Match Category</th>
                <th>Matches</th>
                <th>Innings</th>
                <th>Not out</th>
                <th>Runs</th>
                <th>Highest Score</th>
                <th>Average</th>
                <th>Ball Face</th>
                <th>Strike rate</th>
                <th>4S</th>
                <th>6s</th>
                <th>catch</th>
                <th>Stumping</th>
                <th>50</th>
                <th>100</th>
              </tr>
            </thead>
            <tbody>
             <tr>
                 <td>List A</td>
                 <td>{batting.listA?.Mat}</td>
                 <td>{batting.listA?.Inns}</td>
                 <td>{batting.listA?.NO}</td>
                 <td>{batting.listA?.Runs}</td>
                 <td>{batting.listA?.HS}</td>
                 <td>{batting.listA?.Ave}</td>
                 <td>{batting.listA?.BF}</td>
                 <td>{batting.listA?.SR}</td>
                 <td>{batting.listA?.["4s"]}</td>
                 <td>{batting.listA?.["6s"]}</td>
                 <td>{batting.listA?.Ct}</td>
                 <td>{batting.listA?.St}</td>
                 <td>{batting.listA?.["50"]}</td>
                 <td>{batting.listA?.["100"]}</td>
             </tr>
             <tr>
                 <td>First Class</td>
                 <td>{batting.firstClass?.Mat}</td>
                 <td>{batting.firstClass?.Inns}</td>
                 <td>{batting.firstClass?.NO}</td>
                 <td>{batting.firstClass?.Runs}</td>
                 <td>{batting.firstClass?.HS}</td>
                 <td>{batting.firstClass?.Ave}</td>
                 <td>{batting.firstClass?.BF}</td>
                 <td>{batting.firstClass?.SR}</td>
                 <td>{batting.firstClass?.["4s"]}</td>
                 <td>{batting.firstClass?.["6s"]}</td>
                 <td>{batting.firstClass?.Ct}</td>
                 <td>{batting.firstClass?.St}</td>
                 <td>{batting.firstClass?.["50"]}</td>
                 <td>{batting.firstClass?.["100"]}</td>
             </tr>
             <tr>
                 <td>T20Is</td>
                 <td>{batting.T20Is?.Mat}</td>
                 <td>{batting.T20Is?.Inns}</td>
                 <td>{batting.T20Is?.NO}</td>
                 <td>{batting.T20Is?.Runs}</td>
                 <td>{batting.T20Is?.HS}</td>
                 <td>{batting.T20Is?.Ave}</td>
                 <td>{batting.T20Is?.BF}</td>
                 <td>{batting.T20Is?.SR}</td>
                 <td>{batting.T20Is?.["4s"]}</td>
                 <td>{batting.T20Is?.["6s"]}</td>
                 <td>{batting.T20Is?.Ct}</td>
                 <td>{batting.T20Is?.St}</td>
                 <td>{batting.T20Is?.["50"]}</td>
                 <td>{batting.T20Is?.["100"]}</td>
             </tr>
             <tr>
                 <td>ODIs</td>
                 <td>{batting.ODIs?.Mat}</td>
                 <td>{batting.ODIs?.Inns}</td>
                 <td>{batting.ODIs?.NO}</td>
                 <td>{batting.ODIs?.Runs}</td>
                 <td>{batting.ODIs?.HS}</td>
                 <td>{batting.ODIs?.Ave}</td>
                 <td>{batting.ODIs?.BF}</td>
                 <td>{batting.ODIs?.SR}</td>
                 <td>{batting.ODIs?.["4s"]}</td>
                 <td>{batting.ODIs?.["6s"]}</td>
                 <td>{batting.ODIs?.Ct}</td>
                 <td>{batting.ODIs?.St}</td>
                 <td>{batting.ODIs?.["50"]}</td>
                 <td>{batting.ODIs?.["100"]}</td>
             </tr>
             <tr>
                 <td>Tests</td>
                 <td>{batting.tests?.Mat}</td>
                 <td>{batting.tests?.Inns}</td>
                 <td>{batting.tests?.NO}</td>
                 <td>{batting.tests?.Runs}</td>
                 <td>{batting.tests?.HS}</td>
                 <td>{batting.tests?.Ave}</td>
                 <td>{batting.tests?.BF}</td>
                 <td>{batting.tests?.SR}</td>
                 <td>{batting.tests?.["4s"]}</td>
                 <td>{batting.tests?.["6s"]}</td>
                 <td>{batting.tests?.Ct}</td>
                 <td>{batting.tests?.St}</td>
                 <td>{batting.tests?.["50"]}</td>
                 <td>{batting.tests?.["100"]}</td>
             </tr>
            </tbody>
            </table>
            </div><br></br>

                {/*bowlin statistics*/}

                <h2><b><u>Bowling Statistics</u></b></h2>
                <div style={{overflowX:'auto',overflowY:'auto'}}>
                <table responsive className="batting">
                    
                <thead>
              <tr>
                <th>Match Category</th>
                <th>Matches</th>
                <th>Innings</th>
                <th>Balls</th>
                <th>Runs</th>
                <th>Wickets</th>
                <th>BBI</th>
                <th>BBM</th>
                <th>Average</th>
                <th>Economy</th>
                <th>Strike Rate</th>
                <th>4W</th>
                <th>5W</th>
                <th>10W</th>
                
              </tr>
            </thead>
            <tbody>
             <tr>
                 <td>List A</td>
                 <td>{bowling.listA?.Mat}</td>
                 <td>{bowling.listA?.Inns}</td>
                 <td>{bowling.listA?.Balls}</td>
                 <td>{bowling.listA?.Runs}</td>
                 <td>{bowling.listA?.Wkts}</td>
                 <td>{bowling.listA?.BBI}</td>
                 <td>{bowling.listA?.BBM}</td>
                 <td>{bowling.listA?.Ave}</td>
                 <td>{bowling.listA?.Econ}</td>
                 <td>{bowling.listA?.SR}</td>
                 <td>{bowling.listA?.["4w"]}</td>
                 <td>{bowling.listA?.["5w"]}</td>
                 <td>{bowling.listA?.["10"]}</td>
                
             </tr>
             <tr>
                 <td>First Class</td>
                 <td>{bowling.firstClass?.Mat}</td>
                 <td>{bowling.firstClass?.Inns}</td>
                 <td>{bowling.firstClass?.Balls}</td>
                 <td>{bowling.firstClass?.Runs}</td>
                 <td>{bowling.firstClass?.Wkts}</td>
                 <td>{bowling.firstClass?.BBI}</td>
                 <td>{bowling.firstClass?.BBM}</td>
                 <td>{bowling.firstClass?.Ave}</td>
                 <td>{bowling.firstClass?.Econ}</td>
                 <td>{bowling.firstClass?.SR}</td>
                 <td>{bowling.firstClass?.["4w"]}</td>
                 <td>{bowling.firstClass?.["5w"]}</td>
                 <td>{bowling.firstClass?.["10"]}</td>
              </tr>
             <tr>
                 <td>T20Is</td>
                 <td>{bowling.T20Is?.Mat}</td>
                 <td>{bowling.T20Is?.Inns}</td>
                 <td>{bowling.T20Is?.Balls}</td>
                 <td>{bowling.T20Is?.Runs}</td>
                 <td>{bowling.T20Is?.Wkts}</td>
                 <td>{bowling.T20Is?.BBI}</td>
                 <td>{bowling.T20Is?.BBM}</td>
                 <td>{bowling.T20Is?.Ave}</td>
                 <td>{bowling.T20Is?.Econ}</td>
                 <td>{bowling.T20Is?.SR}</td>
                 <td>{bowling.T20Is?.["4w"]}</td>
                 <td>{bowling.T20Is?.["5w"]}</td>
                 <td>{bowling.T20Is?.["10"]}</td>
             </tr>
             <tr>
                 <td>ODIs</td>
                 <td>{bowling.ODIs?.Mat}</td>
                 <td>{bowling.ODIs?.Inns}</td>
                 <td>{bowling.ODIs?.Balls}</td>
                 <td>{bowling.ODIs?.Runs}</td>
                 <td>{bowling.ODIs?.Wkts}</td>
                 <td>{bowling.ODIs?.BBI}</td>
                 <td>{bowling.ODIs?.BBM}</td>
                 <td>{bowling.ODIs?.Ave}</td>
                 <td>{bowling.ODIs?.Econ}</td>
                 <td>{bowling.ODIs?.SR}</td>
                 <td>{bowling.ODIs?.["4w"]}</td>
                 <td>{bowling.ODIs?.["5w"]}</td>
                 <td>{bowling.ODIs?.["10"]}</td>
             </tr>
             <tr>
                 <td>Tests</td>
                 <td>{bowling.tests?.Mat}</td>
                 <td>{bowling.tests?.Inns}</td>
                 <td>{bowling.tests?.Balls}</td>
                 <td>{bowling.tests?.Runs}</td>
                 <td>{bowling.tests?.Wkts}</td>
                 <td>{bowling.tests?.BBI}</td>
                 <td>{bowling.tests?.BBM}</td>
                 <td>{bowling.tests?.Ave}</td>
                 <td>{bowling.tests?.Econ}</td>
                 <td>{bowling.tests?.SR}</td>
                 <td>{bowling.tests?.["4w"]}</td>
                 <td>{bowling.tests?.["5w"]}</td>
                 <td>{bowling.tests?.["10"]}</td>
             </tr>
            </tbody>
                </table>
                </div><br></br>
           
               
         </div>
         </Grid>
         </CardContent>
         </Card>
            
        </div>
    );
}

export default PlayerInfo;