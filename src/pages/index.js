import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Head from "../components/head"

export default () => {
  return (
    <Layout>
      <Head title="Home" />
      <h1>Hello</h1>
      <h2>I'm Frank, a full-stack developer :-)</h2>
      <p>
        Need a developer ?
        <span role="img" aria-label="contact">
          &#128073;
        </span>
        <Link to="/contact">&nbsp;Contact me</Link>
      </p>
    </Layout>
  )
}
