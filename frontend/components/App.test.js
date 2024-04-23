import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import App from './App'

describe('App component', () => {
  let input, dropdown, submit, user 
  test('input changes correctly', async () => {
    render(<App />)
    user = userEvent.setup()
    input = screen.getByPlaceholderText('type username')
    await user.type(input, 'Tom & Jerry')
    expect(input).toHaveValue('Tom & Jerry') 
  })
  test('dropdown changes correctly', async () => {
    render(<App />)
    user = userEvent.setup()
    dropdown = screen.getByTestId('favFood')
    await user.selectOptions(dropdown, 'pizza') 
    expect(dropdown).toHaveValue('pizza')
    await user.selectOptions(dropdown, 'broccoli')
    expect(dropdown).toHaveValue('broccoli')
  })
  test('form submit and displays message correctly', async () => {
    render(<App />)
    user = userEvent.setup()
    input = screen.getByPlaceholderText('type username')
    dropdown = screen.getByTestId('favFood')
    submit = screen.getByText('submit form')
    await user.type(input, 'ScoobyDobie')
    await user.selectOptions(dropdown, 'pizza')
    await user.click(submit)
    screen.getByText('Success! ScoobyDobie likes pizza')
    expect(dropdown).toHaveValue('-- select favorite food --')
    expect(input).toHaveValue('')
     screen.debug()
  })
})