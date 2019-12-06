import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Button, Card, CardItem, Input} from '../common-component';

class Login extends React.Component {

  //  onPress = ()=> console.log('login')
    

    render(){
        return (
          // <View>
          //   <Button />
          // </View>
            <View >
                <Card>
                  <CardItem>
                    <Input name={'Name'}>
                    </Input>
                  </CardItem>
                  <CardItem>
                    <Button />
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