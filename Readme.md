<p align="center">
  <h3 align="center">https://github.com/beigenut/js-ex-02-send-email</h3>
  <p align="center">
  Sending Email using Email service providers's API, based on Node.js. 
  <a href="https://ecstatic-carson-5f9761.netlify.com" target="_blank"> View website</a>
</p>
</p>

_ _ _


## Table of Contents

* [About the Project](#about-the-project)
  * [Built With](#built-with)
* Getting Started
  * [Prerequisites](#prerequisites)
* [Usage](#usage)
* [Contributing](#contributing)
* [Contact](#contact)

## About The Project

Send an email with designed HTML template using 3rd party's Email API service.

### Built With
* [Emailjs](https://www.emailjs.com/)
* [sendGrid](https://sendgrid.com/solutions/email-api/)

* [axios](https://github.com/axios/axios)
* [parcel-bundler](https://parceljs.org/)
* [babel](https://babeljs.io/)
* [rimraf](https://www.npmjs.com/package/rimraf)


<!-- GETTING STARTED -->
## Getting Started

### Prerequisites
 
`npm i --save @sendgrid/mail`

<!-- USAGE EXAMPLES -->
## Usage

1. Sign in SendGrid.
2. Get API key by following instructions.

```js
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const msg = {
  to: 'test@example.com',
  from: 'test@example.com',
  subject: 'Sending with Twilio SendGrid is Fun',
  text: 'and easy to do anywhere, even with Node.js',
  html: '<strong>and easy to do anywhere, even with Node.js</strong>',
};

sgMail.send(msg);
```

<br />

If you want to send an email with customized design and dynamic adjustable data, you have to use SendGrid v3 API.

```js
var request = require("request");

var options = { 
  method: 'POST',
  url: 'https://api.sendgrid.com/v3/mail/send',
  headers: { 
    'content-type': 'application/json',
     authorization: 'Bearer <<YOUR_API_KEY>>' 
  },
  body: { 
    personalizations: [ { 
      to: [ { email: 'john.doe@example.com', name: 'John Doe' } ],
      dynamic_template_data: { 
        verb: '', 
        adjective: '', 
        noun: '', 
        currentDayofWeek: '' 
        },
      subject: 'Hello, World!' 
      } ],
    from: { 
       email: 'noreply@johndoe.com', name: 'John Doe' 
      },
    reply_to: { 
       email: 'noreply@johndoe.com', name: 'John Doe' 
      },
    template_id: '<<YOUR_TEMPLATE_ID>>' 
  },
  json: true };

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});
```

`* caution *`

SendGrid `blocks` call with Authorization information such as API Key on `browser-based only` application. 
[CORS SendGrid](https://sendgrid.com/docs/for-developers/sending-email/cors/)

___ 


<br />

If you want to use sending Email service using only Front-end skill like Java Script function.. `Use Email.js`

Let them allow to connect one of your email services like Gmail, Outlook, mailjet etc. 

```js
var data = {
    service_id: '<YOUR SERVICE ID>',
    template_id: '<YOUR TEMPLATE ID>',
    user_id: '<YOUR USER ID>',
    template_params: {
        'username': 'James',
    }
};
 
$.ajax('https://api.emailjs.com/api/v1.0/email/send', {
    type: 'POST',
    data: JSON.stringify(data),
    contentType: 'application/json'
}).done(function() {
    alert('Your mail is sent!');
}).fail(function(error) {
    alert('Oops... ' + JSON.stringify(error));
});
```



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request



<!-- CONTACT -->
## Contact

Project Link: [https://github.com/beigenut/react-ex-02-recipe](https://github.com/beigenut/react-ex-02-recipe)



