import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import styled from 'styled-components';
import Carditem from './Carditem';
import  Img1 from '../images/loan.png'
import Img2 from '../images/set.png'
import Img3 from '../images/get.png'

const carddata=[
    {
        img:Img1,
        id:1,
        title:"loremdsjiksbcs scisc sicbs kducsir cwsubsdkcs ",
        title2:"sjdonos oisdn eowinc roes oens incwo coec cwewc owwiocn cowcmw"
    },
    {
        img:Img2,
        id:2,
        title:"aqoe scisc sicbs kducsir cwsubsdkcs ",
        title2:"qowie oisdn eowinc roes oens incwo coec cwewc owwiocn cowcmw"
    },
    {
        img:Img3,
        id:3,
        title:"sied scisc sicbs kducsir cwsubsdkcs ",
        title2:"weoaj oisdn eowinc roes oens incwo coec cwewc owwiocn cowcmw"
    },
]
export default class Card extends Component{
    render(){
        return(
            <Ddiv>
                <h1>How it works</h1>
                <Div>
                    {
                    carddata.map(({img,id,title,title2})=>{
                        return(
                            <Carditem img={img} id={id} title={title} title2={title2}/>
                        )
                    })
                    }
                </Div>    
            </Ddiv>
               
        )
    }
}

const Ddiv=styled.div`
text-align: center;
h1{
    color: white;
}
`

const Div=styled.div`
    /* background-color: black; */
    display: flex;
    align-items: center;
    justify-content: center;
`