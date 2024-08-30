import React from 'react';

function Volunteer() {
  return (
    <section id="volunteer" className="p-8">
      <h2 className="text-3xl font-semibold mb-4">Volunteer Experience</h2>
      <div className="bg-gray-800 p-4 rounded-lg">
        <h3 className="text-xl font-bold">Intern</h3>
        <p className="text-gray-400">Philippine Navy (February 2023 – May 2023)</p>
        <ul className="list-disc pl-5">
          <li>Assisted in basic networking and installation.</li>
          <li>Conducted updates and maintenance of navy computers.</li>
        </ul>
      </div>
    </section>
  );
}

export default Volunteer;
