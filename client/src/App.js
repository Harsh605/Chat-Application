import './App.css';
import Messenger from './components/Messenger';
import { GoogleOAuthProvider } from '@react-oauth/google';
import AccountProvider from './context/AccountProvider';

function App() {
  const ClientId = "1040787227245-74usnj53er9fl5nh773o94h6p120vj4a.apps.googleusercontent.com"
  return (
    <>
      <GoogleOAuthProvider clientId={ClientId}>
      <AccountProvider>
        <Messenger />
      </AccountProvider>
      </GoogleOAuthProvider>;
    </>
  );
}

export default App;
