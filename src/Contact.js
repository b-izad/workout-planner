import React from 'react';

const ContactUs = () => {
  const handleEmailClick = () => {
    const emailAddress = 'your-email@example.com';
    const subject = 'Contact Form Submission';
    const body = 'Hi, I would like to get in touch.';

    window.location.href = `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <div>
      <h2 className='contact-header'>Contact Us</h2>
      <p className='contact-form'>If you have any thoughts on our work or want to collaborate or simply want to say hi email us at:</p>

      <button className='btn'  onClick={handleEmailClick}>bahareh.izad@gmail.com</button>
    </div>
  );
};

export default ContactUs;
