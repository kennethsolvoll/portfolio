import React, {useState} from 'react'
import Sidebar from '../components/sidebar'
import Navbar from '../components/navbar'
import HeroSection from '../components/herosection'

const Home = () => {

const [isOpen, setIsOpen] = useState(false)

const toggle = () => {
    setIsOpen(!isOpen)
}

    return (
        <div>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle}/>
            <HeroSection/>
        </div>
    )
}

export default Home