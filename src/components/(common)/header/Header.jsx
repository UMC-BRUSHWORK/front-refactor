import React from 'react'
import * as S from './Header.style'
import Logo from './Logo'
import Search from './Search'
import Notification from './Notification'

export default function Header() {
  return (
    <S.Wrapper>
      <Logo />
      <S.Left>
        <Search />
        <Notification />
      </S.Left>
    </S.Wrapper>
  )
}
