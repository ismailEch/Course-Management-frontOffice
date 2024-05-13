// import React from 'react';
import enroll1 from '../assets/enroll1.svg';
import enroll2 from '../assets/enroll2.svg';
import enroll3 from '../assets/enroll3.svg';
import enroll4 from '../assets/enroll4.svg';
import enroll5 from '../assets/enroll5.svg';
import enroll6 from '../assets/enroll6.svg';
import enroll7 from '../assets/enroll7.svg';
import enroll8 from '../assets/enroll8.svg';
import profil1 from '../assets/profil1.svg';
import profil2 from '../assets/profil2.svg';
import profil3 from '../assets/profil3.svg';
import profil4 from '../assets/profil4.svg';
import profil5 from '../assets/profil5.svg';
import profil6 from '../assets/profil6.svg';
import profil7 from '../assets/profil7.svg';
import profil8 from '../assets/profil8.svg';


// Sample course data
const courses = [
  {
    id: 1,
    name: "Design Fundamentals",
    image: enroll1 ,
    teacherName: "John Doe",
    teacherImage: profil1 ,
    stars: 4,
    description: "Learn the basics of design principles.",
    hours: 4
  },
  {
    id: 2,
    name: "Web Development ",
    image: enroll2 ,
    teacherName: "Fred Smith",
    teacherImage: profil2,
    stars: 5,
    description: "Build websites using HTML, CSS, and JavaScript.",
    hours: 6
  },
  {
    id: 3,
    name: "Business Management",
    image: enroll3 ,
    teacherName: "Alex Johnson",
    teacherImage: profil3,
    stars: 4,
    description: " the fundamentals of business management.",
    hours: 5
  },
  {
    id: 4,
    name: "Data Science Essentials",
    image: enroll4,
    teacherName: "Emily Brown",
    teacherImage: profil4 ,
    stars: 4,
    description: "Learn essential concepts for data analysis.",
    hours: 5
  },
  {
    id: 5,
    name: "Digital Marketing Strategies",
    image: enroll5 ,
    teacherName: "  Anne Wilson",
    teacherImage: profil5 ,
    stars: 5,
    description: "Discover effective digital marketing strategies.",
    hours: 4
  },
  {
    id: 6,
    name: "Mobile App Development",
    image: enroll6 ,
    teacherName: "David Martinez",
    teacherImage: profil6,
    stars: 4,
    description: "Build mobile apps using React Native.",
    hours: 6
  },
  {
    id: 7,
    name: "UI/UX Design",
    image: enroll7 ,
    teacherName: "Sarah Wilson",
    teacherImage: profil7,
    stars: 5,
    description: "Master the art of user interface and experience design.",
    hours: 7
  },
  {
    id: 8,
    name: "Python Programming",
    image: enroll8,
    teacherName: "Elon Thompson",
    teacherImage: profil8,
    stars: 4,
    description: "Learn Python programming from scratch.",
    hours: 8
  }
];

const EnrollPage = () => {
  return (
    <div className="bg-primary text-white py-20 ">
      <div className="max-w-7xl mx-auto px-4 w-11/12">
      <h1 className="text-3xl font-bold mb-6">
          <span className="text-white mr-2">Popular</span> 
          <span className="text-secondary">Courses</span>
      </h1>
      <div className="flex gap-2 mb-6">
          <div className="rounded-md bg-rich-purple px-4 py-2 text-white hover:bg-purple-700 flex items-center justify-between">Design</div>
          <div className="rounded-md bg-rich-purple px-4 py-2 text-white hover:bg-purple-700 flex items-center justify-between">Web Development</div>
          <div className="rounded-md bg-rich-purple px-4 py-2 text-white hover:bg-purple-700 flex items-center justify-between">Marketing</div>
          <div className="rounded-md bg-rich-purple px-4 py-2 text-white hover:bg-purple-700 flex items-center justify-between">UI/UX</div>
        </div>
       <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4 ">
           {courses.map(course => (
            <div key={course.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img src={course.image} alt={course.name} className="w-full h-36 object-cover"/>
              <div className="px-4 py-4">
                <p className="text-lg font-semibold text-gray-800 mb-2">{course.name}</p>
                <div className="flex items-center mb-2">
                  <img src={course.teacherImage} alt={course.teacherName} className="w-8 h-8 rounded-full mr-2"/>
                  <p className="text-sm text-gray-700">{course.teacherName}</p>
                </div>
                <div className="flex items-center mb-2">
                </div>
                <p className="text-gray-700 mb-2">{course.description}</p>
                <p className="text-gray-700">{course.hours} Hours</p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-8">
          <button className="bg-purple-600 px-8 py-3 rounded-lg text-white font-bold hover:bg-purple-500 transition duration-300">Explore More</button>
        </div>
      </div>
    </div>
  );
};

export default EnrollPage;
