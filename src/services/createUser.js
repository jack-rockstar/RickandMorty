import React from "react";

export default async function createUser(user) {
    const url = 'http://localhost:3001/api/user/register'
    const res=await fetch(url, {method:'POST',body:JSON.stringify(user),headers:{'Content-Type':'application/json'}})
    const response=await res.json()
    return response
}