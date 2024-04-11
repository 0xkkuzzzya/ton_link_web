import styled from "styled-components";
import TONLink from '../assets/webp/TonLink.webp'
import Telegram from '../assets/webp/Telegram Logo.webp'

const Header = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    margin-top: 10px;
`

const TONLogo = styled.img`
    width: 135px;
    height: 35px;
`

const TelegramLogo = styled.img`
    width: 50px;
    height: 50px;
    margin-left: auto;
`

export const MainHeader = () => {
    return(
        <Header>
            <TONLogo src={TONLink}/>
            <TelegramLogo src={Telegram}/>
        </Header>
    )
}