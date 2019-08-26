import axios from 'axios'

const acceptBtn = document.querySelector('.accept')
const regretBtn = document.querySelector('.regret')

function sendEmail(str) {
  axios.post('https://api.emailjs.com/api/v1.0/email/send', str)
}

acceptBtn.addEventListener('click', e => {
  const toName = document.querySelector('.to_name')
  const toEmail = document.querySelector('.to_email')

  const data = {
    user_id: `${process.env.API_KEY}`,
    template_id: `${process.env.TEMPLATE_ID}`,
    service_id: `${process.env.SERVICE_ID}`,
    template_params: {
      "to_name": `${toName.value}`,
      "to_email": `${toEmail.value}`,
      "from_name": "Mary",
      "from_address": "fort",
      "from_state": "ny",
      "from_zip": "10000"
    }
  }

  if (toName.value && toEmail.value) {
    sendEmail(data)
    alert('Thank you for sending RSVP. Check your email.')
  } else {
    alert('Please write your name and email')
  }
})

regretBtn.addEventListener('click', e => {
  alert("Really?!")
})