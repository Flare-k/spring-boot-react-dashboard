import React from 'react';
import styled from 'styled-components';

const StyledBox = styled.div`
    p:nth-child(2){
        font-size: 54px;
        text-align: center;
        color: #333;
        font-weight: bolder;
    }
`;


const RequestCounts = ({ rawData }) => {
    return(
        <StyledBox>
            <p>{rawData.chartName}</p>
            <p>{rawData.data.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</p>
        </StyledBox>
    );
}

export default React.memo(RequestCounts);