import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import useFetchEmail from '../hooks/useFetchEmail'

export default function DebouceInput() {
  const navigate = useNavigate()

  const [filteredEmails, setFilteredEmails] = useState([])

  const {
    data,
    isLoading,
    error,
  } = useFetchEmail()

  function handleOnChange(event) {
    const value = event.target.value

    const filteredEmails = data
      .filter(email => email.includes(value))
      .slice(0, 10)

    setFilteredEmails(filteredEmails)
  }

  function handleClick(event) {
    window.alert(event.target.innerText)
  }

  function DebounceInputContent() {
    if (isLoading) {
      return (
        <p>Loading...</p>
      )
    } else if (error) {
      return (
        <p>Error: {error}</p>
      )
    } else {
      return (
        <ul className='text-sm'>
          {filteredEmails?.map((email, index) => (
            <li key={index}>
              <a onClick={handleClick}>{email}</a>
            </li>
          ))}
        </ul>
      )
    }
  }

  return (
    <div className="flex h-screen">
      <div className="mt-10 mx-auto text-center">
        <a onClick={() => navigate('/')}>Go back</a>
        <div className="mb-5">
          <h1>Debounce Input</h1>
          <h2>Type anything to find an email.</h2>
        </div>
        <input type="text" onChange={handleOnChange} />
        <div className='mt-5'>
          {DebounceInputContent()}
        </div>
      </div>
    </div>
  )
}
