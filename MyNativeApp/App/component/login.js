import React from 'react';
import {Button, Card, CardItem, Input, Img} from '../common-component';
import {SafeAreaView, ScrollView, Text, StyleSheet,View} from 'react-native';
import {connect} from 'react-redux';
import {loginUser} from '../actions';
import {ITEM1} from '../imgs';
import {ITEM2} from '../imgs';
import axios from 'axios';

class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      userName : '',
      password: '',
      dataItems: []
    }
  }

  componentDidMount() {
    console.log('componentWillMount')
    let data = [
      {
          "id": 3,
          "itemName": "Nike Shoes",
          "itemPrice": "49.90",
          "itemDiscount": "20.00",
          "itemNewPrice": "39.92",
          "img": require('../imgs/base.png'),
          "createdAt": "2019-12-09T00:38:34.000Z",
          "updatedAt": "2019-12-09T00:38:34.000Z"
      },
      {
          "id": 4,
          "itemName": "Adidas Shoes",
          "itemPrice": "39.90",
          "itemDiscount": "10.00",
          "itemNewPrice": "35.91",
          "img": require('../imgs/base.png'),
          "createdAt": "2019-12-09T00:38:59.000Z",
          "updatedAt": "2019-12-09T00:38:59.000Z"
      },
      {
          "id": 5,
          "itemName": "Dell Laptop",
          "itemPrice": "500.00",
          "itemDiscount": "10.00",
          "itemNewPrice": "450.00",
          "img": require('../imgs/base.png'),
          "createdAt": "2019-12-09T01:00:21.000Z",
          "updatedAt": "2019-12-09T01:00:21.000Z"
      }
  ]
  this.setState({
    dataItems: data
  })
      }
  //   fetch('http://localhost:3005/route/get-items',
  //   {
  //     method: "GET",
  //     headers: { "Content-Type": "application/json" },
  //   }
  //   )
  // .then(response => response.json())
  // .then(json => console.log('res',json))
  // .catch(err => console.error(err))
  // axios.get('http://localhost:3005/route/get-items')
  //     .then(res => {
  //       const persons = res;
  //       console.log('data',res)
  //       // this.setState({ dataItems:persons });
  //     }).catch(err => console.error(err))
  
    // componentWillMount() {
    //   console.log('componentWillMount')
    // }
  
  logIn = ()=> {
    const userName = this.state.userName;
    const password = this.state.password;
    // const {userName, password} = this.state;
    this.props.loginUser(userName, password)
  }

    render(){
      console.log('render');
      console.log(this.state.dataItems)
      // console.log('data from reudx',this.props.loginInfo)
        return (
          <SafeAreaView style={styles.container1}>
      <ScrollView style={styles.scrollView}>
           <Img src={ITEM2}/>
                {
                  this.state.dataItems.map(item=> {
                    return <View style={styles.imgs}>
                                <Img src={item.img} itemPrice={item.itemPrice} itemDiscount={item.itemDiscount}
                                style={styles.imgs} /> 
                           </View>
                  })
                }
                  {/* <CardItem>
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
                    <Button click={()=> console.log(this.state.userName, this.state.pssword)}/>
                    <Button click={this.logIn}/> 
                  </CardItem> */}
      </ScrollView>
    </SafeAreaView>
               
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
    container1: {
      flex: 1,
      marginTop: 25
    },
    scrollView: {
      marginHorizontal: 20
    },
    imgs: {
      marginBottom: 20,
      borderWidth: 1,
      borderColor: '#d6d7da'
    }
  })

  const mapStateToProps = (state) => {
    return {
      loginInfo : state
    }
  }

 export default connect(mapStateToProps, {loginUser})(Login);