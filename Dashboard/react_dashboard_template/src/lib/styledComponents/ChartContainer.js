import styled from 'styled-components';
import palette from '../color/palette';  

const StyledBox = styled.div`
    border-radius: 3px;
    background-color: ${palette.white};
    padding: 1rem;
    box-shadow: 0px 0px 30px ${palette.gray[3]};
    width: ${props => props.width || 'inherit'};
    height: ${props => props.height || 'inherit'};
    transition-duration: 0.2s;
    &:hover{
        box-shadow:0px 0px 30px ${palette.gray[5]};
        transition-duration: 0.2s;
    }

`;

function ChartContainer ({ children, width, height }){

    return (
        <StyledBox width={width} height={height}>{children}</StyledBox>
    );
}

export default ChartContainer;