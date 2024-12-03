import { sp } from "@/services/replaceNumber";
import {useContext} from "react";
import {CityContext} from "@/context/CityContext.jsx";

function Posts() {
const {filteredPost} = useContext(CityContext)

    console.log(filteredPost)


    return (
        <div className="grid grid-flow-row-dense  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 col-span-3 w-full  gap-3">
            {filteredPost?.map(post => <div className="flex items-center gap-3 w-full max-h-[150px] p-4 cursor-pointer bg-white border rounded-md shadow-sm hover:bg-slate-100 transition-all" key={post._id}>
                <img className="w-[100px] h-[100px] rounded-sm object-cover" src={`${import.meta.env.VITE_BASE_URL}/${post.images[0]}`} alt="" />
                <div className="flex flex-col">
                <span className="text-md font-bold text-gray-700">{post.options.title}</span>
                <span className="text-sm text-gray-500">{sp(post.amount)}</span>
                    <span className="text-sm text-Primary"> {new Date(post.createdAt).toLocaleDateString("fa-IR")}</span>
                </div>
            </div>)}
        </div>
    );
}

export default Posts;