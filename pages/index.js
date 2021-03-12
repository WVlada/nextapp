import {useSession, providers, signOut} from 'next-auth/client'
import styles from '../components/signin/signin.module.css'
import SignIn from '../components/signin/signin'
import { Button, ButtonGroup } from "@chakra-ui/react"

export default function Component({providers}) {
    const [ session, loading ] = useSession()
    
    if(session) {
      return (<div><p>Signed in as {session.user.email}</p>
      <Button colorScheme="teal" onClick={() => signOut()}>Sign out</Button>
        </div>)
    }
  
    return <SignIn providers={providers} />
  }

  
  Component.getInitialProps = async () => {
    return {
      providers: await providers()
    }}