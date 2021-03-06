import styled from "styled-components";
import Leftside from "./Leftside";
import Main from "./Main";
import Rightside from "./Rightside";
const Home = (props) => {
    return (
        <Container>
            <Content>
                <Section>
                    <h5><a>Hiring in a hurry? - </a></h5>
                    <p>
                        Find talented pros in record time with Upwork and keep business
                    </p>
                </Section>
                <Layout>
                    <div><Leftside /></div>
                    <div><Main /></div>
                    <div><Rightside /></div>
                </Layout>
            </Content>
        </Container>
    );
}

export default Home;

const Container = styled.div`
    padding-top: 52px;
    max-width: 100%;
`;

const Content = styled.div`
    max-width: 1377px;
    margin-left: auto;
    margin-right: auto;
`;

const Section = styled.div`
    min-height: 50px;
    padding: 16px 0;
    box-sizing: content-box;
    text-align: center;
    text-decoration: underline;
    display: flex;
    justify-content: center;
    h5 {
        color: #0a66c2;
        font-size: 14px;

        a {
            font-weight: 700;
        }
    }

    p {
        font-size: 14px;
        color: #434649;
        font-weight: 600;
    }

    @media (max-width: 768px) {
        flex-direction: column;
        padding: 0 5px;

    }
`;

const Layout = styled.div`
    display: grid;
    grid-template-areas: "leftside main rightside";
    grid-template-columns: minmax(0, 300px) auto minmax(0px,500px);
    column-gap: 25px;
    row-gap: 25px;
    grid-template-row: auto;

    @media (max-width: 768px) {
        flex-direction: column !important;
        grid-template-areas: none !important;
        grid-template-columns: none;
        padding: 0 5px;
    }

`;

