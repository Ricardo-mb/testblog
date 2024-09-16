import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"

const IndexPage = () => (
  <Layout pageTitle="Home Page">
    <main className={styles.textCenter}>
      {/* If you want to add an image later, uncomment the code below */}
      {/* <StaticImage
        src="../images/example.png"
        loading="eager"
        width={64}
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt=""
        style={{ marginBottom: `var(--space-3)` }}
      /> */}
      <h2>Welcome to my Portfolio</h2>
      <p>
        Hello, I'm <b>Ricardo</b>, a passionate{" "}
        <b>technology enthusiast and web developer</b> dedicated to building
        innovative digital solutions.
      </p>
    </main>
  </Layout>
)

// Define SEO metadata for the page
export const Head = () => <Seo title="Home Page"></Seo>

export default IndexPage
