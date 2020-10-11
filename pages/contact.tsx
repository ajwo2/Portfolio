import Link from 'next/link'
import Layout from '../components/layout'
import Nav from '../components/nav'
import React from 'react'
import ContactForm from '../components/ContactForm'

const Top = () => (
  <div>
   <Nav/>
   <Layout>
      <ContactForm/>
    </Layout>
  </div>
)

export default Top;