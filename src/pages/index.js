import React from "react"

// async function postData(url = '', data ={}){
// const response = await fetch(url, {
//   method: 'GET',
//   headers: new Headers({
//     'Content-Type: application/json',
//     
//   }),
// })
// }

// async function postData(url = '', data = {}, offset= 0) {
//   // Default options are marked with *
//   const response = await fetch(url, {
//     method: 'GET', // *GET, POST, PUT, DELETE, etc.
//     // mode: 'cors', // no-cors, *cors, same-origin
//     // cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
//     // credentials: 'same-origin', // include, *same-origin, omit
//     headers: new Headers({
//       'Content-Type': 'application/json',
//       'Authorization':'Bearer BQCt9U0VlcdmTslUfH9NPob5N1S2DzSajHfypImEioD6OHkou_b_OfmiGFp4bJhrVjVO5jCJsIubsRGe8fANrqdsz6f1PraxSIBKVXUhko_ghaSltXLiqKuxKiHYuZuEiSho27XYVHmEKHTHBraQBPc'
//     }),
//     redirect: 'follow', // manual, *follow, error
//     referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
//   });
//   return response.json(); // parses JSON response into native JavaScript objects
// }

// postData('https://api.spotify.com/v1/me/albums?limit=50')
//   .then(data => {
//     console.log(data); // JSON data parsed by `response.json()` call
//     let fetched=0
//     while(fetched < data.total){
//       postData('https://api.spotify.com/v1/me/albums?offset=50limit=50')
//       .then(data =>{
//         console.log(data);
//       })
//       fetched+=50;
//     }
//   });

export default function Home() {
  console.log("hey!!!!!")

  return <div>Hello world!</div>  
}
