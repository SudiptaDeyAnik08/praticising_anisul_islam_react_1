import React from "react";

const users = [
    {
        fullName:"Sudipta Dey",
        age: 23,
        phones: [
            {
                home:"01840036426",
            },
            {
                office:"027275059"
            }
        ]
    },
    {
        fullName:"Sudipta Dey",
        age: 23,
        phones: [
            {
                home:"01840036426",
            },
            {
                office:"027275059"
            }
        ]
    },
    {
        fullName:"Sudipta Dey",
        age: 23,
        phones: [
            {
                home:"01840036426",
            },
            {
                office:"027275059"
            }
        ]
    },
    {
        fullName:"Sudipta Dey",
        age: 23,
        phones: [
            {
                home:"01840036426",
            },
            {
                office:"027275059"
            }
        ]
    },
    {
        fullName:"Sudipta Dey",
        age: 23,
        phones: [
            {
                home:"01840036426",
            },
            {
                office:"027275059"
            }
        ]
    }
]




const NestedMap = ()=>{

    return(
        <div>
            <h2>Hi from nested Map</h2>
            {
                users.map((user, index)=> 
                <article key={index}>
                    <h3>Full Name:{user.fullName}</h3>
                    <p>Age: {user.age}</p>
                    {
                        user.phones.map((phone,index) =>
                        <div key={index}>
                            <p>{phone.home}</p>
                            <p>{phone.office}</p>
                        </div>
                        )
                    }
                </article> 
                )
            }
        </div>
    )
}

export default NestedMap;