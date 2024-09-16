import * as React from "react"
// import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"
import { Link } from "gatsby"

const IndexPage = () => (
  <Layout>
    <main className={styles.textCenter}>
      {/* <StaticImage
        src="../images/example.png"
        loading="eager"
        width={64}
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt=""
        style={{ marginBottom: `var(--space-3)` }}
      /> */}
      <p style={{ textAlign: `center` }}>
        Hello, I'm <b>Ricardo</b>, a passionate{" "}
        <b>technology enthusiast and web developer</b> <br /> dedicated to
        building innovative digital solutions.
      </p>
      <h1>Welcome to my Portfolio</h1>
      <Link to="/about">About</Link>
    </main>
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
