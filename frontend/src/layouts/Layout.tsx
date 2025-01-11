import { useState } from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import SignUp from "../components/SignUp";

interface Props {
    children: React.ReactNode;
}

//mx-auto center our content and aligns it
// name of the object is props and we destructure it

const Layout = ({children} : Props) => {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    return (
        <div className="">
            <Header isOpen={isOpen} setIsOpen={setIsOpen} />
            <Hero/>
            <SignUp isOpen={isOpen} setIsOpen={setIsOpen}/>
            <div className="">
                {children}
            </div> 
        </div>
    )
}

export default Layout;