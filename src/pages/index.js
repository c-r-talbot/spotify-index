import React from "react"
import { graphql } from 'gatsby'


const Home = ({data}) => 
{
  console.log()
  console.log("hey!!!!!")
  const homePage = (
    <div>
    <table>
    {data.allSpotifySavedAlbum.nodes.map((node,i) => (
    <tr>
      <td>{node.album.name}</td>
      <td>
        <ul>
      {node.album.artists.map((artist,i) => (
        <li>{artist.name}</li>
      ))}
        </ul>
      </td>
      <td>
        <img src={node.album.images[2].url} alt={node.album.name}></img>
      </td>
    </tr>
    ))}
    </table> 
    </div>
  )
  return(homePage)
}

 export default Home


  export const query = graphql`
  {
    allSpotifySavedAlbum {
        nodes {
          id
          album {
            name
            artists {
              name
            }
            images {
              height
              url
              width
            }
          }
        }
      }
    }
`

