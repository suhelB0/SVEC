import React from 'react'

export default function ListRendering() {

let emplist=[
    {
    name:"suhel",
    salary:30000,
    email:"suhel@122"
    },
    {
        name:"naneen",
        salary:30000,
        email:"naneen@122"
    },
    {
        name:"pillu",
        salary:30000,
        email:"pillu@122"
    }
]

    return (
        <div>
            <h1>ListRendering</h1>
            {
            emplist.map(
                empdata=>
            <>
                <p>{empdata.name}</p>
                <p>{empdata.salary}</p>
                <p>{empdata.email}</p>
            </>
            )
        }
        </div>
    )
}
