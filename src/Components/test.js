import React from 'react'
import Details from './Details'
import dataMovie from "../movie.json"
export default function Test() {
    const movie=dataMovie[0].list_movies[0];
  return (
    <div>
        <Details movies={movie}/>
    </div>
  )
}
