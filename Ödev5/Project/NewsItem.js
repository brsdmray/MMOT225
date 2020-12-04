import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

export default class NewsItem extends React.Component{

  render (){

    const typeVal= this.props.type;
    let bgcolor = 'white';

    if (typeVal=='spor'){
      bgcolor = 'lightblue';
    } else if (typeVal=='bilim') {
      bgcolor = 'red';
    } else if (typeVal=='ekonomi'){
      bgcolor = 'orange';
    } else if (typeVal=='dünya'){
      bgcolor= 'yellow';
    } else if (typeVal=='siyaset'){
      bgcolor='green';
    }

    const titleVal= this.props.title;
    const descriptionVal= this.props.description;

    return(
      <View style={{backgroundColor:bgcolor}}>
        <Text style={styles.baslik}>{titleVal}</Text>
        <Text style={styles.aciklama}>{descriptionVal}</Text>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  baslik:{
    fontSize: 25,
    fontWeight: "bold"
  },
  aciklama:{
    fontSize: 15,
    fontWeight: "bold"
  }
});
