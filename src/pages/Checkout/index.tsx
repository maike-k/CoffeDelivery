import { MapPinLine, CurrencyDollar, CreditCard, Bank, Money, Trash } from 'phosphor-react'
import { CheckoutAddress, CheckoutContainer, CheckoutData, CheckoutForm, CheckoutOne, CheckoutThree, CheckoutTwo } from './styles'
export const Checkout = () => {

  return (
    <CheckoutContainer>
      <div>
        <h2>Complete o seu pedido</h2>
        <CheckoutForm>
          <form>
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
            <div>
              <h3>
                <CurrencyDollar />
                pagamento
              </h3>
              <span>O pagamento é feito na entrega. Escolha a forma que deseja pagar</span>
            </div>
            <div>
              <button>
                <CreditCard />
                cartão de crédito
              </button>
              <button>
                <Bank />
                cartão de débito
              </button>
              <button>
                <Money />
                dinheiro
              </button>
            </div>
          </form>
        </CheckoutForm>
      </div>
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
