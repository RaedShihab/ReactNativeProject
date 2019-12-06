import React from 'react';
import {View, StyleSheet} from 'react-native';

const CardItem = (props) => {
    return (
        <View style={styles.cardItemStyle}>
        {props.children}
        </View>
    );
}

const styles = StyleSheet.create({
    cardItemStyle: {
        padding: 5,
        borderBottomWidth: 1,
        borderColor: '#ddd',
        justifyContent: 'flex-start',
        flexDirection: 'row',
    }
})

export  {CardItem};