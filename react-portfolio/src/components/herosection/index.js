import React, {useState} from 'react'
import Video from '../../videos/video.mp4'
import { Button } from '../ButtonElements'
import {
    HeroContainer,
    HeroBackground,
    VideoBackground,
    HeroContent,
    HeroH1,
    HeroP,
    HeroButtonWrapper,
    ArrowForward,
    ArrowRight
} from './HeroElements'

const HeroSection = () => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover);
    }

    return (
        <HeroContainer id='home'>
            <HeroBackground>
                <VideoBackground autoPlay loop muted src={Video} type='video/mp4'></VideoBackground>
            </HeroBackground>
            <HeroContent>
                <HeroH1>Hello, my name is Kenneth Solvoll!</HeroH1>
                <HeroP>
                    Explore my portfolio to learn more about me and how to get in touch.
                </HeroP>
                <HeroP>I look forward to hearing from you!</HeroP>
                <HeroButtonWrapper>
                    <Button 
                    to='contact' 
                    onMouseEnter={onHover} 
                    onMouseLeave={onHover}
                    primary='true'
                    dark='true'>
                        Contact {hover ? <ArrowForward/> : <ArrowRight/>}
                    </Button>
                </HeroButtonWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection
