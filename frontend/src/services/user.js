import api from "@/configs/axiosConfige";


const userProfile = () => api.get("/user/whoami").then(res => res  || false);
const getMyPost = () => api.get("post/my");
const getAllPosts =  () => api.get("/")
const getCities = () => api.get("/option")



export {userProfile,getMyPost,getAllPosts,getCities}