import React from 'react'; 
import {View, StyleSheet} from 'react-native';

const Card = (props) => {
    return (
        <View style={styles.cardStyle}>
        {props.children}
        </View>
    );
}

const styles = StyleSheet.create({
    cardStyle: {
        borderColor: '#ddd',
        borderWidth: 2,
        borderRadius: 2,
        marginTop: 10,
        marginRight: 5,
        marginLeft: 5,
        borderBottomWidth:0,
        shadowColor: '#000',
        shadowOpacity: 0.1,
    }
})

export  {Card};