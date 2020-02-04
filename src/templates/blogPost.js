import React from 'react'
import { graphql } from 'gatsby'
import Layout from "../components/layout"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"


class BlogPost extends React.Component {
    render(){

        return (
            <Layout>
                <div style={{padding: '24px'}}>
                    <h1>{this.props.data.contentfulBlogPost.header}</h1>
                    <div>{documentToReactComponents(this.props.data.contentfulBlogPost.childContentfulBlogPostContentRichTextNode.json)}</div>
                </div>
            </Layout>
        );
    }

}

export default BlogPost;

export const blogPostQuery = graphql`
    query BlogPostBySlug($slug: String!) {
        contentfulBlogPost(slug: { eq: $slug }) {
            header
            childContentfulBlogPostContentRichTextNode {
                json
            } 
        }         
    }
`