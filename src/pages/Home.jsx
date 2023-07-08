import { Link } from 'react-router-dom'
import reactLogo from '/react.svg'

function padZero(num) {
  if (num < 10) {
    return `00${num}`
  } else if (num < 100) {
    return `0${num}`
  } else {
    return num.toString()
  }
}

const challenges = [
  { id: 'guess-the-color', name: 'Guess The Color' },
  { id: 'debounce-input', name: 'Debounce Input' },
]

function Challenge(props) {
  const { id, name, index } = props
  return (
    <a>
      <Link to={`/${id}`}>
        <span>{padZero(index + 1)}</span>
        <b>{name}</b>
      </Link>
    </a>
  )
}

export default function Home() {
  return (
    <div className="flex h-screen">
      <div className="flex flex-col m-auto text-center">
        <img src={reactLogo} className="logo" alt="React logo" />
        <h1>Challenges</h1>
        <div id="challenges" className="grid gap-x-4 gap-y-1 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {challenges.map(({ id, name }, index) => <Challenge key={id} id={id} name={name} index={index} />)}
        </div>
      </div>
    </div>
  )
}
