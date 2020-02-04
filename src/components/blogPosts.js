import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"


const BlogPosts = () => {
    const data = useStaticQuery(graphql`
        query getBlogPosts {
            allContentfulBlogPost {
                edges {
                    node {
                        slug
                        header
                    }
                }
            }
        }
    `)
    const blogs = data.allContentfulBlogPost.edges;
    console.log(blogs);
    return (
        <div style={{padding: '16px'}}> 
            <h3>Blog</h3>
            {blogs.map(blog => {
                console.log(`/blog/${blog.node.slug}`);
                return (
                    <React.Fragment>
                        <Link to={`/blog/${blog.node.slug}`}>{blog.node.header}</Link> 
                        <br/>
                    </React.Fragment>
                )
            })}
        </div>
    )
  }
  
  export default BlogPosts