/* eslint-disable @next/next/no-img-element */
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import Date from '../components/date';
import { Navbar } from '../components/navbar/navbar';
import { GraphQLClient, gql  } from 'graphql-request';
import { Card, Container, Typography } from '@material-ui/core';
import { color, lineHeight } from '@mui/system';
import { DrawerComponent } from '../components/navbar/drawer';
import Image from 'next/image';
import { useState } from 'react';



export const getStaticProps = async () => {
  const endpoint = process.env.PREVIEW_CH_ENDPOINT;
  const graphQLClient = new GraphQLClient(endpoint);
   graphQLClient.setHeader("Authorization", "Apikey 8626cf56-e364-4fd1-4fe0-311e23ac6355")
  //graphQLClient.setHeader("Authorization","Apikey q8ggxpoVDW76Kw918hwnnRvxlZmAP2QZ")
  

  const query = gql`{
  hotelX {
    search(
      criteria: { 
        checkIn: "2022-11-01",
        checkOut: "2022-11-15",
        occupancies: [{ paxes: [{age: 28}, {age: 30}] }],
        hotels: ["1"],
        currency: "EUR",
        market: "ES",
        language: "es",
        nationality: "ES"
      },
      settings: {
        client: "client_demo",
        context: "HOTELTEST",
        auditTransactions: false,
        testMode: true,
        timeout: 25000
      },
      filter: {
        access: {
          includes: ["0"]
        }
      }) {
           context
      errors{
        code{
        type
        description
      }
      warnings{
        code
        type
        description
      }
      options {
        id
        accessCode
        supplierCode
        hotelCode
        hotelName
        boardCode
        paymentType
        status
        occupancies {
          id
          paxes {
            age
          }
        }
        rooms {
          occupancyRefId
          code
          description
          refundable
          roomPrice {
            price {
              currency
              binding
              net
              gross
              exchange {
                currency
                rate
              }
            }
            breakdown {
              price {
                currency
                binding
                net
                gross
                exchange {
                  currency
                  rate
                }
                markups {
                  channel
                  currency
                  binding
                  net
                  gross
                  exchange {
                    currency
                    rate
                  }
                  rules {
                    id
                    name
                    type
                    value
                  }
                }
              }
            }
          }
          beds {
            type
            count
          }
          ratePlans {
            code
          }
        }
        price {
          currency
          binding
          net
          gross
          exchange {
            currency
            rate
          }
          markups {
            channel
            currency
            binding
            net
            gross
            exchange {
              currency
              rate
            }
            rules {
              id
              name
              type
              value
            }
          }
        }
        supplements {
          code
          name
          description
          supplementType
          chargeType
          mandatory
          durationType
          quantity
          unit
          resort {
            code
            name
            description
          }
          price {
            currency
            binding
            net
            gross
            exchange {
              currency
              rate
            }
            markups {
              channel
              currency
              binding
              net
              gross
              exchange {
                currency
                rate
              }
            }
          }
        }
        surcharges {
          chargeType
          description
          price {
            currency
            binding
            net
            gross
            exchange {
              currency
              rate
            }
            markups {
              channel
              currency
              binding
              net
              gross
              exchange {
                currency
                rate
              }
            }
          }
        }
        rateRules
        cancelPolicy {
          refundable
          cancelPenalties {
            hoursBefore
            penaltyType
            currency
            value
          }
        }
        remarks
      }
    }
  }
} `
  
  const data =await graphQLClient.request(query)
  return {
    props: {   
      data
    }
  }
}

export default function Home({data}) {
  console.log("data", data.hotelX.search)
  const [hotel, SetHotel] = useState(false);
  const handleclick = () => {
    SetHotel(true);
    
    
  }
  const handleclose= () => {
    SetHotel(true);
          }
return (
    <> 
      <Navbar/>
      {/* <DrawerComponent/> */}
       {/* <div style={{background: "#722222"}}>
        <Typography variant='h2' style={{ color: "#FFFFFF" }}>TravelX</Typography>
      </div>  */}
         <Container >
      <div style={{display:"flex", "flex-wrap": "wrap", "justifyContent":"space-evenly", background:"",}}>
        {data && data.hotelX.search && data.hotelX.search.options.map((otel) => {
        return (
          <>
        
              <Card key={otel.id} style={{background:"#94B8B8", width: "250px", margin: "10px", padding: "10px", color: "#5E2121" }}> 
              <img width="230px" height="150px"
                style={{
                  "border-radius": "12px",
                  border: "1px solid #ffff",
                  cursor: "pointer",
                  }}
                src='https://m.timbu.com/img/h1411143/400/280/b1/jores-hotel-sanje-1411143-1.jpg'
                alt="hotel" />
            
                <Typography variant='h6'
                style={{
                color: "#5E2121",
                lineHeight: "1.5",
                marginLeft: "10px"
                }} >
                {otel.hotelName}
              </Typography>
               <Card
                style={{
                  background: "#94B8B8",
                  padding: "10px",
                  lineHeight: "1.2",
                  border: ".9px dotted #ffff"
                }} onClick={(e) => {handleclick(e) }} >
                <span>Payment Type: {otel.paymentType}</span>
                <div>RateRules: {otel.rateRules ? otel.rateRules : "NA"}</div>
                <div style={{ color: "#5E2121" }}>Currency: {otel.price.currency}</div>
                </Card> 
              <div style={{margin:"10px"}}>
                <Link href="/detailPage"><a>More Details...</a></Link></div>  
            </Card>
            {/* {hotel ? <DetailPage otel={otel}  /> : ""} */}
            </>
          )
        })}
        </div>
      </Container>
    </>)  
}
