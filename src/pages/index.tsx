import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { useAuth } from 'react-oidc-context'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const auth = useAuth();
    if (auth.isLoading) {
      return <div>Loading...</div>;
    }

    if (auth.error) {
      return <div>Oops... {auth.error.message}</div>;
    }

    if (auth.isAuthenticated) {
      return (
        <div>
          Hello {auth.user?.access_token}{" "}
          <button onClick={auth.removeUser}>Log out</button>
        </div>
      );
    }
  return (
    <div>
      <button onClick={(event) => {
        auth.signinRedirect()
      }}>Log in</button>
    </div>
  )
}
