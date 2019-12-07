import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Button, Card, CardItem, Input} from '../common-component';
import {connect} from 'react-redux';
import {loginUser} from '../actions'

class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      userName : '',
      password: '',
    }
  }

  logIn = ()=> {
    const userName = this.state.userName;
    const password = this.state.password;
    // const {userName, password} = this.state;
    this.props.loginUser(userName, password)
  }

    render(){
      console.log('data from reudx',this.props.loginInfo)
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
                    onChangeText={(password)=> this.setState({password})}
                    >
                    </Input>
                  </CardItem>
                  <CardItem>
                    {/* <Button click={()=> console.log(this.state.userName, this.state.pssword)}/> */}
                    <Button click={this.logIn}/> 
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

  const mapStateToProps = (state) => {
    return {
      loginInfo : state
    }
  }

 export default connect(mapStateToProps, {loginUser})(Login);