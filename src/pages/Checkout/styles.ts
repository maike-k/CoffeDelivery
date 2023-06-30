import styled from 'styled-components'

export const CheckoutContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;

  h2 {
    font-size: 1.12rem;
    font-family: 'Baloo 2', sans-serif;
    font-weight: 700;
    color: ${(props) => props.theme['gray-500']};
    margin-bottom: 1rem;
  }
`

export const CheckoutForm = styled.div`
  background-color: ${(props) => props.theme['light-200']};
  padding: 2.5rem;
  border-radius: 6px;

`

export const CheckoutAddress = styled.div`
  display: flex;
  gap: .5rem;
  margin-bottom: 2rem;

  i {
    color: ${(props) => props.theme['yellow-700']}
  }

  div {
    display: flex;
    flex-direction: column;
  }

  strong {
    font-size: 1rem;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    color: ${(props) => props.theme['gray-500']};
  }

  span {
    font-family: 'Roboto', sans-serif;
    font-size: .875rem;
    color: ${(props) => props.theme['gray-400']};
  }

`

export const CheckoutData = styled.div`
  width: 35rem;
`



export const CheckoutOne = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  input:first-child {                       
    border-radius: 4px;
    padding: .75rem;
    width: 12.5rem;
    background: ${(props) => props.theme['light-300']};
    border: 1px solid ${(props) => props.theme['light-400']};
  

    &::placeholder {
    font-family: 'Roboto', sans-serif;
    font-size: .75rem;
    text-transform: uppercase;
    color: ${(props) => props.theme['gray-300']};
    display: flex;
    justify-content: space-between;

  }

  &:focus {
    border: 1px solid ${(props) => props.theme['yellow-700']};
    color: ${(props) => props.theme['gray-400']};
  }
  }

  input:last-child {
    width: 100%;
    padding: .75rem;
    border-radius: 4px;
    background: ${(props) => props.theme['light-300']};
    border: 1px solid ${(props) => props.theme['light-400']};


    &::placeholder {
    font-family: 'Roboto', sans-serif;
    font-size: .75rem;
    text-transform: uppercase;
    color: ${(props) => props.theme['gray-300']};

    }

  &:focus {
    border: 1px solid ${(props) => props.theme['yellow-700']};
    color: ${(props) => props.theme['gray-400']};
  }
  }

 

`
export const CheckoutTwo = styled.div`
  display: flex;
  margin: 1rem 0;
  gap: .75rem;

  input:first-child {                       
    border-radius: 4px;
    padding: .75rem;
    width: 12.5rem;
    background: ${(props) => props.theme['light-300']};
    border: 1px solid ${(props) => props.theme['light-400']};


    &::placeholder {
    font-family: 'Roboto', sans-serif;
    font-size: .75rem;
    text-transform: uppercase;
    color: ${(props) => props.theme['gray-300']};
    display: flex;
    justify-content: space-between;

  }

  &:focus {
    border: 1px solid ${(props) => props.theme['yellow-700']};
    color: ${(props) => props.theme['gray-400']};

  }
  }

  input:last-child {
    flex: 1;
    padding: .75rem;
    border-radius: 4px;
    background: ${(props) => props.theme['light-300']};
    border: 1px solid ${(props) => props.theme['light-400']};


    &::placeholder {
    font-family: 'Roboto', sans-serif;
    font-size: .75rem;
    text-transform: uppercase;
    color: ${(props) => props.theme['gray-300']};

  }

  &:focus {
    border: 1px solid ${(props) => props.theme['yellow-700']};
    color: ${(props) => props.theme['gray-400']};
  }
  }
  
`

export const CheckoutThree = styled.div`
  display: flex;
  margin: 1rem 0;
  gap: .75rem;
  

 
  input:first-child{
    border-radius: 4px;
    padding: .75rem;
    width: 12.5rem;
    background: ${(props) => props.theme['light-300']};
    border: 1px solid ${(props) => props.theme['light-400']
  };


    &::placeholder {
    font-family: 'Roboto', sans-serif;
    font-size: .75rem;
    text-transform: uppercase;
    color: ${(props) => props.theme['gray-300']};
    display: flex;
    justify-content: space-between;

  }

  &:focus {
    border: 1px solid ${(props) => props.theme['yellow-700']};
    color: ${(props) => props.theme['gray-400']};

  }
  }

  

  input:nth-child(2) {
  flex: 1;
  padding: .75rem;
  border-radius: 4px;
  background: ${(props) => props.theme['light-300']};
  border: 1px solid ${(props) => props.theme['light-400']
  };



  &::placeholder {
  font-family: 'Roboto', sans-serif;
  font-size: .75rem;
  text-transform: uppercase;
  color: ${(props) => props.theme['gray-300']};
  

  }

  &:focus {
    border: 1px solid ${(props) => props.theme['yellow-700']};
    color: ${(props) => props.theme['gray-400']};
  }
  
  }

  input:last-child {
  width: 60px;
  padding: .75rem;
  border-radius: 4px;
  background: ${(props) => props.theme['light-300']};
  border: 1px solid ${(props) => props.theme['light-400']
  };

  

  &::placeholder {
  font-family: 'Roboto', sans - serif;
  font-size: .75rem;
  text-transform: uppercase;
  color: ${(props) => props.theme['gray-300']};
}

  &:focus {
  border: 1px solid ${(props) => props.theme['yellow-700']};
  color: ${(props) => props.theme['gray-400']};
}
}
`

export const CheckoutPayment = styled.div`
margin: 1.5rem 0;
background: ${(props) => props.theme['light-200']};
padding: 2.5rem;
border-radius: 6px;

`
export const CheckoutPaymentInfo = styled.div`
display: flex;
gap: .5rem;

  i {
  color: ${(props) => props.theme['blue-300']}
}

  div {
  display: flex;
  flex-direction: column;

}

 strong {
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 1rem;
  color: ${(props) => props.theme['gray-500']};
}

  span {
  font-size: .875rem;
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  color: ${(props) => props.theme['gray-400']};
}

`

export const PaymentCash = styled.div`

  display: flex;
  gap: .75rem;
  margin-top: 2rem; 

  i {
  color: ${(props) => props.theme['blue-300']};
 }

  button {
  display: flex;
  align-items: center;
  gap: .75rem;
  border-radius: 6px;
  background: ${(props) => props.theme['light-400']};
  padding: 1rem;
  font-size: .75rem;
  font-weight: 400;
  font-family: 'Roboto', sans-serif;
  text-transform: uppercase;
  cursor: pointer;
  line-height: 1.6;
  background: ${(props) => props.theme['light-400']};
  transition: .2s all;

  &:hover {
    background: ${(props) => props.theme['light-500']}
  }

  }


  button:last-child {
    flex: 1;
  }
`