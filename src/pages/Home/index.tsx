import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import {
  HomeContainer,
  HomeContent,
  HomeSection,
  HomeImage,
  DatailsStart,
  DatailsEnd,
  CoffeArrives,
  PackagingKeeps,
  FastAndTracked,
  FastAndSecure
} from './styles'
import HomeCoffe from '../../assets/HomeCoffe.svg'
export const Home = () => {
  return (
    <HomeContainer>
      <div>
        <HomeContent>
          <h1>Encontre o café perfeito para qualquer hora do dia </h1>
          <p>
            Com o Coffe Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>
        </HomeContent>
        <HomeSection>
          <DatailsStart>
            <FastAndSecure>
              <i>
                <ShoppingCart size={16} weight="fill" />
              </i>
              Compra simples e segura
            </FastAndSecure>
            <FastAndTracked>
              <i>
                <Timer size={16} weight="fill" />
              </i>
              Entrega rápida e rastreada
            </FastAndTracked>
          </DatailsStart>
          <DatailsEnd>
            <PackagingKeeps>
              <i>
                <Package size={16} weight="fill" />
              </i>
              Embalagem mantém o café intacto
            </PackagingKeeps>
            <CoffeArrives>
              <i>
                <Coffee size={16} weight="fill" />
              </i>
              O café chega fresquinho até você
            </CoffeArrives>
          </DatailsEnd>
        </HomeSection>
      </div>
      <HomeImage>
        <img src={HomeCoffe} alt="" />
      </HomeImage>
    </HomeContainer>
  )
}
