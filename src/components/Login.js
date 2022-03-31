import { connect } from "react-redux";
import styled from "styled-components";

const Login = (props) => {
  return (
    <Container>
      <Nav>
        <a href="/">
          <img src="./images/login-logo.svg" alt="" />
        </a>
        <div>
          <Join>Join now</Join>
          <SignIn>Sign in</SignIn>
        </div>
      </Nav>
      <Section>
        <Hero>
          <h1>Welcome to your professional community</h1>
          <img src = "./images/login-hero.svg" alt = "" />
        </Hero>
        <Form>
          <Google>
            <img src = "./images/google.svg" alt = "" />
            Sign in with Google
          </Google>
        </Form>
      </Section>

    </Container>
  );
};


// empty styling
const Container = styled.div`

  padding: 0px;
`;

const SignIn = styled.a`
  box-shadow: inset 0px 0px 0px 1px #0a66c2;
  color: #0a66c2;
  border-radius: 24px;
  transition-duration: 167ms;
  font-size: 16px;
  font-weight: 600;
  line-height: 40px;
  padding: 10px 24px;
  text-align: center;
  background-color: rgba(0, 0, 0, 0);
  &: hover {
    background-color: rgba(112, 181, 259, 0.15);
    color: #0a66c2;
    text-decoration: none;
  }
`;

const Join = styled.a`
  font-size: 16px;
  padding: 10px 12px;
  text-decoration: none;
  color: rgba(0, 0, 0, 0.6);
  margin-right: 12px;
  &:hover {
    background-color: rgba(0, 0, 0, 0.6);
    color: rgba(0, 0, 0, 0.9);
    text-decoration: none;
  }
`
const Section = styled.section`
  display: flex;
  align-content: start;
  min-height: 700px;
  padding-bottom: 138px;
  padding-top: 40px;
  padding: 60px 0;
  position: relative;
  flex-wrap: wrap;
  width: 100%;
  max-width: 1377px;
  align-items: center;
  margin: auto;
  @media (max-width: 768px) {
    margin: auto;
    min-height: 0px;
  }
`;

const Nav = styled.nav`
  max-width: 1377px;
  margin: auto;
  padding: 12px 0 16px;
  display: flex;
  align-items: center;
  position: relative;
  justify-content: space-between;
  flex-wrap: nowrap;

  & > a {
    width: 135px;
    height: 34px;
    
    @media (max-width: 768px) {
      padding: 0 5px;
    }
  }
`;

const Hero = styled.div`
  width: 100%;
  h1 {
    padding-bottom: 0;
    text-align: left;
    width: 40%;
    font-size: 56px;
    color: rgba(180,0,0,1.0);
    font-weight: 1;
    @media (max-width: 768px) {
      text-align: center;
      font-size: 30px;
      width: 100%;
      line-height: 2;
    }
  }

  img {
    max-width: 50%;
    max-height: 100%;
    width: 700px;
    height: 670px;
    position: absolute;
    right: -120px;
    bottom: -10px;
    
    @media (max-width: 768) {
      flex-wrap: wrap;
      top: 10px;
      width: initial;
      position: initial;
      height: initial;
    }
  }
`;

const Form = styled.div`
  margin-top: 100px;
  width: 400px;

  @media (max-width 768px) {
    margin-top: 20px;

  }
`;

const Google = styled.button`
  display = flex;
  justify-content: center;
  background-color: #fff;
  align-items: center;
  height: 56px;
  width: 100%;
  border-radius: 28px;
  box-shadow: inset 0 0 0 1px rgb(0 0 0 / 60%),
    inset 0 0 0 2px rgb (0 0 0 / 0%) inset 0 0 0 1px rgb(0 0 0 / 0%);
  
  vertical-align: middle;
  z-index: 0;
  transition-duration: 167ms;
  font-size: 20px;
  color: rgba(0, 0, 0, 0.6);
  &:hover {
    background-color: rgba(207, 207, 207, 0.25);
    color: rgba(0, 0, 0, 0.75);
  }

`;

const mapStateToProps = (state) => {
  return {};

};

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps) (Login);


