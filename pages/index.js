import {useSession, providers, signOut} from 'next-auth/client'
import SignIn from '../components/signin/signin'
import ProfilePage from './profile'

export default function Component({providers}) {
    const [ session, loading ] = useSession()
    
    if(session) {
      return (
        <ProfilePage />
      )
    }
  
    return <SignIn providers={providers} />
}

Component.getInitialProps = async () => {
  return {
    providers: await providers()
  }
}