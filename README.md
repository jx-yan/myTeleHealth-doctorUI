<h1 align="center">myTeleHealth - Doctor</h1>

<p align="center">myTeleHealth Doctor is the user interface for Doctors to access myTelehealth services</p>
 
### Getting Started
 
- Install [NodeJS](https://nodejs.org/en/) and [Docker](https://www.docker.com) before installing project

1. Download and unzip project
2. Run the following command on CMD in project directory
 ```sh
docker-compose up
npm install
npm run dev
```

# Frontend Frameworks and Libraries
- [Vite](https://vitejs.dev/guide)
- [Vue 3](https://staging.vuejs.org/guide/introduction.html)
- [Tailwind CSS v3](https://tailwindcss.com/docs/configuration)
- [Vue Router v4](https://github.com/vuejs/vue-router-next)
- [Vuex](https://vuex.vuejs.org)
 
# Backend Frameworks and Libraries
- [Flask](https://flask.palletsprojects.com/en/2.1.x)
- [Express](https://expressjs.com/)
- [Node.JS](https://nodejs.org/en/)
- [Firebase](https://firebase.google.com/docs)
- [Pika](https://pika.readthedocs.io/en/stable)
- [Stripe](https://stripe.com/docs/api)

# Microservices
### Complex
- **Book Appointment** - Create new appointment after generating Zoom link 
- **Make Payment** - Generate payment link, Process payment payload from Stripe, Update appointment status, send email with invoice and Zoom links to doctor and patient, redirect to payment success page
- **Create Medical Record** - Attach doctor and patient info in the created medical record, update appointment status and send post-appointment email
 
### Simple
- **Appointment** - Manage appointment data
- **Payment** - Generate payment link
- **Medical Record** - Manage medical record data
- **Zoom** - Generate online meeting links using Zoom API
- **Stripe** - Forward and listen to payment payload from Stripe Domain
- **Mail** - Generate and send email using Mailgun API
- **Doctor** - Manage profile data of doctors
- **Patient** - Manage profile data of patient
 
# Other Technologies
- Message Broker - [RabbitMQ](https://www.rabbitmq.com)
- Container Software - [Docker](https://www.docker.com)
 

