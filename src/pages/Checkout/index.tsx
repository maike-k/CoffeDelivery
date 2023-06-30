import { MapPinLine, CurrencyDollar, CreditCard, Bank, Money, Trash } from 'phosphor-react'
import { CheckoutAddress, CheckoutContainer, CheckoutData, CheckoutForm, CheckoutOne, CheckoutPayment, CheckoutPaymentInfo, CheckoutThree, CheckoutTwo, PaymentCash } from './styles'
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
      <div>
        <h2>Cafés selecionados</h2>
        <div>
          <div>
            <img src="" alt="" />
            <div>
              <span>Expresso Tradicional</span>
              <div>
                <button>-</button>
                <span>1</span>
                <button>+</button>
                <button>
                  <Trash />
                  Remover
                </button>
              </div>
            </div>
          </div>
          <div>
            <img src="" alt="" />
            <div>
              <span>Latte</span>
              <div>
                <button>-</button>
                <span>1</span>
                <button>+</button>
                <button>
                  <Trash />
                  Remover
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </CheckoutContainer>
  )
}
