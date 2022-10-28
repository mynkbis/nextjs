import { MenuItem } from "@material-ui/core";


export const getStaticProps = async () => {
  const endpoint = process.env.PREVIEW_CH_ENDPOINT;
  const graphQLClient = new GraphQLClient(endpoint);
  graphQLClient.setHeader("Authorization", "Apikey 8626cf56-e364-4fd1-4fe0-311e23ac6355")
  
    const query = gql`{
     social {
    profile(where: {}) {
      code
      profileData{description}
      adviseMessage{description}
      createdAt
      updatedAt
    }
    allProfiles(cursor: {name}, orderBy: [{types:${ASC}
    } }], skip: 1, take: 1, where: {}) {
      code
      profileData{classifications}
      adviseMessage{level}
      createdAt
      updatedAt:,
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

export const Admin = ({ data }) => {
    console.log("from admin", data)
    return (
        <>
                  {/* Hello Admin */}
        </>
    )
}