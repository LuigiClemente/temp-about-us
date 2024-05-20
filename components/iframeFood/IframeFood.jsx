'use client'
// Import necessary hooks and utilities from React and additional libraries
import React, { useEffect, useRef, useState } from 'react'
import { useMediaQuery } from 'react-responsive'
import { useWindowSize } from '../utility'
import ScrollTopAndComment from '../ScrollTopAndComment'

// Define the IframeFood component
const IframeFood = () => {
  // State to manage the display of the iframe animation
  const [showAnimation, setShowAnimation] = useState(false)
  // Use media query to detect if the device is desktop or laptop based on the width
  const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 700px)' })
  // Reference for the iframe element for direct DOM manipulation if necessary
  const pageRef = useRef(null)
  // Utilize custom hook to obtain window size for dynamic styling
  const size = useWindowSize()
  // State to manage the source URL of the iframe

  // State to track if the iframe content has loaded
  const [load, setLoad] = useState(false)

  // Effect hook to initialize component state based on device type
  useEffect(() => {
    // Show animation only on desktop or laptop devices
    if (isDesktopOrLaptop) {
      setShowAnimation(true)
    }

    // Set up an onload event listener for the iframe to update the load state
    const iframe = document.getElementById('food-iframe')
    if (iframe) {
      iframe.onload = () => setLoad(true)
    }
  }, [isDesktopOrLaptop]) // Dependency array to re-run the effect only when isDesktopOrLaptop changes

  return (
    <>
      {/* {showAnimation && ( */}
      <div className="z-50 h-full w-full">
        <iframe
          id="food-iframe"
          src={`https://animation.gutricious.com/foodGallery/FoodGallery.htm`}
          scrolling="yes"
          frameBorder="0"
          allowFullScreen={true}
          allow="autoplay; fullscreen"
          style={{}}
          width="100%"
          ref={pageRef}
          height={size.height}
          onLoad={() => setLoad(true)} // Directly update load state on load
          loading="lazy"
        />

        {!isDesktopOrLaptop && (
          <ToggleAnimationButton
            showAnimation={showAnimation}
            toggleAnimation={() => setShowAnimation(!showAnimation)}
          />
        )}
      </div>
      {/* )} */}
      {!isDesktopOrLaptop && !showAnimation && (
        <MobileView toggleAnimation={() => setShowAnimation(!showAnimation)} />
      )}
    </>
  )
}

// Component to handle toggle animation button for mobile view
const ToggleAnimationButton = ({ showAnimation, toggleAnimation }) => (
  <button
    className={`flex h-20 items-center justify-end gap-4 px-10 ${showAnimation ? 'absolute right-0 top-5' : 'pt-10'}`}
    onClick={toggleAnimation}
  >
    {/* Animation toggle icon here */}
  </button>
)

// Mobile view component
const MobileView = ({ toggleAnimation }) => (
  <div className="flex h-[100vh] flex-col">
    <ToggleAnimationButton showAnimation={false} toggleAnimation={toggleAnimation} />
    {/* Content here */}
  </div>
)

export default IframeFood
