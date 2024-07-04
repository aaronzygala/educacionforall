import { Button } from "@/components/ui/button";
import { Icons } from "@/components/icons";
import Link from "next/link";
import { SocialIcon } from "react-social-icons/component";
import "react-social-icons/facebook";
import "react-social-icons/instagram";
import "react-social-icons/linkedin";
import { Separator } from "./ui/separator";

export function Footer({ showInfo }: { showInfo: boolean }) {
  return (
    <div className="w-screen flex flex-col pt-12">
      {showInfo && (
        <div className="flex flex-row px-12 pb-12 gap-12 ml-auto mr-auto grid grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-col w-[96]">
            <div className="text-left text-xl text-primary font-bold pl-4">
              Legal
            </div>
            <Button
              className="w-fit justify-start mt-2 hover:bg-transparent hover:text-muted-foreground text-xs lg:text-sm"
              variant="ghost"
            >
              Privacy Policy
            </Button>
            <Button
              className="w-fit justify-start hover:bg-transparent hover:text-muted-foreground text-xs lg:text-sm"
              variant="ghost"
            >
              Terms of Service
            </Button>
            <Button
              className="w-fit justify-start hover:bg-transparent hover:text-muted-foreground text-xs lg:text-sm"
              variant="ghost"
            >
              Responsible Disclosure
            </Button>
          </div>
          <div className="flex flex-col">
            <div className="text-left text-xl text-primary font-bold pl-4">
              Contact Us
            </div>
            <Button
              className="w-fit justify-start mt-2 hover:bg-transparent hover:text-muted-foreground text-xs lg:text-sm"
              variant="ghost"
            >
              +1 (555)-555-5555
            </Button>
            <Button
              className="w-fit justify-start hover:bg-transparent hover:text-muted-foreground text-xs lg:text-sm"
              variant="ghost"
            >
              info@collegeparatodos.com
            </Button>
            <Button
              className="justify-start hover:bg-transparent hover:text-muted-foreground text-xs lg:text-sm"
              variant="ghost"
            >
              1234 Address Lane, State, USA, ZIP
            </Button>
          </div>
          <div className="flex flex-col w-[96]">
            <div className="text-left text-xl text-primary font-bold pl-4">
              Socials
            </div>
            <div className="flex flex-row gap-2 ml-2">
              <SocialIcon
                url="https://www.facebook.com/collegeparatodos"
                target="_blank"
                style={{ height: 40, width: 40 }}
              />
              <SocialIcon
                url="https://www.instagram.com/collegeparatodos/"
                target="_blank"
                style={{ height: 40, width: 40 }}
              />
              <SocialIcon
                url="https://www.linkedin.com/in/anamariajaramillo/"
                target="_blank"
                style={{ height: 40, width: 40 }}
              />
            </div>
          </div>
        </div>
      )}

      <div className="flex flex-col text-xs text-muted-foreground ml-auto mr-auto gap-4 text-center">
        &copy;2024 Educacion For All. Designed by Aaron Zygala. All rights
        reserved.
        <div className="flex flex-row pb-4 gap-2">
          <div className="align-center">
            Educación For All is a 501(c)3 nonprofit organization.
          </div>
          <Link href="https://collegeparatodos.com/" target="_blank">
            <div className="hover:underline hover:text-gray-500 hover:cursor-pointer">
              Visit our sister company College Para Todos.
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
