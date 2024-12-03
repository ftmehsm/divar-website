import {createContext, useMemo, useState} from "react";
import {useQuery} from "@tanstack/react-query";
import {getAllPosts} from "@/services/user.js";

export const CityContext = createContext();

function CityProvider({children}) {
    const {data} = useQuery({queryKey:["allPosts"] , queryFn: getAllPosts });
    const [city , setCity] = useState("");

    const filteredPost = useMemo(() => {
        if (!data?.data?.posts) return [];
        if (city === "") return data.data.posts;
        return data.data.posts.filter(item => item.options.city === city);
    }, [city, data]);

    return (
       <CityContext.Provider value={{filteredPost, setCity , city}}>
           {children}
       </CityContext.Provider>
    );
}

export default CityProvider;