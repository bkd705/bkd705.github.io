// @flow
import React from 'react'
import type { Element } from 'react'
import './contactinfo.css'

type contactInfoType = {
  phone: string,
  email: string
}

const ContactInfo = ({ phone, email }: contactInfoType): Element<any> => {
  return (
    <div className="contact-info">
      <p><strong>E-Mail:</strong> <a href={`mailto:${email}`}>{email}</a></p>
      <p><strong>Phone:</strong> {phone}</p>
    </div>
  )
}

export default ContactInfo
