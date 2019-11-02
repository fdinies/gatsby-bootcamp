import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import Head from "../components/head"

import blogStyles from "./blog.module.scss"

export default ({ data }) => {
  return (
    <Layout>
      <Head title="Blog" />
      <h1>Blog</h1>
      <ol className={blogStyles.posts}>
        {data.allContentfulBlogPost.edges.map(({ node }, index) => {
          return (
            <li key={node.slug} className={blogStyles.post}>
              <Link to={`/blog/${node.slug}`}>
                <h2>{node.title}</h2>
                <p>{node.publishedDate}</p>
              </Link>
            </li>
          )
        })}
      </ol>
    </Layout>
  )
}

export const query = graphql`
  query {
    allContentfulBlogPost {
      edges {
        node {
          id
          title
          slug
          publishedDate(formatString: "MMMM Do- YYYY")
        }
      }
    }
  }
`
