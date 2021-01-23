import React from 'react';
import {Text,TouchableOpacity,View,Button} from 'react-native';
import FB from './Firebase';
export default class Home extends React.Component {


  onAddUserPress = () => {
    FB.auth()
    .createUserWithEmailAndPassword("barisdemiray37@gmail.com","a12345")
    .then(r => {
      console.warn("User created");
      })
      .catch(e => {
      console.warn("Error: ", e);
    });
  }
  handleLoginPress = () => {
    FB.auth()
    .signInWithEmailAndPassword("barisdemiray37@gmail.com","a12345")
    .then(r=>{
      console.warn("response :",r);
    })
    .catch(e=>{
      console.warn("error : ",e);
    });
  }
  handleOnAddProductPress = () => {
    const dataToDB = {
      id:1,
      name:"final",
      price:1234
    }
    FB.database()
    .ref("barisDB")
    .set(dataToDB)
    .then(r=>{
      console.warn("işlem başarılı")
    })
    .catch(e => {
      console.warn("error : ", e);
    });







  }


  render(){

    return (
      <View>
      <TouchableOpacity onPress={()=>this.onAddUserPress()}>
      <Text>Add new user</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>this.handleLoginPress()}>
      <Text>Login User</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>this.handleOnAddProductPress()}>
      <Text>Add Product To FB DB</Text>
      </TouchableOpacity>



  </View>


    );





  }
}
