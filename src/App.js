import './App.css';
import React from "react"
import axios from "axios"

class App extends React.Component{
  state= {
    user:[],
    followers:[],
  };

  componentDidMount(){
    axios
      .get("https://api.github.com/users/n0tybynature")
      .then( res => {
        this.setState({
          user:res.data
        })
      })
      .catch( err => {
        console.log(err)
      })




    axios
      .get("https://api.github.com/users/n0tybynature/followers")
      .then( res => {
        console.log(res.data)
        this.setState({
          followers:res.data
        })
      })
      .catch( err => {
        console.log(err)
      })
  }

  render(){
    console.log("It's working")


    return(
      <div className="App">
        <h1>{this.state.user.login}</h1>
        <div className="myDiv">
          <img src={this.state.user.avatar_url} alt="myimg"/>
          <p>{this.state.user.bio}</p>
        </div>
        <div className="userdiv">
          <h2>My Followers:</h2>

          {this.state.followers.map((follower) => {
            return <h4>{follower.login}</h4> 
            
          })}
        </div>
      </div>
    )
  }




}





export default App;
