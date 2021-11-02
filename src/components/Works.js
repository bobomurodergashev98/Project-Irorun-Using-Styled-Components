import React, { Component } from 'react';
import styled from 'styled-components';
export default class Works extends Component {
    render() {
        return (
            <Workitem >
                <h1>Get it on Play Store and download on the app store</h1>
                <Div>
                    <img src="/img/appstore.png" />
                    <img src="/img/googplay.png" />
                </Div>
            </Workitem>
        )
    }
}

const Workitem=styled.div`
text-align: center;
background-color: white;
padding:100px 0;
`

const Div=styled.div`
display: flex;
align-items: center;
justify-content: center;
img{
margin-right: 15px;

}
`
