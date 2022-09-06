import React from "react"

export const Input = ({ handleChange, user }) => {

  return (
    <>
    <label htmlFor="username">
      Username:
    <input 
      type="text"
      name="username"
      placeholder="username"
      value={user.username}
      onChange={handleChange}
    />
    </label>
    <label htmlFor="password">
      Password:
    <input 
      type="text"
      name="password"
      placeholder="password"
      value={user.password}
      onChange={handleChange}
    />
    </label>
    <input 
      type="submit"
      value="submit"
    />
    </>
  )
}