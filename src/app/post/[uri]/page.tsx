import Loading from "@/components/loader/loader";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Suspense } from "react";
import {formatDate} from "@/lib/utils"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/icons";
import './blog-post.css'
import { Post } from "@/lib/types";

async function getPost(uri: string) {
  const query = `
  query GetPostByUri($uri: ID!) {
    post(id: $uri, idType: URI) {
      title
      content
      date
      featuredImage {
        node {
          sourceUrl
        }
      }
      author {
        node {
          id
          name
          uri
        }
      }
      
    }
  }
      `;

  const variables = {
    uri,
  };

  const res = await fetch(process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT!, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    next: {
      revalidate: 60,
    },
    body: JSON.stringify({ query, variables }),
  });

  const responseBody = await res.json();

  if (responseBody && responseBody.data && responseBody.data.post) {
    return responseBody.data.post;
  } else {
    throw new Error("Failed to fetch the post");
  }
}
function wordCount(str: string) { 
    return str.split(" ").length;
}
function estimateReadingTime(article: string){
    const numWords = wordCount(article);

    return Math.ceil(numWords/200).toString() + " minute read";
}

export default async function PostDetails({ params } :{params: Post}) {
  const post = await getPost(params.uri);
  function processContent(htmlString: string) {
    // Regex to match `<img>` tags with the `src` attribute
    const imgPattern = /<img\s+[^>]*?src="([^"]+)"[^>]*?\/>/gi;
  
    // Extract image URLs using the regex
    const imageUrls = [];
    let match;
    while ((match = imgPattern.exec(htmlString)) !== null) {
      imageUrls.push(match[1]); // Capture group 1 contains the URL
    }
  
    // Remove `<img>` tags using replace
    const processedHtml = htmlString.replace(imgPattern, "");
  
    return { imageUrls, processedHtml };
  }
  
  const blogImages = processContent(post.content);
  return (
      <Suspense fallback={<Loading />}>

    <div className="flex ml-auto mr-auto justify-center mt-24 pt-4 mx-24 relative bg-muted ">
        {/* <div className="absolute right-[85%] top-10">  
          <Link href="/blog" className="flex flex-row">
            <Button variant="outline" className="h-12 w-30 border-black rounded-md bg-muted hover:bg-slate-950 hover:text-white gap-4 hover:gap-8 transition-all delay-100 ease-out">
            <Icons.moveLeft strokeWidth={0.8} /> Return to Blog
            </Button>
        </Link>
        </div> */}
          <Card className="flex flex-col w-[60%] border-none shadow-none bg-muted" key={post.uri}>

            <CardHeader className="text-center my-12 flex flex-col gap-8">
                    <CardTitle className="text-5xl">{post.title}</CardTitle>
                    <CardDescription className="text-lg flex flex-col justify-center gap-4">
                        <span className="flex flex-row justify-center gap-4 ml-auto mr-auto">
                            <span className="hover:underline">
                                <Link href={post.author.node.uri}>
                                    {post.author.node.name}
                                </Link>
                            </span> | 
                            <span>{formatDate(post.date)}</span> | 
                            <span>{estimateReadingTime(post.content)}</span>
                        </span>
                    </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col ml-auto mr-auto gap-12">
                <div>
                    <Image
                        src={post.featuredImage.node.sourceUrl}
                        alt={""}
                        width={600}
                        height={600}
                        className="ml-auto mr-auto "
                    />
                </div>
              <div className="leading-loose" dangerouslySetInnerHTML={{ __html:`${blogImages.processedHtml}` }}
              ></div>
              {blogImages.imageUrls.map((url: string, index:number) => (
                    <Image
                        key={index}
                        src={url}
                        alt={""}
                        width={600}
                        height={600}
                        className="ml-auto mr-auto "
                    />
                    ))}
            </CardContent> 
        </Card>
          </div>

      </Suspense>
  );
}