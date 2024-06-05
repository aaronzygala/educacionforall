"use client";
import { Separator } from "@/components/ui/separator";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import headerImage from "@/assets/header.jpg";
import React, { useState, useEffect } from "react";
import { AboutUsSection } from "@/components/about-us-section";
import { BlogSection } from "@/components/blog-section";
// import { useMediaQuery } from "@/lib/utils";

export default function Home() {
  // const isMobile = useMediaQuery('(max-width: 1024px)');
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const parallaxStyle = {
    backgroundImage: `url(${headerImage.src})`,
    backgroundPosition: `center ${scrollY * 0.5}px`,
  };

  return (
    <main className="relative min-h-screen">
      <div
        className="relative min-h-[70vh] bg-cover bg-center"
        style={parallaxStyle}
      >
        <div className="flex items-center justify-center min-h-[70vh] backdrop-blur-0 overflow-hidden">
          <div className="text-center">
            <Card className="border-none bg-transparent shadow-none">
              <CardHeader>
                <CardTitle className="text-4xl lg:text-7xl text-background drop-shadow-[0_2px_2px_rgba(0,0,0,1.0)]">
                  Educación For All
                </CardTitle>
                <CardDescription className="text-xl lg:text-4xl text-background drop-shadow-[0_2px_2px_rgba(0,0,0,1.0)]">
                  Cuando La Educación Triunfa, Todos Triunfamos!
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </div>
      <AboutUsSection/>
      <BlogSection/>
    </main>
  );
}
