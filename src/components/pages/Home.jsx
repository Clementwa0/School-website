import React from 'react'
import Button from "../ui/button"
import { Contact } from 'lucide-react'
import { LucideCornerDownRight } from 'lucide-react'
import { LucideCornerDownLeft } from 'lucide-react'
import { Zap } from 'lucide-react'
const Home = () => {
  return (
    <div className='bg-gray-200 container flex'>
        <h1>Better Future For Your Kids</h1>
        <h3>Let the child be the director, and the actor in his own play</h3>
        <div>
            <img src='' alt='kid1'/>
        </div>
        <div>
            <Button>
                Get Started <span></span>
            </Button>
        </div>
        <div>
            <p>lorem despasito blabla</p>
        </div>

        <div>
            <div>
                <Contact/> <h1>7.5k+</h1>
                <h2>Total active students taking gifted courses</h2>
            </div>
        <LucideCornerDownRight/>
        <LucideCornerDownLeft/>
        <div>
            <Zap/> <h1>50+</h1>
            <h2>Available field programs and increasing</h2>
        </div>
        </div>
        <div>
            <img src='' alt='kid1'/>
        </div>
    </div>
  )
}

export default Home