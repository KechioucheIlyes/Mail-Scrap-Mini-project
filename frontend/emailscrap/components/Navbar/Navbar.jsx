import { Link } from "react-router-dom";
import logo from "../../assets/logo/logo.png"
import styled from "styled-components"


const StyledImg = styled.img`
    height  : 120px;
`
const StyledHeader = styled.header`
    display : flex;
    justify-content : space-between;

`
const StyledUl = styled.ul`
    display :flex;
`
const StyledLI = styled.li`
    list-style : none;
    margin: 20px;

`
const StyledLink = styled(Link)`
    text-decoration : none;
    color: white;
    font-size : 24px;
    border :1px solid #068a8d;
    padding : 10px;
    border-radius : 20px;
    background-color :  #068a8d;

`
export function Navbar() {
    return (
        <StyledHeader>
            <StyledImg src={logo} alt="logo" />
            <StyledUl>
                <StyledLI><StyledLink to="/">Accueil</StyledLink></StyledLI>
                <StyledLI><StyledLink to="/contact">Contact</StyledLink></StyledLI>
            </StyledUl>
        </StyledHeader>
    )
}
