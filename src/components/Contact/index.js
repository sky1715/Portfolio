// import React from 'react'
// import styled from 'styled-components'
// import { useRef } from 'react';
// import emailjs from '@emailjs/browser';
// import { Snackbar, Alert } from '@mui/material';

// const Container = styled.div`
// display: flex;
// flex-direction: column;
// justify-content: center;
// position: relative;
// z-index: 1;
// align-items: center;
// @media (max-width: 960px) {
//     padding: 0px;
// }
// `

// const Wrapper = styled.div`
// position: relative;
// display: flex;
// justify-content: space-between;
// align-items: center;
// flex-direction: column;
// width: 100%;
// max-width: 1350px;
// padding: 0px 0px 80px 0px;
// gap: 12px;
// @media (max-width: 960px) {
//     flex-direction: column;
// }
// `

// const Title = styled.div`
// font-size: 42px;
// text-align: center;
// font-weight: 600;
// margin-top: 20px;
//   color: ${({ theme }) => theme.text_primary};
//   @media (max-width: 768px) {
//       margin-top: 12px;
//       font-size: 32px;
//   }
// `;

// const Desc = styled.div`
//     font-size: 18px;
//     text-align: center;
//     max-width: 600px;
//     color: ${({ theme }) => theme.text_secondary};
//     @media (max-width: 768px) {
//         margin-top: 12px;
//         font-size: 16px;
//     }
// `;


// const ContactForm = styled.form`
//   width: 95%;
//   max-width: 600px;
//   display: flex;
//   flex-direction: column;
//   background-color: ${({ theme }) => theme.card};
//   padding: 32px;
//   border-radius: 16px;
//   box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
//   margin-top: 28px;
//   gap: 12px;
// `

// const ContactTitle = styled.div`
//   font-size: 24px;
//   margin-bottom: 6px;
//   font-weight: 600;
//   color: ${({ theme }) => theme.text_primary};
// `

// const ContactInput = styled.input`
//   flex: 1;
//   background-color: transparent;
//   border: 1px solid ${({ theme }) => theme.text_secondary};
//   outline: none;
//   font-size: 18px;
//   color: ${({ theme }) => theme.text_primary};
//   border-radius: 12px;
//   padding: 12px 16px;
//   &:focus {
//     border: 1px solid ${({ theme }) => theme.primary};
//   }
// `

// const ContactInputMessage = styled.textarea`
//   flex: 1;
//   background-color: transparent;
//   border: 1px solid ${({ theme }) => theme.text_secondary};
//   outline: none;
//   font-size: 18px;
//   color: ${({ theme }) => theme.text_primary};
//   border-radius: 12px;
//   padding: 12px 16px;
//   &:focus {
//     border: 1px solid ${({ theme }) => theme.primary};
//   }
// `

// const ContactButton = styled.input`
//   width: 100%;
//   text-decoration: none;
//   text-align: center;
//   background: hsla(271, 100%, 50%, 1);
//   background: linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
//   background: -moz-linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
//   background: -webkit-linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
//   padding: 13px 16px;
//   margin-top: 2px;
//   border-radius: 12px;
//   border: none;
//   color: ${({ theme }) => theme.text_primary};
//   font-size: 18px;
//   font-weight: 600;
// `



// const Contact = () => {

//   //hooks
//   const [open, setOpen] = React.useState(false);
//   const form = useRef();

//   const [loading, setLoading] = React.useState(false);

// const handleSubmit = (e) => {
//   e.preventDefault();
//   setLoading(true);
//   emailjs.sendForm('service_6w18q2v', 'template_1uhw42b', form.current, 'jV0kDYGAt8yZrCJPG')
//     .then(() => {
//       setOpen(true);
//       form.current.reset();
//       setLoading(false);
//     }, (error) => {
//       console.log(error.text);
//       setLoading(false);
//     });
// };




//   return (
//     <Container>
//       <Wrapper>
//         <Title>Contact</Title>
//         <Desc>Feel free to reach out to me for any questions or opportunities!</Desc>
//         <ContactForm ref={form} onSubmit={handleSubmit}>
//           <ContactTitle>Email Me 🚀</ContactTitle>
//           <ContactInput placeholder="Your Name" name="name" />
//           <ContactInput placeholder="Your Email" name="email" />
//           <ContactInput placeholder="Subject" name="title" />
//           <ContactInputMessage placeholder="Message" rows="4" name="message" />
//           <ContactButton type="submit" value={loading ? "Sending..." : "Send"} disabled={loading} />

