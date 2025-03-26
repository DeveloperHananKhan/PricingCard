import { useEffect,useState } from "react";

export interface Geo {
    lat: string;
    lng: string;
  }
  
  export interface Address {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: Geo;
  }
  
  export interface Company {
    name: string;
    catchPhrase: string;
    bs: string;
  }
  
  export interface User {
    id: number;
    name: string;
    username: string;
    email: string;
    address: Address;
    phone: string;
    website: string;
    company: Company;
  }
// api call for userdata//
export const useUserApi = () =>{ 
    const [users,setUsers]=useState<User[]>([])
    const [loading,setLoading]=useState<boolean>(true)
    useEffect(()=>{   const dataUser = async ()=>{


    try {
        setLoading(true)
          const response =  await  fetch('https://jsonplaceholder.typicode.com/users')
       if (response.ok) {
        const data: User[] = await response.json();
        console.log('Data in console',data)
        setUsers(data)
        } else {
            throw new Error('Network response was not ok'); 
        }
    } catch (error) {
        console.error("there was a error",error)
        throw error
    }
   finally{
    setLoading(false)
   }
}
dataUser()
},[])
return {users,loading}}

