import axios from "axios"
import { useEffect, useState } from "react"
import { CarDisplay } from "./CarDisplay"

function Cars(){
    const [cars,setCars] = useState([])
    const [isLoading, setIsLoading] = useState(true);
    const [cost, setCost]=useState({
        sortMethod: null
    })
    const getData = ()=>{
        const config ={
            url: "http://localhost:3000/cars",
            method:"get"
        }
        return axios(config)
    }

    const handleDisplay = () =>{
        return getData()
            .then((res)=>{
                setCars(res.data)
            })
            .catch((err)=>{
                console.log(err)
            })
    }
    useEffect(()=>{
        handleDisplay()
    },[])

    const handleBuy=(id,name,price)=>{
        const payload = {
            id,
            name,
            price
        }
        const con ={
            url: `http://localhost:3000/order`,
            method:"post",
            data:payload
        }
        console.log(con)
        return axios(con)
        
    }

    const handleSort=(order)=>{
        setCost({sortMethod: order})
      }
    return(
        <>
         Cost:
        {
           ["Low To High","High To Low","unsorted"].map(order=> {
             return <button key={order} onClick={() =>handleSort(order)}>
                {order}
              </button>
            })
        }
        {
            cars
            .sort((a, b) =>{
                if (cost.sortMethod === "Low To High") {
                  return a.costForTwo - b.costForTwo;
                }
                if (cost.sortMethod === "High To Low") {
                  return b.costForTwo - a.costForTwo;
                }
                return 0;
              })
            .map((car)=>{
                return <CarDisplay
                    id={car.id}
                    key={car.id}
                    name={car.name}
                    type={car.type}
                    year={car.year}
                    price={car.price}
                    image={car.image}
                    handleBuy={handleBuy}
                />
            })
        }
        </>
    )
}

export {Cars}