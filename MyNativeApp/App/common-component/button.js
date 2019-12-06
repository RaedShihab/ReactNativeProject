import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const Button = (props) =>  {
    return (
        <View style={styles.container}>
          <TouchableOpacity style={styles.button} onPress={props.click}>
            <Text style={styles.buttonText}>click</Text>
          </TouchableOpacity>
        </View>
      
    );
  }

  const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        alignContent: 'center'
    },
      button: {
        height: 45,
        borderRadius: 5,
        justifyContent: 'center',
        backgroundColor: 'rgb(42,55,68)',
        marginHorizontal: 25,
        marginVertical: 10,
        flex: 1
    },
      buttonText: {
        color: 'white',
        fontSize: 16,
        textAlign: 'center',
        fontWeight: 'bold',
      }
  })

export  {Button};