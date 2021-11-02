import React, { Component } from 'react'
import styled from 'styled-components'
import { FootItem,Foooter,Footlink } from './Footer.styled'
export default class Footer extends Component {
    render() {
        return (
            <Foooter>
               <FootItem >
                    <img src="/img/Group.svg" />
               </FootItem>
               <FootItem > 
                   <Footlink>
                       <a href="#">Office</a>
                       <p>
                           4 Perez Drive, Lekki <br/>
                            Phase 1, Lagos.
                       </p>
                   </Footlink>
               </FootItem>
               <FootItem > 
                   <Footlink>
                       <a href="#">Contact</a>
                       <p>
                            hello@irorun.com <br/>
                            +234 809 666 8877
                       </p>
                   </Footlink>
               </FootItem>
               <FootItem > 
                   <Footlink>
                       <a href="#">Powered by YesCredit Limited.</a>
                       <p>
                         licensed as a Money Lender by <br/> the Lagos State Government of <br/> Nigeria.
                       </p>
                   </Footlink>
               </FootItem>

            </Foooter>
        )
    }
}
