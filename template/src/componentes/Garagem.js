import React from "react";
import  {Carros}  from "./Carros";
export default function Garagem()

{
    const nome = "MarcosHamilton"
    return(
        <>
        <h1> Garagem de {nome}</h1>
        <Carros/>
        </>
    )
}
