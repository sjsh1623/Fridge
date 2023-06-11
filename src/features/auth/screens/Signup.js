import React, {useState} from 'react';
import {View, TouchableOpacity, StyleSheet, Text} from 'react-native';
import {SquareButton} from "components/Buttons";
import {CustomHoshi} from "components/Inputs";
import {Config} from "src/theme/Config";
import {Primary} from "../../../theme/Color";
import AuthComm from "./AuthComm";
import {EmailValidation, PasswordValidation, LoginValidation} from "auth/helpers/Validation";
import header from "@react-navigation/stack/src/views/Header/Header";

const Signup = ({navigation}) => {
    const [email, setEmail] = React.useState();
    const [password, setPassword] = React.useState();
    const [checkPassword, setCheckPassword] = React.useState();
    const [warning, setWarning] = React.useState({message: '', display: 'none'})
    const EmailComponent = () => {
        return (
            <CustomHoshi
                text={'이메일'}
                onChangeText={(text) => {
                    setEmail(text)
                    setWarning({message: '', display: 'none'})
                }}
                onBlur={() => {
                    const isEmail = EmailValidation(email)
                    const isNoWarning = warning.display === 'none';
                    setWarning(isEmail && isNoWarning ? {message: '', display: 'none'} : {
                        message: 'Email 형식을 다시 확인해주세요',
                        display: 'none'
                    })
                }}/>
        )
    }

    const PasswordComponent = () => {
        return (
            <CustomHoshi
                text={'비밀번호'}
                onChangeText={(text) => {
                    console.log(text)
                    setPassword(text)
                    setWarning({message: '', display: 'none'})
                }}
                onBlur={() => {
                    const isPassword = PasswordValidation(password)
                    const isNoWarning = warning.display === 'none';
                    setWarning(isPassword && isNoWarning ? {message: '', display: 'none'} : {
                        message: '비밀번호는 특수문자를 포함한 14자리 이상이여야 합니다',
                        display: 'none'
                    })
                }}
                secureTextEntry={true}
            />
        )
    }

    const PasswordReCheckComponent = () => {
        return (
            <CustomHoshi
                text={'비밀번호 재입력'}
                onChangeText={(text) => {
                    setCheckPassword(text)
                    setWarning({message: '', display: 'none'})
                }}
                onBlur={() => {
                    const isMatch = password === checkPassword
                    const isNoWarning = warning.display === 'none';
                    setWarning(isMatch && isNoWarning ? {message: '', display: 'none'} : {
                        message: '비밀번호는 특수문자를 포함한 14자리 이상이여야 합니다',
                        display: 'none'
                    })
                }}
                secureTextEntry={true}
            />
        )
    }

    const nextStep = () => {
        const isValid = LoginValidation(email, password);
        console.log(isValid)
        const isPasswordMatch = password === checkPassword

        if (isValid && isPasswordMatch) {
            navigation.navigate('EmailVerification')
        } else {
            setWarning({message: '이메일 또는 비밀번호를 다시 확인해주세요', display: 'block'})
        }
    }

    const Header = (
        <View style={styles.HeaderContainer}>
            <Text style={styles.HeaderText}>회원가입</Text>
        </View>
    )

    const Body = (
        <View style={styles.RoundContainer}>
            <View style={styles.InputContainer}>
                {EmailComponent()}
                {PasswordComponent()}
                {PasswordReCheckComponent()}
                <Text style={styles.WarningText}>
                    {warning.message}
                </Text>
            </View>
            <View style={styles.Center}>
                <Text style={styles.FinalStepText}>다음이 마지막 단계입니다!</Text>
            </View>
            <View style={styles.ButtonContainer}>
                <SquareButton text={'계속하기'} onPress={nextStep}/>
            </View>
        </View>
    )

    return (
        <AuthComm props={{bodySize: 0.75, expandBodySize: 0.87}}
                  Header={Header}
                  Body={Body}
        />
    )
}

const styles = StyleSheet.create({
    HeaderContainer: {
        justifyContent: 'flex-end',
        alignItems: 'flex-start',
        height: '100%',
        padding: 25
    },
    HeaderText: {
        color: Primary.textColor,
        fontWeight: "700",
        fontSize: 23
    },
    InputContainer: {
        width: '80%',
        marginBottom: 45
    },
    RoundContainer: {
        paddingTop: 50,
        width: '100%',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    ButtonContainer: {width: '80%', marginBottom: 30,},
    FinalStepText: {color: "grey", fontSize: 14, padding: 5,},
    Center: {justifyContent: 'center', alignItems: 'center'},
    WarningContainer: {
        display: 'block',
        margin: 5
    },
    WarningText: {
        fontSize: 13,
        color: 'red',
        paddingTop: 5
    },
})

export default Signup;
