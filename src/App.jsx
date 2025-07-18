import React from 'react'
import Header from './Components/HeaderAnnounce'
import Header2 from './Components/Header2/HeadMain'
import HeadMain from './Components/Header2/HeadMain'
import Body from './Components/Body'
import Info from './Components/Info'
import AwardSection from './Components/AwardSection'
import CardProduct  from './Components/CardProduct'
const App = () => {
  return (
    <div >
      <Header />
      <HeadMain />
    <Body />
      <Info />
      <AwardSection />
      <CardProduct />
    </div>
  )
}

export default App
