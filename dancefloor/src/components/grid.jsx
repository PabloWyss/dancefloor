import Cell from "../components/cell"
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';
import { useEffect, useState } from "react";


const GridDiv = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
`


const Grid = ()=>{

    const [rgbList, setRGBList] = useState([])
    const [intevalId, setIntevalID] = useState(null)

    const rgbListGenerator = () =>{
        setRGBList([])
        for(let i=0;i<25; i++){
            let rgbColorRed = Math.floor(Math.random() * 255)
            let rgbColorGreen = Math.floor(Math.random() * 255)
            let rgbColorBlue = Math.floor(Math.random() * 255)
            setRGBList(prev => [...prev, [rgbColorRed, rgbColorGreen, rgbColorBlue]])
        }
    }
    let interval
    
    const handleClick =(e)=>{ 
        clearInterval(intevalId)
        const interval = setInterval(()=> {
            rgbListGenerator()},500)
        setIntevalID(interval)
    }

    return (
        <>
            <GridDiv>
                {
                    rgbList.map((color)=>{
                        return (
                            <Cell key={uuidv4()} color={color}/>
                        )
                    })
                }
            </GridDiv>
            <button onClick={handleClick}>

            </button>
        </>
    )
    
}

export default Grid