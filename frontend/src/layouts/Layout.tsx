import { useState } from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import SignUp from "../components/SignUp";
import Posts from "../components/Posts";


const Layout = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [isJoined, setIsJoined] = useState<boolean>(false);

    return (
        <div className="">
            <Header isOpen={isOpen} setIsOpen={setIsOpen} />
            <Hero/>
            <SignUp isOpen={isOpen} setIsOpen={setIsOpen}/>
            <div className="">
                <Posts isJoined={isJoined} setIsJoined={setIsJoined}/>
            </div> 
        </div>
    )
}

export default Layout;