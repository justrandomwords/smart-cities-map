'use client'

import { useRouter } from 'next/navigation'


export default function PrimaryButton({ children }: { children?: React.ReactNode }) {
  const router = useRouter()

  function redirectToMap() {
    router.push('/map')
  }

  return (
    <button className='btn-primary' onClick={redirectToMap}>
      {children}
    </button>
  )
}