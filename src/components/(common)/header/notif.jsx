import React from 'react'
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import IMAGES from '../../../assets';

export default function Notif() {
    const navigate = useNavigate();
  return (
    <Image src={IMAGES.notif} alt='notif' onClick={() => navigate('/')} />
  )
}

const Image = styled.img`
  width: 11.1rem;
  height: 3.4rem;
  cursor: pointer;
`;