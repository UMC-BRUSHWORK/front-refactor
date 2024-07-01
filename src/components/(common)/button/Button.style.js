import styled from "styled-components"
import color from "../../../styles/color"
import font from "../../../styles/font"

export const KakaoWrapper = styled.button`
    width: 100%;
    height: 44px;
    background: ${color.kakao_yellow};
    border-radius: 6px;
    border: none;
    font: ${font.medium_17};
    color: ${color.grayscale_33};
    display: grid;
    grid-template-columns: 1fr 8fr;
    align-items: center;
    padding-right: 16px;
`

export const NaverWrapper = styled.button`
    width: 100%;
    height: 44px;
    background: ${color.naver_green};
    border-radius: 6px;
    border: none;
    font: ${font.medium_17};
    color: ${color.white};
    display: grid;
    grid-template-columns: 1fr 8fr;
    align-items: center;
    padding-right: 16px;
`

export const GoogleWrapper = styled.button`
    width: 100%;
    height: 44px;
    background: ${color.white};
    border-radius: 6px;
    border: none;
    font: ${font.medium_17};
    color: ${color.grayscale_33};
    display: grid;
    grid-template-columns: 1fr 8fr;
    align-items: center;
    padding-right: 16px;
`

export const EmailWrapper = styled.button`
    width: 100%;
    height: 44px;
    border-radius: 6px;
    border: none;
    font: ${font.medium_17};
    color: ${color.white};
    border: 1px solid white;
    background: ${color.gradation_dark};
    opacity: 0.9;
`

export const Wrapper = styled.button`
    width: 100%;
    height: 44px;
    border-radius: 6px;
    background: ${color.gradation_dark};
    border: none;
`

export const Icon = styled.img`
    width: 18px;
    height: 17px;
    margin-left: 16px;
`

export const Text = styled.div`
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
`
