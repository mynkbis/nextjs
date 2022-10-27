// export default function Post (){
//         return(
//             <>
//             <h1> learing the next js</h1>
//             </>
//         )
// }

import Head from "next/head";
import Link from "next/link";
import Script from "next/script";
import Layout from '../../components/layout'

const Post =()=>{
    return(
        <>
    <Layout>
        <Head>
            <title>Travelx</title>
         </Head>
         {/* <Script
        src="https://connect.facebook.net/en_US/sdk.js"
        strategy="lazyOnload"
        onLoad={() =>
          console.log(`script loaded correctly, Ubuntu has been populated`)
        }
      /> */}
        <h1>Travelx the new way to explore destination  </h1>
      <h3>Know about Author  <Link href="/author/me">Click here !</Link>
      </h3>
      </Layout>
      </>
    )
}
export default Post;