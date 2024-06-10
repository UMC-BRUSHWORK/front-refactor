import React from 'react'
import * as S from './Header.style'
import Logo from './Logo'
import Search from './Search'
import Notification from './Notification'
import Back from './Back'

export default function Header({type, title}) {
  let content;
  switch(type){
    case 'search':
      content = (
        <>
        <S.Right>
          <Back />
          <S.Input placeholder='검색어를 입력해 주세요.' />
        </S.Right>
        <Search />
        </>
      );
      break;
    case 'title':
      content = (
        <S.Right>
          <Back />
          <S.Title>{title}</S.Title>
        </S.Right>
      );
      break;
    case 'back':
      content = (
        <>
          <Back />
          <S.Left>
            <Search />
            <Notification/>
          </S.Left>
        </>
      );
      break;
    default:
      content = (
        <>
          <Logo />
          <S.Left>
            <Search />
            <Notification />
          </S.Left>
        </>
      );
      break;
  }
  return (
    <S.Wrapper>
      {content}
    </S.Wrapper>
  )
}
