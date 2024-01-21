'use client'
import { Button } from "@/components/ui/button";

export default function Proposal () {

    const handleHover = (e:React.MouseEvent<HTMLButtonElement>) => {
        const windowHeight = window.innerHeight;
        const windowWidth = window.innerWidth;

        const randomX = Math.floor(Math.random() * windowWidth);
        const randomY =Math.floor(Math.random() * windowHeight);
        if(e.currentTarget instanceof HTMLButtonElement )
        {
            e.target.style.position = 'absolute';
            e.target.style.left = `${randomX}px`;
            e.target.style.top = `${randomY}px`;
    }
        }
        

    const name ="Strange"

    const handleClick = () => {
        window.open(`https://www.google.com/calendar/render?action=TEMPLATE&text=Date with ${name}&details=thtfy&location=rtgyy&dates=20240117T100700Z%2F20240131T100700Z`)
    }

    return (
<div className="w-screen h-screen bg-pink-500 flex items-center justify-center">
    <div className="flex flex-col items-center space-y-2">
        <img src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExcDdtZ2JiZDR0a3lvMWF4OG8yc3p6Ymdvd3g2d245amdveDhyYmx6eCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/cLS1cfxvGOPVpf9g3y/giphy.gif" />
        <p className="front-bold text-xl text-white">will you come</p>
        <Button onClick={handleClick}>Yes</Button>
        <Button onMouseEnter={handleHover}>No</Button>
    </div>
</div>
    );
}