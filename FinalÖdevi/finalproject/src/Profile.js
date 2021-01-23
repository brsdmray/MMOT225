import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';

export default class Profile extends Component {

  render() {
    return (

    <View style={styles.container}>
 <View style={styles.header}></View>
 <View style={styles.body}>
   <View style={styles.bodyContent}>
              <Text style={styles.name}>Barış Demiray</Text>
              <Text style={styles.info}>Bilgisayar Programcılığı / 2. Sınıf</Text>
              <Text style={styles.description}>Bulut Bilişim Final Ödevi</Text>

              </View>
            </View>
          </View>

    );
  }
}
const styles = StyleSheet.create({
  header:{
    backgroundColor: "#00BFFF",
    height:200,
  },
  name:{
    fontSize:22,
    color:"#FFD600",
    fontWeight:'600',
  },
  body:{
    marginTop:40,
  },
  bodyContent: {
    flex: 1,
    alignItems: 'center',
    padding:30,
  },
  name:{
    fontSize:28,
    color: "#FFD600",
    fontWeight: "600"
  },
  info:{
    fontSize:16,
    color: "#00BFFF",
    marginTop:10
  },
  description:{
    fontSize:16,
    color: "#26C6DA",
    marginTop:10,
    textAlign: 'center'
  },
  buttonContainer: {
    marginTop:10,
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:250,
    borderRadius:30,
    backgroundColor: "#00BFFF",
  },
});
