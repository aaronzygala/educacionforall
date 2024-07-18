"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Icons } from "@/components/icons";
import { Textarea } from "@/components/ui/textarea";
import museumImage from "@/assets/museum2.jpg";
import React, { useState, useEffect } from "react";
import "react-social-icons/facebook";
import "react-social-icons/instagram";
import "react-social-icons/linkedin";
import { SocialIcon } from "react-social-icons/component";

// import { useMediaQuery } from "@/lib/utils"

export default function ContactUs() {
  //   const isMobile = useMediaQuery('(max-width: 1024px)');
  //   const [scrollY, setScrollY] = useState(0);

  //   useEffect(() => {
  //     const handleScroll = () => {
  //       setScrollY(window.scrollY);
  //     };
  //     window.addEventListener("scroll", handleScroll);

  //     return () => {
  //       window.removeEventListener("scroll", handleScroll);
  //     };
  //   }, []);

  //   const parallaxStyle = !isMobile ? {
  //     backgroundImage: `url(${museumImage.src})`,
  //     backgroundPosition: `center ${scrollY * 0.5}px`,
  //   } : {
  //     backgroundImage: `url(${museumImage.src})`,
  //     backgroundPosition: 'center center', // Static background position for mobile
  //   };

  return (
    <main>
      <div
        className="relative min-h-screen bg-cover"
        //   style={parallaxStyle}
      >
        <div className="relative backdrop-blur-0 bg-gradient-to-b from-background to-transparent overflow-hidden z-10 flex flex-row items-left lg:px-44 pt-4">
          <Card className="mt-24 border-none bg-transparent shadow-none  w-full">
            <CardHeader>
              <CardTitle className="text-5xl font-extrabold">
                Contact Us
              </CardTitle>
              <CardDescription>
                Feel free to leave any inquiries below, join our newsletter, or
                leave a donation.
              </CardDescription>
            </CardHeader>
            <CardContent className="w-full">
              <form className="w-full">
                <div className="flex flex-col w-full items-center gap-6">
                  <div className="w-full">
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      className="py-6"
                      placeholder="Enter your full name..."
                    />
                  </div>
                  <div className="w-full">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      className="py-6"
                      placeholder="Enter your email address..."
                    />
                  </div>
                  <div className="w-full">
                    <Label htmlFor="textarea">Message</Label>
                    <Textarea className="py-20" />
                  </div>
                  <Button className="flex gap-1 text-md font-bold w-1/2 mr-auto">
                    Send <Icons.moveRight size={20} strokeWidth={1.4} />
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
          <Card className="w-[100%] mt-24 rounded-md border-none shadow-none ">
            <CardHeader>
              <CardTitle className="text-4xl font-bold">
                Join our newsletter
              </CardTitle>
              <CardDescription>
                Leave your email below and you&apos;ll receive our weekly email,
                including any information regarding our workshops, programs, or
                the FAFSA.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-4">
              <div className="">
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  className="py-6"
                  placeholder="Enter your email address..."
                />
              </div>
              <Button className="w-[50%] flex gap-1 text-md font-bold">
                Sign Up <Icons.moveRight size={20} strokeWidth={1.4} />
              </Button>

              <div className="mt-12 text-2xl font-bold">
                You can also use these resources to reach us
              </div>
              <div className="grid grid-cols-2 gap-12 ">
                <div className="flex flex-col gap-4">
                    <div className="flex flex-row">
                        <span className="bg-primary p-3 rounded-full h-fit w-fit"><Icons.phone className="text-background"/></span>
                        <span className="mt-auto mb-auto pl-4 ">
                            +1 (555)-555-5555
                        </span>
                    </div>
                    <div className="flex flex-row">

                    <span className="bg-primary p-3 rounded-full h-fit w-fit"><Icons.mail className="text-background"/></span>
                    <span className="mt-auto mb-auto ml-4">
                        info@collegeparatodos.com
                    </span>  
                    </div>
                    <div className="flex flex-row">

                    <span className="bg-primary p-3 rounded-full h-fit w-fit"><Icons.mapPin className="text-background"/></span>
                    <span className="mt-auto mb-auto ml-4">
                        1234, Address Lane, City, State United States, Zip Code
                    </span>  
                    </div> 
                </div>
                <div className="flex flex-col gap-4">
                  <div className="flex flex-row gap-2 ml-2">
                    <SocialIcon
                      url="https://www.facebook.com/collegeparatodos"
                      target="_blank"
                      style={{ height: 48, width: 48 }}
                    />
                    <span className="mt-auto mb-auto ml-4">
                        @collegeparatodos
                    </span> 
                    </div>
                    <div className="flex flex-row gap-2 ml-2">

                    <SocialIcon
                      url="https://www.instagram.com/collegeparatodos/"
                      target="_blank"
                      style={{ height: 48, width: 48 }}
                    />
                    <span className="mt-auto mb-auto ml-4">
                        @collegeparatodos
                    </span> 
                    </div>
                    <div className="flex flex-row gap-2 ml-2">

                    <SocialIcon
                      url="https://www.linkedin.com/in/anamariajaramillo/"
                      target="_blank"
                      style={{ height: 48, width: 48 }}
                    />
                    <span className="mt-auto mb-auto ml-4">
                        @anamariajaramillo
                    </span> 
                    </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
}
