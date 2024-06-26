'use client'

import { useEffect, useState } from 'react'

const ScrollTopAndComment = () => {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const handleWindowScroll = () => {
      console.log(document.querySelector('.ReactModal__Content'))
      if (window.scrollY > 50) setShow(true)
      else setShow(false)
    }

    document.querySelector('.ReactModal__Content')?.addEventListener('scroll', handleWindowScroll)
    return () =>
      document
        .querySelector('.ReactModal__Content')
        ?.removeEventListener('scroll', handleWindowScroll)
  }, [])

  const handleScrollTop = () => {
    document.querySelector('.ReactModal__Content')?.scrollTo({ top: 0, behavior: 'smooth' })
  }
  const handleScrollToComment = () => {
    document.getElementById('comment')?.scrollIntoView()
  }
  return (
    <div className={`fixed bottom-8 right-8 z-50 flex flex-col gap-3 `}>
      <button
        aria-label="Scroll To Top"
        onClick={handleScrollTop}
        className="rounded-full bg-gray-200 p-2 text-gray-500 transition-all hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-400 dark:hover:bg-gray-600"
      >
        <svg className="h-10 w-10" viewBox="0 0 20 20" fill="currentColor">
          <path
            fillRule="evenodd"
            d="M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    </div>
  )
}

export default ScrollTopAndComment
