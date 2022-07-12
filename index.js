/* ~~~~~~~~~~~~~~~~ Api ~~~~~~~~~~~~~~~~ */
const Api = (() => {
    
    const baseUrl = 'url';
    const path = 'path';
    // get data from server
    const getSomething = () =>
      fetch([baseUrl, path].join('/')).then((response) => response.json());
    // delete data from database
    const deleteSomething= (id) =>
      fetch([baseUrl, path, id].join('/'), {
        method: 'DELETE',
      });
    //add data to database
    const addSomething = (thing) =>
      fetch([baseUrl, path].join('/'), {
        method: 'POST',
        body: JSON.stringify(thing),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((response) => response.json());
  
    return {
      getSomething ,
      deleteSomething,
      addSomething
    };
  })();

//===================View======================================= 
const View = (() => {
    // dom elements 
    const domstr ={
        container:"#mvc_container1",
        
    }
    // render function
    const render=(element, value)=>{
        element.innerHTML = value

    }
    // template callback function for createTemplate
    const createObjTmp=(obj)=>{


        // return `<div>First Name: ${obj.first_name}</div><br>
        //         <div>Last Name: ${obj.last_name}</div><br>
        //         <div>Phone Number ${obj.phone}</div><br>
        //         <div>Email: ${obj.email}</div><br>
        //     `
        
    }
    // Create template for Dom
    const createTemplate=(arr,callback)=>{
        // Dont forget all data and forEach here, dont forget return
        // let section =""
       
        // arr.forEach(element=>{
        //     section+=` <li>
        //     <span> ${element.id}-${callback(element)} </span>
        //      <button class="deleteButton" id=${element.id}></button>
        //     </li>`
           
            
        // })
        // return section

    }
    return{
        domstr,
        render,
        createTemplate,
        createObjTmp,
    }
})()


//===================Model====================================
const Model = ((api,view) => {
    // crete constructor class for state management

    class User{
        // constructor(firstName, lastName, email,phone){
        //     this.firstName=firstName,
        //     this.lastName=lastName,
        //     this.email=email,
        //     this.phone=phone
        // }
    }
    // create state for state management
    class State{
        // allUsers=[]
    
        // // getter
        // get users(){
            
        //     return this.allUsers
        // }
        // //setter
        // set users(newUserList){
        //     this.allUsers=[...newUserList]

        //     const domElement=document.querySelector(view.domstr.container1)
        //     const container1=view.createTemplate(this.allUsers, view.createObjTmp)
           
        //     view.render(domElement,container1)
            
          
                
        
            
    

        // }
    }

    const { getSomething ,
        deleteSomething,
        addSomething } = api;

    return {
        getSomething ,
        deleteSomething,
        addSomething,
        State,
        User,
    };
})(Api,View);


//=================== Controller==========================
const Controller = ((model,view) => {
   // state
    const state=new model.State()

    // delete function 
//    const deleteUser=()=>{
//     const userContainer=document.querySelector(view.domstr.container1)
//     userContainer.addEventListener('click',(event)=>{
        
//         if(event.target.className===view.domstr.deleteButton){
            
//             state.users=state.allUsers.filter(user=>
//                 +user.id!==+event.target.id
//             )
            
//         }
//// send api for fetch data
//         model.deleteUser(event.target.id)
//     })

//    }
// delete function to Dom
//    const addUser=()=>{
  
//     const submit=document.getElementById(view.domstr.submit)
//     const firstName=document.getElementById(view.domstr.firstName)
//     const lastName=document.getElementById(view.domstr.lastName)
//     const email=document.getElementById(view.domstr.email)
//     const phone=document.getElementById(view.domstr.phone)
//     submit.addEventListener("click",(e)=>{
        
//         const newUser=new model.User(firstName.value, lastName.value ,email.value, phone.value)
//          model.addUser(newUser).then(user=>{
//          state.users=[user,...state.allUsers]
//      })
       
//        // reset part
        

//     })

        
//    }
   
   
    const init = () => {
       
       
        model.getUsers().then(users=>{
           
          state.users=[...users].reverse()
        
           
        }

            
        )
    }

    const bootstrap =()=>{
        init(),
        deleteUser()
        addUser()
    }

    return {
        bootstrap,
    }
})(Model, View)
Controller.bootstrap ()