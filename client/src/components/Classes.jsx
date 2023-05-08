
import React,{useEffect} from 'react';

const Classes = () => {
    const ClasseValid = async () =>{
        // store jwt token in local storage

        let token = localStorage.getItem("usersdatatoken");
        // console.log(token);

        //pass token in Authorization header
        const res = await fetch("/validUser", {
            method:"GET",
            headers:{
                "content-type":"application/json",
                "Authorization":token
            }
        });

        const data =  await res.json();
        if(data.status == 401 || !data){
            console.log("error page redirect");
        }else{
            console.log("user verify");
        }
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
