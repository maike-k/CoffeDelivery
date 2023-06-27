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
    margin-bottom: 1rem;;
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
    gap: 0.2rem;
  }

  strong {
    font-size: 1rem;
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
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
    width: 100%;
    padding: .75rem;
    border-radius: 4px;
    background: ${(props) => props.theme['light-300']};

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
export const CheckoutTwo = styled.div``

export const CheckoutThree = styled.div``