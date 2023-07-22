import styled, { keyframes } from "styled-components";
import { Button } from "../../components/Button/Button";
import { useEffect, useState } from "react";

const StyledInput = styled.input`
    width: 500px;
    height: 30px;
    `;

const StyledBody = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    `;

const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    `;

const spinAnimation = keyframes`
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
    `;
const Spinner = styled.div`
    border: 4px solid rgba(0, 0, 0, 0.1);
    border-top: 4px solid green;
    border-radius: 50%;
    width: 20px;
    height: 20px;
    animation: ${spinAnimation} 1s linear infinite;
    `;
const UlStyled = styled.ul`
        border: 1px solid grey;
        box-shadow : 11px 10px 10px 6px grey;
        padding: 70px;
        border-radius: 20px;
    `
const LiStyled = styled.li`
    list-style: none;
    border: 1px solid grey;
    padding: 13px;
    margin: 10px;
    border-radius: 20px;
`

export function Home() {
    const [text, setText] = useState("");
    const [data, setData] = useState("");
    const [value, setValue] = useState();
    const [spin, setSpin] = useState(false)



    useEffect(() => {
        if (data) {
            setSpin(true)
            fetch("http://localhost:4000/python", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ url: text }),

            })
                .then((response) => response.json())
                .then((parsedData) => {

                    const datas = parsedData.msg
                    console.log(datas)
                    const cleanedData = []
                    datas.map((element) => {
                        if (element.includes(".png") || element.includes(".jpg") || element.includes(".jpg")) {
                            console.log("no-email format")
                        } else {
                            cleanedData.push(element)
                        }
                    })
                    setValue(cleanedData)
                })
                .catch((error) => {
                    console.error("Erreur lors de la récupération des données :", error);
                })
                .finally(() => {
                    setSpin(false)
                })
        }
    }, [data]);

    const handleText = () => {
        text ? setData(text) : alert("Vous devez renseigner une URL avant de pouvoir lancer !");
    };

    return (
        <StyledBody>
            <h1>Veuillez renseigner l'URL du Site de votre choix ci-dessous :</h1>
            <StyledDiv>
                <StyledInput onChange={(e) => setText(e.target.value)} maxLength={100} placeholder="Ex : https://exemple.com" name="url" />
                <Button handleClick={handleText} />
            </StyledDiv>
            {spin ? <Spinner /> : value ? <UlStyled>{value.map((element, index) => {
                return <LiStyled key={index}>{element}</LiStyled>
            })} </UlStyled> : null}

        </StyledBody>
    );
}
