import React from "react"
import { FaTwitter , FaFacebookF , FaInstagram} from "react-icons/fa"
export const links = [
    {
        id:1,
        url:"/",
        text:"home",
    },
    {
        id:2,
        url:"/about",
        text:"about"
    },
    {
        id:3,
        url:"/project",
        text:"project"
    },
    {
        id:4,
        url:"/contact",
        text:"contact"
    }
]

export const social = [
    {
        id:1,
        url:"www.twitter.com",
        icon:<FaTwitter/>
    },
    {
        id:2,
        url:"www.facebook.com",
        icon:<FaFacebookF/>
    },
    {
        id:3,
        url:"www.instagram.com",
        icon:<FaInstagram/>
    }
]
