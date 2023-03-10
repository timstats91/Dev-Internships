import { gql } from "@apollo/client";
import client from "client";
import { cleanAndTransformBlocks } from "./cleanAndTransformBlocks";
import { mapMainMenuItems } from "./mapMainMenuItems";

export const getPageStaticProps = async (context) => {
    const uri = context.params?.slug ? `/${context.params.slug.join("/")}/` : "/";
    const {data} = await client.query({
      query: gql`
      query PageQuery($uri: String!) {
        nodeByUri(uri: $uri) {
          ... on Page {
            id
            title
            blocksJSON
            featuredImage {
              node {
                sourceUrl
              }
            }
            seo {
              title
              metaDesc
            }
          }
          ... on Post {
            id
            title
            blocksJSON
            featuredImage {
              node {
                sourceUrl
              }
            }
            seo {
              title
              metaDesc
            }
          }
        }
        acfOptionsMainMenu {
          mainMenu {
            menuItems {
              menuItem {
                destination {
                  ... on Page {
                    uri
                  }
                }
                label
              }
              items {
                destination {
                  ... on Page {
                    uri
                  }
                }
                label
              }
            }
          }
        }
      }
      `,
      variables: {
        uri,
      }
    });
    const blocks = cleanAndTransformBlocks(data.nodeByUri.blocksJSON);
    return {
      props: {
        seo: data.nodeByUri.seo,
        title: data.nodeByUri.title,
        featuredImage: data.nodeByUri.featuredImage?.node?.sourceUrl || null,
        mainMenuItems: mapMainMenuItems(data.acfOptionsMainMenu.mainMenu.menuItems),
        //callToActionLabel: data.acfOptionsMainMenu.mainMenu.callToActionButton.label,
        //callToActionDestination: data.acfOptionsMainMenu.mainMenu.callToActionButton.destination.uri,
        blocks,
      },
    };
  };