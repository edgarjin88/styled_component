import styled from "styled-components"; 
import {Title} from "../Styles/titile"

export const FoodGrid = styled.div`
display: grid;
grid-template-columns: 1fr 1fr; 
gap: 20px;  
padding-bottom: 40px;
`;

export const FoodLabel = styled(Title)`
  position: absolute; 
  background-color: rgba(255, 255, 255, .8);
  padding: 5px; 
`
export const Food = styled.div`
  height: 100px; 
  padding: 10px; 
  font-size:20px; 
  background-image: ${({img}) => `url(${img})` };
    background-position: center;
    background-size: cover;
    filter: contrast(75% );
    border-radius: 7px;
    transition: all .2s;
    box-shadow: 0 0 2px 0;  grey;
    margin-top: 5px; 
    
    &:hover {
      cursor: pointer;
      filter: contrast(100%); 
      margin-top: 0;
      margin-bottom: 5px; 
      box-shadow: 0px 0px 10px 0px grey;
    }
`

