import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

export default () => {
  return (
    <Layout>
      <h1>Hello</h1>
      <h2>I'm Frank, a full-stack developer.</h2>
      <p>
        Need a delevoper ?
        <span role="img" aria-label="contact">
          &#128073;
        </span>
        <Link to="/contact">&nbsp;Contact me</Link>
      </p>
    </Layout>
  )
}
