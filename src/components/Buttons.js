import React, {useState} from 'react';
import {Primary} from "src/theme/Color";
import {View, TouchableOpacity, StyleSheet, Text} from 'react-native';

export const SquareButton = ({onPress, text = '', type = 'Primary'}) => {
    return (
        <View>
            <TouchableOpacity style={styles[`squareButton${type}`]} onPress={onPress}>
                <Text style={styles[`squareButtonText${type}`]}>
                    {text}
                </Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    squareButtonPrimary: {
        width: '100%',
        height: 43,
        backgroundColor: Primary.color,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    squareButtonTextPrimary: {
        fontSize: 16,
        fontWeight: 'bold',
        color: Primary.textColor,
    },
});

