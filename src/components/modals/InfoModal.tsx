import { Cell } from '../grid/Cell'
import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const InfoModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="Cara Main" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Batangan (ꦧꦠꦁꦔꦤ꧀) adalah bahasa jawa untuk kata tebak-tebakan. Silakan tebak kosa kata bahasa jawa apa dalam 6 kali percobaan.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="S" status="correct" />
        <Cell value="E" />
        <Cell value="M" />
        <Cell value="U" />
        <Cell value="T" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Huruf S benar dan di posisi yang tepat.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="P" />
        <Cell value="I" />
        <Cell value="L" status="present" />
        <Cell value="O" />
        <Cell value="T" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Huruf L benar tetapi tidak di posisi yang tepat.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="S" />
        <Cell value="L" />
        <Cell value="U" />
        <Cell value="K" status="absent" />
        <Cell value="U" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Huruf K tidak ada di kata yang dimaksud.
      </p>
    </BaseModal>
  )
}
