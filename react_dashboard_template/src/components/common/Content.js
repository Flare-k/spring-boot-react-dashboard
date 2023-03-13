import React from 'react';
import styled from 'styled-components';

const StyledBox = styled.div`
    margin-left: 80px;
    padding-top: 50px;
    overflow: hidden;
`;

const Content = ({ children }) => {
    return(
        <StyledBox>
            {children}
        </StyledBox>
    );
}

export default Content;