import { CompletedRow } from './CompletedRow'
import { CurrentRow } from './CurrentRow'
import { EmptyRow } from './EmptyRow'
import { useState, useEffect } from 'react'

type Props = {
  guesses: string[]
  currentGuess: string
}

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window
  return {
    width,
    height,
  }
}

export default function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  )

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions())
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return windowDimensions
}

export const Grid = ({ guesses, currentGuess }: Props) => {
  const empties =
    guesses.length < 5 ? Array.from(Array(5 - guesses.length)) : []

  const { width } = useWindowDimensions()

  const aspectRatio = 5 / 6 // 5 columns, 6 rows
  const space = 24 // gap: 1.5rem = 24px
  const heightRatio = aspectRatio * (width - space)
  const height = width - space > 580 ? 580 : heightRatio

  return (
    <div
      className="grid grid-rows-6 gap-1.5 max-w-full"
      style={{ aspectRatio: '5/6', height: height }}
    >
      {guesses.map((guess, i) => (
        <CompletedRow key={i} guess={guess} />
      ))}
      {guesses.length < 6 && <CurrentRow guess={currentGuess} />}
      {empties.map((_, i) => (
        <EmptyRow key={i} />
      ))}
    </div>
  )
}
