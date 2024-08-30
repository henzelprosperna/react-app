import React from 'react';

function Contact() {
  return (
    <section id="contact" className="p-8">
      <h2 className="text-3xl font-semibold mb-4">Contact</h2>
      <ul className="space-y-2">
        <li><a href="mailto:henzel.q@gmail.com" className="text-blue-400 hover:underline">henzel.q@gmail.com</a></li>
        <li>Phone: 09479524018</li>
        <li><a href="https://www.linkedin.com/in/henzel-quitaneg-177914201/" className="text-blue-400 hover:underline">LinkedIn</a></li>
        <li><a href="https://www.facebook.com/smile.henzels" className="text-blue-400 hover:underline">Facebook</a></li>
        <li><a href="https://www.instagram.com/henzelgretels" className="text-blue-400 hover:underline">Instagram</a></li>
      </ul>
    </section>
  );
}

export default Contact;
