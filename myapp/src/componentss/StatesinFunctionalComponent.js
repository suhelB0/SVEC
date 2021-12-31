import React ,{useState}from 'react'

export default function StatesinFunctionalComponent() {
    let [name,updateName] = useState("Ankitha");
    return (
        <div>
            <h1 onMouseOver={()=>{updateName("Ankitha k")}}
            onMouseLeave={()=>{updateName("Ankitha")}}>
                {name}
            </h1>
        </div>
    )
}
