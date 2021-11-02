import React, {Component} from 'react'
import styled from 'styled-components'

export default class Home extends Component{
    render(){
        return(
            <Wrap>
                <Left>
                    <h1>Get Instant Loans</h1>
                    <p>Get instant loans with ease on your smartphone.</p>
                <Img>
                    <img src="/img/googplay.png" />
                    <img src="/img/appstore.png" />
                </Img>
                </Left>
                <Right>
                    <img  src="/img/Frame.png" />
                </Right>
            </Wrap>
        )
    }
}
const Wrap = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
/* margin-top: 100px; */
padding-bottom: 100px;
`
const Left = styled.div`
/* width: 50%; */
h1,p{
color: white;
}

`
const Img = styled.div`
display: flex;
align-items: center;
img{
    margin-right: 20px;
}
`
const Right = styled.div`
img{
    width: 100%;
}
`