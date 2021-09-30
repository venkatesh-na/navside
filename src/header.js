import React from "react"
import { FaTimes } from "react-icons/fa"
import { social, links } from "./data"
import { useGlobalContext } from "./context"
const Header = ()=>{
    const {bar,cross,handleCross} = useGlobalContext()
    return (
        <section className = {`${bar ? "header show-header" : "header"} ${cross ? "header" : ""}`}>
            <div className = "nav-header">
                <h1 className = "logo">Portfolio</h1>
                <FaTimes onClick = {handleCross} className = "cross"/>
            </div>
            <ul className = "links">
                {links.map((link)=>{
                    const {id,url,text} = link
                    return <li key = {id}>
                        <a href = {url}>{text}</a>
                    </li>
                })}
            </ul>
            <ul className = "social">
                {social.map((link)=>{
                    const {id,url,icon} = link
                    return <li key = {id}>
                        <a href = {url}>{icon}</a>
                    </li>
                })}
            </ul>
        </section>
    )
}
export default Header;