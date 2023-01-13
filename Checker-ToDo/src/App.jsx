import { useState, useRef } from 'react'
import Draggable from "react-draggable";
import styled from "@emotion/styled"
import './App.css'
import DragginStuff from './components/DragginStuff';




// This component has code that allows you to drag and drop items in a list, this will also update state once the item is dropped into its new space



function App() {
  const dragItem = useRef()
  const dragOverItem = useRef()
  const [list, setList] = useState(
    ['Item 1','Item 2','Item 3','Item 4','Item 5','Item 6'])


  const newList = [`First`, `Second`, `Third`, `Fourth`];



  const dragStart = (e, position) => {
    dragItem.current = position
    // console.log(e.target.innerHTML)
  }

  const dragEnter = (e, position) => {
    dragOverItem.current = position
    // console.log(e.target.innerHTML)
  }

  const drop = e => {
    const copyListItems = [...list]
    const dragItemContent = copyListItems[dragItem.current]
    copyListItems.splice(dragItem.current,1)
    copyListItems.splice(dragOverItem.current, 0, dragItemContent)
    dragItem.current = null
    dragOverItem.current = null
    setList(copyListItems)
  }

  console.log(list)


    return (
      <>
      {
      list &&
      
      list.map((item, index) => (
        <div style={{backgroundColor:'lightblue', margin:'20px 25%', textAlign:'center', fontSize:'20px', width:'200px', color: 'black'}}
        onDragStart={e => dragStart(e, index )}
        onDragEnter={(e) => dragEnter(e, index)}
        onDragOver={(e) => e.preventDefault()}
        onDragEnd={drop}
          key={index}
          draggable
          >

            {item}

        </div>
        ))}


   <DragginStuff />

      </>
    );
}

export default App
