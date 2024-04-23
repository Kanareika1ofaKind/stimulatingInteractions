import React, { useState } from 'react'

const getInitialForm = () => ({ user: '', favFood: '' }) 

export default function App() {
  const [form, setForm] = useState(getInitialForm)
  const [info, setInfo] = useState('')
  const change = evt => {
    const { name, value } = evt.target
    setForm({ ...form, [name]: value })
  }
  const submit = evt => {
    evt.preventDefault()
    setForm(getInitialForm)
    setInfo(`Success! ${form.user} likes ${form.favFood}`)
  }
  return (
    <form onSubmit={submit}>
      <div>{info}</div>
      <h2>Favorite Food Form</h2>
      <input onChange={change} value={form.user} name="user" placeholder="type username" />
      <select onChange={change} value={form.favFood} name="favFood" data-testid="favFood">
        <option>-- select favorite food --</option>
        <option>pizza</option>
        <option>broccoli</option>  
     </select>
     <button name="submit">submit form</button>
    </form>
  )
}
