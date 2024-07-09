import { Link } from "react-router-dom";
import styled from "styled-components";
import './style.css'; 

const Stylediv=styled.div`
font-family:   Arial, sans-serif;
   .nav{
       width: 100%;
       height: 6vh;
       display: flex;
       flex-direction: row;
       justify-content: space-between;
       align-items: center;
         padding-left:7%;
         
       
   }

a{
    font-size: 1.2vw;
    font-weight: bold;
    text-decoration: none;
    color: black;
}
a:hover{
    color: blue;
}
#add{
    margin-right: 11%;
}
#f{
  margin-left:45%;
}
`;
export const Navbar=()=>{


    return (
        <div className="c">
          <Stylediv>
            <div className="nav">
            <Link to={"/event"}>Home</Link>
            
            <Link to={"/"}>Event</Link>
            
            
             
             
             

             <Link to={"/addevent"}>Add Event</Link>
             <Link id="f" to={"/signin"}>Login</Link>
             <Link id="add" to={"/signup"}>Signup</Link>

            </div>

          
            </Stylediv>
        </div>
    )
}