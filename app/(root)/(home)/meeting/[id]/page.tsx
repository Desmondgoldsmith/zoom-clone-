import React from 'react'

const Meeting = ({params}:{params:{id:string}}) => {
  return (
    <div>
      <h2>Meeting Room ID: #{params.id}</h2>
    </div>
  )
}

export default Meeting
