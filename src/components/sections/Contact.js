import React from "react";
import { navigateTo } from "gatsby-link";
import styled from 'styled-components';
import { useStaticQuery, graphql } from "gatsby"
import Img from 'gatsby-image';

import { Section, Container, StyledContainer, Art } from '@components/global';

function encode(data) {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
}

function Contact() {
    const [state, setState] = React.useState('');

    const data = useStaticQuery(graphql`
        query {
            art_story: file(
              sourceInstanceName: { eq: "art" }
              name: { eq: "tell_story" }
            ) {
              childImageSharp {
                fluid(maxWidth: 1200) {
                  ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
              }
            }
          }
      `)
    const handleChange = e => {
        setState({ [e.target.name]: e.target.value });
    };

    const handleSubmit = e => {
        e.preventDefault();
        const form = e.target;
        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({
                "form-name": form.getAttribute("name"),
                ...state
            })
        })
            .then(() => navigateTo(form.getAttribute("action")))
            .catch(error => alert(error));
    };

    return (
        <Section id="download" accent>
            <StyledContainer>
                <div>
                    <h1>Download</h1>
                    <h5>We'll send you an email when our app is ready!</h5>
                    <form
                        name="contact"
                        method="post"
                        // action="/thanks/"
                        data-netlify="true"
                        data-netlify-honeypot="bot-field"
                    // onSubmit={handleSubmit}
                    >
                        <input type="hidden" name="beta-testing" value="contact" />
                        {/* <p hidden>
                            <label>
                                Don’t fill this out:{" "}
                                <input name="bot-field" onChange={handleChange} />
                            </label>
                        </p> */}
                        <p>
                            <label>
                                Your email:<br />
                                <input type="email" name="email" onChange={handleChange} />
                            </label>
                        </p>
                        <p>
                            <button type="submit">Send</button>
                        </p>
                    </form>
                </div>
                <Art>
                    <Img fluid={data.art_story.childImageSharp.fluid} />
                </Art>
            </StyledContainer>
        </Section>
    )
}
export default Contact

// export default class Contact extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {};
//     }

//     handleChange = e => {
//         this.setState({ [e.target.name]: e.target.value });
//     };

//     handleSubmit = e => {
//         e.preventDefault();
//         const form = e.target;
//         fetch("/", {
//             method: "POST",
//             headers: { "Content-Type": "application/x-www-form-urlencoded" },
//             body: encode({
//                 "form-name": form.getAttribute("name"),
//                 ...this.state
//             })
//         })
//             .then(() => navigateTo(form.getAttribute("action")))
//             .catch(error => alert(error));
//     };


//     render() {
//         const data = useStaticQuery(graphql`
//         query {
//             art_story: file(
//               sourceInstanceName: { eq: "art" }
//               name: { eq: "tell_story" }
//             ) {
//               childImageSharp {
//                 fluid(maxWidth: 1200) {
//                   ...GatsbyImageSharpFluid_withWebp_tracedSVG
//                 }
//               }
//             }
//           }
//       `)
//         return (
//             <Section id="download" accent>
//                 <StyledContainer>
//                     <div>
//                         <h1>Be the first to know</h1>
//                         <a href='https://forms.gle/gHsJVdLJLj1rGKk56'>
//                             <p>Sign up here</p>
//                         </a>
//                         <form
//                             name="contact"
//                             method="post"
//                             action="/thanks/"
//                             data-netlify="true"
//                             data-netlify-honeypot="bot-field"
//                             onSubmit={this.handleSubmit}
//                         >
//                             <input type="hidden" name="form-name" value="contact" />
//                             <p hidden>
//                                 <label>
//                                     Don’t fill this out:{" "}
//                                     <input name="bot-field" onChange={this.handleChange} />
//                                 </label>
//                             </p>
//                             <p>
//                                 <label>
//                                     Your email:<br />
//                                     <input type="email" name="email" onChange={this.handleChange} />
//                                 </label>
//                             </p>
//                             <p>
//                                 <button type="submit">Send</button>
//                             </p>
//                         </form>
//                     </div>
//                     <Art>
//                         <Img fluid={data.art_story.childImageSharp.fluid} />
//                     </Art>
//                 </StyledContainer>
//             </Section>
//         )
//     }

// }