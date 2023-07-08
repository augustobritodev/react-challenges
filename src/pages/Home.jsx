import { Link } from 'react-router-dom'
import reactLogo from '/react.svg'

export default function Home() {
  return (
    <div className="flex h-screen">
      <div className="flex flex-col m-auto">
        <img src={reactLogo} className="logo" alt="React logo" />
        <h1>Challenges</h1>
        <div id="challenges" className="grid gap-x-4 gap-y-1 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          <Link>Guess The Color</Link>
          <Link>Debounce Input</Link>
        </div>
      </div>
    </div>
  )
}
