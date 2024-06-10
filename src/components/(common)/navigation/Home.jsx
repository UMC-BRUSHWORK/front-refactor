import React from 'react'
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import IMAGES from '../../../assets';

export default function Home({clicked = 'false'}) {
  const navigate = useNavigate()
  return (
    <Image src={IMAGES.home} alt='home' onClick={() => navigate('/')} clicked={clicked} />
  )
}

const Image = styled.img`
  width: 3.2rem;
  height: 3.2rem;
  cursor: pointer;
  filter: ${(props) => props.clicked === 'true' && 'invert(32%) sepia(84%) saturate(5988%) hue-rotate(247deg) brightness(100%) contrast(91%)'};
`;