import React from 'react'
import * as B from './Button.style'
import kakao from '../../../assets/(login)/kakao.svg'
import naver from '../../../assets/(login)/naver.svg'
import google from '../../../assets/(login)/google.svg'

export default function Button({type, text}) {
    let content;
    switch(type){
        case 'kakao':
            content = (
                <B.KakaoWrapper>
                    <B.Icon src={kakao}/>
                    <B.Text>카카오톡으로 로그인</B.Text>
                </B.KakaoWrapper>
            );
            break;
        case 'naver':
            content = (
                <B.NaverWrapper>
                    <B.Icon src={naver}/>
                    <B.Text>네이버로 로그인</B.Text>
                </B.NaverWrapper>
            );
            break;
        case 'google':
            content = (
                <B.GoogleWrapper>
                    <B.Icon src={google}/>
                    <B.Text>구글로 로그인</B.Text>
                </B.GoogleWrapper>
            );
            break;
        case 'email':
            content = (
                <B.EmailWrapper>
                    <B.Text>이메일로 로그인</B.Text>
                </B.EmailWrapper>
            );
            break;
        default:
            content = (
                <B.Wrapper>
                    <B.Text>{text}</B.Text>
                </B.Wrapper>
            );
            break;

    }
    return (
        [content]
    )
}