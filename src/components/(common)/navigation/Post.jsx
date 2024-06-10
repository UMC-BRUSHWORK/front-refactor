import React from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import IMAGES from '../../../assets';

export default function Post() {
  const navigate = useNavigate()
  return (
    <Image src={IMAGES.post} alt='post' onClick={() => navigate('/')} />
  )
}

const Image = styled.img`
  width: 3.2rem;
  height: 3.2rem;
  cursor: pointer;
`;