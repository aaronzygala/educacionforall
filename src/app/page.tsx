import React, { useEffect, useState } from "react";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { AboutUsSection } from "@/components/about-us-section";
import { BlogSection } from "@/components/blog-section";
import { ServicesSection } from "@/components/services-section";
import { SupportSection } from "@/components/support-section";

const images = [
  "/header-images/image1.jpg",
  "/header-images/image2.jpg",
  "/header-images/image3.jpg",
  "/header-images/image4.jpg",
  "/header-images/image5.jpg",
  "/header-images/image6.jpg",
  "/header-images/image7.jpg",
  "/header-images/image8.jpg",
  "/header-images/image9.jpg",
  "/header-images/image10.jpg",
  "/header-images/image11.jpg",
  "/header-images/image12.jpg",
  "/header-images/image13.jpg",
];
const randomIndex = Math.floor(Math.random() * images.length);
const randomImage = images[randomIndex];
function Home() {
  return (
    <main className="relative min-h-screen">
      <div className="relative min-h-[85vh] flex">
        <Image
          src={randomImage}
          alt="Header Background"
          layout="fill"
          objectFit="cover"
          className="z-10"
          quality={100}
          priority
        />
        <div className="flex items-center justify-center h-fit w-fit ml-auto mr-auto mt-auto mb-auto rounded-xl backdrop-blur-md overflow-hidden relative z-10">
          <div className="text-center">
            <Card className="border-none bg-transparent shadow-none">
              <CardHeader>
                <CardTitle className="text-8xl lg:text-7xl text-white">
                  Educación For All
                </CardTitle>
                <CardDescription className="text-4xl lg:text-4xl text-white">
                  Cuando La Educación Triunfa, Todos Triunfamos!
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </div>
      <AboutUsSection />
      <BlogSection />
      <ServicesSection />
      <SupportSection />
    </main>
  );
}

export default Home;
