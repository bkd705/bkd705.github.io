import React from 'react'
import './contactinfo.css'

const ContactInfo = ({ phone, email }) => {
  return (
    <div className="contact-info">
      <p><strong>E-Mail:</strong> <a href={`mailto:${email}`}>{email}</a></p>
      <p><strong>Phone:</strong> {phone}</p>
    </div>
  )
}

export default ContactInfo
