import React , {Component} from "react";
import styled from "styled-components";


export default class Navbar extends Component{
    render(){
        return(
            <Nav>
                <a id="logo" href="#"><img src="/img/Group.svg" /></a>
                <a className="section" href="#">Home</a>
                <a className="section" href="#">About</a>
                <a className="section" href="#">Works</a>
            </Nav>
        )
    }
}


const Nav = styled.div`
display: flex;
align-items: center;
/* position: sticky; */
padding: 20px 0;
.section{
    text-decoration: none;
    margin-left: 40px;
    text-transform: uppercase;
    color: white;
    font-size: 20px;
}
#logo {
    margin-right: 70px;
}
`