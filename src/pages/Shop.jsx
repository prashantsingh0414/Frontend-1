import React from 'react'
import Hero from '../components/Hero/Hero'
import NewCollection from '../components/NewCollection/NewCollection'
import NewsLetter from '../components/NewsLetter/NewsLetter'
import Offers from '../components/Offers/Offers'
import Popular from '../components/Popular/Popular'
export default function shop() {
  return (
    <div>
      <Hero/>
      <Popular/>
      <Offers/>
      <NewCollection/>
      <NewsLetter/>
      
    </div>
  )
}
