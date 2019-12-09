import React from 'react'; 
import {View, StyleSheet, Image, ImageBackground,Text} from 'react-native';

const Img = (props) => {
    return(
        <View style={styles.content}>
            <ImageBackground style={styles.ImgStyle} source={props.src}>
                <Text style={styles.text}>
                {props.itemPrice}
                </Text>
                <Text style={styles.text1}>
                {Math.floor(props.itemDiscount)}{'%'}
                </Text>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    content: {
        flexDirection: 'row',
        borderColor: '#ddd',
        borderBottomWidth:2,
        borderRadius: 2 ,
    },
    ImgStyle: {
        position: 'relative',
        flex: 1,
        aspectRatio: 1.5,
    },
    text: {
        borderColor: 'black',
        borderWidth: 2,
        borderRadius: 3,
        height: '20%',
        width: '30%',
        backgroundColor: 'red',
        position : 'absolute',
        top: '80%',
        fontSize: 25
    },
    text1: {
        borderColor: 'black',
        borderWidth: 2,
        borderRadius: 3,
        height: '20%',
        width: '30%',
        backgroundColor: 'red',
        position : 'absolute',
        top: '20%',
        fontSize: 25
    }
});

export  {Img};