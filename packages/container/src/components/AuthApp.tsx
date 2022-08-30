import React, {
  useEffect,
  useRef,
} from 'react'
import { useHistory } from 'react-router-dom'

// @ts-expect-error
import { mount } from 'auth/AuthApp'

type TAuthApp = {
  onSignIn: () => void,
}

type TOnNavigateArgs = {
  pathname: string,
}

const AuthApp = ({ onSignIn }: TAuthApp) => {
  const ref = useRef(null)
  const history = useHistory()
  
  useEffect(() => {
    const { onParentNavigate } = mount(
      ref.current,
      {
        initialPath: history.location.pathname,
        onSignIn,
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

export default AuthApp
