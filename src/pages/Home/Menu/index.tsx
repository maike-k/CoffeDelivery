import { ShoppingCartSimple } from 'phosphor-react'
import ExpressoTradicional from '../../../assets/ExpressoTradicional.svg'
import ExpressoAmericano from '../../../assets/ExpressoAmericano.svg'
import ExpressoCremoso from '../../../assets/ExpressoCremoso.svg'
import ExpressoGelado from '../../../assets/ExpressoGelado.svg'
import CafeComLeite from '../../../assets/CafeComLeite.svg'
import Latte from '../../../assets/Latte.svg'
import Capuccino from '../../../assets/Capuccino.svg'
import Machiato from '../../../assets/Machiato.svg'
import Moccacino from '../../../assets/Mocaccino.svg'
import ChocolateQuente from '../../../assets/ChocolateQuente.svg'
import Cubano from '../../../assets/Cubano.svg'
import Havaiano from '../../../assets/Havaiano.svg'
import Árabe from '../../../assets/Árabe.svg'
import Irlandês from '../../../assets/Irlandês.svg'
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
              <img src={ExpressoTradicional} />
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
              <img src={ExpressoAmericano} />
              <CoffeeType>
                <span>Tradicional</span>
              </CoffeeType>
              <strong>Expresso Americano</strong>
              <p>Expresso diluído, menos intenso que o tradicional</p>
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
              <img src={ExpressoCremoso} />
              <CoffeeType>
                <span>Tradicional</span>
              </CoffeeType>
              <strong>Expresso Cremoso</strong>
              <p>Café expresso tradicional com espuma cremosa</p>
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
              <img src={ExpressoGelado} />
              <CoffeeType>
                <span>Tradicional</span>
                <span>Gelado</span>
              </CoffeeType>
              <strong>Expresso Gelado</strong>
              <p>Bebida preparada com café expresso e cubos de gelo</p>
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
              <img src={CafeComLeite} />
              <CoffeeType>
                <span>Tradicional</span>
                <span>com leite</span>
              </CoffeeType>
              <strong>Café com Leite</strong>
              <p>Meio a meio de expresso tradicional com leite vaporizado</p>
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
              <img src={Latte} />
              <CoffeeType>
                <span>Tradicional</span>
                <span>com leite</span>
              </CoffeeType>
              <strong>Latte</strong>
              <p>Uma dose de café expresso com o dobro de leite e espuma cremosa</p>
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
              <img src={Capuccino} alt="" />
              <CoffeeType>
                <span>Tradicional</span>
                <span>com leite</span>
              </CoffeeType>
              <strong>Capuccino</strong>
              <p>Bebida com canela feita de doses iguais de café, leite e espuma</p>
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
              <img src={Machiato} alt="" />
              <CoffeeType>
                <span>Tradicional</span>
                <span>com leite</span>
              </CoffeeType>
              <strong>Macchiato</strong>
              <p>Café expresso misturado com um pouco de leite quente e espuma</p>
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
              <img src={Moccacino} alt="" />
              <CoffeeType>
                <span>Tradicional</span>
                <span>com leite</span>
              </CoffeeType>
              <strong>Mocaccino</strong>
              <p>Café expresso com calda de chocolate, pouco leite e espuma</p>
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
              <img src={ChocolateQuente} alt="" />
              <CoffeeType>
                <span>especial</span>
                <span>com leite</span>
              </CoffeeType>
              <strong>Chocolate com leite</strong>
              <p>Bebida feita com chocolate dissolvido no leite quente e café</p>
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
              <img src={Cubano} alt="" />
              <CoffeeType>
                <span>especial</span>
                <span>alcoólico</span>
                <span>gelado</span>
              </CoffeeType>
              <strong>Cubano</strong>
              <p>Drink gelado de café expresso com rum, creme de leite e hortelã</p>
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
              <img src={Havaiano} alt="" />
              <CoffeeType>
                <span>Especial</span>
              </CoffeeType>
              <strong>Havaiano</strong>
              <p>Bebida adocicada preparada com café e leite de coco</p>
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
              <img src={Árabe} alt="" />
              <CoffeeType>
                <span>especial</span>
              </CoffeeType>
              <strong>Árabe</strong>
              <p>Bebida preparada com grãos de café árabe e especiarias</p>
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
              <img src={Irlandês} alt="" />
              <CoffeeType>
                <span>Especial</span>
                <span>Alcoólico</span>
              </CoffeeType>
              <strong>Irlandês</strong>
              <p>Bebida a base de café, uísque irlandês, açúcar e chantilly</p>
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
