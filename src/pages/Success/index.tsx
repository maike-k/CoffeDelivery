import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import Entregador from '../../assets/Entrega.svg'
import { SuccessAddress, SuccessContainer } from './styles'
export const Success = () => {
  return (
    <SuccessContainer>
      <div>
        <h1>Uhu! Pedido confirmado</h1>
        <span>Agora é só aguardar que logo o café chegará até você</span>
        <SuccessAddress>
          <div>
            <div>
              <i><MapPin /></i>
              <div>
                <span>Entrega em Rua João Daniel Martinelli, 102 Farrapos - Porto Alegre, RS</span>
                <strong>Farrapos - Porto Alegre, RS</strong>
              </div>
            </div>
            <div>
              <i><Timer /></i>
              <div>
                <span>Previsão de entrega</span>
                <strong>20 min - 30 min</strong>
              </div>
            </div>
            <div>
              <i><CurrencyDollar /></i>
              <div>
                <span>Pagamento de entrega</span>
                <strong>Cartão de Crédito</strong>
              </div>
            </div>
          </div>
          <img src={Entregador} alt="" />
        </SuccessAddress>
      </div>
    </SuccessContainer>
  )
}
