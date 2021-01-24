import React from "react"
import { graphql } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { Helmet } from "react-helmet"

import Layout from "../components/OldLayout"

import styles from "./Post.module.scss";

type PostProps = { data?: any }

export default ({
  data: {
    mdx: {
      frontmatter,
      body,
      excerpt
    },
    site: {
      siteMetadata: meta
    }
  }
}: PostProps) =>
(
  <Layout>
    <Helmet>
      <title>{ frontmatter.title } &mdash; { meta.title }</title>
      <meta name="description" content={excerpt} />
    </Helmet>

    <article className={styles.article}>
      <header>
        <time>{ frontmatter.date }</time>
        <h1>{ frontmatter.title }</h1>
      </header>

      <main className={styles.prose}>
        <MDXProvider>
          <MDXRenderer>
            { body }
          </MDXRenderer>
        </MDXProvider>
      </main>
    </article>
  </Layout>
);

export const query = graphql`
query($slug: String!) {
  mdx(fields: { slug: { eq: $slug } }) {
    frontmatter {
      title
      date(formatString: "DD MMMM, YYYY")
    }
    body
    excerpt
  }
  site {
    siteMetadata {
      title
      author {
        name
      }
    }
  }
}
`