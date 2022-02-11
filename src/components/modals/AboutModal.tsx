import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const AboutModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="Babagan" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Punika dolanan bedhèk-bedhèkan <i>open source</i> (sumber tinarbuka) -{' '}
        <a
          href="https://github.com/lantip/batangan"
          className="underline font-bold"
          target="_blank"
          rel="noreferrer"
        >
          kode sumber dolanan wonten ngriki
        </a>{' '}
      </p>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Dolanan punika mundhut sumber kode saking gim Wordle -{' '}
        <a
          href="https://github.com/bhavesh15184/word-guessing-game"
          className="underline font-bold"
          target="_blank"
          rel="noreferrer"
        >
          kode asalipun wonten ngriki
        </a>{' '}
      </p>
    </BaseModal>
  )
}
