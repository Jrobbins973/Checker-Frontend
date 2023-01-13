import React from 'react'
import { useState } from 'react'
import Draggable from "react-draggable";
import styled from "@emotion/styled"

// This component allows you to drag and drop an item, but doesn't update state or anything, just looks nice.


const Box = styled.div`
    width: 200px;
    height: 200px;
    border: 1px solid black;
    background: yellow;
    cursor: move;
    transition: ${props => props.isControlled ? `transform 0.3s` : `none`};
    `;



function DragginStuff() {
const [position, setPosition] = useState({ x: 0, y: 0 })
const [isControlled, setIsControlled] = useState(true);


    const handleStart = () => {
        setIsControlled(false)
        }
        const handleDrag = (e, data) => {
        setPosition({ x: data.x, y: data.y });
        };
        const handleStop = () => {
        setIsControlled(true)
        setPosition({x:0, y:0})
        }

return (
        <Draggable
        position={position}
        onStart={handleStart}
        onDrag={handleDrag}
        onStop={handleStop}
        >
        <Box isControlled={isControlled}>Drag me</Box>
        </Draggable>
    );

}

export default DragginStuff