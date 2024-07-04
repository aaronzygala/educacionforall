// "use client"
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { useState, useEffect } from "react";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const formatDate = (dateString: string | number | Date) => {
  const parsedDate = new Date(dateString);
  const options = {
    year: "numeric",
    month: "long", // Use 'long' for full month name
    day: "numeric",
  } satisfies Intl.DateTimeFormatOptions;
  return new Intl.DateTimeFormat("en-US", options).format(parsedDate);
};
// function useMediaQuery(query: string) {
//   const [matches, setMatches] = useState(false);

//   useEffect(() => {
//     const media = window.matchMedia(query);
//     if (media.matches !== matches) {
//       setMatches(media.matches);
//     }
//     const listener = () => setMatches(media.matches);
//     media.addEventListener('change', listener);
//     return () => media.removeEventListener('change', listener);
//   }, [matches, query]);

//   return matches;
// }

export { cn, formatDate };
