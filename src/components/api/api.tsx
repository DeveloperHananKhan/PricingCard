import { useEffect,useState } from "react"
import { ErrorCard } from "./error.card/Error";
import { JSX } from "@emotion/react/jsx-runtime";

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
   const [error,setError]=useState<JSX.Element | null>(null)
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
    } catch (err: unknown) {
      console.error('There was an error:', err);
      setError(
        <ErrorCard message={err instanceof Error ? err.message : 'Unknown error'} />
      );
    }
   finally{
    setTimeout(() => setLoading(false), 1000)
   }
}
dataUser()
},[])
return {users,loading,error}}

