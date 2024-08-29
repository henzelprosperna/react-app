import React from 'react';

function Experience() {
  return (
    <section id="experience" className="p-8 bg-gray-800">
      <h2 className="text-3xl font-semibold mb-4">Work Experience</h2>
      <div className="grid gap-6 md:grid-cols-2">
        <div className="p-4 bg-gray-700 rounded-lg">
          <h3 className="text-xl font-bold">IT Specialist</h3>
          <p className="text-gray-400">Harte Hanks, Taguig City (April 2024 – Present)</p>
          <ul className="list-disc pl-5">
            <li>Administer Active Directory, managing user accounts and permissions.</li>
            <li>Provide comprehensive IT support, including hardware and software troubleshooting.</li>
            <li>Support Service Desk operations, ensuring timely resolution of technical issues.</li>
          </ul>
        </div>
        <div className="p-4 bg-gray-700 rounded-lg">
          <h3 className="text-xl font-bold">IT/CS Instructor</h3>
          <p className="text-gray-400">Centro Escolar University, Taguig City (August 2023 – May 2023)</p>
          <ul className="list-disc pl-5">
            <li>Taught Java programming and game development using Unity.</li>
            <li>Conducted courses in ASP.NET and object-oriented programming.</li>
            <li>Instructed students on platform technologies such as Node and Express.</li>
          </ul>
        </div>
        <div className="p-4 bg-gray-700 rounded-lg">
          <h3 className="text-xl font-bold">Technical Support Representative</h3>
          <p className="text-gray-400">Harte Hanks, Taguig City (August 2022 – February 2023)</p>
          <ul className="list-disc pl-5">
            <li>Provided technical support for HBO Max, assisting users with streaming issues.</li>
            <li>Troubleshot and resolved hardware and software problems.</li>
          </ul>
        </div>
        <div className="p-4 bg-gray-700 rounded-lg">
          <h3 className="text-xl font-bold">Customer Support Representative</h3>
          <p className="text-gray-400">C3 - Everise, Taguig City (July 2021 – February 2022)</p>
          <ul className="list-disc pl-5">
            <li>Assisted customers with flight bookings, delivering exceptional support and guidance.</li>
            <li>Handled customer inquiries and resolved issues efficiently.</li>
          </ul>
        </div>
        <div className="p-4 bg-gray-700 rounded-lg">
          <h3 className="text-xl font-bold">Technical Support Representative</h3>
          <p className="text-gray-400">Harte Hanks, Taguig City (August 2019 – September 2020)</p>
          <ul className="list-disc pl-5">
            <li>Supported WWE Streaming platform users, troubleshooting technical issues.</li>
            <li>Provided assistance with streaming devices, hardware, and software.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Experience;
