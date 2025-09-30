// function register(cb){
//     setTimeout(()=>{
//       console.log('register end')   
//       cb();
//     },4000)
 
// }
// function sendEmail(cb){
//    setTimeout(()=>{
//       console.log('Send Email end')   
//       cb();
//     },3000)  
// }
// function login(cb){
//     setTimeout(()=>{
//       console.log('Login end')   
//       cb();
//     },1000)  
// }
// function getData(cb){
//     setTimeout(()=>{
//       console.log('get Data end')   
//       cb();
//     },8000)   
// }
// function displayData(){
//     setTimeout(()=>{
//       console.log('display data end')   
//     },2000)  
// }

// //callback hell
// register(()=>{
//          sendEmail(()=>{
//                 login(()=>{
//                       getData(()=>{
//                                displayData();
//                       });
//                 });
//          });
// });


function register() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Register end");
      resolve();
    }, 4000);
  });
}

function sendEmail() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Send Email end");
      resolve();
    }, 3000);
  });
}

function login() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Login end");
      resolve();
    }, 1000);
  });
}

function getData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Get Data end");
      resolve();
    }, 8000);
  });
}

function displayData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Display Data end");
      resolve();
    }, 2000);
  });
}
register()
.then(sendEmail)
.then(login)
.then(getData)
.then(displayData)
.catch((err) => console.log("Error:", err));




console.log('call other application')