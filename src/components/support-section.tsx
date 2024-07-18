import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Icons } from "./icons";
import Link from "next/link";

export function SupportSection() {
  return (
    <div className="flex flex-row justify-center gap-24 bg-muted py-12 px-52">
      <Card className="w-[60%] mt-auto mb-auto text-center bg-transparent border-none shadow-none rounded-2xl">
        <CardHeader className="text-5xl font-bold">
          Support Our Efforts
        </CardHeader>
        <CardDescription className="text-2xl">
          to make a meaningful difference in the lives of these young people.
          Your contribution can change their futures.
        </CardDescription>
        <CardContent className="pt-12 text-xl flex flex-col align-center">
          Contact us for more information, to provide a donation, or any
          questions:
          <Link href="/contact">
            <Button
              variant="outline"
              className="ml-auto mr-auto mt-4 bg-transparent h-12 border-black rounded-md hover:bg-slate-950 hover:text-white gap-4 hover:gap-8 transition-all delay-100 ease-out"
            >
              Learn More <Icons.moveRight strokeWidth={0.8} />
            </Button>
          </Link>

        </CardContent>
      </Card>
    </div>
  );
}
