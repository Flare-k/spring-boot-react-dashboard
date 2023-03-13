import React from 'react';
import styled from 'styled-components';
import bg from '../../static/image/bg.png';
import icon from '../../static/image/landing-icon.png';

const StyledContainer = styled.div`
    margin-left: 80px;
    height: 95%;
    padding-bottom: 5%;
    background: #f2f5f9;
`;

const StyledBackground = styled.div`
    .overlay{
        width: 100%;
        height: 100%;
        background: rgba(255,255,255,0.7);
    }
    .inner{
        position: absolute;
        bottom: 0;
        background: #f2f5f9;
        box-shadow: 0px 0px 8px #bdbdbd inset;
    }
    .subleft{
        width: 200px;
        height: 200px;
        border-top-right-radius: 100%;
    }
    .subright{
        width: 350px;
        height: 350px;
        right: 0;
        border-top-left-radius: 100%;
    }
    .circle{
        position: absolute;
        bottom: 0;
        background-image: url(${bg});
        box-shadow: 0px 0px 8px #bbb;
        background-size: 200%;
        overflow: hidden;
    }
    .left{
        width: 500px;
        height: 500px;
        background-position: bottom 0 left 0;
        border-top-right-radius: 100%;
    }
    .right{
        right: 0;
        width: 800px;
        height: 800px;
        border-top-left-radius: 100%;
        background-position: bottom 0 right 0;
    }
    #garland{
        width: 700px;
        height: 400px;
        position: absolute;
        right: 0;
        z-index: 4000;
        #line{
            border-left: 30px solid #470168;
            border-bottom: 10px solid #470168;
            height: 100%;
            width: 120%;
            border-bottom-left-radius: 100%
        }
        .item{
            width: 100px;
            height: 100px;
            border-radius: 100%;
            background: #fff;
            position: absolute;
            box-shadow: 1px 1px 3px #bbb;
        }
        #first{ top: 30px; left: -20px; }
        #second{ top: 150px; left: 70px; }
        #third{ top: 235px; left: 200px; }
        #fourth{ top: 290px; left: 370px; }
        #fifth{ top: 335px; left: 550px; }
    }

`;



const StyledBox = styled.div`
    height: 100%;
    padding-bottom: 5%;
    position: relative;
    display: inline-flex;
    z-index: 1000;
    .text{
        height: 10%;
        margin-top: 7rem;
        margin-left: 2.5rem;
        font-family: Arial, Helvetica, sans-serif;
        p:nth-child(1){
            font-size: 40px;
            font-weight: 700;
            color: #470168;
            text-shadow: 1px 1px 2px #888;
        }
        p:nth-child(2){
            font-size: 14px;
            font-weight: 100;
            color: #888;
        }
    }
    .icon{
        align-self: flex-end;
        margin-bottom: 2rem;
        display: flex;
        flex-direction: column;
        width: 60%;
        text-align: right;
        a {
            color: #ccc;
            text-decoration: none;
            font-size: 9px;
            margin-right: 10rem;
        }
    }
`;

const Landing = () => {
    return(
       <StyledContainer>
            <StyledBackground>
                <div className='circle left'><div className='overlay'></div></div>
                <div className='inner subleft'></div>
                <div className='circle right'><div className='overlay'></div></div>
                <div className='inner subright'></div>
                {/* <div id='garland'>
                    <div id='line'>
                        <div className='item' id='first'></div>
                        <div className='item' id='second'></div>
                        <div className='item' id='third'></div>
                        <div className='item' id='fourth'></div>
                        <div className='item' id='fifth'></div>                        
                    </div>
                </div> */}
            </StyledBackground>
            <StyledBox>
                <div className='text'>
                    <p>SPL Dashboard Template</p>
                    {/*<p>This is React dashboard template using 'react chart js 2' library made by seungyoon.</p>*/}
                </div>
                <div className='icon'>
                <img src={icon} width='90%' alt='data-analysis' />
                </div>
            </StyledBox>
        </StyledContainer>
    );
}

export default React.memo(Landing);