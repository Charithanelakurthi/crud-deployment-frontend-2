import React from 'react'; 
import './style.css'; 


export const Home = () => { 
  const handleClick=()=>{
    alert("your event is booked");
  }
    
      
 return ( 
 <div> 
 <div className='box'> 
  <br></br>
  <br></br>
 <h1 className='gt'>Eventify</h1> 
 <h3 className='ft '>Welcome to Eventify, where we specialize in creating unforgettable experiences for birthdays and marriages. Whether you're planning a milestone birthday celebration or a dream wedding, we're here to turn your vision into reality.</h3>
 <br></br>
 <br></br>
 <h3 class="k">Events we conduct are listed below</h3>
 <div class="border">
   <div class="j">
   <h2 class="l">Birthday</h2>
   <p><b>Description</b>-Make your birthday an unforgettable experience with our expert event management services. Whether you're planning an intimate gathering or a grand celebration, our team is dedicated to turning your vision into a reality.</p>
   <p><b>Included events</b></p>
   <p>Themed Decorations and Setup</p>
   <p>Live Entertainment</p>
   <p>Interactive Games and Activities</p>
   <p>Food and Beverage Stations</p>
   <button class="btn" onClick={handleClick}>Book Event</button>

   </div>
  </div> 
  <div class="border">
   <div class="j">
   <h2 class="l">Marrraige</h2>
   <p><b>Description</b>-At Eventify, we understand that your wedding day is one of the most important days of your life. Our dedicated team is here to make your dream wedding a reality, ensuring that every detail is meticulously planned and flawlessly executed.</p>
   <p><b>Included events</b></p>
   <p>Engagement</p>
   <p>Receptions</p>
   <p>Pre wedding Events</p>
   <p>Post Wedding Events</p>
   <button class="btn" onClick={handleClick}>Book Event</button>

   </div>
  </div> 
  <div class="border">
   <div class="j">
   <h2 class="u">Graduation cremony</h2>
   <p><b>Description</b>Mark the culmination of your academic journey with a meticulously organized graduation ceremony. At Eventify, we specialize in creating memorable and inspiring graduation events that honor your achievements with your family and friends</p>
   <p><b>Included events</b></p>
   <p>Speeches and Addresses</p>
   <p>Awarding of Diplomas</p>
   <p>Special Performances</p>
   <p>Photo and Video Sessions</p>
   <button class="btn" onClick={handleClick}>Book Event</button>

   </div>
  </div> 
  <div>
  <h3 class="h">and etc..</h3>
  </div>
  



 </div> 
</div>
 ); 
};











