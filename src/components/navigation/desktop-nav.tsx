"use client"
import * as React from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import logoImage from '@/assets/logo.png'

export function DesktopNavbar() {
  const [scrollY, setScrollY] = React.useState(0);
  const [isVisible, setIsVisible] = React.useState(true);
  const currentPath = usePathname();
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

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollY]);

  return (
    <div className={`fixed top-0 left-0 right-0 bg-background z-50 w-full transition-all duration-200 ease-linear ${isVisible ? 'h-24' : 'h-0'} overflow-hidden`}>
      <div className={`max-w-8xl px-4 lg:px-44 pt-2 flex items-center justify-between text-sm transition-transform duration-200 ease-linear ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
        <Link
          className="flex place-items-center text-2xl lg:pointer-events-auto lg:p-0"
          href="/"
        >
          <Image
            src={logoImage}
            alt={"Company logo"}
            width={80}
            height={80}
          />
        </Link>
        <NavigationMenu className="lg:ml-auto">
          <NavigationMenuList>
            <NavigationMenuItem>
                <Link href="#about-us" legacyBehavior passHref>
                    <NavigationMenuLink className={cn(currentPath === "#about-us" ? "bg-accent mr-auto" : "bg-transparent mr-auto", navigationMenuTriggerStyle())}>
                        About Us
                    </NavigationMenuLink>
                </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
                <Link href="/programs" legacyBehavior passHref>
                    <NavigationMenuLink className={cn(currentPath === "/scheduling" ? "bg-accent mr-auto" : "bg-transparent mr-auto", navigationMenuTriggerStyle())}>
                      Articles
                    </NavigationMenuLink>
                </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
                <Link href="/scheduling" legacyBehavior passHref>
                    <NavigationMenuLink className={cn(currentPath === "/scheduling" ? "bg-accent mr-auto" : "bg-transparent mr-auto", navigationMenuTriggerStyle())}>
                      Schedule a Consultation
                    </NavigationMenuLink>
                </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
                <Link href="/contact-us" legacyBehavior>
                    <NavigationMenuLink className={cn(currentPath === "/contact-us" ? "bg-accent mr-auto cursor-pointer" : "bg-transparent mr-auto cursor-pointer", navigationMenuTriggerStyle())}>
                      Contact Us
                    </NavigationMenuLink>
                </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </div>
  )
}
