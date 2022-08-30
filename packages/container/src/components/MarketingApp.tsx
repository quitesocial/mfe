import React, {
  useEffect,
  useRef,
} from 'react'
import { useHistory } from 'react-router-dom'

import { mount } from 'marketing/MarketingApp'

type TOnNavigateArgs = {
  pathname: string,
}

const MarketingApp = () => {
  const ref = useRef(null)
  const history = useHistory()
  
  useEffect(() => {
    const { onParentNavigate } = mount(
      ref.current,
      {
        initialPath: history.location.pathname,
        onNavigate: ({ pathname: nextPathname }: TOnNavigateArgs) => {
          const { pathname } = history.location
          
          if (pathname !== nextPathname) {
            history.push(nextPathname)
          }
        },
      },
    )
    
    history.listen(onParentNavigate)
  }, [])
  
  return <div ref={ref} />
}

export default MarketingApp
