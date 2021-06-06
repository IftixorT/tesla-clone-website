import React from 'react'
import styled from 'styled-components'

const Section = (props) => {
    console.log(props);
    return (
        <Container  bgImage={props.backgroundImg}>
            <ItemText>
                <h1>{props.title}</h1>
                <p>{props.description}</p>
            </ItemText>
            <ButtonGroup>
                <LeftButton>
                    {props.leftBtnText}
                </LeftButton>
                <RightButton>
                    {props.RightBtnText}
                </RightButton>
            </ButtonGroup>
            <DownArrow src="/images/down.png" />
        </Container>
    )
}

export default Section

const Container = styled.div`
    background-color: #4caf50;
    display: flex;
    width: 100%;
    height: 100vh;
    background-image: ${props=> `url('/images/${props.bgImage}')`};
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    flex-direction: column;
    align-items: center;

    @media screen and (min-width: 320px){
    width: 100%;
        
}

`
const ItemText = styled.div`
padding-top: 15vh;
text-align: center;
flex-grow: 1;
`
const ButtonGroup = styled.div`
display: flex;
margin-bottom: 10px;
cursor: pointer;

@media screen and (max-width: 544px){
    width: 100%;      
    text-align: center;
    display: flex;
    align-items: center;
    flex-direction: column;
}
`
const LeftButton = styled.div`
background-color: rgba(32, 32, 32, 0.8);
height: 40px;
width: 256px;
border-radius: 100px;
color: #fff;
display: flex;
justify-content: center;
align-items: center;
text-transform: uppercase;
font-size: 12px;
opacity: 0.85;
margin: 8px;
font-weight: 600;
cursor: pointer;
`
const RightButton = styled(LeftButton)`
background-color: white;
color: black;
opacity: 0.65;
`
const DownArrow = styled.img`
margin-bottom: 30px;
width: 2%;
animation: animationDown infinite 1.5s;
cursor: pointer;

@media screen and (min-width: 320px){
    width: 4%;       
}
`