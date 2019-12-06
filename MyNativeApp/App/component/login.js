import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Button, Card, CardItem, Input} from '../common-component';

class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      userName : '',
      pssword: '',
    }
  } 

    render(){
        return (
            <View >
                <Card>
                  <CardItem>
                    <Input 
                    lable='Email'
                    placeholder= 'Enter your Email please'
                    secureTextEntry = {false}
                    autoCorrect= {false}
                    onChangeText={(userName)=> this.setState({userName})}
                    >
                    </Input>
                  </CardItem>
                  <CardItem>
                    <Input
                    lable='password'
                    placeholder= 'Enter your password please'
                    secureTextEntry = {true}
                    autoCorrect= {false}
                    onChangeText={(pssword)=> this.setState({pssword})}
                    >
                    </Input>
                  </CardItem>
                  <CardItem>
                    <Button click={()=> console.log(this.state.userName, this.state.pssword)}/>
                  </CardItem>
                </Card>
            </View>
        );
    };
 }

 const styles = StyleSheet.create({
    container: {
      borderRadius: 4,
      borderWidth: 0.5,
      borderColor: '#d6d7da',
    },
    title: {
      fontSize: 19,
      fontWeight: 'bold',
    },
    activeTitle: {
      color: 'red',
    },
  })

 export default Login;