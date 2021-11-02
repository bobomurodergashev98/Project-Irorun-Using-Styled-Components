import React, {Component} from 'react'
import styled from 'styled-components'

export default class About extends Component{
    render(){
        return(
            <Wrap>
                <Right>
                    <img  src="/img/person2.png" />
                </Right>
                <Left>
                <h1>Save on your own terms</h1>
                <p>Savings give you financial options.</p>
                <Img>
                    <img src="/img/googplay.png" />
                    <img src="/img/appstore.png" />
                </Img>
                </Left>
            </Wrap>
        )
    }
}
const Wrap = styled.div`
display: flex;
align-items: center;
padding-bottom: 100px;
justify-content: space-between;
`
const Left = styled.div`
width: 50%;
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
    margin-right: 300px;
}
`