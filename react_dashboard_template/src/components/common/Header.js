import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/color/palette';

const StyledBox = styled.div` 
    background-color: ${palette.white};
    padding: 1rem;
    box-shadow: 0px 0px 8px ${palette.gray[5]};
    position: fixed;
    width: 100%;
    z-index: 1000;
    #logo{
        color: #00338d;
        font-weight: 600;
        text-transform: uppercase;
    }
    a {
        color: inherit;
        text-decoration: none;
    }
`;

const Header = () => {
    return(
        <StyledBox>
            <a href='/'><div id='logo'>SPL | PLM Dashboards</div></a>
        </StyledBox>
    );
}

export default Header;