//         </ContactForm>
//         <Snackbar
//           open={open}
//           autoHideDuration={6000}
//           onClose={() => setOpen(false)}
//         >
//           <Alert onClose={() => setOpen(false)} severity="success" sx={{ width: '100%' }}>
//             Email sent successfully!
//           </Alert>
//         </Snackbar>
//       </Wrapper>
//     </Container>
//   )
// }

// export default Contact

import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import emailjs from '@emailjs/browser';
import { Snackbar, Alert } from '@mui/material';

// Styled components (unchanged)
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1350px;
  padding: 0px 0px 80px 0px;
  gap: 12px;
`;

const Title = styled.div`
  font-size: 42px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
`;

const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  max-width: 600px;
  color: ${({ theme }) => theme.text_secondary};
`;

const ContactForm = styled.form`
  width: 95%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.card};
  padding: 32px;
  border-radius: 16px;
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
  margin-top: 28px;
  gap: 12px;
`;

const ContactTitle = styled.div`
  font-size: 24px;
  margin-bottom: 6px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
`;

const ContactInput = styled.input`
  flex: 1;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.text_secondary};
  outline: none;
  font-size: 18px;
  color: ${({ theme }) => theme.text_primary};
  border-radius: 12px;
  padding: 12px 16px;
`;

const ContactInputMessage = styled.textarea`
  flex: 1;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.text_secondary};
  outline: none;
  font-size: 18px;
  color: ${({ theme }) => theme.text_primary};
  border-radius: 12px;
  padding: 12px 16px;
`;

const ContactButton = styled.input`
  width: 100%;
  background: linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
  padding: 13px 16px;
  margin-top: 2px;
  border-radius: 12px;
  border: none;
  color: ${({ theme }) => theme.text_primary};
  font-size: 18px;
  font-weight: 600;
`;

const ErrorText = styled.div`
  color: red;
  font-size: 14px;
  margin-top: -10px;
  margin-bottom: 4px;
`;

const Contact = () => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const form = useRef();

  // Input states
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    title: '',
    message: '',
  });

  const [errors, setErrors] = useState({});

  const isEmailValid = (email) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.email.trim()) newErrors.email = "Email is required.";
    else if (!isEmailValid(formData.email)) newErrors.email = "Invalid email format.";
    if (!formData.title.trim()) newErrors.title = "Subject is required.";
    if (!formData.message.trim()) newErrors.message = "Message is required.";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length !== 0) return;

    setLoading(true);
    emailjs.sendForm(  process.env.REACT_APP_EMAILJS_SERVICE_ID,
  process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
  form.current,
  process.env.REACT_APP_EMAILJS_PUBLIC_KEY
)
      .then(() => {
        setOpen(true);
        setFormData({ name: '', email: '', title: '', message: '' });
        setLoading(false);
        form.current.reset();
      }, (error) => {
        console.log(error.text);
        setLoading(false);
      });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <Container>
      <Wrapper>
        <Title>Contact</Title>
        <Desc>Feel free to reach out to me for any questions or opportunities!</Desc>
        <ContactForm ref={form} onSubmit={handleSubmit}>
          <ContactTitle>Email Me 🚀</ContactTitle>

          <ContactInput placeholder="Your Name" name="name" value={formData.name} onChange={handleChange} />
          {errors.name && <ErrorText>{errors.name}</ErrorText>}

          <ContactInput placeholder="Your Email" name="email" value={formData.email} onChange={handleChange} />
          {errors.email && <ErrorText>{errors.email}</ErrorText>}

          <ContactInput placeholder="Subject" name="title" value={formData.title} onChange={handleChange} />
          {errors.title && <ErrorText>{errors.title}</ErrorText>}

          <ContactInputMessage placeholder="Message" name="message" rows="4" value={formData.message} onChange={handleChange} />
          {errors.message && <ErrorText>{errors.message}</ErrorText>}

          <ContactButton type="submit" value={loading ? "Sending..." : "Send"} disabled={loading} />
        </ContactForm>

        <Snackbar
          open={open}
          autoHideDuration={6000}
          onClose={() => setOpen(false)}
        >
          <Alert onClose={() => setOpen(false)} severity="success" sx={{ width: '100%' }}>
            Email sent successfully!
          </Alert>
        </Snackbar>
      </Wrapper>
    </Container>
  );
};

export default Contact;
