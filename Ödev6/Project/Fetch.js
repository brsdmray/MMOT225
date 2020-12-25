import React from 'react';

import {View, Text, FlatList, TouchableOpacity, StyleSheet} from 'react-native';

export default class Fetch extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      postlar:[],
      postTitle:"",
      postBody:"",
      postId:0
    }
  }

  async componentDidMount(){
    let postListesi = await fetch("https://jsonplaceholder.typicode.com/posts")
    .then(p=>p.json());
    this.setState({postlar:postListesi});
  }

  postaBasildi(x){
    this.setState({postId:x.item.id});
    this.setState({postTitle:x.item.title});
    this.setState({postBody:x.item.body});
  }

  render(){
    return(
      <View>
      <View>
        <Text style={styles.postId1}>Id: {this.state.postId}</Text>
        <Text style={styles.postTitle1}>Title: {this.state.postTitle}</Text>
        <Text style={styles.postBody1}>Body:{this.state.postBody}</Text>
      </View>
      <FlatList
        data={this.state.postlar}
        renderItem={(x)=>{
          return(
            <TouchableOpacity onPress={()=> this.postaBasildi(x)}>
              <Text>Post Id'si: {x.item.id}</Text>
            </TouchableOpacity>
          )
        }}
      />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  postId1:{
    backgroundColor:'white',
    fontSize: 30
  },
  postTitle1:{
    backgroundColor:'yellow',
    fontSize: 30
  },
  postBody1:{
    backgroundColor:'green',
    fontSize: 30
  }
});
