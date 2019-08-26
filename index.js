// var request = require("request");
// import "babel-polyfill"

import axios from 'axios'

const request = axios.create({
  baseURL: "https://api.sendgrid.com/v3/mail/send",
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${process.env.SENDGRID_API_KEY}`,
    'Access-Control-Allow-Methods': 'POST',
    'Access-Control-Allow-Origin': '*',
    "mode": "no-cors"
  }
});

console.log("?????")

const data = {
  personalizations: [{
    to: [{
      email: 'kaite27@gmail.com',
      name: 'John Doe'
    }],
    dynamic_template_data: { 
      "Sender_Name" : "konfronpi" 
    },
    subject: "Hello, World!"
  }],
  from: {
    email: 'beigenut@gmail.com',
    name: 'kate Doe'
  },
  template_id: 'd-0a022d1b51a2483cbe0db333bbdd8ce6'
}


function requestCall(data) {
  request.post('/', data)
}

requestCall(data);

// const options = {
//   method: 'POST',
//   url: 'https://api.sendgrid.com/v3/mail/send',
//   headers: { 
//     'Access-Control-Allow-Methods': 'POST',
//     'Access-Control-Allow-Origin': '*',
//     'Access-Control-Allow-Headers': 'Content-Type',
//     'content-type': 'application/json',
//     'authorization': `Bearer ${process.env.SENDGRID_API_KEY}`
//   },
//   body: {
//     personalizations: [{
//       to: [{
//         email: 'kaite27@gmail.com',
//         name: 'John Doe'
//       }],
//       dynamic_template_data: { 
//         "Sender_Name" : "konfronpi" 
//       },
//       subject: "Hello, World!"
//     }],
//     from: {
//       email: 'beigenut@gmail.com',
//       name: 'kate Doe'
//     },
//     template_id: 'd-0a022d1b51a2483cbe0db333bbdd8ce6'
//   },
//   json: true
// };

// axios(options);

// var options = {
//   method: 'POST',
//   url: 'https://api.sendgrid.com/v3/mail/send',
//   headers: {
//     'content-type': 'application/json',
//     'Access-Control-Allow-Origin': '*',
//     'Access-Control-Allow-Methods': 'POST',
//     'authorization': `Bearer $,
//     {process.env.SENDGRID_API_KEY}`
//   },
//   body: {
//     personalizations: [{
//       to: [{
//         email: 'kaite27@gmail.com',
//         name: 'John Doe'
//       }],
//       dynamic_template_data: { 
//         "Sender_Name" : "konfronpi" 
//       },
//       subject: "Hello, World!"
//     }],
//     from: {
//       email: 'beigenut@gmail.com',
//       name: 'kate Doe'
//     },
//     template_id: 'd-0a022d1b51a2483cbe0db333bbdd8ce6'
//   },
//   json: true
// };

// // request(options, function (error, response, body) {
// //   if (error) throw new Error(error);

// //   console.log(body);
// // });

// request(options)