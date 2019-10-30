import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import "./footer.scss"
import footerStyles from "./footer.module.scss"

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)

  return (
    <footer className={footerStyles.footer}>
      <p>Copyright © 2019 {data.site.siteMetadata.author}</p>
    </footer>
  )
}

export default Footer
