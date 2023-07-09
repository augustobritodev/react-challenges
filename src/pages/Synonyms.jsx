import { useRef } from "react"
import useFetchSynonyms from "../hooks/useFetchSynonyms"
import Loading from "../components/Loading"

const API_URL = 'https://api.datamuse.com/words'

export default function Synonyms() {
  const inputRef = useRef(null)

  const {
    data,
    isLoading,
    error,
    getData
  } = useFetchSynonyms(API_URL)

  function SynonymsContent() {
    if (error) {
      return <p className="mt-5">Error while fetching: {error}</p>
    } else if (isLoading) {
      return <p className="mt-5">Loading...</p>
    } else {
      return (
        <ul className="flex flex-col text-left text-sm mt-2">
          {data.map((word, index) => (
            <li key={index}>
              <a onClick={handleClick}>
                {word}
              </a>
            </li>
          ))}
        </ul>
      )
    }
  }

  function handleClick(event) {
    if (event.target.tagName === 'A') {
      inputRef.current.value = event.target.innerText
    }

    if (
      isLoading ||
      !inputRef?.current?.value ||
      (event.type === 'keydown' && event.key !== 'Enter')
    ) return

    event.preventDefault()
    getData(inputRef.current.value)
  }

  return (
    <div className="flex h-screen">
      <div className="mt-10 mx-auto text-center">
        <div className="mb-5">
          <h1>Synonyms</h1>
          <h2>Type any word.</h2>
        </div>
        <div className="flex flex-row gap-2">
          <input onKeyDown={handleClick} ref={inputRef} type="text" />
          <button onClick={handleClick} className="flex justify-center items-center">
            {isLoading ? <Loading /> : 'Search'}
          </button>
        </div>
        {SynonymsContent()}
      </div>
    </div>
  )
}
