import React from 'react';
import Home from './Home';
import Profile from './Profile';


class App extends React.Component {
    state={name:'bilal'}

    changeName(name){
this.setState(
    {
        name:name
    }
)
    }
    render(){
        return(
<div>
<Home childnamechange={(name)=>this.changeName(name)}/>

        <h3>App component having name {this.state.name}</h3>
    <Profile appname={this.state.name}/>
    </div>

        );
    }
}
export default App;