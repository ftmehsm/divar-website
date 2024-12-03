import Categories from "@/components/templates/Categories";
import Posts from "@/components/templates/Posts";
import {useQuery} from "@tanstack/react-query";
import {getAllPosts} from "@/services/user.js";
import {useEffect} from "react";


function HomePage() {
    const {refetch} = useQuery({queryKey:["allPosts"] , queryFn: getAllPosts });

    useEffect(() => {
        refetch();
    }, []);

    return (
        <div className="grid md:grid-cols-4">
            <Categories/>
            <Posts/>
        </div>

    );
}

export default HomePage;