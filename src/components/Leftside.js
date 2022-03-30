import styled from 'styled-components';

const Leftside = (props) => {
    return <Container>
        <ArtCard>
            <UserInfo>
                <CardBackground />
                <a>
                    <Photo />
                    <Link>Wewlcome, there!</Link>
                </a>
                <a>
                    <AddPhotoText>
                        Add a photo
                    </AddPhotoText>
                </a>
            </UserInfo>
            <Widget>
                <a>
                    <div>
                        <span>Connections</span>
                        <span>Grow your network</span>
                    </div>
                    <img src="./images/widget-icon.svg" alt="" />
                </a>
            </Widget>
            <Item>
                <span>
                    <img src = "./images/item-icon.svg" alt=""/>
                </span>
            </Item>
        </ArtCard>
    </Container>;
};

const Container = styled.div`
    grid-area: leftside;
`;

const ArtCard = styled.div`
    text-align: center;
    overflow: hidden;
    margin-bottom: 8px;
    background-color: #fff;
    border-radius: 5px;
    transition: box-shadow 83ms;
    position: relative;
    border: none;
    box-shawdow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);

    @media (max-width: 768px) {
    }
`;

const UserInfo = styled.div`
    border-bottom: 1px solid rgba(0, 0, 0, 0.15)
    padding: 12px 12px 16px;
    word-wrap: break-word;
    word-break: break-word;
    max-width: 462px;
`;

const CardBackground = styled.div`
    background: url("./images/card-bg.svg");
    background-position: center;
    background-size: 462px;
    height: 54px;
    margin: -12px -12px 0;
`;

const Photo = styled.div`

    box-shadow: none;
    background-image: url("./images/photo.svg");
    width:72px;
    height: 72px;
    box-sizing: border-box;
    background-clip: content-box;
    background-color: white;
    background-position: center;
    background-size: 60%;
    background-repeat: no-repeat;
    border: 2px solid white;
    margin: -38px auto 12px;
`;

const Link = styled.div`
    font-size: 16px;
    line-height: 1.5;
    color: rgb(0, 0, 0, 0.9);
    font-weight: 600;
        max-width: 462px;
`;

const AddPhotoText = styled.div`
    color: #0a66c2;
    margin-top: 4px;
    font-size: 15px;
    line-height: 1.33;
    font-weight: 400;
        max-width: 462px;
`;

const Widget = styled.div`
    border-bottom: 1px solid rgba(0, 0, 0, 0.15);
    padding-top: 12px;
    padding-bottom: 12px;
    max-width: 462px;
    align-items: center;

    & > a {
        text-decoration: none;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-right: 12px;

        &:hover {
            background-color: rgba(0, 0, 0, 0.08);
        }

        div {
            display: flex;
            flex-direction: column;
            text-align: left;

            span {
                font-size: 12px;
                line-height: 1.3333;
                &:first-child {
                    color: rgba(0, 0, 0, 0.6);
                }

                &:nth-child(2) {
                    color: rgba(0,0,0,1);
                }
            }
        }
    }
`;

const Item = styled.a`

`;

export default Leftside;