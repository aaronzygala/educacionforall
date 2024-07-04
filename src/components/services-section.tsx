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
import { Badge } from "@/components/ui/badge";
import serviceImage from "@/assets/imagen-talleres-padres.png";
import serviceImage2 from "@/assets/Imagen-talleres-1.png";
import serviceImage3 from "@/assets/Imagen-universidad.png";
import { Icons } from "./icons";

export function ServicesSection() {
  return (
    <main>
      <div className="min-w-screen flex flex-col justify-center">
        <div className="flex flex-col justify-center gap-4 py-12 px-52">
          <div className="text-center text-5xl font-bold mb-6">
            Our Services
          </div>
          <div className="flex flex-row gap-12 ml-auto mr-auto">
            <ServiceCard
              title={"Parent Workshops"}
              description={
                "Family involvement is key to student success.\
                 That's why we offer free seminars and workshops \
                 so that you can accompany and support your children on their path to university.\
                 Because going to university is a family decision."
              }
              image={serviceImage}
            />
            <ServiceCard
              title={"Bilingual Student Workshops"}
              description={
                "Throughout the year we offer free workshops in high schools, libraries, \
                community centers and also virtually, so that Hispanic high school students, \
                especially newcomers, can learn more about the educational system."
              }
              image={serviceImage2}
            />
            <ServiceCard
              title={"Personalized Guidance Plan"}
              description={
                "The journey  to college may seem complex, but with our guidance, students can navigate this path with confidence.\
                Every year we help junior and senior students free of charge , \
                in a personalized way, in the entire process of applying to universities."
              }
              image={serviceImage3}
            />
          </div>
          <div className="ml-auto mr-auto">
            <Button
              variant="outline"
              className="ml-auto mr-auto mt-4 bg-transparent h-12 border-black rounded-md hover:bg-slate-950 hover:text-white gap-4 hover:gap-8 transition-all delay-100 ease-out"
            >
              Learn More <Icons.moveRight strokeWidth={0.8} />
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}

function ServiceCard({
  title,
  description,
  image,
}: {
  title: string;
  description: string;
  image: StaticImageData;
}) {
  return (
    <Card className="group text-left border-none rounded-md shadow-lg">
      <CardHeader className="p-0 text-4xl font-bold relative">
        <div className="relative h-64 w-full">
          <Image
            src={image}
            alt={"Service image"}
            className="absolute top-0 left-0 h-full w-full object-cover rounded-t-md"
          />
        </div>
      </CardHeader>
      <CardContent className="flex flex-col w-96">
        <div className="justify-center text-center text-xl font-bold py-2 pt-4">
          {title}
        </div>
        <div className="text-sm">{description}</div>
      </CardContent>
    </Card>
  );
}
