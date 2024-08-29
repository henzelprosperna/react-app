import React from 'react';

function Education() {
  return (
    <section id="education" className="p-8">
      <h2 className="text-3xl font-semibold mb-4">Education</h2>
      <div className="space-y-4">
        <div className="bg-gray-800 p-4 rounded-lg">
          <h3 className="text-xl font-bold">Bachelor of Science in Computer Science</h3>
          <p className="text-gray-400">University of Makati, Makati City (2019 – 2023)</p>
        </div>
        <div className="bg-gray-800 p-4 rounded-lg">
          <h3 className="text-xl font-bold">ICT – Computer Programming</h3>
          <p className="text-gray-400">University of Makati, Makati City (2017 – 2019)</p>
        </div>
        <div className="bg-gray-800 p-4 rounded-lg">
          <h3 className="text-xl font-bold">High School Diploma</h3>
          <p className="text-gray-400">Tibagan High School, Makati City (2013 – 2017)</p>
        </div>
        <div className="bg-gray-800 p-4 rounded-lg">
          <h3 className="text-xl font-bold">Primary Education</h3>
          <p className="text-gray-400">San Agustin Elementary School, Zambales (2008 – 2013)</p>
        </div>
      </div>
    </section>
  );
}

export default Education;
