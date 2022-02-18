import React, { useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { NavigationScreenProp, NavigationState } from "react-navigation";
import { Linking } from "react-native";
import Styled from "styled-components/native";

import Input from "~/Components/Input"
import Button from "~/Components/Button";
import axios from "axios";

const Container = Styled.SafeAreaView`
    flex : 1;
    background-color: #ffffff;
`;

const FormContainer = Styled.View`
    flex: 1;
    width: 100%;
    align-items: center;
    justify-content: center;
    padding: 32px;
`;

const LogoImageContainer = Styled.View`
  align-items: center;
  padding: 10px;
`;

const LogoImage = Styled.Image``;

const FontContainer = Styled.Text`
    width: 100%;
    font-size: 12px;
    color: #000000;
    text-align: left;
`;

const ErrorFontContainer = Styled.Text`
    width: 100%;
    font-size: 10px;
    color: #ff4242;
    text-align: left;
`

const PasswordReset = Styled.Text`
    width: 100%;
    font-size: 12px;
    color: #000000;
    text-align: right;
`;

interface Props{
    navigation: NavigationScreenProp<NavigationState>;
}

const Login = ({ navigation } : Props) => {
    return(
        <Container>
            <LogoImageContainer>
                <LogoImage source={require('~/Assets/Images/Logo.png')}/>
            </LogoImageContainer>
            <FormContainer>
                <FontContainer>이메일</FontContainer>
                <Input style={{marginBottom: 16}} placeholder="이메일"/>
                <FontContainer>비밀번호</FontContainer>
                <Input style={{marginBottom: 16}} placeholder="비밀번호" secureTextEntry={true} />
                <PasswordReset style={{marginBottom: 20}}
                onPress={()=>{
                    Linking.openURL('http://www.naver.com');
                }}> 아이디/비밀번호를 잊어버리셨나요?
            </PasswordReset>
            <Button
                style={{marginBottom: 24}} label="로그인" onPress={() => {
                    console.log('test');
                    fetch('http://localhost:8001/user/list')
                    .then(response => response.json())
                    .then(json => {
                        console.log(json);
                    })
                    .catch(error => {
                      console.log(error);
                    });
                    AsyncStorage.setItem('key', 'JWT_KEY');
                    navigation.navigate('HomeNavigator');
                }} 
            />
            </FormContainer>
        </Container>
    );
};

export default Login;