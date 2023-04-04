import React from "react";
import { createSelector } from "reselect";
import { makeSelectAnimePage } from "./selector";
import { useAppSelector } from "../../hooks";
import styled from "styled-components";

const HotAnimeContainer = styled.div`
max-width: 100%;
width: 100%;
height: 100%;
display: flex;
`

const AnimeItemContainer = styled.div`
width: 12em;
height: 16em;
display: flex;
flex-direction: column;
`
const AnimeCover = styled.div`
width: auto;
height: 10em;
width: auto;
height: 100%;

`

const AnimeTitle = styled.h6`
margin-top:8px;
 font-size: 19px;
 color: #000;
 font-wight: 600;
 `
const stateSelector = createSelector(makeSelectAnimePage, (animePage) => ({
    animePage
    })
);

export function HotAnime(){
    const {animePage} = useAppSelector(stateSelector);
    
    const isEmptyAnimePage = !animePage.media || animePage.media.length === 0;
    
    if(isEmptyAnimePage){
        return <div>Loading...</div>
    }
    return <HotAnimeContainer>
     {animePage.media.map((anime) => (
        <AnimeItemContainer key={anime.id}>
            <AnimeCover>
                <img src={anime.cover} alt={anime.title} />
            </AnimeCover>
            <AnimeTitle>{anime.title}</AnimeTitle>
        </AnimeItemContainer>
     ))}   
    </HotAnimeContainer>
}