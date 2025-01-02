import { Outlet } from "react-router-dom"
import { Footer } from "../Ui/Footer"
import { Header } from "../Ui/Header"

export const Applayout = () =>{
    return <>
      <Header/>
      <Outlet/>
      <Footer/>

    </>
}