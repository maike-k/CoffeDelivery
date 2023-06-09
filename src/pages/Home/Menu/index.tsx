import { ShoppingCartSimple } from 'phosphor-react'
import ExpressoTradicional from '../../../assets/ExpressoTradicional.svg'
import {
  MenuCoffee,
  MenuItem,
  CoffeeContainer,
  MenuInfo,
  CoffeeType,
  CoffeeCard,
  Test,
  Button
} from './styles'

export const Menu = () => {
  return (
    <CoffeeContainer>
      <nav>
        <h1>Nossos cafés</h1>
        <MenuCoffee>
          <MenuItem>
            <MenuInfo>
              <img src={ExpressoTradicional} alt="" />
              <CoffeeType>
                <span>Tradicional</span>
              </CoffeeType>
              <strong>Expresso Tradicional</strong>
              <p>O tradicional café feito com água quente e grão moídos</p>
            </MenuInfo>
            <CoffeeCard>
              <div>
                <span>R$</span>
                <strong>9.90</strong>
              </div>
              <Button>
                <Test>
                  <button>+</button>
                  <span>0</span>
                  <button>-</button>
                </Test>
                <i>
                  <ShoppingCartSimple size={22} weight="fill" />
                </i>
              </Button>
            </CoffeeCard>
          </MenuItem>
          <MenuItem>
            <MenuInfo>
              <img src={ExpressoTradicional} alt="" />
              <CoffeeType>
                <span>Tradicional</span>
              </CoffeeType>
              <strong>Expresso Tradicional</strong>
              <p>O tradicional café feito com água quente e grão moídos</p>
            </MenuInfo>
            <CoffeeCard>
              <div>
                <span>R$</span>
                <strong>9.90</strong>
              </div>
              <Button>
                <Test>
                  <button>+</button>
                  <span>0</span>
                  <button>-</button>
                </Test>
                <i>
                  <ShoppingCartSimple size={22} weight="fill" />
                </i>
              </Button>
            </CoffeeCard>
          </MenuItem>
          <MenuItem>
            <MenuInfo>
              <img src={ExpressoTradicional} alt="" />
              <CoffeeType>
                <span>Tradicional</span>
              </CoffeeType>
              <strong>Expresso Tradicional</strong>
              <p>O tradicional café feito com água quente e grão moídos</p>
            </MenuInfo>
            <CoffeeCard>
              <div>
                <span>R$</span>
                <strong>9.90</strong>
              </div>
              <Button>
                <Test>
                  <button>+</button>
                  <span>0</span>
                  <button>-</button>
                </Test>
                <i>
                  <ShoppingCartSimple size={22} weight="fill" />
                </i>
              </Button>
            </CoffeeCard>
          </MenuItem>
          <MenuItem>
            <MenuInfo>
              <img src={ExpressoTradicional} alt="" />
              <CoffeeType>
                <span>Tradicional</span>
              </CoffeeType>
              <strong>Expresso Tradicional</strong>
              <p>O tradicional café feito com água quente e grão moídos</p>
            </MenuInfo>
            <CoffeeCard>
              <div>
                <span>R$</span>
                <strong>9.90</strong>
              </div>
              <Button>
                <Test>
                  <button>+</button>
                  <span>0</span>
                  <button>-</button>
                </Test>
                <i>
                  <ShoppingCartSimple size={22} weight="fill" />
                </i>
              </Button>
            </CoffeeCard>
          </MenuItem>
          <MenuItem>
            <MenuInfo>
              <img src={ExpressoTradicional} alt="" />
              <CoffeeType>
                <span>Tradicional</span>
              </CoffeeType>
              <strong>Expresso Tradicional</strong>
              <p>O tradicional café feito com água quente e grão moídos</p>
            </MenuInfo>
            <CoffeeCard>
              <div>
                <span>R$</span>
                <strong>9.90</strong>
              </div>
              <Button>
                <Test>
                  <button>+</button>
                  <span>0</span>
                  <button>-</button>
                </Test>
                <i>
                  <ShoppingCartSimple size={22} weight="fill" />
                </i>
              </Button>
            </CoffeeCard>
          </MenuItem>
          <MenuItem>
            <MenuInfo>
              <img src={ExpressoTradicional} alt="" />
              <CoffeeType>
                <span>Tradicional</span>
              </CoffeeType>
              <strong>Expresso Tradicional</strong>
              <p>O tradicional café feito com água quente e grão moídos</p>
            </MenuInfo>
            <CoffeeCard>
              <div>
                <span>R$</span>
                <strong>9.90</strong>
              </div>
              <Button>
                <Test>
                  <button>+</button>
                  <span>0</span>
                  <button>-</button>
                </Test>
                <i>
                  <ShoppingCartSimple size={22} weight="fill" />
                </i>
              </Button>
            </CoffeeCard>
          </MenuItem>
          <MenuItem>
            <MenuInfo>
              <img src={ExpressoTradicional} alt="" />
              <CoffeeType>
                <span>Tradicional</span>
              </CoffeeType>
              <strong>Expresso Tradicional</strong>
              <p>O tradicional café feito com água quente e grão moídos</p>
            </MenuInfo>
            <CoffeeCard>
              <div>
                <span>R$</span>
                <strong>9.90</strong>
              </div>
              <Button>
                <Test>
                  <button>+</button>
                  <span>0</span>
                  <button>-</button>
                </Test>
                <i>
                  <ShoppingCartSimple size={22} weight="fill" />
                </i>
              </Button>
            </CoffeeCard>
          </MenuItem>
        </MenuCoffee>
      </nav>
    </CoffeeContainer>
  )
}
