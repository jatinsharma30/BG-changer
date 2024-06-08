import { useState } from "react"

function App() {
   const [bgColor,setBgColor]=useState("olive")

   function updateBg(color){
    setBgColor(color);
   }

  return (
    
      <div className="w-full h-screen flex justify-center items-end pb-[100px]" style={{backgroundColor:bgColor}}>
        <div className="fixed flex flex-row p-2 box-border justify-center border-2 rounded-3xl gap-3 border-gray-400 bg-white">
          <button onClick={()=>updateBg("black")} style={{backgroundColor:"black"}} className="border-2 rounded-3xl box-border m-3 hover:border-2 hover:border-black  p-3 text-white">black</button>
          <button onClick={()=>updateBg("red")} style={{backgroundColor:"red"}} className="p-4 border-2 rounded-3xl box-border m-3 hover:border-2 hover:border-black p-3 ">red</button>
          <button onClick={()=>updateBg("blue")} style={{backgroundColor:"blue"}} className="border-2 rounded-3xl box-border m-3 hover:border-2 hover:border-black p-3 ">blue</button>
          <button onClick={()=>updateBg("olive")} style={{backgroundColor:"olive"}} className="border-2 rounded-3xl box-border m-3 hover:border-2 hover:border-black p-3 ">olive</button>
          <button onClick={()=>updateBg("white")} style={{backgroundColor:"white"}} className="border-2 rounded-3xl box-border m-3 hover:border-2 hover:border-black p-3 ">white</button>
          <button onClick={()=>updateBg("#60a5fa")} style={{backgroundColor:"#60a5fa"}} className="border-2 rounded-3xl box-border m-3 hover:border-2 hover:border-black p-3 ">sky blue</button>
          <button onClick={()=>updateBg("yellow")} style={{backgroundColor:"yellow"}} className="border-2 rounded-3xl box-border m-3 hover:border-2 hover:border-black p-3 ">yellow</button>
          <button onClick={()=>updateBg("orange")} style={{backgroundColor:"orange"}} className="border-2 rounded-3xl box-border m-3 hover:border-2 hover:border-black p-3 ">orange</button>
          <button onClick={()=>updateBg("grey")} style={{backgroundColor:"grey"}} className="border-2 rounded-3xl box-border m-3 hover:border-2 hover:border-black p-3 ">grey</button>
        </div>
      </div>
    
  )
}

export default App
