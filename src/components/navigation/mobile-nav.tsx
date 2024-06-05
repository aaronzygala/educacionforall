"use client"

import * as React from "react"
import { useState } from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuContent,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
    SheetFooter,
    SheetClose,
  } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Separator
} from "@/components/ui/separator"
import { Icons } from "@/components/icons"
import { usePathname } from 'next/navigation'

export function MobileNavbar() {
  const currentPath = usePathname();
  const [sheetOpen, setSheetOpen] = useState(false);

  return (
    <div className="fixed top-0 px-4 lg:px-44 pt-4 bg-background z-50 min-w-full">
      <div className="pb-3 items-center  text-sm flex lg:flex-row">
        <Link
          className="text-white place-items-center text-2xl lg:pointer-events-auto lg:p-0"
          href="/"
        >
          Axiom Test Prep
        </Link>
        <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
            <SheetTrigger asChild >
                <Button variant="ghost" className="ml-auto"><Icons.alignJustify size={24}/></Button>
            </SheetTrigger>
            <SheetContent side={"right"} className="w-[200px]">
                <SheetHeader>
                    <SheetTitle className="font-bold text-left">Directory</SheetTitle>
                    <Separator/>
                </SheetHeader>
                <div className="flex flex-col mt-2 ">
                        <Link href="/about-us" legacyBehavior passHref>
                            <Button 
                              variant="ghost" 
                              className={currentPath === "/about-us" ? "bg-accent mr-auto" : "bg-transparent mr-auto"}
                              onClick={() => setSheetOpen(false)}
                            >
                                <Icons.usersRound strokeWidth={0.8} size={16} className="mr-2"/>
                                About Us
                            </Button>
                        </Link>
                        <Link href="/programs" legacyBehavior passHref>
                            <Button 
                              variant="ghost" 
                              className={currentPath === "/programs" ? "bg-accent mr-auto" : "bg-transparent mr-auto"}
                              onClick={() => setSheetOpen(false)}
                            >
                                <Icons.notebook strokeWidth={0.8} size={16} className="mr-2"/>
                                Programs
                            </Button>
                        </Link>
                        <Link href="/scheduling" legacyBehavior passHref>
                            <Button 
                              variant="ghost" 
                              className={currentPath === "/scheduling" ? "bg-accent mr-auto" : "bg-transparent mr-auto"}
                              onClick={() => setSheetOpen(false)}
                            >
                                <Icons.calendarDays strokeWidth={0.8} size={16} className="mr-2"/>
                                Scheduling
                            </Button>
                        </Link>
                        <Link href="/contact-us" legacyBehavior passHref>
                            <Button 
                              variant="ghost" 
                              className={currentPath === "/contact-us" ? "bg-accent mr-auto" : "bg-transparent mr-auto"}
                              onClick={() => setSheetOpen(false)}
                            >
                                <Icons.send strokeWidth={0.8} size={16} className="mr-2" />
                                Contact Us
                            </Button>
                        </Link>
                </div>
            </SheetContent>
        </Sheet>
      </div>
      <Separator className=""/>
    </div>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
