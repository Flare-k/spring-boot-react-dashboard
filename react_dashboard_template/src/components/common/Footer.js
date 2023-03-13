import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/color/palette';

const StyledBox = styled.div`
    background: ${palette.white};
    padding: 1rem;
    font-size: 0.7rem;
    text-align: center;
    color: ${palette.gray[5]};
    position: relative;
    /* bottom: 0; */
    z-index: 1000;
    width: 100%;
`;

const Footer = () => {
    return(
        <StyledBox>
            <p>© 2023. </p>
        </StyledBox>
    );
}

export default Footer;