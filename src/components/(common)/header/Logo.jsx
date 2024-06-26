import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import IMAGES from '../../../assets';

export default function Logo() {
  const navigate = useNavigate();
  return (
      <Image
        src={IMAGES.brushworkLogo}
        alt='logo'
        onClick={() => navigate('/')}
      />
  );
}

const Image = styled.img`
  width: 11.1rem;
  height: 3.4rem;
  cursor: pointer;
`;
