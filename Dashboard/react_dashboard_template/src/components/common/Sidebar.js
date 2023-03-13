import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/color/palette';
import NavButton from './NavButton';
import { Dashboards } from '../../renderData';

const StyledBox = styled.div` 
    background-color: ${palette.white};
    box-shadow: 2px 0px 4px ${palette.gray[3]};
    padding-top: 60px;
    height: 100%;
    width: 80px;
    position: fixed;
    z-index: 999;
`;


const Sidebar = () => {
    return(
        <StyledBox>
            {Dashboards.map((item, i) => <NavButton key={i} item={item} />)}
        </StyledBox>
    );
}

export default React.memo(Sidebar);