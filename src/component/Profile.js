import React from 'react';

class Profile extends React.Component{

    render(){
        return (
<div><h1>Profile component having name {this.props.appname}</h1></div>
        );
    }
}
export default Profile;
