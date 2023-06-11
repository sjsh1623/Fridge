import React, {useState, useEffect} from 'react';
import Logo from 'assets/FridgeMobile.png';
import WarningMessage from "auth/helpers/WarningMessage";
import {View, Image, TouchableOpacity, StyleSheet, Text, Keyboard, Animated, Dimensions} from 'react-native';
import {SocialButton} from "components/SocialButton";
import {SquareButton} from "components/Buttons";
import {CustomHoshi} from "components/Inputs";
import {EmailValidation, PasswordValidation, LoginValidation} from "auth/helpers/Validation";
import AuthComm from "./AuthComm";

const Signin = ({navigation}) => {
    const [email, setEmail] = React.useState();
    const [password, setPassword] = React.useState();
    const [warning, setWarning] = React.useState({message: '', display: 'none'})
    const [LogoSize] = useState(new Animated.Value(180))

    const EmailComponent = () => {
        return (
            <CustomHoshi
                text={'이메일'}
                onChangeText={(text) => {
                    setEmail(text)
                    setWarning({message: '', display: 'none'})
                }}
                onBlur={() => {
                    if (!EmailValidation(email))
                        setWarning({message: WarningMessage('wrongEmail'), display: 'block'})
                }}/>
        )
    }

    const PasswordComponent = () => {
        return (
            <CustomHoshi
                text={'비밀번호'}
                onChangeText={(text) => {
                    setPassword(text)
                    setWarning({message: '', display: 'none'})
                }}
                onBlur={() => {
                    if (!PasswordValidation(password))
                        setWarning({message: WarningMessage('emptyPassword'), display: 'block'})
                }}
                secureTextEntry = {true}
            />
        )
    }

    const MoveToSignIn = () => {
        navigation.navigate('Signin');
    }

    const Header = (
        <View style={styles.LogoContainer}>
            <Animated.Image style={{
                width: LogoSize,
                height: LogoSize,
            }} source={Logo}/>
        </View>
    )

    const Body = (
        <View style={styles.BodyContainer}>
            <View style={styles.LoginInputContainer}>
                {EmailComponent()}
                {PasswordComponent()}
                <Text style={styles.WarningText}>
                    {warning.message}
                </Text>
            </View>
            <View style={styles.FindPassword}>
                <TouchableOpacity style={styles.FindPasswordButton}>
                    <Text style={styles.FindPasswordText}>비밀번호 찾기</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.LoginButtonContainer}>
                <SquareButton text={'로그인'}/>
                <View style={styles.RegisterContainer}>
                    <Text style={styles.RegisterText}>아직 회원이 아니신가요?</Text>
                    <TouchableOpacity onPress={MoveToSignIn}>
                        <Text style={styles.RegisterText}> 회원가입</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <Text style={styles.SocialLoginText}>간편 로그인</Text>
            <View style={styles.SocialLogin}>
                <SocialButton brand={'Naver'}/>
                <SocialButton brand={'Naver'}/>
                <SocialButton brand={'Naver'}/>
                <SocialButton brand={'Naver'}/>
            </View>
        </View>
    )

    return (
        <AuthComm props={{
            bodySize: 0.55,
            expandBodySize: 0.73,
            animationState: {state: LogoSize, asIs: 180, toBe: 150}
        }} Header={Header} Body={Body}/>
    );
};

const styles = StyleSheet.create({
    BodyContainer: {
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    LogoContainer: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop:'10%',
        height: '100%'
    },
    LoginInputContainer: {
        width: '80%',
        marginBottom: 5
    },
    LoginButtonContainer: {
        width: '80%',
        marginBottom: 30
    },
    Logo: {
        width: 180,
        height: 180,
    },
    SocialLogin: {
        flexDirection: 'row',
    },
    SocialLoginText: {
        color: "grey",
        fontSize: 14,
        padding: 5
    },
    WarningContainer: {
        display: 'block',
        margin: 5
    },
    WarningText: {
        fontSize: 14,
        color: 'red',
        paddingTop: 5
    },
    FindPassword: {
        width: '80%',
    },
    FindPasswordButton: {
        alignSelf: 'flex-end',
        marginBottom: 5,
    },
    FindPasswordText: {
        color: '#555555',
        fontSize: 14
    },
    RegisterContainer: {
        marginTop: 5,
        flexDirection: 'row',
    },
    RegisterText: {
        color: '#555555',
        fontSize: 14
    }
});


export default Signin;
