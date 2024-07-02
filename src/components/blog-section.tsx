import { Button } from "@/components/ui/button";
import { Icons } from "./icons";
import axios from 'axios'
import { Suspense } from "react";
import Loader from "@/components/loader/loader";
import {Post} from "@/lib/types"
import {BlogCard} from "@/components/blog-card"
import Link from "next/link";

async function queryRecentPosts() {
    const query = `
    query getRecentPosts {
        posts(first: 3) {
          edges {
            node {
              id
              excerpt
              date
              uri
              author {
                node {
                  id
                  firstName
                  lastName
                }
              }
              featuredImage {
                node {
                  id
                  mimeType
                  sourceUrl
                }
              }
              title
            }
          }
        }
      }
        `;
  
    try {
        const res = await axios.post(process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT!, 
            {
            query: query,
          }, {
              headers: {
                'Content-Type': 'application/json'
              }
            });
    
        const responseBody = await res.data; // Access data directly from response
        if (responseBody.data.posts) { // Optional chaining for safer access
            return responseBody.data.posts.edges;
        } 
        else {
            throw new Error("No posts found in response data");
        }
    } 
    catch (error) {
        console.error("Error fetching posts:", error);
    }
  }

  async function getRecentPosts() {
    try {
      const recentPostsResponse = await queryRecentPosts(); // Assuming queryRecentPosts returns a Promise
      const outputList:Post[] = []; // Initialize empty array
  
      for (let i = 0; i < recentPostsResponse.length; i++) {
        const post = recentPostsResponse[i]; // Destructure for readability
        outputList.push({
          id: post.node.id,
          title: post.node.title,
          uri: post.node.uri,
          excerpt: post.node.excerpt,
          date: post.node.date,
          featuredImage: {
            id: post.node.featuredImage.node.id,
            sourceUrl: post.node.featuredImage.node.sourceUrl,
            mimeType: post.node.featuredImage.node.mimeType,
          },
          author: {
            id: post.node.author.node.id,
            firstName: post.node.author.node.firstName,
            lastName: post.node.author.node.lastName,
          },
        } satisfies Post);
      }
  
      return outputList;
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  }


export async function BlogSection() {
  const recentPosts = await getRecentPosts()
  return (
      <div className="min-w-screen flex flex-col justify-center">
        <div className="flex flex-col justify-center gap-4 py-12 px-52">
            <div className="text-center text-5xl font-bold mb-6">Check out our Blog</div>
            <Suspense fallback={<Loader />}>
                <div className="flex flex-row gap-12">
                    {recentPosts!.map((post: Post) => (
                        <BlogCard blogPost={post} key={post.id} /> // Add key prop for better performance
                    ))}
                </div>
            </Suspense>
            <div className="ml-auto mr-auto mt-6">
                <Link href="/blog">
                    <Button variant="outline" className="h-12 w-30 border-black rounded-md hover:bg-slate-950 hover:text-white gap-4 hover:gap-8 transition-all delay-100 ease-out">
                        View All <Icons.moveRight  strokeWidth={0.8}/>
                    </Button>
                </Link>

            </div>

        </div>
      </div>
  );
}