// const url = "https://api.github.com/users/mukulkr30";
// const resp = fetch(url);
// resp.then((res)=>{
//     return res.json();
// }).then((data)=>{
//     console.log("data: ",data);
// })
// .catch((err)=>{
//     console.log("Error: ",err);
// }).finally(()=>{
//     console.log("entered in finally block");
// })



const url = `https:/dummyjson1.com/users?limit=2`;
const pr = fetch(url);
pr.then(function(res){
    return res.json();
}).then(data=>{
    console.log("data: ",data);
}).catch((err)=>{
    console.log("Error: ",err.message);
}).finally(()=>{
    console.log('inside finally');
})


// const f1 = async()=>{
//     try{
//         const res =await fetch(url);
//         const data = await res.json()
//     }
// }