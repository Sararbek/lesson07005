import { Suspense } from "react";
import loadingGif from "@/assets/loading_gif.gif"

const Loading = () => {
    return (
        <div className="w-full h-screen fixed z-50 bg-black flex items-center justify-center ">
            <img src={loadingGif} alt="" className="w-40" />
        </div>
    )
}

const SuspenseContainer = ({children}) => {
    return <Suspense fallback={<Loading/>}>{children}</Suspense>
}

export default SuspenseContainer