import { signIn } from 'next-auth/client'
import styles from './signin.module.css'
import { Button, ButtonGroup } from "@chakra-ui/react"

export default function SignIn({ providers }) {
  return (
    <>
      {Object.values(providers).map(provider => (
        <div key={provider.name}>
          <Button colorScheme="teal" onClick={() => signIn(provider.id, { callbackUrl: 'http://localhost:3000/' })}>Sign in with {provider.name}</Button>
        </div>
      ))}
    </>
  )
}
