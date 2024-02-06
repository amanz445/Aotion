import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";

const font = Poppins({
    subsets: ["latin"],
    weight: ["400", "600"]
})

export const Logo = () => {
    return (
        <div className="hidden md:flex items-center gap-x-2">
            <h1 className={cn("font-black text-3xl", font.className)}>A</h1>
            <p className={cn("font-semibold", font.className)}>aotion</p>
        </div>
    )
}