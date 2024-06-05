import Image, { StaticImageData } from "next/image";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {Badge} from "@/components/ui/badge";
import blogImage from "@/assets/blog-header.jpg";
import blogImage2 from "@/assets/blog-header2.jpg";
import blogImage3 from "@/assets/blog-header3.jpeg";
import { Icons } from "./icons";

export function BlogSection() {
  return (
    <main id="about-us">
      <div className="min-w-screen flex flex-col justify-center">
        <div className="flex flex-col justify-center gap-4 py-12 px-52">
            <div className="text-center text-5xl font-bold mb-6">Check out our Blog</div>
            <div className="flex flex-row gap-12">
                <BlogCard
                    title={"To find money to pay for college"}
                    description={"College is a significant investment in your future, but the cost can be a barrier. \
                                Fortunately, there are various scholarships that can help ease the financial burden. \
                                Here we present the different types of scholarships available to pay for..."}     
                    image={blogImage}
                    writtenBy={"Ana Maria Jaramillo"}
                    publishDate={"May 24, 2024"}
                    category={"Preparation for college"}
                />
                <BlogCard
                    title={"The 4 essential pillars to access the TOP universities in the USA"}
                    description={"Navigating the path to the top universities in the USA can be a challenge.\
                                 This infographic breaks down the essential pillars for accessing these prestigious institutions, \
                                 offering students and parents a clear and practical guide to navigate this exciting journey..."}     
                    image={blogImage2}
                    writtenBy={"Ana Maria Jaramillo"}
                    publishDate={"May 10, 2024"}
                    category={"Preparation for college"}
                />
                <BlogCard
                    title={"Guiding your children's college decisions"}
                    description={"College is a significant investment in your future, but the cost can be a barrier. \
                                Fortunately, there are various scholarships that can help ease the financial burden. \
                                Here we present the different types of scholarships available to pay for..."}     
                    image={blogImage3}
                    writtenBy={"Ana Maria Jaramillo"}
                    publishDate={"April 12, 2024"}
                    category={"Preparation for college"}
                />
            </div>
            <div className="ml-auto mr-auto mt-6">
                <Button variant="outline" className="h-12 w-30 border-black rounded-full hover:bg-slate-950 hover:text-white gap-4 hover:gap-8 transition-all delay-100 ease-out">
                    View All <Icons.moveRight  strokeWidth={0.8}/>
                </Button>
            </div>

        </div>
      </div>
    </main>
  );
}


function BlogCard({
    title,
    description,
    image,
    writtenBy,
    publishDate,
    category
}: {
    title: string,
    description: string,
    image: StaticImageData,
    writtenBy: string,
    publishDate: string,
    category: string
}) {
    return (
        <Card className="text-left border-none shadow-lg hover:shadow-2xl transition-all delay-50 rounded-2xl">
            <CardHeader className="p-0 text-4xl font-bold relative">
                <div className="relative rounded-t-2xl h-64 w-full overflow-hidden">
                    <Image
                        src={image}
                        alt={"Blog image"}
                        className="absolute top-0 left-0 h-full w-full object-cover"
                    />
                    <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-b from-gray-950 to-transparent opacity-70 rounded-t-2xl"></div>
                    <Badge className="absolute ml-4 my-4 rounded-sm bg-[#4D8264]">{category}</Badge>
                </div>
            </CardHeader>
            <CardContent className="flex flex-col h-[300px]">
                <div className="text-xl font-bold py-4">{title}</div>
                <div className="text-sm">{description}</div>
                <div className="mt-auto">
                    <div className="text-sm text-muted-foreground">By {writtenBy}</div>
                    <div className="text-sm text-muted-foreground">{publishDate}</div>
                </div>

            </CardContent>
        </Card>
    );
}

export default BlogCard;