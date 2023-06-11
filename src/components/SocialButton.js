import React, { useState } from 'react';
import { View, TouchableOpacity, StyleSheet, Image } from 'react-native';

export const SocialButton = ({onPress, brand = 'Naver'}) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.container}>
                <Image source={logoImage[brand].uri} style={styles.logo} />
            </View>
        </TouchableOpacity>
    );
};

const logoImage = {
    Naver : { // 네이버 소셜 로그인 버튼
        uri : require('assets/SocialLogo/Naver.png')
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        padding : 15 // 소셜 로그인 간격 설정
    },
    logo: {
        width: 45,
        height: 45,
        resizeMode: 'contain',
    },
});

