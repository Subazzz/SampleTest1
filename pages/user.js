import React from 'react';

function user({user}) {
    return (
        <div>
            Number of users
            {
                user.map((users)  =>{
                    return(
                    <div key={users.id} >
                        <p>{users.name} </p>
                        <p>{users.email} </p>
                         </div>
                    )
                })
            }
        </div>
    )
}

export default user;

export async function  getStaticProps(params) {
     const response = await fetch('https://jsonplaceholder.typicode.com/users')
     const data = await response.json()
     console.log(data)
     return{
         props : {
             user : data

         }
     }

 }