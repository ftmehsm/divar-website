import {useQuery} from "@tanstack/react-query";
import {getCities} from "@/services/user.js";
import {useContext, useState} from "react";
import {CityContext} from "@/context/CityContext.jsx";


function CitySelect() {
    const {setCity} = useContext(CityContext)
    const [province,setProvince] = useState("")
    const [cityMenu , setCityMenu] = useState(false)
    const{data} = useQuery({queryKey: ['cities'] , queryFn : getCities})

    const clickHandler = () => {
        setCityMenu(prev => !prev)
    }

    const selectHandler = (event) => {
        if(event.target.innerText === "همه ی استان ها") {
            setProvince("")
            setCity("")
            setCityMenu(false)
        }else{

        setProvince(event.target.innerText);
        setCityMenu(false)
        setCity(event.target.innerText)
        }
    }

    return (
        <>
        <button onClick={clickHandler}
            className = "relative flex items-center leading-[50px] h-10 text-gray-500 mr-3 hover:bg-gray-200 rounded-md px-1" >
                < span className="mr-[5px]">{province === "" ? "استان مورد نظر خود را انتخاب کنید" : `${province}`}</span>
                <img src="location.svg" alt="loaction" className="w-6 h-6"/>
        </button>
            {cityMenu && <ul onClick={selectHandler} className="absolute top-[50px] left-1 md:right-12 bg-slate-100 grid grid-cols-3 gap-3 w-3/4 md:w-1/2 p-2 rounded-md shadow-md animate-slideDown">

                <li className="cursor-pointer hover:bg-Primary px-2 hover:text-white text-Primary rounded">
                    همه ی استان ها
                </li>
                {data?.data[0].provinces.map(item => <li className="cursor-pointer hover:bg-Primary px-2 hover:text-white rounded" key={item}>
                    {item}
                </li>)}
            </ul>}
        </>
    );
}

export default CitySelect;