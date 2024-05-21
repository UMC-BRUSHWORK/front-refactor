import React from 'react';
import styled from 'styled-components';
import IMAGES from '../../../assets';
import { useNavigate } from 'react-router-dom';

export default function Logo() {
  const navigate = useNavigate();
  return (
    <div>
      <Image
        src={IMAGES.brushworkLogo}
        alt='logo'
        onClick={() => navigate('/')}
      />
    </div>
  );
}

const Image = styled.img`
  width: 11.1rem;
  height: 3.4rem;
  cursor: pointer;
`;
