import React from "react"
import { Input } from "./Input"

export const Form = ({ user, set }) => {
  const usercopy = {...user}

  const handleSubmit = (e) => {
    e.preventDefault()

  }

  const handleChange = (e) => {
    e.preventDefault()
    const value = e.target.value
    usercopy[e.target.name] = value
    set(usercopy)
  }

  return (
    <form onSubmit={handleSubmit}>
      <Input handleChange={handleChange} user={user}/>
    </form>
  )
}