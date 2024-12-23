
import { Children } from "react";


export default function GridLayout({ children , className=''}) {
    return (
    <div className={`grid grid-cols-12 w-full grow  grid-rows-1 gap-2 items-start justify-center p-2 ${className}`}>
        {children}
    </div>
    );
}