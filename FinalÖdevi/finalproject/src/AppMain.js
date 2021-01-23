import React from 'react';
import {Text,Button} from 'react-native';
import Home from './Login';
import Profile from './Profile';
import Restoran from './Restoran';
import Delete from './Delete';
export default class AppMain extends React.Component {
  constructor(props){
    super(props)
    this.state ={
      screen: ''
    }
  }
  loadScreenByType = () => {
    if(this.state.screen==="Login"){
      return <Home />


    }

    if(this.state.screen==="Profile"){
      return <Profile />


    }
    return <Restoran/>


    }
  render () {
    return (

        <>
        <Button title="Profile" onPress={()=>this.setState({screen:'Profile'})}/>
        <Button title="Login" onPress={()=>this.setState({screen:'Login'})}/>
        <Button title="Restoran" onPress={()=>this.setState({screen:'Restoran'})}/>
        <Button title="Delete" onPress={()=>this.setState({screen:'Delete'})}/>
        {this.loadScreenByType()}
        </>

    )
  }
}
