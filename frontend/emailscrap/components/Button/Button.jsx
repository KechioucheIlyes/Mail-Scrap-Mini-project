
import { useEffect, useState } from "react"
import styled from "styled-components"

const StyledBtn = styled.button`
    border: none;
    border-radius : 20px;
    padding : 10px 19px;
    cursor: pointer;
    color: white;
    background: linear-gradient(to right , #FF6B6B , #3CAEA3);
    margin : 20px;
    font-size : 24px;
`


export function Button({ handleClick }) {



    return (
        <div>
            <StyledBtn onClick={handleClick}>Lancer</StyledBtn>

        </div>
    )


}