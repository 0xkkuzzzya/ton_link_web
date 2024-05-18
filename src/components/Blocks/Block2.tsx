import styled from "styled-components";
import Sticker2 from '../../assets/Gif/Sticker 2.gif'
import Sticker3 from '../../assets/Gif/Sticker 3.gif'
import Sticker4 from '../../assets/Gif/Sticker 4.gif'
import { useMediaQuery } from "react-responsive";


const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

const Gif1 = styled.img`
    width: 200px;
    height: 200px;
    margin-top: 250px;
    @media (max-width: 500px) {
        width: 150px;
        height: 150px;
        margin-top: 100px;
    }
`
const Gif2 = styled.img`
    width: 200px;
    height: 200px;
    @media (max-width: 500px) {
        width: 150px;
        height: 150px;
    }
`
const Gif3 = styled.img`
    width: 200px;
    height: 200px;
    @media (max-width: 500px) {
        width: 150px;
        height: 150px;
    }
`

const TextBlock = styled.div`
    display: flex;
    flex-direction: column;
    width: 75%;
    @media (max-width: 500px) {
        width: 90%;
    }
`

const MainText = styled.h1`
    color: #fff;
    font-weight: 500;
    font-size: 25px;
    line-height: 1.5em;
    @media (max-width: 500px) {
        font-size: 18px;
        margin-top: 40px;
    }
`

const Descriprion = styled.h1`
    color: #c7c8cd;
    font-size: 22px;
    font-weight: 500;
    @media (max-width: 500px) {
        font-size: 16px;
    }
`

const Sads = styled.div`
    max-width: 70%;
    @media (max-width: 500px) {
        max-width: 90%;
    }
`


export const Block2 = () => {

    const isDes = useMediaQuery({
        query: "(min-device-width: 500px)",
    });
    const isMob = useMediaQuery({
        query: "(max-device-width: 500px)",
    });

    const block1Des = <> Build your TON Apps on Tonlink Protocol </>

    const block1Mob = <> Build your TON Apps on  <br/> Tonlink Protocol </>

    return (
        <Container>
            <TextBlock>
                <Gif1 src={Sticker2} />
                <Sads >
                    <MainText>
                        Connecting TON smart-contracts <br />
                        with the world.
                    </MainText>
                    <Descriprion>
                        Get off-chain data for your TON
                        smart-contracts in trustless way.
                    </Descriprion>
                </Sads>
            </TextBlock>
            <TextBlock style={{ textAlign: "right", alignItems: "flex-end" }}>
                <Gif2 src={Sticker3} style={{ marginTop: "50px" }} />
                <Sads>
                    <MainText>
                        {isDes && block1Des}
                        {isMob && block1Mob}
                    </MainText>
                    <Descriprion>
                        Make your app smarter, more
                        secure and decentralized.
                    </Descriprion>
                </Sads>
            </TextBlock>
            <TextBlock>
                <Gif3 src={Sticker4} style={{ marginTop: "50px" }} />
                <Sads>
                    <MainText>
                        Powered by $TL
                    </MainText>
                    <Descriprion>
                        $TL is the deflationary native token of TON
                        Link, used in payments to oracle nodes and
                        staking in Tonlink nodes. This is the first
                        token on the TON blockchain that has a built-
                        in application utility.
                    </Descriprion>
                </Sads>
            </TextBlock>
        </Container>
    )
}