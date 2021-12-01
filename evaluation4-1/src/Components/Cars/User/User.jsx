import axios from "axios";
import { useEffect, useState } from "react";
import UserInput from "./UserInput";

const getData = () => {
    const config = {
      url: "http://localhost:3000/order",
      method: "get"
    };
    return axios(config);
  };
  const createUser = (title) => {
    const payload = {
      title,
      status: false
    };
    const config = {
      url: "http://localhost:3000/user",
      method: "post",
      data: payload
    };
    return axios(config);
  };
function User({id,name,price}){
    const [isLoading, setIsLoading] = useState(true);
  const [order, setOrder] = useState([]);

  useEffect(() => {
    handleGetorder();
  }, []);

  const handleGetOrder = () => {
    return getorder()
      .then((res) => {
        setOrder(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const onSubmit = async (title) => {
    try {
      setIsLoading(true);
      await createUser(title);
      await handleGetOrder();
      setIsLoading(false);
    } catch (err) {
      console.log(err);
      // manage your error with a state
    }
  };
  if (isLoading) {
    return <div>...loading</div>;
  }
    return(
        <>
            <UserInput onSubmit={onSubmit} />
        </>
    )
}

export {User}