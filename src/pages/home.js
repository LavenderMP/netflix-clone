import React from 'react';
import { HeaderContainer } from '../containers/header';
import { FaqsContainer } from '../containers/faqs';
import { FooterContainers } from '../containers/footer';
import { JumbotronContainer } from '../containers/jumbotron';
import { OptForm } from '../components';
import { Feature } from '../components';

export default function HOME() {
  return (
    <>
      <HeaderContainer>
        <Feature>
          <Feature.Title>
            Unlimited films, TV programers and more.
          </Feature.Title>
          <OptForm >
            <OptForm.Input placeholder="Email address" />
            <OptForm.Button>Try it now</OptForm.Button>
            <OptForm.Break />
            <OptForm.Text>Ready to watch? Enter your emai to create or restart your membership</OptForm.Text>
          </OptForm>
        </Feature>
      </HeaderContainer>
      <JumbotronContainer />
      <FaqsContainer />
      <FooterContainers />
    </>
  );
};