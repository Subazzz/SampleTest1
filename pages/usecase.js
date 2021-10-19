import React from 'react';

function user({user}) {
    return (
        <div>
            Number of users
            {
                user.map((users)  =>{
                    return(
                    <div key={users.id} >
                        <p>{users.newsTitle} </p>
                        <p>{users.category} </p>
                         </div>
                    )
                })
            }
        </div>
    )
}

export default user;

export async function  getStaticProps(params) {
     const response = await fetch('localhost:8080/homepage')
     const data = await response.json()
     console.log(data)
     return{
         props : {
             user : data

         }
     }

 }