import { Button} from "@chakra-ui/react"
import {useSession, signOut , getSession} from 'next-auth/client'
import ItemDirectory from '../components/ItemDirectory/ItemDirectory.component'

export default function ProfilePage({session, items}) {
    //const [ session, loading ] = useSession()
    
    return (
      <div>
          <p>Signed in as {session.user.email}</p>
          <Button colorScheme="teal" onClick={() => signOut()}>Sign out</Button>
          <ItemDirectory items={props.items}/>
      </div>
    )
}
ProfilePage.getInitialProps = async (context) => {
  const session = await getSession(context)
  await console.log(session)
  if (!session) {
      return {
        redirect: {
          destination: '/',
          permanent: false,
        },
      }
    }
  const items = [1,2,3]  
  return {
    props: { session: session, items: items }
  }
}
