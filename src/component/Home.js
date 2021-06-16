import React from 'react';

class Home extends React.Component {
    state = {name:'aqeel'}
    render(){
        return(
        <div>
            <h2> Home component</h2>
        <button onClick={()=>this.props.childnamechange(this.state.name)}>click me</button>
        </div>
            );
    }

}
export default Home;

