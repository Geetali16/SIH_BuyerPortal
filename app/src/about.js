import React from "react";
import Navbar from "./navbar.js";
function About() {
  return (
    <div>
      <style jsx>
      {`
          @import url("https://fonts.googleapis.com/css2?family=Roboto:ital@1&display=swap");
          @import url("https://fonts.googleapis.com/css2?family=Mooli&display=swap");

          h1 {
            text-align: center;
            margin-top: 4rem;
            font-size: 2rem;
            font-weight: 600;
            color: #333;
            font-family: "Mooli";
          }

          p {
            font-family: "Mooli", sans-serif; /* Use "Mooli" font with a fallback to sans-serif if "Mooli" is unavailable */
            font-size: 1.2rem;
            margin: 3rem 4rem;
          }
        `}
      </style>
      <Navbar />
      <h1>About Us</h1>
      <p>
        We a team of 6 members built <b>'Wastify'</b> which helps us to utilizing the industrial waste at appropriate place, 
         generate some revenue stream/busincss model and cause less harm to environment.
        <br/><br/>
        <b>Cause</b> : Industrial waste
         produced by industrial activity which includes any material that is useless during 
         a manufacturing process. It is hazardous to human health and environment. We made a 
         software solution which would help in development of business models 
         for collection and utilization of single use plastics and various other industrial 
         wastes by using left out items present with usable quality. 
         <br/><br/>
         We came up with the business model for collection 
         and utilization of single use wastes which would be updated on our website by our seller 
         industries and buyers would make a purchase of materials.
      </p>
    </div>
  );
}

export default About;
