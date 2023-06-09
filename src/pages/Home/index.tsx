import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import {
  HomeContainer,
  HomeContent,
  HomeSection,
  HomeImage,
  DatalistStart,
  DatalistEnd,
  CoffeeArrives,
  PackagingKeeps,
  FastAndTracked,
  FastAndSecure,
  SectionContainer
} from './styles'
import HomeCoffe from '../../assets/HomeCoffe.svg'
import { Menu } from './Menu'

export const Home = () => {
  return (
    <HomeContainer>
      <SectionContainer>
        <section>
          <HomeContent>
            <h1>Encontre o café perfeito para qualquer hora do dia </h1>
            <p>
              Com o Coffe Delivery você recebe seu café onde estiver, a qualquer
              hora
            </p>
          </HomeContent>
          <HomeSection>
            <DatalistStart>
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
            </DatalistStart>
            <DatalistEnd>
              <PackagingKeeps>
                <i>
                  <Package size={16} weight="fill" />
                </i>
                Embalagem mantém o café intacto
              </PackagingKeeps>
              <CoffeeArrives>
                <i>
                  <Coffee size={16} weight="fill" />
                </i>
                O café chega fresquinho até você
              </CoffeeArrives>
            </DatalistEnd>
          </HomeSection>
        </section>
        <HomeImage>
          <img src={HomeCoffe} alt="" />
        </HomeImage>
      </SectionContainer>
      <Menu />
    </HomeContainer>
  )
}
