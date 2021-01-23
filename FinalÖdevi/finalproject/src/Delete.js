import React, { Component } from 'react'

import {
  View,
  AsyncStorage,
  TouchableHighlight,
  Text,
  StyleSheet,
} from 'react-native'

const ACCESS_TOKEN = 'access_token'

export default class Delete extends Component {

  storeToken(tokenValue) {
    AsyncStorage.setItem(ACCESS_TOKEN, tokenValue, err => {
      if (err) { console.log(`The error is: ${err}`) }
    })
    .catch(err => console.log(`The error is: ${err}`))
  }

  async getToken(callback) {
    try {
      let accessToken = await AsyncStorage.getItem(ACCESS_TOKEN)
      callback(accessToken)
    } catch (err) {
      console.log(`The error is: ${err}`)
    }
  }

  async deleteToken() {
    try {
      await AsyncStorage.removeItem(ACCESS_TOKEN)
    } catch (err) {
      console.log(`The error is: ${err}`)
    }
  }

  async onLoginPressed() {
    this.getToken(result => {
      if (result) {
        console.log('I already have a token')
        console.log(result)
      } else {
        console.log('I do not have a token and I need to create it.')
        this.storeToken('a12345')
      }
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight
          style={styles.button}
          onPress={this.onLoginPressed.bind(this)}>
          <Text style={styles.buttonText}>
            Login
          </Text>
        </TouchableHighlight>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#CCC',
  },
  button: {
    height: 50,
    backgroundColor: '#48BBEC',
    alignSelf: 'stretch',
    marginTop: 10,
    justifyContent: 'center'
  },
  buttonText: {
    fontSize: 22,
    color: '#FFF',
    alignSelf: 'center'
  },
});
