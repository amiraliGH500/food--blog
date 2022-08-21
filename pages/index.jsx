import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Nav from '../components/Nav'
import Section from '../components/Section'
import Head from 'next/head'
function index() {
  return (
    <div>
      <Head> 
        <title>food-blog</title>
        <link rel="Icon" href="/favicon.ico"/>
      </Head>
      <Header/>
      <Nav/>
      <Section/>
      <Footer/>
    </div>
  )
}

export default index