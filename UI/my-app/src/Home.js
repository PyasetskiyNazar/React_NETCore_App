import React, { Component } from 'react';

class Home extends Component {

   render() {
      return (
         <>
            <div>
               <h3>.NET Core Web API + React Js + Microsoft SQL Server</h3>
            </div>
            <h6>
               This is a full stack web application from scratch using Microsoft SQL server for the database,
               .NET Core Web API for the backend, and React JS for the front end.
            </h6>           
            <ul class="list-group">
               <li class="list-group-item">- Simple routing</li>
               <li class="list-group-item">- Bootstrap table with custom sorting and filtering capabilities.</li>
               <li class="list-group-item">- Modal pop up windows with drop downs and date pickers.</li>
               <li class="list-group-item">- Uploading an image and storing it in the backend server.</li>
            </ul>
         </>
      )
   }
}

export default Home;