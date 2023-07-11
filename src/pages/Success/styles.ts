import styled from 'styled-components'
export const SuccessContainer = styled.div`

  display: flex;
  justify-content: center;
  margin-top: 80px;
  

  h1 {
    color: ${(props) => props.theme['yellow-700']};
    font-family: 'Ballon 2', sans-serif;
    font-size: 2rem;
    font-weight: 800;
  }

  span {
    color: ${(props) => props.theme['gray-500']};
    font-family: 'Roboto', sans-serif;
    font-size: 1.12rem;
    font-weight: 400;
    
  }
  
`

export const SuccessAddress = styled.div`
  display: flex;
  margin-top: 2.5rem;


`