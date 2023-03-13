import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import KPMGColor from '../../lib/color/KPMGColor';
import Tooltip from '@material-ui/core/Tooltip';

const StyledBox = styled.div`
    width: 80px;
    height: 60px;
    border-bottom: 1px solid #eee;
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover{
        box-shadow: 0px 2px 3px #bbb;
    }
    .btn{
        color: ${KPMGColor.primary[2]};
    }
`;

const NavButton = ({ item }) => {
    const { name, icon } = item
    return (
        <NavLink to={`/${name}`} style={{color: '#00338d'}} activeStyle={{color: '#0091da'}}>
            <Tooltip title={name} placement="left">
                <StyledBox>
                    {icon}
                </StyledBox>
            </Tooltip>
        </NavLink>
    );
}

export default React.memo(NavButton);