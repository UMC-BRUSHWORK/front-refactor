import React from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import IMAGES from '../../../assets';

export default function Chat() {
  const navigate = useNavigate()
  return (
    <Image src={IMAGES.chat} alt='chat' onClick={() => navigate('/')} />
  )
}

const Image = styled.img`
  width: 3.2rem;
  height: 3.2rem;
  cursor: pointer;
`;