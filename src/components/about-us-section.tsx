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
import aboutUs1 from "@/assets/aboutus1.jpg";
import aboutUs2 from "@/assets/aboutus2.jpg";
import aboutUs3 from "@/assets/aboutus3.jpg";

import { Icons } from "./icons";

export function AboutUsSection() {
  return (
    <main id="about-us">
      <div className="min-w-screen flex flex-col justify-center relative">
        {" "}
        {/* Added relative positioning here */}
        <div className="flex flex-row justify-center gap-12 bg-muted py-12 px-52">
          <Image
            src={aboutUs3}
            alt={""}
            className="w-1/2 h-96 object-contain rounded-md"
            style={{ borderRadius: "6px" }}
          />
          <AboutUsCard
            header={"About Us"}
            body={
              "Educación for All is a nonprofit organization dedicated to making higher education accessible for all. \
                        We provide the necessary resources so that all students, regardless of origin, can achieve their educational goals in the United States."
            }
          />
        </div>
        <div className="flex flex-row justify-center gap-24 py-12 px-52">
          <AboutUsCard
            header={"Our Mission"}
            body={
              "Educación for All  was born in response to the urgent need for access to information and educational opportunities for Hispanic students with limited resources. \
                Our goal is to empower and guide these students through American education system allowing them to compete on equal terms for a place at top universities."
            }
            // We are dedicated to closing the information gap and fostering a level playing field in access to quality higher education."}
          />
          <Image
            src={aboutUs2}
            alt={""}
            className="w-1/2 h-96 object-contain rounded-md"
            style={{ borderRadius: "6px" }}
          />
        </div>
        <div className="flex flex-row justify-center gap-24 py-12 px-52">
          <Image
            src={aboutUs1}
            alt={""}
            className="w-1/2 h-96 object-contain rounded-md"
            style={{ borderRadius: "6px" }}
          />
          <AboutUsCard
            header={"Our Committment"}
            body={
              "We are committed to Hispanic students who aspire to academic and professional success, ensuring that neither language nor lack of knowledge about the American educational system are insurmountable barriers."
            }
          />
        </div>
      </div>
    </main>
  );
}

function AboutUsCard({ header, body }: { header: string; body: string }) {
  return (
    <Card className="w-[100%] mt-auto mb-auto text-left bg-transparent border-none shadow-none rounded-md">
      <CardHeader className="text-4xl font-bold">{header}</CardHeader>
      <CardContent>{body}</CardContent>
    </Card>
  );
}
