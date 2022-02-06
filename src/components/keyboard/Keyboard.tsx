import { KeyValue } from '../../lib/keyboard'
import { getStatuses } from '../../lib/statuses'
import { Key } from './Key'
import { useEffect } from 'react'
import { ENTER_TEXT, DELETE_TEXT } from '../../constants/strings'

type Props = {
  onChar: (value: string) => void
  onDelete: () => void
  onEnter: () => void
  guesses: string[]
}

export const Keyboard = ({ onChar, onDelete, onEnter, guesses }: Props) => {
  const charStatuses = getStatuses(guesses)

  const onClick = (value: KeyValue) => {
    if (value === 'ENTER') {
      onEnter()
    } else if (value === 'DELETE') {
      onDelete()
    } else {
      onChar(value)
    }
  }

  useEffect(() => {
    const listener = (e: KeyboardEvent) => {
      if (e.code === 'Enter') {
        onEnter()
      } else if (e.code === 'Backspace') {
        onDelete()
      } else {
        const key = e.key.toUpperCase()
        if (key.length === 1 && key >= 'A' && key <= 'Z') {
          onChar(key)
        }
      }
    }
    window.addEventListener('keyup', listener)
    return () => {
      window.removeEventListener('keyup', listener)
    }
  }, [onEnter, onDelete, onChar])

  return (
    <div>
      <div className="flex justify-center mb-1">
        <Key value="H" onClick={onClick} status={charStatuses['H']} />
        <Key value="N" onClick={onClick} status={charStatuses['N']} />
        <Key value="C" onClick={onClick} status={charStatuses['C']} />
        <Key value="R" onClick={onClick} status={charStatuses['R']} />
        <Key value="K" onClick={onClick} status={charStatuses['K']} />
        <Key value="D" onClick={onClick} status={charStatuses['D']} />
      </div>
      <div className="flex justify-center mb-1">
        <Key value="T" onClick={onClick} status={charStatuses['T']} />
        <Key value="S" onClick={onClick} status={charStatuses['S']} />
        <Key value="W" onClick={onClick} status={charStatuses['W']} />
        <Key value="L" onClick={onClick} status={charStatuses['L']} />
        <Key value="P" onClick={onClick} status={charStatuses['P']} />
        <Key value="J" onClick={onClick} status={charStatuses['J']} />
      </div>
      <div className="flex justify-center mb-1">
        <Key value="Y" onClick={onClick} status={charStatuses['Y']} />
        <Key value="M" onClick={onClick} status={charStatuses['M']} />
        <Key value="G" onClick={onClick} status={charStatuses['G']} />
        <Key value="B" onClick={onClick} status={charStatuses['B']} />
        <Key value="A" onClick={onClick} status={charStatuses['A']} />
        <Key value="I" onClick={onClick} status={charStatuses['I']} />
      </div>
      <div className="flex justify-center">
        <Key width={65.4} value="ENTER" onClick={onClick}>
          {ENTER_TEXT}
        </Key>
        <Key value="U" onClick={onClick} status={charStatuses['U']} />
        <Key value="E" onClick={onClick} status={charStatuses['E']} />
        <Key value="O" onClick={onClick} status={charStatuses['O']} />
        <Key width={65.4} value="DELETE" onClick={onClick}>
          {DELETE_TEXT}
        </Key>
      </div>
    </div>
  )
}
