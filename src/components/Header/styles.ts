import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 2rem 1.6rem;
  /* gap: 7rem; */
  gap: 40.25rem;
  
`

export const NavContent = styled.div`
   padding: 0.5rem;
   display: flex;
   align-items: center;
   gap: 0.5rem;

   i {
     color: ${(props) => props.theme['blue-300']}
   }

   span {
      color: ${(props) => props.theme['blue-500']};
      background-color: ${(props) => props.theme['blue-100']};
      border-radius: 6px;
      display: flex;
      align-items: center;
      gap: 0.2rem;
      padding: 0.5rem 1rem;
      font-size: .75rem;
      font-family: 'Roboto', sans-serif;
      font-weight: 300;
    } 

    a {
      text-decoration: none;
      color: ${(props) => props.theme['yellow-700']};
      background: ${(props) => props.theme['yellow-300']};
      padding: 0.5rem ;
      border-radius: 6px;
    }
`