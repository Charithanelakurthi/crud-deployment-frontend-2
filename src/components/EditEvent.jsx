import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { editDataLoading, editDataSuccess } from "../redux/actions";
import styled from "styled-components";
import './style.css'; 

  const ResultDiv = styled.div`
  font-family:   sans-serif;
  
  form{
    width: 45%;
    height: auto;
    /* border: 1px solid red; */
    margin: auto;
} 
input{
    width: 60%;
    height: 3.5vh;
    font-size:1vw;
}
p{
    font-size:1.2vw;
    line-height:.1vh;
}
    h2{
    color:White;}

.select{
  font-size:1.2vw;
}
.option{
    width: 45%;
    height: 4.3vh;
    font-size:1.2vw;
}
#btn{
    width: 30%;
    cursor: pointer;
    height: 4.5vh;
    font-weight: bold;
    font-size:1.2vw;
    background-color: green;
    color: white;
    border: 2px solid green;
    border-radius: 3px;
    margin-left: 14%;
}
#btn:hover{
    background-color: white;
    color: red;
}
  `;
export const EditEvent=()=>{
    const { loading } = useSelector((store) => store.data);
  const dispatch = useDispatch();
  const [pdata, setData] = useState([]);
  const [newData, setNewData] = useState([]);
    let { _id } = useParams();
    useEffect(()=>{
    axios.get(`http://localhost:8735/events/${_id}`).then((data)=>{
    //   console.log(data)
       setData(data.data.events);
    })
    },[])
    // console.log(pdata.events)

    function handleChange(e) {
        let key = e.target.name;
        let inputData = {};

          inputData = {
            ...newData,
            [key]:e.target.value,
          };
          inputData = {
            ...newData,
            [key]:e.target.value,
          };
    
        setNewData(inputData);
      }

      function handleSave(e) {
       e.preventDefault();
        dispatch(editDataLoading());
        axios({
          method: "patch",
          url: `http://localhost:8735/events/${_id}`,
          data: {
            _id: pdata._id,
            event_name: newData.event_name || pdata.event_name,
            event_address: newData.event_address || pdata.event_address,
            city: newData.city || pdata.city,
            state_name: newData.state_name || pdata.state_name,
            start_date: newData.start_date || pdata.start_date,
            end_date: newData.end_date || pdata.end_date,
            description: newData.description || pdata.description,
            event_rating: newData.event_rating || pdata.event_rating,
          },
        }).then((res) => {
          dispatch(editDataSuccess());
          alert("Edited successfully");
        });
      }
return loading ? (
    <h1>Loading...</h1>
  ) : (
    <div className="background">
      <ResultDiv>
      <form onSubmit={handleSave}>
        
        <h2>Edit Event</h2>
        <p className="t"><b>Event name</b></p>
       <input type="text" name="event_name" defaultValue={pdata.event_name} onChange={handleChange} placeholder="Event name" required />
       <p className="t"><b>Event address</b></p>
       <input type="text" name="event_address" defaultValue={pdata.event_address} onChange={handleChange} placeholder="Address" required />
       <p className="t"><b>Enter City</b></p>
       <input type="text" name="city" defaultValue={pdata.city} onChange={handleChange} placeholder="City" required />
       <p className="t"><b>Enter State</b></p>
       <input type="text" name="state_name" defaultValue={pdata.state_name} onChange={handleChange} placeholder="State" required />
       <p className="t"><b>Start date</b></p>
       <input type="date" name="start_date" defaultValue={pdata.start_date} onChange={handleChange} required />
       <p className="t"><b>End date</b></p>
       <input type="date" name="end_date" defaultValue={pdata.end_date} onChange={handleChange} required />
       <p className="t"><b>Description</b></p>
       <input type="text" name="description" defaultValue={pdata.description} onChange={handleChange} placeholder="Description" required />
       <br />
     <span className="select"><p className="t"><b>Select Rating</b></p>
       <select name="event_rating" defaultValue={pdata.event_rating} onChange={handleChange} className="option" required>
           <option value="0">Select</option>
           <option value="1">1</option>
           <option value="2">2</option>
           <option value="3">3</option>
           <option value="4">4</option>
           <option value="5">5</option>
       </select></span>
        <br />
        <br />
         <input id="btn" type="submit" value="Save" />
      </form>
      </ResultDiv>
    </div>
  );
};