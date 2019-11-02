import React from "react"

import Layout from "../components/layout"
import Head from "../components/head"

export default () => {
  return (
    <Layout>
      <Head title="Contact" />
      <h1>Contact</h1>
      <p>Contact details ....</p>
      <p>
        <a href="https://google.de" target="_blank" rel="noopener noreferrer">
          Search me by google.
        </a>
      </p>
    </Layout>
  )
}
