import styled from "styled-components";

const Header = (props) => {
    return (
        <Container>
            <Content>
                <Logo>
                    <a href = "/home" >
                        <img src = "/images/home-logo.svg" alt = ""/>
                    </a>
                </Logo>
            </Content>
            <Search>
                <div>
                    <input type = "text" placeholder = "Search" />
                </div>
                <SearchIcon>
                    <img src = "/images/search-icon.svg" alt = ""/>
                </SearchIcon>
            </Search>
            <Nav>
                <NavListWrap>
                    <NavList>
                        <a>
                            <img src= "/images/nav-home.svg" alt=""/>
                            <div>Home</div>
                        </a>
                    </NavList>
                    <NavList>
                        <a>
                            <img src= "/images/nav-network.svg" alt=""/>
                            <div>My Network</div>
                        </a>
                    </NavList>
                    <NavList>
                        <a>
                            <img src= "/images/nav-jobs.svg" alt=""/>
                            <div>Jobs</div>
                        </a>
                    </NavList>
                    <NavList>
                        <a>
                            <img src= "/images/nav-messaging.svg" alt=""/>
                            <div>messaging</div>
                        </a>
                    </NavList>
                    <NavList>
                        <a>
                            <img src= "/images/nav-notifications.svg" alt=""/>
                            <div>notifications</div>
                        </a>
                    </NavList>

                    <User>
                        <a>
                            <ul>
                                <li><img src="/images/user.svg" alt="" /></li>
                                <li><div>Me</div><img id="downArrow1" src="/images/down-icon.svg" alt=""/></li> 
                            </ul>
                            
                        </a>
                        <SignOut>
                            <a>
                                Signout
                            </a>
                        </SignOut>
                    </User> 

                    <Work>
                        <a>
                            <img src="/images/nav-work.svg" alt="" />
                            <div>
                                Work
                            </div>
                            <img id="downArrow2" src="/images/down-icon.svg" alt=""/>
                        </a>
                    </Work>                                                           
                </NavListWrap>
            </Nav>
        </Container>    
    
    );
}

const Container = styled.div`
    display: flex;
    background-color: white;
    border-bottom: 1px-solid rgba(0, 0, 0, 0.08);
    left: 0;
    padding: 0 24px;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 100;
    max-height: 45px;
`;

const Content = styled.div`
    display: flex;
    align-items: center;
    marigin: 0 auto;
    max-wdith: 1377px;
`;

const Logo = styled.span`
    padding-left: 20%;
    margin-right: 8px;
    font-size: 0px;
`;

const Search = styled.div`
    opacity: 1;
    flex-grow: 1;
    position: relative;
    display: flex;
    left: 20px;
    align-items:center;

    & > div {
        input {
            border: none;
            box-shadow: none;
            background-color: #eef3f8;
            border-radius: 2px;
            color: rgba(0, 0, 0, 0.9);
            width: 218px;
            padding: 0 8px 0 40px;
            line-height: 1.75;
            font-weight: 400;
            font-size: 14px;
            height: 34px;
            border-color: #dce6f1;
            vertical-align: text-top;
            
        }
    }
`;

const SearchIcon = styled.div`
    width: 40px;
    position: absolute;
    z-index: 1;
    top: 13px;
    left: 2px;
    border-radius: 0 2px 2px 0;
    margin: 0;
    pointer-events: none;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: background-color 0.5s;
`;

const Nav = styled.nav`
    position: relative;
    margin-left: auto;
    display: flex;
    right: 100px;

    @media (max-width: 768px) {
        position: fixed;
        left:0;
        bottom: 0;
        background: write;
        width: 100%;
    }
`
const NavListWrap = styled.ul`
    display: flex;
    flex-wrap: nowrap;
    list-style-type: none;
    
`;

const NavList = styled.li`
    display: absolute;
    align-items: center;

    a {
        align-items: center;
        background: transparent;
        dislay: flex;
        flex-direction: column;
        font-size: 12px;
        font-weight: 400;
        justify-content: center;
        line-height: 1;
        min-height: 42px;
        min-width: 80px;
        position: relative;
        text-decoration: none;
    }

    div {
        width: 80px;
        text-align: center;
        align-items: center;
        position: relative;
        color: rgba(0, 0, 0, 0.6);
    }

    @media (max-width: 768px) {
        display: flex;
        align-items: center;
    }

    &: hover,
    &: active {
        a {
            span {
                color: rgba(0, 0, 0, 0.9);
            }
        }

        
    }
`;

const SignOut = styled.div`
    position: absolute;
    top: 0px;
    background: white;
    border-radius: 0 0 5px 5px;
    width: 100px;
    padding-top: 25px;
    height: 20px;
    font-size: 16px;
    transition-duration: 167ms;
    align-items: center;
    display: none;
`;

const User = styled(NavList)`
    align-items: center;
    display: inline;

    ul {
        list-style-type: none;
    }

    a > svg {
        width: 24px;
        border-radius: 50%;
    }
    
    img {
        width: 24px;
        height: 24px;
        border-radius: 50%;
        justify-content: center;
        display: inline-flex;  
    }

    &: hover {
        ${SignOut} {
            align-items: center;
            display: flex;
            justify-content: center;
        }
    }

`;

const Work = styled(User)`
    border-left: 1px solid rgba(0,0,0,0.08);
`;




export default Header;

