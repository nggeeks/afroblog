import React from 'react';
import styled, { keyframes } from 'styled-components';

const Header = ({ logo,  text }) => {

    const Wrapper = styled.header`
    background-color: #282c34;
    min-height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;
    `
    const rotate = keyframes`
    from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    `
    const LogoWrapper = styled.img`
    height: 48px;
    pointer-events: none;

    @media (prefers-reduced-motion: no-preference) {
          animation: ${rotate} infinite 20s linear;
      }
    `
    return(
        <Wrapper>
        <LogoWrapper src={logo} alt="logo" />
        <p>{text}</p>
      </Wrapper>
    )
}

export default Header;