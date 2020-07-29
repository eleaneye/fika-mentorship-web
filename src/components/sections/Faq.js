import React from 'react';

import { Section, Container } from '@components/global';

import FaqItem from '@common/FaqItem';
import ExternalLink from '@common/ExternalLink';

const FAQS = [
  {
    title: 'What is Fika?',
    content: () => (
      <>
        Fika is a mobile application that aims to promote both informal and formal mentorships by making it easier for students and professionals to find mentors, form connections, and uplift those within their existing communities.
      </>
    ),
  },
  {
    title: 'Where did the idea come from?',
    content: () => (
      <>
        Students with limited networks may not know where to seek advice, who to contact, or what to do when professional mentors are out of reach. At the same time, there are people within our communities who are willing to share their experiences and act as informal mentors, but don’t end up doing so because there aren’t many people in their immediate circle who need it. Features in Fika will allow everyone, regardless of what stage they are at in their professional or educational career, to have the opportunity to be mentored by someone as well as be encouraged to mentor others.
      </>
    ),
  },
  {
    title: 'Who can use Fika?',
    content: () => (
      <>
        Anyone who is willing to help or learn from others!
      </>
    ),
  },
  {
    title: 'When and where can I download the app?',
    content: () => (
      <>
      We are currently nearing the end of our development phase and plan to release our app to the Apple and Google Play store near the end of August! Sign up for our beta list to get the latest updates :)
        {/* Do not build a website with last decade’s tech. The future of the web is
        mobile, JavaScript and APIs—the{` `}
        <ExternalLink href="https://jamstack.org/">JAMstack</ExternalLink>.
        Every website is a web app and every web app is a website. Gatsby.js is
        the universal JavaScript framework you’ve been waiting for. */}
      </>
    ),
  },
  // {
  //   title: 'What exactly does Gatsby build?',
  //   content: () => (
  //     <>
  //       Gatsby.js is a static PWA (Progressive Web App) generator. You get code
  //       and data splitting out-of-the-box. Gatsby loads only the critical HTML,
  //       CSS, data, and JavaScript so your site loads as fast as possible. Once
  //       loaded, Gatsby prefetches resources for other pages so clicking around
  //       the site feels incredibly fast.
  //     </>
  //   ),
  // },
];

const Faq = () => (
  <Section id="faq">
    <Container>
      <h1 style={{ marginBottom: 40 }}>Frequently Asked Questions</h1>
      <div>
        {FAQS.map(({ title, content }) => (
          <FaqItem title={title} key={title}>
            {content()}
          </FaqItem>
        ))}
      </div>
    </Container>
  </Section>
);

export default Faq;
