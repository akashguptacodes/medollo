import { Variants } from "framer-motion";

type Direction = 'up' | 'down' | 'left' | 'right' | 'none';

export const fadeIn = (direction:Direction, delay:number):Variants => {
    return{
        hidden: {
            y: direction === 'up' ? 60 : direction === 'down' ? -60 : 0,
            x: direction === 'left' ? 60 : direction === 'right' ? -60 : 0,
            opacity:0.4
        },
        show: {
            y:0,
            x:0,
            opacity:1,
            transition: {
                type: 'tween',
                duration: 0.8,
                delay: delay,
                ease: [0.25, 0.25, 0.25, 0.75]
            }
        }
    }
}