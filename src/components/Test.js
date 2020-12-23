import React,{useEffect,useState} from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import images from './image/images.jpeg';
import './Style.css';
import {Link} from 'react-router-dom';
import {
    Button,
    Card,
    CardActions,
    CardContent,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Grid,
    Typography
  } from "@material-ui/core";

const Test = ( {match} ) =>{

  
        const [scores,setscores] = useState([]);
        const [squad,setsquad]  = useState([]);
        const [Team2,setTeam2] = useState([]);

        //batting statistics
        const [batting1,setbatting1] = useState([]);
        const [batting2,setbatting2] = useState([]);
        const [batTeam1,setbatTeam1] = useState([]);
        const [batTeam2,setbatTeam2] = useState([]);

        //Bowling statistics
        const [bowling1,setbowling1] = useState([]);
        const [bowling2,setbowling2] = useState([]);
        const [bowlTeam1,setbowlTeam1] = useState([]);
        const [bowlTeam2,setbowlTeam2] = useState([]);

        //man of the match
        const [mom,setmom] = useState([]);

    useEffect(()=>{
        MatchScore();
        MatchDetails();
        //console.log(batTeam1);
       // console.log(squad);
        
    },[]); 

    const MatchScore= async()=>{
        
        const response = await fetch(`https://cricapi.com/api/cricketScore/?unique_id=${match.params.id}&apikey=nJDrD5PVkBVf8hkkuTWGBBaqOe52`);
        const matchSummary =  await response.json();
        setscores(matchSummary);
        
        //setTeam2(matchdetails.data?.team[1]?.players);
        //safety(()=>matchdetails.data.team.players[0]);
        //let property = safety(()=>this.matchdetails.data.team.players[0])
    }

    const MatchDetails = async() =>{
      const response = await fetch(`https://cricapi.com/api/fantasySummary/?unique_id=${match.params.id}&apikey=nJDrD5PVkBVf8hkkuTWGBBaqOe52`);
      const matchdetails = await response.json();
      setsquad(matchdetails.data?.team[0]?.players);
      setTeam2(matchdetails.data?.team[1]?.players);
      //batting statistics
      setbatting1(matchdetails.data?.batting[0]?.scores);
      setbatting2(matchdetails.data?.batting[1]?.scores);
      setbatTeam1(matchdetails.data?.batting[0]?.title);
      setbatTeam2(matchdetails.data?.batting[1]?.title);
      
      //Bowling Statistics
      setbowling1(matchdetails.data?.bowling[0]?.scores);
      setbowling2(matchdetails.data?.bowling[1]?.scores);
      setbowlTeam1(matchdetails.data?.bowling[0]?.title);
      setbowlTeam2(matchdetails.data?.bowling[1]?.title);
      console.log(matchdetails);

      // man of the match
      setmom(matchdetails?.data?.["man-of-the-match"]);
    }

    return (
        
        <div>
            <Link to ={'/search'}>
             <button className="btn btn-outline-success btn-fw" >
              Click for Search Any Player 
            </button>
            </Link><br></br><br></br>

          
       <Card style={{
        background: "rgba(216, 208, 208, 0.781)",
        textAlign:"center",
        marginTop: 15,
          marginLeft:'10%',
          justifyContent:'center',
          display:"flex",
          flexDirection:'column',
          width:'80%',
          height:'80%',
        boxShadow: '2px 18px 20px 20px #666666'
       
       }}>
         <div style={{overflowX:'auto'}}>
        <CardContent>
          
            <Grid container justify="center" alignItems="center" spacing={4}> 
            
              <Grid item>
               <Typography variant="h5">{scores["team-1"]}</Typography>
               </Grid>
          
             <Grid item>
              <img
                style={{ width: 85 }}
                src={images}
                alt=""
              />
             </Grid>
             <Grid item>
                <Typography variant="h5">{scores["team-2"]}</Typography>
             </Grid>
           </Grid>
        </CardContent>

        <CardActions>
           <Grid container justify="center">
              <h5>Score : {scores.description}</h5>
          </Grid>
        </CardActions>
        <CardActions>
           <Grid container justify="center">
              <h5 style={{color: "black"}}>{scores.stat}</h5>
          </Grid>
        </CardActions>
        <CardActions>
           <Grid container justify="center">
              <h5 style={{color: "black"}}>Man of the Match:{mom}</h5>
          </Grid>
        </CardActions>
       <CardActions>
           <Grid container justify="center">
               <p style={{color:"red"}}><b>-------------------------***************--------------------------</b></p>
           </Grid>
       </CardActions>
     </div>
          <CardActions>
             <Grid container justify="center">
                 <h2><b><u>Squad</u></b></h2>
             </Grid>
          </CardActions>
          
        <CardActions>
          <Grid container justify="center">
          <div style={{overflowX:'auto',overflowY:'auto'}}>
           <table className="batting1"> 
            <thead>
              <tr>
                <th>{scores["team-1"]}</th>
                <th>{scores["team-2"]}</th>
              </tr>
            </thead>
            <tbody>
             
               
               {(() => {
                let team1= [];
                 for(let i=0; i< squad?.length;i++){
                    team1.push( 
                    <tr>
                       <td className="squadTeam1"><Link to={`/MatchCard/${match.params.id}/${squad[i]?.pid}`}>{squad[i]?.name}</Link></td>
                        <td className="squadTeam2"><Link to={`/MatchCard/${match.params.id}/${Team2[i]?.pid}`}>{Team2[i]?.name}</Link></td>
                   </tr> 
                    )
                   }
                 return team1;
            })()}
               
               </tbody>
           </table>
           </div>
          </Grid>
          </CardActions>
          
          <CardActions>
             <Grid container justify="center">
                <h2><b><u>Batting Statistics</u></b></h2><br></br>
             </Grid>
          </CardActions>
              <p className="batTeam1">{batTeam1}</p>
          <CardActions>
              <Grid container justify="center">
              <div style={{overflowX:'auto',overflowY:'auto'}}>
                  <table className="batting1">
                     <thead>
                          <tr>
                             <th>Batsman Name</th>
                              <th>Run</th>
                              <th>Ball</th>
                              <th>6s</th>
                              <th>4s</th>
                              <th>Strike rate</th>
                              <th>Dismissal Info.</th>
                              </tr>
                      </thead>
                      <tbody>
             
              
               {(() => {
                let name= [];
                 for(let i=0; i< batting1?.length;i++){
                    name.push( 
                    <tr>
                    <Link to={`/MatchCard/${match.params.id}/${batting1[i]?.pid}`}>
                    <td style={{"font-weight":"bold"}}>{batting1[i]?.batsman}</td>
                   </Link>
                    <td>{batting1[i]?.R}</td>
                    <td>{batting1[i]?.B}</td>
                    <td>{batting1[i]?.["6s"]}</td>
                    <td>{batting1[i]?.["4s"]}</td>
                    <td>{batting1[i]?.SR}</td>
                    <td>{batting1[i]?.["dismissal-info"]}</td>
                    </tr>
                    )
                    
                 }
                 return name;
            })()}

            </tbody>
           </table>
           </div>
          </Grid>
          </CardActions><br></br><br></br>
           
          
          <p className="batTeam2">{batTeam2}</p>
          
          <CardActions>
          <Grid container justify="center">
          <div style={{overflowX:'auto',overflowY:'auto'}}>
          <table  className="batting1">
            <thead>
              <tr>
                <th>Batsman Name</th>
                <th>Run</th>
                <th>Ball</th>
                <th>6s</th>
                <th>4s</th>
                <th>Strike rate</th>
                <th>Dismissal Info.</th>
              </tr>
            </thead>
            <tbody>
             
              
               {(() => {
                let name= [];
                 for(let i=0; i< batting2?.length;i++){
                    name.push( 
                    <tr>
                    <Link to={`/MatchCard/${match.params.id}/${batting2[i]?.pid}`}>
                    <td style={{"font-weight":"bold"}}>{batting2[i]?.batsman}  </td>
                    </Link>
                    <td>{batting2[i]?.R}</td>
                    <td>{batting2[i]?.B}</td>
                    <td>{batting2[i]?.["6s"]}</td>
                    <td>{batting2[i]?.["4s"]}</td>
                    <td>{batting2[i]?.SR}</td>
                    <td>{batting2[i]?.["dismissal-info"]}</td>
                    </tr>
                    )
                    
                 }
                 return name;
            })()}

            </tbody>
           </table>
           </div>
          </Grid>
          </CardActions>



          {/*bowling Statistics*/}
          <CardActions>
          <Grid container justify="center">
          <h2><b><u>Bowling Statistics</u></b></h2><br></br>
          </Grid>
          </CardActions>
          <p className="batTeam1">{bowlTeam1}</p>
          <CardActions>
          <Grid container justify="center">
          <div style={{overflowX:'auto',overflowY:'auto'}}>
          <table striped bordered hover variant="dark" className="batting1">
            <thead>
              <tr>
                <th>Bowler Name</th>
                <th>Over</th>
                <th>Maiden</th>
                <th>Run</th>
                <th>Wicket</th>
                <th>Dot balls</th>
                <th>4s Conceded</th>
                <th>6s conceded</th>
                <th>Economy</th>
              </tr>
            </thead>
            <tbody>
             
              
               {(() => {
                let name= [];
                 for(let i=0; i< bowling1?.length;i++){
                    name.push( 
                    <tr>
                    <Link to={`/MatchCard/${match.params.id}/${bowling1[i]?.pid}`}>
                    <td style={{"font-weight":"bold"}}>{bowling1[i]?.bowler}</td>
                    </Link>
                    <td>{bowling1[i]?.O}</td>
                    <td>{bowling1[i]?.M}</td>
                    <td>{bowling1[i]?.R}</td>
                    <td>{bowling1[i]?.W}</td>
                    <td>{bowling1[i]?.["0s"]}</td>
                    <td>{bowling1[i]?.["4s"]}</td>
                    <td>{bowling1[i]?.["6s"]}</td>
                    <td>{bowling1[i]?.Econ}</td>
                    </tr>
                    )
                    
                 }
                 return name;
            })()}

            </tbody>
           </table>
           </div>
          </Grid>
          </CardActions><br></br><br></br>
           
          
          <p className="batTeam2">{bowlTeam2}</p>
          
          <CardActions>
             <Grid container justify="center">
          
          <table  className="batting1">
            <thead>
              <tr>
                <th>Bowler Name</th>
                <th>Over</th>
                <th>Maiden</th>
                <th>Run</th>
                <th>Wicket</th>
                <th>Dot balls</th>
                <th>4s Conceded</th>
                <th>6s conceded</th>
                <th>Economy</th>
              </tr>
            </thead>
            <tbody>
             
              
               {(() => {
                let name= [];
                 for(let i=0; i< bowling2?.length;i++){
                    name.push( 
                    <tr>
                    <Link to={`/MatchCard/${match.params.id}/${bowling2[i]?.pid}`}>
                    <td style={{"font-weight":"bold"}}>{bowling2[i]?.bowler}</td>
                    </Link>
                    <td>{bowling2[i]?.O}</td>
                    <td>{bowling2[i]?.M}</td>
                    <td>{bowling2[i]?.R}</td>
                    <td>{bowling2[i]?.W}</td>
                    <td>{bowling2[i]?.["0s"]}</td>
                    <td>{bowling2[i]?.["4s"]}</td>
                    <td>{bowling2[i]?.["6s"]}</td>
                    <td>{bowling2[i]?.Econ}</td>
                    </tr>
                    )
                    
                 }
                 return name;
            })()}

            </tbody>
           </table>
            </Grid>
          </CardActions>
     </Card>

         
           

        </div>
    
    );

    }

export default Test;