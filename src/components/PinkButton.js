import React from "react";
import styled from "styled-components"

const MyButton = styled.a`
    display: inline-block;
    cursor: pointer;
    vertical-align: middle;
    text-decoration: none;
    line-height: 1.6;
    font-weight: bold;
    color: #382b22;
    padding: 1.25em 2em;
    background: #fff0f0;
    border: 2px solid #b18597;
    border-radius: 0.75em;
    user-select: none;
    transition: transform .15s ease-out, background .15s ease-out;
`

export function PinkButton({ text, clickEvent }) {
    return <MyButton onClick={clickEvent}>{text}</MyButton>
}