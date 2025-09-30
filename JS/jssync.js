function resister(){
    wait5sec()
    console.log("registered")
}
function sendemail(){
    wait5sec()
    console.log("mail sended")
}
function login(){
    wait5sec()
    console.log("login")
}
function getdata(){
    wait5sec()
    console.log("data fetched")
}
function display(){
    wait5sec()
    console.log("displayed")
}

function wait5sec(){
    const t = new Date().getTime()+5000
    while(new Date().getTime<t){}
}