/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

export default class GitBook extends Component {

  constructor(props){
    super(props)
    this.state = {
      imageName : 'en_us'
    }
  }
  // /Users/Arnav/Documents/Open-Source/GitBook/src/assets/cover.jpeg/en_us.jpeg
  render() {

    console.log(`./src/assets/cover.jpeg/${this.state.imageName}.jpeg` === './src/assets/cover.jpeg/en_us.jpeg')
    let imagePath = require('./src/assets/cover.jpeg/en_us.jpeg');
    require('./src/assets/cover.jpeg/fr_fr.jpeg');
    var x = 'GitBook/src/assets/cover.jpeg/en_us.jpeg'
    require(x)
    //let ImagePath2 = require(`Gitbook/src/assets/cover.jpeg/`+ `en_us.jpeg`)
    // require('drawables').Audit.cover.jpeg.
    return (
      <View style={styles.container}>
        <Image source={require(`GitBook/src/assets/cover.jpeg/${this.state.imageName}.jpeg`)}/>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions} onPress={() => this.setState({imageName : 'fr_fr'})}>
          Change Image to French
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('GitBook', () => GitBook);
