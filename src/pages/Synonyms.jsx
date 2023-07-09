const API_URL = 'https://api.datamuse.com/words?ml=car&max=10'

export default function Synonyms() {
  return (
    <div className="flex h-screen">
      <div className="m-auto text-center">
        <div className="mb-5">
          <h1>Synonyms</h1>
          <h2>Type any word to find synonyms.</h2>
        </div>
        <div className="flex flex-row gap-2">
          <input type="text" />
          <button>Search</button>
        </div>
        <ul className="mt-5">
          <li>word</li>
        </ul>
      </div>
    </div>
  )
}
