import { ChevronLeft } from "lucide-react";

export function AppBar({title, counter}: {title: string, counter : string}) {
    return (
        <div className="bg-blue-500 text-white p-4 flex justify-between items-center">
            {/* back icon */}
            <div className="flex">
                <ChevronLeft />
            </div> 
            {/* title */}
            <div>
                <h3 className="font-medium">{title}</h3>
            </div>
            <div className="text-sm opacity-80">
                {counter}
            </div>
        </div>
    )
}