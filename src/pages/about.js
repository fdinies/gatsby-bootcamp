import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Head from "../components/head"

export default () => {
  return (
    <Layout>
      <Head title="About me" />
      <h1>About me</h1>
      <p>Bio ...</p>
      <p>
        <Link to="/contact">Contact me.</Link>
      </p>
    </Layout>
  )
}
