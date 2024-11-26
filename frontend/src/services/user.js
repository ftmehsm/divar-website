import api from "@/configs/axiosConfige";


const userProfile = () => api.get("/user/whoami").then(res => res  || false);
const getMyPost = () => api.get("post/my");
const getAllPosts = () => api.get("/")



export {userProfile,getMyPost,getAllPosts}