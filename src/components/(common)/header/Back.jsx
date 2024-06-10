import React from 'react'
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import IMAGES from '../../../assets';

export default function Back({color = 'black'}) {
  const navigate = useNavigate()
  return (
    <Image src={IMAGES.arrowBack} alt='arrowBack' onClick={() => navigate(-1)} color={color} />
  )
}

const Image = styled.img`
  width: 11.1rem;
  height: 3.4rem;
  cursor: pointer;
  filter: ${(props) => props.color === 'primary' && 'invert(32%) sepia(84%) saturate(2988%) hue-rotate(247deg) brightness(100%) contrast(91%)'};
`;
