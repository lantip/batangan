import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const AboutModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="About" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        This is an open source word guessing game -{' '}
        <a
          href="https://github.com/lantip/batangan"
          className="underline font-bold"
          target="_blank" 
          rel="noreferrer"
        >
          check out the code here
        </a>{' '}
      </p>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Its forked from the original wordle game -{' '}
        <a
          href="https://github.com/bhavesh15184/word-guessing-game"
          className="underline font-bold"
          target="_blank" 
          rel="noreferrer"
        >
          check out the original code here
        </a>{' '}
      </p>
      
    </BaseModal>
  )
}
