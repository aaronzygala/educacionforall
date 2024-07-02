"use client";
import axios from 'axios';
import { Post } from "@/lib/types";
import { BlogCard } from "@/components/blog-card";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import React from "react";
import Loader from '@/components/loader/loader';

async function queryPaginatedPosts(perPage = 1, after = "") {
  const query = `
    query getRecentPosts($perPage: Int!, $after: String!) {
        posts(first: $perPage, after: $after) {
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
            cursor
          }
          pageInfo {
            hasNextPage
          }
        }
      }
        `;

  try {
    const res = await axios.post(process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT!,
      {
        query: query,
        variables: { perPage, after }
      },
      {
        headers: {
          'Content-Type': 'application/json'
        }
      });

    const responseBody = await res.data;
    console.log(responseBody);
    if (responseBody.data.posts) {
      return responseBody.data.posts;
    } else {
      throw new Error("No posts found in response data");
    }
  } catch (error) {
    console.error("Error fetching posts:", error);
  }
}

export default function BlogPage() {
  const [recentPosts, setRecentPosts] = React.useState<Post[]>([]);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [hasNextPage, setHasNextPage] = React.useState(false);
  const [cursors, setCursors] = React.useState<string[]>([""]);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const perPage = 6; // Posts per page  

  React.useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      const after = cursors[currentPage - 1];
      await queryPaginatedPosts(perPage, after)
        .then((fetchedPosts) => {
          const outputList: Post[] = fetchedPosts.edges.map((post: any) => ({
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
          }));

          setRecentPosts(outputList);
          setHasNextPage(fetchedPosts.pageInfo.hasNextPage);
          if (fetchedPosts.edges.length > 0) {
            const newCursors = [...cursors];
            newCursors[currentPage] = fetchedPosts.edges[fetchedPosts.edges.length - 1].cursor;
            setCursors(newCursors);
          }
          setIsLoading(false)
        })
        .catch((e) => {
          console.error("Error! ", e);
        });
    };

    fetchData();
  }, [currentPage]);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="min-w-screen flex flex-col justify-center">
      <div className="flex flex-col justify-center gap-4 py-24 px-52">
        <div className="text-center text-5xl font-bold mb-6">Our Blog</div>
        <div>
            <div className="flex flex-row gap-12 grid grid-cols-3">
                {isLoading ? 
                    <div className="flex flex-col pt-32 text-muted-foreground col-span-3 ml-auto mr-auto mt-auto mb-auto h-[400px]">
                        <div className="ml-auto mr-auto">
                            <Loader/>
                        </div>
                    </div> :

                    recentPosts.map((post: Post, index) => (
                        <BlogCard blogPost={post} key={index} /> // Add key prop for better performance
                    ))
                }
            </div>
          </div>

          <Pagination className="mt-12">
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious
                  className={`hover:cursor-pointer border-[1px] border-primary
                      ${(currentPage === 1) ? "hover:cursor-default hover:bg-transparent text-muted-foreground hover:text-muted-foreground border-muted" : ""}`}
                  onClick={() => {
                    if (currentPage !== 1) {
                      handlePageChange(Math.max(currentPage - 1, 1))
                    }
                  }}
                />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">{currentPage}</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationNext
                  className={`hover:cursor-pointer border-[1px] border-primary
                      ${!hasNextPage ? "hover:cursor-default hover:bg-transparent text-muted-foreground hover:text-muted-foreground border-muted" : ""}`}
                  onClick={() => {
                    if (hasNextPage) {
                      handlePageChange(currentPage + 1)
                    }
                  }}
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
      </div>
    </div>
  );
}
