import React from 'react';
import faqsData from  '../fixtures/faqs.json';
import {Accordion} from '../components'


export function FaqsContainer() {
  return (
    <Accordion>
      <Accordion.Title>
        Frequently Asked Questions
        {faqsData.map(item => 
          <Accordion.Item key={item.id}>
            <Accordion.Header>{item.header}</Accordion.Header>
            <Accordion.Body>{item.body}</Accordion.Body>
          </Accordion.Item>)}
      </Accordion.Title>

    </Accordion>
  );
}