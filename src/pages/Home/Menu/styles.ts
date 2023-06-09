import styled from 'styled-components'

export const CoffeeContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

 h1 {
  font-size: 2rem;
  font-family: 'Baloo 2', sans-serif;
  font-weight: 800;
  color: ${(props) => props.theme['gray-500']};
  margin: 2rem 0 3.37rem;
 }
`

export const MenuCoffee = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 70rem;
  padding: 1.12rem 0;
  gap: 2rem;
`

export const MenuItem = styled.div`
  background: ${(props) => props.theme['light-200']};
  width: 16rem;
  padding: 0 1.5rem;
  border: 1px solid ${(props) => props.theme['light-200']};
  border-top-left-radius: 6px;
  border-top-right-radius: 36px;
  border-bottom-right-radius: 6px;
  border-bottom-left-radius: 36px;
  `

export const MenuInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  img {
   margin-top: -1.2rem;
  }

  strong {
   color: ${(props) => props.theme['gray-500']};
   font-family: 'Baloo 2', sans-serif;
   font-size: 1.12rem;
   margin-top: 1rem;
   font-weight: 700;
  }

  p {
    color: ${(props) => props.theme['gray-300']};
    text-align: center;
    font-family: 'Roboto', sans-serif;
    font-size: 0.875rem;
    margin-top: .5rem;
    font-weight: 400;
  }

  
`

export const CoffeeType = styled.span`
  display: flex;
  gap: 0.25rem;

  span {
  margin-top: 0.75rem;
  text-transform: uppercase;
  background: ${(props) => props.theme['yellow-300']};
  color: ${(props) => props.theme['yellow-700']};
  font-size: 0.625rem;
  font-weight: 700;
  font-family: 'Roboto', sans-serif;
  padding: 0.25rem .5rem;
  width: 5.06rem;
  border-radius: 100px; 

  &:nth-child(2) {
    width: 3.43rem;
  }
}
  
`


export const CoffeeCard = styled.div`

  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 2.06rem 0  1.25rem ;

  span {
    color: ${(props) => props.theme['gray-400']};
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: .875rem;
    margin-right: .2rem

  }

  strong {
    color: ${(props) => props.theme['gray-400']};
    font-weight: 800;
    font-family: 'Baloo 2', sans-serif;
    font-size: 1.5rem;
  }

  i {
    background: ${(props) => props.theme['blue-500']};
    color: ${(props) => props.theme.white};
    padding: .3rem;
    border-radius: 6px;
    display: flex;
    align-items: center;
    padding: .5rem
  }

`

export const Button = styled.div`
  display: flex;
  align-items: center;
  gap: .5rem;
`

export const Test = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  width: 3.75rem;
  height: 2.37rem;
  border-radius: 6px;
  background: ${(props) => props.theme['light-400']};
 

  button {
    background: transparent;
    font-size: .875rem;
    color: ${(props) => props.theme['blue-300']};
    cursor: pointer ;
  }

  span {
    font-family: "Roboto" , sans-serif;
    font-weight: 400;
    font-size: 1rem;
    color: ${(props) => props.theme['gray-600']};
  }

`

