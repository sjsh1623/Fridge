import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {Hoshi} from "react-native-textinput-effects";

export const CustomHoshi = ({onBlur, onChangeText, onFocus, text = ''}) => {
    return (
        <View style={styles.hoshiContainer}>
            <Hoshi
                label={text}
                height={45}
                animationDuration={200}
                borderHeight={1}
                borderStyle={styles.inputStyle}
                inputStyle={styles.inputStyle}
                labelStyle={styles.labelStyle}
                autoCapitalize={'none'}
                autoCorrect={false}
                onBlur={onBlur}
                onChangeText={onChangeText}
                onFocus={onFocus}
            />
        </View>

    );
};

const styles = StyleSheet.create({
    hoshiContainer: {
        paddingBottom: 3,
    },
    labelStyle: {
        fontSize: 14,
        paddingTop: 6,
    },
    inputStyle: {
        fontSize: 15,
    }
});
