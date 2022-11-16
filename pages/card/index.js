/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { Card, Container, Typography } from '@material-ui/core';
import { color, lineHeight } from '@mui/system';
import Image from 'next/image';
import Link from 'next/link';
import { useNavigate } from 'react-router-dom';


const CardHotel = ({ otel }) => {
   
    const handleSingleDetail = (otel) => {
      localStorage.setItem("Detail",JSON.stringify(otel))

    console.log("props", otel)


      }
  return (
      <div key={otel.id}>
           <Card  style={{background:"", width: "200px", margin: "15px", padding: "10px", color: "" }}> 
              <img width="180px" height="120px"
                style={{
                  "border-radius": "12px",
                  border: "1px solid #ffff",
                  cursor: "pointer",
                  }}
                src='https://m.timbu.com/img/h1411143/400/280/b1/jores-hotel-sanje-1411143-1.jpg'
                alt="hotel" />
            
                <Typography variant='h1'
                style={{
                color: "#C16315",
                lineHeight: "1.5",
                    marginLeft: "10px",
                fontSize:"15px"
                }} >
                {otel.hotelName}
              </Typography>
               <Card
                style={{
                  background: "",
                  padding: "10px",
                  lineHeight: "1.2",
                  wordSpacing:"2",
                  border: ".9px solid grey",
                    fontSize: "12px",
                  height:"80px"
                }}>
                <span>Payment Type: {otel.paymentType}</span>
                <div>RateRules: {otel.rateRules ? otel.rateRules : "NA"}</div>
                <div style={{ color: "#5E2121" }}>Currency: {otel.price.currency}</div>
                </Card> 
              <div style={{ margin: "10px", fontSize:"10px"}} >
                 
                 <Link href="/detailPage/"><a onClick={()=>{handleSingleDetail(otel)}}>More Details ...</a></Link> 
             </div>   
            </Card>
    </div>
  )
}

export default CardHotel