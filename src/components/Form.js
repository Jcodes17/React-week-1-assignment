import React from 'react';


export default class Form extends React.Component {
    render() {
        return<div class = "container" id = "userForm">
           <h3> Login Below </h3>
           <div>
                <form>
                     <div class="form-group">
                     <label for="exampleInputEmail1">Username</label>
                    <input type="text" class="form-control" id="userEmail" aria-describedby="emailHelp" placeholder="Enter Username"></input>
                        </div>
                        <div class="form-group">
                     <label for="exampleInputEmail1">Password</label>
                    <input type="password" class="form-control" id="userPassword" aria-describedby="emailHelp" placeholder="Enter Password"></input>
                        </div>

                </form>
               </div> 
           </div>
    }  
}

