import { Route, Routes } from 'react-router-dom'
import { Home } from '../pages/Home'
import { Checkout } from '../pages/Checkout'
import { Order } from '../pages/Order'
import { HeaderLayout } from '../layout/DefaultLayouts'

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<HeaderLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/history" element={<Checkout />} />
        <Route path="/order" element={<Order />} />
      </Route>
    </Routes>
  )
}
