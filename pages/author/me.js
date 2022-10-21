import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Layout from "../../components/layout";
const Author =()=>{
    return(
        <>
        <Layout>
        <Head>
            <title>Author</title>
        </Head>
        {/* <Image
         src ="/images/profile.jpg"
         width="150"
         height="150"
         alt='Author'
         /> */}
         <br/>
        <span>
            It's me 
        </span>
        <h3>Back <Link href="/posts/post-first" >Here!</Link></h3>
        </Layout>
        </>
    )
}

export default Author;