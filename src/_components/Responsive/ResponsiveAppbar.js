import React from 'react'
import { useMediaQuery } from 'react-responsive'
import AppBar from '../AppBar/Desktop/AppBar.js'
import AppBarM from '../AppBar/Mobile/AppbarM.js'

const Example = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-device-width: 1224px)'
  })
  const isTabletOrMobileDevice = useMediaQuery({
    query: '(max-device-width: 1224px)'
  })

  return (
    <div>
      {isDesktopOrLaptop && <>
        <AppBar />
      </>}
      {isTabletOrMobileDevice && <AppBarM />}
    </div>
  )
}
export default Example;