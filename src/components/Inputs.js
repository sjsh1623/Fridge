import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {Hoshi} from "react-native-textinput-effects";
import {Primary} from "../theme/Color";

export const CustomHoshi = ({onBlur, onChangeText, onFocus, text = '', secureTextEntry = false}) => {
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
                borderColor={Primary.color}
                secureTextEntry={secureTextEntry}
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
