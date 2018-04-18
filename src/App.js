import React, { Component } from 'react';
import UserOutput from './UserOutput/UserOutput';
import UserInput from './UserInput/UserInput';
import './App.css';

class App extends Component {
 state = {
   users:[
   {userName: "charrawr456", name: "Jamie"}
 ]
 }

userNameChangeHandler = (event) => {
  this.setState({
    users:[
      {userName: event.target.value, name: "Jamie"}
    ]
  })
}

  render() {
    return (
      <div className="App">

        <UserOutput
          userName={this.state.users[0].userName}
           name={this.state.users[0].name} />
         <UserInput
           changed={this.userNameChangeHandler}
           currentUserName={this.state.users[0].userName}/>
      </div>
    );
  }
}

export default App;
