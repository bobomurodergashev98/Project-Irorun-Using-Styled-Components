import React, { Component } from 'react';
import styled from 'styled-components'
export default class Carditem extends Component{
    render(){
        const {img,id,title,title2}=this.props
        return(
            <Item id={id}>
                <img id="img"  src={img} />
                <h4>{title}</h4>
                <p>{title2}</p>
            </Item>
        )
    }
}
const Item=styled.div`
    /* width: 30%; */
    background-color: white;
    margin-right: 15px;
    border-top: 5px solid yellow;
    text-align: center;
    padding: 30px 25px;
    margin-bottom: 100px;
    border-radius: 10px;
    transition: all 0.5s linear;
    &:hover{
        transform: scale(1.05);
    }
    /* &::after{
        content: 'hello';
        width: 0px;
        height: 0px;
        background-color: red;
        &:hover  {
            display: none;
        
        }
    } */
    #img{
        width: 55px;
        height: 55px;
    }
`
