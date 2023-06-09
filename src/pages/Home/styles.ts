import styled from "styled-components";

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
`
export const SectionContainer = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3.5rem;
`
export const HomeContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 36.75rem;

  h1 {
  color: ${props => props.theme["gray-600"]};
  font-size: 3rem;
  font-family: 'Baloo 2', sans-serif;
  font-weight: 900;
 }

  p {
   font-family: 'Roboto', sans-serif;
   font-size: 1.25rem;
   font-weight: 400;
   margin-top: 1rem;
 }

`
export const HomeSection = styled.div`
  display: flex; 
  gap: 2.5rem;
  width: 35.43rem;
`

const CoffeeDetails = styled.span`
 display: flex;
 align-items: center;
 margin: 1.25rem 0;
 gap: .5rem;
 font-size: 1rem;
 font-family: 'Roboto', sans-serif;
 font-weight: 400;

 i {
  color: ${(props) => props.theme["white-background"]};
  display: flex;
  align-items: center;
  border-radius: 50%;
  padding: .5rem;
 }

`

export const FastAndSecure = styled(CoffeeDetails)`

 i {
  background: ${(props) => props.theme["yellow-700"]};
 }

`
export const FastAndTracked = styled(CoffeeDetails)`
  i {
    background: ${(props) => props.theme["yellow-500"]}
  }
`

export const PackagingKeeps = styled(CoffeeDetails)`
  i{
    background: ${(props) => props.theme["gray-400"]}
  }
`
export const CoffeeArrives = styled(CoffeeDetails)`
   margin-right: .75rem;
  i {
    background-color: ${(props) => props.theme["blue-300"]};

  }
`

export const DatalistStart = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`

export const DatalistEnd = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
`

export const HomeImage = styled.div`
  width: 29.75rem;
  margin-top: 2rem;
  box-sizing: border-box;
`