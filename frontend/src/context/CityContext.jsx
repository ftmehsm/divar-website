import {createContext, useEffect, useState} from "react";
import {useQuery} from "@tanstack/react-query";
import {getAllPosts} from "@/services/user.js";

export const CityContext = createContext();

function CityProvider({children}) {
    const {data} = useQuery({queryKey:["allPosts"] , queryFn: getAllPosts });
    const [city , setCity] = useState("");
    const [filteredPost , setFilteredPost] = useState([])
    const [category , setCategory] = useState("")

    useEffect(() => {
        if(!data?.data?.posts){
            setFilteredPost([]);
            return;
        }
        let filtered = data?.data.posts

        if(city !== "") {
            filtered = filtered.filter(post => post.options.city === city);
        }

        if(category !== ""){
            filtered = filtered.filter(post => post.category === category);
        }

        setFilteredPost(filtered)

    }, [city,data , category]);


    return (
       <CityContext.Provider value={{filteredPost, setCity , city , setFilteredPost , setCategory}}>
           {children}
       </CityContext.Provider>
    );
}

export default CityProvider;