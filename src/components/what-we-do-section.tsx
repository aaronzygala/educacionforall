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
      <div className="min-w-screen flex justify-center relative"> {/* Added relative positioning here */}
        <div className="py-24">
          <Card className="bg-[#4D8264] w-[1000px] text-right text-background relative rounded-2xl"> {/* Ensured card has relative positioning */}
            <div className="absolute left-[-200px] top-[250px]  w-[500px]"> {/* Added container for the image with absolute positioning */}
              <Image src={ninaImage} alt="Nina" className="rounded-2xl shadow-2xl" />
            </div>
            <CardHeader className="">
              <CardTitle className="text-5xl">
                About Us
              </CardTitle>
            </CardHeader>
            <CardContent className="w-[50%] ml-auto">
              <div>
                Educacion for All is a 501 (c)(3) organization dedicated to maximizing accessible higher education options for all. We provide the necessary resources so that all students,
                regardless of their origin or the language their parents speak, can achieve their educational goals in the United States.
              </div>
              <div className="font-bold pt-12 text-2xl">
                Our Essence
              </div>
              <div>
                Education for All was born in response to the urgent need for access to information and educational opportunities for Hispanic students with limited resources.
                Our goal is to empower these students, with information about the American educational system, to develop strong academic and extracurricular profiles, allowing them to compete on equal terms for a place at top universities.
                We are dedicated to closing the information gap and fostering a level playing field in access to quality higher education.
              </div>
              <div className="font-bold pt-12 text-2xl">
                Our Committment
              </div>
              <div>
                We are committed to Hispanic students who aspire to academic and professional success,
                ensuring that neither language nor lack of knowledge about the American educational system are insurmountable barriers.
              </div>
              <div className="pt-12">
                <span className="font-bold"> Support our efforts </span>to make a meaningful difference in the lives of these young people. Your contribution can change futures.
              </div>
              <div className="pt-12">
                For more information, donations and/or questions, do not hesitate to write to us at: <Link href="#" className="hover:underline">info@educacionforall.org</Link>.
              </div>
              <div className="pt-12">
                <Button>
                  Let's Keep the Connection!
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
}
