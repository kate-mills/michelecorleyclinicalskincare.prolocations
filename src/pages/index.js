import * as React from "react"
//import { Link } from "gatsby"
//import { StaticImage } from "gatsby-plugin-image"

import Layout from '../components/layout'
import Airtable from '../components/Airtable'
import Seo from "../components/seo"


const IndexPage = () => {
  return (
    <Layout>
    <Airtable/>
    </Layout>
  )
}

export const Head = () => <Seo title="Home" />

export default IndexPage
