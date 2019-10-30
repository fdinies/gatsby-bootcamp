import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"

import blogStyles from "./blog.module.scss"

export default ({ data }) => {
  return (
    <Layout>
      <h1>Blog</h1>
      <ol className={blogStyles.posts}>
        {data.allMarkdownRemark.edges.map(({ node }, index) => {
          return (
            <li key={node.id} className={blogStyles.post}>
              <Link to={`/blog/${node.fields.slug}`}>
                <h2>{node.frontmatter.title}</h2>
                <p>{node.frontmatter.date}</p>
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
    allMarkdownRemark(sort: { order: ASC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD-MM-YYYY")
          }
          fields {
            slug
          }
        }
      }
    }
  }
`
