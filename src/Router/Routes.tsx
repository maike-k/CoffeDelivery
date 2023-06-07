import { Route, Routes } from 'react-router-dom'
import { Home } from '../pages/Home'
import { History } from '../pages/History'
import { Order } from '../pages/Order'
import { HeaderLayout } from '../layout/DefaultLayouts'

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<HeaderLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/history" element={<History />} />
        <Route path="/order" element={<Order />} />
      </Route>
    </Routes>
  )
}
