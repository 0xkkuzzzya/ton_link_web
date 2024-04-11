import styled from "styled-components";
import TONLinkDes from '../assets/webp/TonLink.webp'
import TONLinkMob from '../assets/webp/TONLinkMob.webp'
import Telegram from '../assets/webp/Telegram Logo.webp'

const Header = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    margin-top: 10px;
`

const TONLogo = styled.svg <{iconDes: string, iconMob: string}>`
    width: 135px;
    height: 35px;
    background: url(${props => props.iconDes});
    background-repeat: no-repeat;
    background-size: contain;
    @media (max-width: 500px) {
        width: 40px;
        height: 40px;
        background: url(${props => props.iconMob});
        background-repeat: no-repeat;
        background-size: contain;
    }
`

const TelegramLogo = styled.img`
    width: 50px;
    height: 50px;
    margin-left: auto;
`

export const MainHeader = () => {
    return(
        <Header>
            <TONLogo iconDes={TONLinkDes} iconMob={TONLinkMob}/>
            <TelegramLogo src={Telegram}/>
        </Header>
    )
}