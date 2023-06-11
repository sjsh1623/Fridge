import React, {useState, useEffect} from 'react';
import {View, Image, TouchableOpacity, StyleSheet, Text, Keyboard, Animated, Dimensions} from 'react-native';
import {Config} from "src/theme/Config";

const AuthComm = ({props, Header, Body}) => {
    const {bodySize, expandBodySize, animationState} = props;
    const screenHeight = Dimensions.get("window").height;
    const bodyScreen = screenHeight * bodySize;
    const headerScreen = screenHeight * (1 - bodySize);
    const [BodyHeight] = useState(new Animated.Value(bodyScreen));
    const [HeaderHeight] = useState(new Animated.Value(headerScreen))
    const [etcMock] = useState(new Animated.Value(0))

    const getBodyScreen = (value) => {
        return screenHeight * value;
    }

    const getHeaderScreen = (value) => {
        return screenHeight * (1 - value);
    }

    const getEtcState = (value = {state: etcMock, asIs: 0, toBe: 0}) => {
        return value;
    }


    useEffect(() => {
        const keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', (e) => {
            const value = {
                body: getBodyScreen(expandBodySize),
                head: getHeaderScreen(expandBodySize),
                etc: getEtcState(animationState).toBe
            }
            onKeyboard(e, value)
        });

        const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', (e) => {
            const value = {
                body: getBodyScreen(bodySize),
                head: getHeaderScreen(bodySize),
                etc: getEtcState(animationState).asIs
            }
            onKeyboard(e, value)
        });
        return () => {
            keyboardDidShowListener.remove();
            keyboardDidHideListener.remove();
        };
    }, []);

    const onKeyboard = (e, value) => {
        // Logo Container
        Animated.timing(HeaderHeight, {
            toValue: value.head,
            duration: 200,
            useNativeDriver: false,
        }).start();

        // Bottom Container
        Animated.timing(BodyHeight, {
            toValue: value.body,
            duration: 200,
            useNativeDriver: false,
        }).start();

        Animated.timing(getEtcState(animationState).state, {
            toValue: value.etc,
            duration: 200,
            useNativeDriver: false,
        }).start();

    };

    return (
        <View style={styles.Container}>
            <Animated.View style={{height: HeaderHeight}}>
                {Header}
            </Animated.View>
            <Animated.View style={StyleSheet.compose(styles.RoundContainer, {height: BodyHeight})}>
                {Body}
            </Animated.View>
        </View>

    );
};

const styles = StyleSheet.create({
    Container: {
        ...Config.DefaultContainer
    },

    RoundContainer: {
        backgroundColor: '#FFFFFF',
        borderTopStartRadius: Config.RoundValue,
        borderTopEndRadius: Config.RoundValue,
        paddingTop: '8%',
    }
});


export default AuthComm;
