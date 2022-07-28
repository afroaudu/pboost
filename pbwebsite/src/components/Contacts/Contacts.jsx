import React from 'react'

const Contacts = () => {
  return (
    <div>
      <form action="">
        <label htmlFor="">Full name: </label>
        <input type="name" placeholder='write down your name' />

        <label htmlFor="">Email: </label>
        <input type="email" placeholder='write email' />
        
        <label htmlFor="">Phone number: </label>
        <input type="tel" placeholder='write down your number' />
        
        <label htmlFor="">Subject: </label>
        <input type="text" placeholder='write down your name' />
        
        <label htmlFor="">Message: </label>
        <input type="text" placeholder='write down your name' />
        
      </form>
    </div>
  )
}

export default Contacts