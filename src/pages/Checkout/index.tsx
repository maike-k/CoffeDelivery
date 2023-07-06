import {
  MapPinLine,
  CurrencyDollar,
  CreditCard,
  Bank,
  Money,
  Trash
} from 'phosphor-react'

import {
  CheckoutAddress,
  CheckoutButton,
  CheckoutContainer,
  CheckoutData,
  CheckoutForm,
  CheckoutInfo,
  CheckoutItemsSelect,
  CheckoutOne,
  CheckoutPayment,
  CheckoutPaymentInfo,
  CheckoutSelect,
  CheckoutThree,
  CheckoutTwo,
  PaymentCash
} from './styles'

import Latte from '../../assets/Latte.svg'
import ExpressoTradicional from '../../assets/ExpressoTradicional.svg'

export const Checkout = () => {

  return (
    <CheckoutContainer>
      <main>
        <h2>Complete o seu pedido</h2>
        <form>
          <CheckoutForm>
            <CheckoutAddress>
              <i><MapPinLine size={22} /></i>
              <div>
                <strong>
                  Endereço de Entrega
                </strong>
                <span>Informe o endereço aonde deseja receber seu pedido</span>
              </div>
            </CheckoutAddress>
            <CheckoutData>
              <CheckoutOne>
                <input type="text" placeholder='cep' />
                <input type="text" placeholder='rua' />
              </CheckoutOne>
              <CheckoutTwo>
                <input type="text" placeholder='número' />
                <input type="text" placeholder='complemento' />
              </CheckoutTwo>
              <CheckoutThree>
                <input type="text" placeholder='bairro' />
                <input type="text" placeholder='cidade' />
                <input type="text" placeholder='uf' />
              </CheckoutThree>
            </CheckoutData>
          </CheckoutForm>
          <CheckoutPayment>
            <CheckoutPaymentInfo>
              <i><CurrencyDollar size={22} /></i>
              <div>
                <strong>Pagamento</strong>
                <span>O pagamento é feito na entrega. Escolha a forma que deseja pagar</span>
              </div>
            </CheckoutPaymentInfo>
            <PaymentCash>
              <button>
                <i> <CreditCard size={12} /></i>
                cartão de crédito
              </button>
              <button>
                <i><Bank size={12} /></i>
                cartão de débito
              </button>
              <button>
                <i> <Money size={12} /></i>
                dinheiro
              </button>
            </PaymentCash>
          </CheckoutPayment>
        </form>
      </main>
      <section>
        <h2>Cafés selecionados</h2>
        <CheckoutSelect>
          <CheckoutItemsSelect>
            <img src={ExpressoTradicional} />
            <div>
              <CheckoutInfo>
                <span>Expresso Tradicional</span>
                <strong> R$ 9.90</strong>
              </CheckoutInfo>
              <CheckoutButton>
                <div>
                  <button>-</button>
                  <span>1</span>
                  <button>+</button>
                </div>
                <div>
                  <i>
                    <Trash />
                  </i>
                  <button>
                    Remover
                  </button>
                </div>
              </CheckoutButton>
            </div>
          </CheckoutItemsSelect>
          <CheckoutItemsSelect>
            <img src={Latte} />
            <div>
              <CheckoutInfo>
                <span>Expresso Tradicional</span>
                <strong> R$ 9.90</strong>
              </CheckoutInfo>
              <CheckoutButton>
                <div>
                  <button>-</button>
                  <span>1</span>
                  <button>+</button>
                </div>
                <div>
                  <i>
                    <Trash />
                  </i>
                  <button>
                    Remover
                  </button>
                </div>
              </CheckoutButton>
            </div>
          </CheckoutItemsSelect>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </CheckoutSelect>

      </section>
    </CheckoutContainer>
  )
}
