import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function getRandomHex() {
  const digits = '0123456789ABCDEF'

  let color = new Array(6)
    .fill('')
    .map(() => digits[Math.floor(Math.random() * digits.length)])
    .join('')

  return `#${color}`
}

export default function GuessTheColor() {
  const [won, setWon] = useState(false)
  const navigate = useNavigate()

  const colors = new Array(3).fill('').map(() => getRandomHex())
  const color = colors[Math.floor(Math.random() * colors.length)]

  function handleOnClick(event) {
    const target = event.target

    if (target.innerText == color) {
      setWon(true)
    } else {
      navigate('/guess-the-color')
    }
  }

  if (won) {
    return (
      <div className='flex h-screen'>
        <div className="flex flex-col m-auto text-center items-center gap-2">
          <h1>You Won!</h1>
          <a onClick={() => setWon(false)}>Play Again!</a>
          <a onClick={() => navigate('/')}>Go back</a>
        </div>
      </div>
    )
  }

  return (
    <div className="flex h-screen">
      <div className="m-auto text-center">
        <div className='mb-5'>
          <h1>GUESS THE COLOR</h1>
          <h2>Click on the color that matches the background color</h2>
        </div>
        <div style={{ backgroundColor: color }} className="p-20 border-5 rounded-md" />
        <div className='m-4'>
          {colors.map((color, index) => <button className='mx-2 px-2' onClick={handleOnClick} key={index}>{color}</button>)}
        </div>
      </div>
    </div>
  )
}
