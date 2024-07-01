import Image from "next/image";
import {
  Card,
  CardHeader,
  CardContent,
} from "@/components/ui/card";
import Link from "next/link";
import { formatDate } from "@/lib/utils";
import { Post } from "@/lib/types";

export function BlogCard({
    blogPost
}: {
    blogPost: Post
}) {
    return (
        <Link href={"post/" + blogPost.uri}>
            <Card className="text-left border-none shadow-lg hover:shadow-2xl hover:cursor-pointer transition-all delay-50 rounded-2xl w-[100%]">
                <CardHeader className="p-0 text-4xl font-bold relative">
                    <div className="relative rounded-t-2xl h-64 w-full overflow-hidden">
                        <Image
                            src={blogPost.featuredImage.sourceUrl}
                            alt={"Blog image"}
                            width={200}
                            height={200}
                            className="absolute top-0 left-0 h-full w-full object-cover"
                        />
                        {/* <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-b from-gray-950 to-transparent opacity-70 rounded-t-2xl"></div> */}
                        {/* <Badge className="absolute ml-4 my-4 rounded-sm bg-[#4D8264]"></Badge> */}
                    </div>
                </CardHeader>
                <CardContent className="flex flex-col h-[250px] w-[400px]">
                    <div className="text-lg tracking-tight font-bold py-4 text-nowrap text-ellipsis overflow-hidden">{blogPost.title}</div>
                    <div className="text-sm h-[100px] text-ellipsis overflow-hidden" dangerouslySetInnerHTML={{__html: blogPost.excerpt}}/>
                    <div className="mt-auto">
                        <div className="text-sm text-muted-foreground">By {blogPost.author.firstName + " " + blogPost.author.lastName}</div>
                        <div className="text-sm text-muted-foreground">{formatDate(blogPost.date)}</div>
                    </div>

                </CardContent>
            </Card>
        </Link>

    );
}