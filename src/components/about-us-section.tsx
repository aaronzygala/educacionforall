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
import ninaImage from "@/assets/Nina-universitaria.jpeg";

export function AboutUsSection() {
  return (
    <main id="about-us">
      <div className="min-w-screen flex flex-col justify-center relative"> {/* Added relative positioning here */}
        <div className="flex flex-row justify-center gap-24 bg-muted py-12 px-52">
            <Image
                src={ninaImage}
                alt={"Nina at a University"}
                className="h-96 w-96"
            />  
            <AboutUsCard
                header={"About Us"}
                body={"Educacion for All is a nonprofit organization dedicated to making higher education accessible for all. \
                        We provide the necessary resources so that all students, regardless of origin, can achieve their educational goals in the United States."}
            />
        </div>
        <div className="flex flex-row justify-center gap-24 py-12 px-52">
            <AboutUsCard
                header={"Our Mission"}
                body={"Education for All  was born in response to the urgent need for access to information and educational opportunities for Hispanic students with limited resources. \
                Our goal is to empower these students, with information about the American educational system, to develop strong academic and extracurricular profiles, allowing them to compete on equal terms for a place at top universities. \
                We are dedicated to closing the information gap and fostering a level playing field in access to quality higher education."}
            />
            <Image
                src={ninaImage}
                alt={"Nina at a University"}
                className="h-96 w-96"
            />  
        </div>
        <div className="flex flex-row justify-center gap-24 py-12 px-52">
            <Image
                src={ninaImage}
                alt={"Nina at a University"}
                className="h-96 w-96"
            />  
            <AboutUsCard
                header={"Our Committment"}
                body={"We are committed to Hispanic students who aspire to academic and professional success, ensuring that neither language nor lack of knowledge about the American educational system are insurmountable barriers."}
            />
        </div>
        <div className="flex flex-row justify-center gap-24 bg-muted py-12 px-52">
            <Card className="w-[50%] mt-auto mb-auto text-center bg-transparent border-none shadow-none rounded-2xl">
                <CardHeader className="text-5xl font-bold">
                    Support Our Efforts
                </CardHeader>
                <CardDescription className="text-2xl">
                    to make a meaningful difference in the lives of these young people. Your contribution can change futures.
                </CardDescription>
                <CardContent className="pt-12">
                    For more information, donations and/or questions, please
                    <Button className="m-2">
                        Contact Us
                    </Button>
                </CardContent>
            </Card>
        </div>
      </div>
    </main>
  );
}


function AboutUsCard({header, body}: {header:string, body:string}){
    return(
        <Card className="w-[50%] mt-auto mb-auto text-left bg-transparent border-none shadow-none rounded-2xl">
            <CardHeader className="text-4xl font-bold">
                {header}
            </CardHeader>
            <CardContent>
                {body}
            </CardContent>
        </Card>
    );
}