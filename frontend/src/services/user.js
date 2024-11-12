import api from "@/configs/axiosConfige";


const userProfile = () => api.get("/user/whoami").then(res => res  || false)


export {userProfile}