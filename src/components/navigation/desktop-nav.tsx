"use client";
import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Image from "next/image";
import logoImage from "@/assets/logo.png";

export function DesktopNavbar() {
  const [scrollY, setScrollY] = React.useState(0);
  const [isVisible, setIsVisible] = React.useState(true);
  const scrollThreshold = 10; // Adjust this threshold as needed

  React.useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > scrollY + scrollThreshold) {
        setIsVisible(false);
      } else if (scrollY > currentScrollY + scrollThreshold / 2) {
        setIsVisible(true);
      }
      setScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollY]);

  return (
    <div
      className={`fixed top-0 left-0 right-0 bg-background z-50 w-full transition-all duration-200 ease-linear ${isVisible ? "h-24" : "h-0"} overflow-hidden`}
    >
      <div
        className={`max-w-8xl px-4 lg:px-44 pt-2 flex items-center justify-between text-sm transition-transform duration-200 ease-linear ${isVisible ? "translate-y-0" : "-translate-y-full"}`}
      >
        <Link
          className="flex place-items-center text-2xl lg:pointer-events-auto lg:p-0"
          href="/"
        >
          <Image src={logoImage} alt={"Company logo"} width={80} height={80} />
        </Link>
        <NavigationMenu className="lg:ml-auto">
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href="/#about-us" legacyBehavior passHref>
                <NavigationMenuLink
                  className={cn(navigationMenuTriggerStyle())}
                >
                  About Us
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/blog" legacyBehavior passHref>
                <NavigationMenuLink
                  className={cn(navigationMenuTriggerStyle())}
                >
                  Blog
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/services" legacyBehavior passHref>
                <NavigationMenuLink
                  className={cn(navigationMenuTriggerStyle())}
                >
                  Services
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/contact" legacyBehavior>
                <NavigationMenuLink
                  className={cn(navigationMenuTriggerStyle(), "hover:cursor-pointer")}
                >
                  Contact Us
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </div>
  );
}
