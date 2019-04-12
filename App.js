/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StyleSheet, Image } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import {DATA_STRING} from 'react-native-dotenv'


class basicapp extends Component {

  state={
    lock:true,
  }

  alertMessage = () =>{
    if(this.state.lock){
      fetch(DATA_STRING,{
        method:"POST",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
      },
        body:JSON.stringify({value:"OPEN"})
      })
      alert("Door Opened")
    }else{
      fetch(DATA_STRING,{
        method:"POST",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
      },
        body:JSON.stringify({value:"CLOSE"})
      })
      alert("Door Locked")
    }
    this.setState({lock:!this.state.lock})
  }

   render() {

    let lock = this.state.lock ? <Icon name="lock"  size={200}/> : <Icon name="unlock" size={200} />

      return (
        <View>
         <TouchableOpacity onPress={this.alertMessage}  style={styles.container}>
          {lock}
        </TouchableOpacity>
      </View>
      )
   }
}
export default basicapp

var styles = StyleSheet.create({
  container: {
    padding: 10,
    marginTop: 200,
    alignItems: 'center',
 }
})
