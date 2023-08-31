import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { AuthProvider } from 'react-oidc-context';

export default function App({ Component, pageProps }: AppProps) {
  const oidcConfig = {
    authority: "http://localhost:5028",
    client_id: "client2",
    redirect_uri: "http://localhost:3000",
    response_type: "code",
    scopes: "openid email",
    client_secret: "client2123"
  };
  
  const onSignin = () => {
    location.href = "/";
  };

  return  (
    <AuthProvider {...oidcConfig} onSigninCallback={onSignin}>
      <Component {...pageProps} />
    </AuthProvider>
  );
}
