import * as React from "react"
import Layout from "../components/layout"

const AboutPage = () => {
  return (
    <Layout pageTitle="About Me">
      <p style={{ textAlign: `justify` }}>
        I’m a passionate web developer with expertise in creating dynamic,
        user-friendly websites and applications. I specialize in front-end and
        back-end development using technologies like JavaScript, React NodeJS
        and Python among others. I enjoy solving complex problems through clean
        and efficient code. My goal is to build responsive, intuitive web
        experiences that engage and inspire users. Let’s create something
        amazing together.
      </p>
    </Layout>
  )
}

export const Head = () => <title>About Me</title>
export default AboutPage
