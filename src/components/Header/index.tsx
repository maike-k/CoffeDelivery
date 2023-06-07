import CoffeDelivery from '../../assets/Coffe.svg'
import { MapPin, ShoppingCart } from 'phosphor-react'
import { NavLink } from 'react-router-dom'
import { HeaderContainer, NavContent } from './styles'

export const Header = () => {
  return (
    <HeaderContainer>
      <img src={CoffeDelivery} />
      <NavContent>
        <span>
          <i>
            <MapPin size={22} weight="fill" />
          </i>
          Fortaleza, CE
        </span>
        <NavLink to={'/history'}>
          <ShoppingCart size={22} weight="fill" />
        </NavLink>
      </NavContent>
    </HeaderContainer>
  )
}
