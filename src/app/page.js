"use client"

import axios from "axios"
import { useEffect, useState } from "react"

const Home = () => {
  const[user,setUser]=useState("")
  const fetchData = async()=>{
    const response = await axios.get("http://localhost:5000")
    setUser(response?.data)
  }
  useEffect(()=>{
    fetchData()
  },[])
  return (
    <div>{user}</div>
  )
}

export default Home
