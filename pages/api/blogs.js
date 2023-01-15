import { gql } from "@apollo/client";
import client from "client";

const handler = async (req, res) => {
    try {
        const filters = JSON.parse(req.body);

        const { data } = await client.query({
            query: gql`
              query AllBlogssQuery {
                posts(first: 500, where: {
                  offsetPagination: {size: 12, offset: ${((filters.page || 1) - 1) * 12}}
                }) {
                  pageInfo {
                    offsetPagination {
                      total
                    }
                  }
                  nodes {
                    databaseId
                    title
                    uri
                    featuredImage {
                      node {
                        uri
                        sourceUrl
                      }
                    }
                    seo {
                      metaDesc
                    }
                  }
                }
              }
            `,
        });
        return res.status(200).json({
            total: data.posts.pageInfo.offsetPagination.total,
            posts: data.posts.nodes,
        });
    } catch (e) {
        console.log("ERROR: ", e);
    }
};

export default handler;