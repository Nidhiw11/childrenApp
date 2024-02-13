import { Injectable } from '@angular/core';
@Injectable({
providedIn: 'root',
})
export class FacultyService {
constructor() {}
getFaculty(): any[] {
// Implement the logic to retrieve faculty data here
return [
{
name: 'Prof. Dr. Dhananjay Kalbande',
photo:
'https://cse.spit.ac.in/assets/faculty/dr-dhananjay-kalbande.jpg',
linkedin: 'https://linkedin.com/in/dhananjaykalbande',
designation:'Head of Department',
about:
'Prof. Dr. Dhananjay Kalbande is the Head of the Department. He has a Ph.D. in Computer Science and extensive experience in research andacademia. His areas of expertise include artificial intelligence, machine learning, and data science.',
github: 'https://github.com/dhananjaykalbande',
},
{
name: 'Prof. Dr. Pooja Raundale',
photo:
'https://mca.spit.ac.in/wp-content/uploads/2022/12/PR-e1670491866552.jpg',
linkedin: 'https://linkedin.com/in/poojaraundale',
designation:'Professor',
about:
'Prof. Dr. Pooja Raundale is a distinguished Professor with a focus on software engineering and programming languages. She actively contributes to research and has published numerous papers in reputed journals.',
github: 'https://github.com/poojaraundale',
},
{
  name: 'Prof. Pallavi Thakur',
  photo: 'https://mca.spit.ac.in/wp-content/uploads/2022/12/PT-150x150.png',
  linkedin: 'https://linkedin.com/in/pallavithakur',
  education:'Education-M.E. IT, B.E. IT',
  about: 'Roles and Responsibilities Time Table Co-ordinator, SWC Co-oridnator, Miniproject Co-oridnator, Feedback Co-oridnator',
  github: 'https://github.com/pallavithakur',
  designation: 'Assistant Professor',
},
{
name: 'Prof. Dr. Aarti Karande',
photo:
'https://mca.spit.ac.in/wp-content/uploads/2022/12/aarti.png',
linkedin: 'https://linkedin.com/in/aartikarande',
designation:'Assistant Professor',
about:
'Prof. Dr. Aarti Karande is an Assistant Professor specializing in database systems and information retrieval. She has a passion for teaching and guiding students in their research projects.',
github: 'https://github.com/aartikarande',
},
{
name: 'Prof. Harshil Kanakia',
photo: 'https://mca.spit.ac.in/wp-content/uploads/2022/12/HK.png',
linkedin: 'https://linkedin.com/in/harshilkanakia',
designation:'Assistant Professor',
about:
'Prof. Harshil Kanakia is an Assistant Professor focusing on computer networks and cybersecurity. He is dedicated to mentoring students and fostering a learning environment in the department.',
github: 'https://github.com/harshilkanakia',
},
{
name: 'Prof. Nikhita Mangaonkar',
photo: 'https://mca.spit.ac.in/wp-content/uploads/2022/12/NM.jpg',
linkedin: 'https://linkedin.com/in/nikhita-mangaonkar',
designation:'Assistant Professor',
about:
'Prof. Nikhita Mangaonkar is an Assistant Professor with expertise in software engineering and project management. She is committed to promoting innovation and practical skills among students.',
github: 'https://github.com/nikhitamangaonkar',
},
];
}
}