import React from 'react'
import { useParams } from 'react-router-dom'

function SpecificDisease() {

    const name = useParams("name").name;

    console.log(name);

  return (
    <div>SpecificDisease</div>
  )
}

export default SpecificDisease