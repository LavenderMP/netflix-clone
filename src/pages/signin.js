import React, {useStat, useContext} from 'react';
import { FirebaseContext } from '../context/firebase';
import { Form } from '../components';
import { FooterContainers } from '../containers/footer';
import { HeaderContainer } from '../containers/header';



export default function Signin() {
  const { firebase } = useContext(FirebaseContext);
  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  
  const isInvalid = password === '' || emailAddress === '';
  const handleSignIn = (event) => {
    event.preventDefault();
    // firebase work here!
    firebase
      .auth()
      .signInWithEmailAndPassword(emailAddress, password)
      .then(() => {
        // push to browse page
      })
      .catch((error) => {
        setEmailAdddress('');
        setPassword('');
        setError(error.message);
      })
  }

  return (
    <>
    <HeaderContainer>
    <Form>
      <Form.Title>Sign in</Form.Title>
      {error && <Form.Error>{error}</Form.Error>}

      <Form.Base onSubmit={handleSignIn} method="POST">
        <Form.Input
          placeholder="Email address"
          value={emailAddress}
          onChange={({target}) => setEmailAddress(target.value)}
        />
        <Form.Input
          type="password"
          placeholder="Password"
          autoComplete="off"
          value={password}
          onChange={({target}) => setPassword(target.value)}
        />
        <Form.Submit disabled={isInvalid} type="submi">
          Sign In
        </Form.Submit>
      </Form.Base>
      <Form.Text>
        New to Netflix? <Form.Link to="/signup">Sign up now.</Form.Link>
      </Form.Text>
      <Form.TextSmall>
        This page is protected by Google ReCAPTCHA to ensure you're not a bot. Don't Spam me please.
      </Form.TextSmall>
    </Form>
    </HeaderContainer>
    <FooterContainers />
    </>
  );
};