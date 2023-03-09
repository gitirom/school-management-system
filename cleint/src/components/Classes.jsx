
import React,{useEffect} from 'react';

const Classes = () => {
    const ClasseValid = async () =>{
        // store jwt token in local storage

        let token = localStorage.getItem("usersdatatoken");

        //pass token in Authorization header
        const res = await fetch("/validUser", {
            method:"GET",
            headers:{
                "content-type":"application/json",
                "Authorization":token
            }
        });

        const data =  await res.json();
        console.log(data);
    }
    
    useEffect(() => {
        ClasseValid();
    }, []);

    return (
        <>
            <div>Classes Page here</div>
        </>
    );
}

export default Classes;
