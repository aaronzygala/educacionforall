import { Button } from "@/components/ui/button";
import { Icons } from "@/components/icons";
import Link from "next/link";

export function Footer() {
  return (
    <main>
      <div className="w-screen flex flex-col">
        <div className="flex flex-row px-12 py-12 gap-12 ml-auto mr-auto grid grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-col w-[96]">
            <div className="text-left text-xl text-primary font-bold pl-4">Legal</div>
            <Button className="w-fit justify-start mt-2 hover:bg-transparent hover:text-muted-foreground text-xs lg:text-sm" variant="ghost">
              Privacy Policy
            </Button>
            <Button className="w-fit justify-start hover:bg-transparent hover:text-muted-foreground text-xs lg:text-sm" variant="ghost">
              Terms of Service
            </Button>
            <Button className="w-fit justify-start hover:bg-transparent hover:text-muted-foreground text-xs lg:text-sm" variant="ghost">
              Responsible Disclosure
            </Button>
          </div>
          <div className="flex flex-col">
            <div className="text-left text-xl text-primary font-bold pl-4">Contact Us</div>
            <Button className="w-fit justify-start mt-2 hover:bg-transparent hover:text-muted-foreground text-xs lg:text-sm" variant="ghost">
              +1 (555)-555-5555
            </Button>
            <Button className="w-fit justify-start hover:bg-transparent hover:text-muted-foreground text-xs lg:text-sm" variant="ghost">
              info@collegeparatodos.com
            </Button>
            <Button className="justify-start hover:bg-transparent hover:text-muted-foreground text-xs lg:text-sm" variant="ghost">
              1234 Address Lane, State, USA, ZIP
            </Button>
          </div>
          <div className="flex flex-col w-[96]">
            <div className="text-left text-xl text-primary font-bold pl-4">Socials</div>
            <div className="flex-row">
              <Link
                href="https://www.facebook.com/collegeparatodos"
                target="_blank"
              >
                <Button className="justify-start w-fit hover:bg-transparent hover:text-muted-foreground" variant="ghost">
                  <Icons.facebook size={18}/>
                </Button>
              </Link>

              <Link
                href="https://www.instagram.com/collegeparatodos/"
                target="_blank"
              >
                <Button className="justify-start w-fit hover:bg-transparent hover:text-muted-foreground" variant="ghost">
                  <Icons.twitter size={18} />
                </Button>            
              </Link>



              <Link
                href="https://www.linkedin.com/in/anamariajaramillo/"
                target="_blank"
              >
                <Button className="justify-start w-fit hover:bg-transparent hover:text-muted-foreground" variant="ghost">
                  <Icons.linkedIn size={18} />
                </Button>
              </Link>

            </div>
          </div>
        </div>
        <div className="text-xs text-muted-foreground ml-auto mr-auto pb-6">
          &copy;2024 Educacion For All. Designed by Aaron Zygala. All rights reserved.
        </div>
      </div>
    </main>
  );
}
