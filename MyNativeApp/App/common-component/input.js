import React from'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';

const Input = (props  )=> {
    return (
        <View style={styles.container}>
            <Text style={ styles.text}>{props.lable}</Text>
            <TextInput 
             style={styles.input}
             placeholder={props.placeholder}
             secureTextEntry={props.secureTextEntry}
             autoCorrect={props.autoCorrect}
             autoCapitalize = 'none'
             onChangeText={props.onChangeText}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container : {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    text: {
        flex: 1,
        fontSize: 16,
        paddingLeft: 20,
    },
    input: {
        flex: 2,
        fontSize: 16,
        paddingLeft:5,
        paddingRight:5,
        color: '#000'    
    }
});

export {Input}