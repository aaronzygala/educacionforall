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
          </Card>
        </div>
      </div>
    </main>
  );
}
