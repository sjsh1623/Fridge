import React, {useState} from 'react';
import Logo from 'assets/FridgeMobile.png';
import {View, Image, TextInput, TouchableOpacity, StyleSheet, Text} from 'react-native';
import {SocialButton} from "components/SocialButton";
import {SquareButton} from "components/Buttons";
import {CustomHoshi} from "components/Inputs";
import {EmailValidation, PasswordValidation} from "auth/helpers/Validation";
import {Primary} from "src/theme/Color";
import WarningMessage from "auth/helpers/WarningMessage";
import {Colors} from "react-native/Libraries/NewAppScreen";

const Login = () => {
    const [email, setEmail] = React.useState();
    const [password, setPassword] = React.useState();
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
                }}/>
        )
    }

    return (
        <View style={styles.Container}>
            <View style={styles.LogoContainer}>
                <Image style={styles.Logo} source={Logo}/>
            </View>
            <View style={styles.RoundContainer}>
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
                        <TouchableOpacity>
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
        </View>

    );
};

const styles = StyleSheet.create({
    Container: {
        backgroundColor: Primary.color,
        width: '100%',
        height: '100%',
    },
    RoundContainer: {
        backgroundColor: '#FFFFFF',
        width: '100%',
        height: '55%',
        justifyContent: 'center',
        alignItems: 'center',
        borderTopStartRadius: 60,
        borderTopEndRadius:60
    },
    LoginInputContainer: {
        width: '80%',
        marginBottom: 5
    },
    LoginButtonContainer: {
        width: '80%',
        marginBottom: 30
    },
    LogoContainer: {
        height: '45%',
        paddingTop: 40,
        justifyContent: 'center',
        alignItems: 'center',
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
        width:'80%',
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


export default Login;
