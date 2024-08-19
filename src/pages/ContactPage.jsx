import React from 'react'
import Form from '../components/Form'

const ContactPage = () => {
  return (
    <div id='Contact' className='contact-page'>
      <h1 className='text-3xl sm:text-5xl lg:text-6xl uppercase w-fit mx-auto p-10 rounded-[50px] bg-white shadow-lg'>Contact Us</h1>
      <Form />
    </div>
  )
}

export default ContactPage