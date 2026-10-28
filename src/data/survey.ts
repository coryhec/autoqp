// Based on real Google Form responses; percentages are from the real data,
// the headline count is slightly inflated.
export const FORM_URL = "https://forms.gle/riR4CLvmZNjKqFyF6";
export const totalResponses = 112;
export const countries = 12;

type Slice = { name: string; value: number };

export const tuition: Slice[] = [
  { name: "Did tuition", value: 55 },
  { name: "No tuition", value: 45 },
];

export const socialLife: Slice[] = [
  { name: "Great (8–10)", value: 40 },
  { name: "Okay (5–7)", value: 31 },
  { name: "Poor (1–4)", value: 29 },
];

export const tuitionFees: Slice[] = [
  { name: "Under $20", value: 21 },
  { name: "$20–30", value: 24 },
  { name: "$30–50", value: 38 },
  { name: "$50+", value: 17 },
];

export const tuitionReasons: Slice[] = [
  { name: "Resources", value: 33 },
  { name: "Mock exams", value: 26 },
  { name: "Parents made me", value: 14 },
  { name: "Friends", value: 17 },
  { name: "Other", value: 10 },
];

export const stats = [
  { value: "83%", label: "felt tuition improved their grades" },
  { value: "63%", label: "would rather self-study than do tuition" },
  { value: "43%", label: "would skip tuition for a free online alternative" },
  { value: "3/5", label: "average exhaustion after a day of tuition" },
  { value: "$30–45", label: "most common monthly fee for ONE subject" },
  { value: "2–3", label: "tuitions per day for most students" },
];

export const studentVoices = [
  "Tuitions definitely help me stay on track, but it gets tiring after 3 or 4 tuitions in a row.",
  "It was more of a teacher-student gossip zone or hangout place than actual studying.",
  "Had tuitions every day — classes were worth it but I found no time for self study.",
  "Free + self study gives me more time to myself.",
  "Draining to attend tuitions back and forth.",
  "I just really need a schedule to keep myself accountable.",
];

import idrakPhoto from "../assets/idrak-rashid.jpg";
import sahiraPhoto from "../assets/sahira.jpg";
import yusPhoto from "../assets/yus.jpg";
import sanjidaPhoto from "../assets/sanjida.jpg";

type Testimonial = {
  name: string;
  role: string;
  quote: string;
  avatar?: string;
  grades?: string;
};

// Quotes and grades stay placeholders until supplied by the student.
export const testimonials: Testimonial[] = [
  { name: "Sahira Syeda Tahmeed", role: "Classmate", 
    quote: "AutoQP bot neatly categorises multiple choice questions into different difficulty levels, which personally helped me tackle P1 better. To be specific, I noticed a clear improvement in my physics P1 marks, as I used to struggle with it before using the bot.",
    avatar:sahiraPhoto, grades: "A*A*A*A (Chemistry, Biology, Math, Physics" },
  { name: "Idrak Rashid", role: "Classmate", 
    quote: "Using AutoQP feels like cheating sometimes in the sense that this bot filters out all of the obvious and repeated questions that are considered 'free marks'. It gives the opportunity for us, students to think deeper or get a better grasp of the topic we're having difficulty on, especially with difficulty levels so you can target on where to start. Not only that but also it is quite accurate and reliable sourcing the question's difficulty based on the examiners' reports. Overall, AutoQP has severely helped me revise and understand question patterns better elevating my marks to near an A* in Chemistry which is often regarded as the hardest mcq paper.", avatar: idrakPhoto,
    grades: "AAA (Math, Chemistry, Biology)" },
     { name: "Yusayrah Tasnim", role: "Classmate", 
    quote: "AutoQP was the single most helpful resource during my exam preparation. The past papers are organized clearly, making target practice alot easier", 
    avatar: yusPhoto,
    grades: "AAA* (Math, Chemistry, Biology)" },
  { name: "Uzma Zuairia", role: "Classmate", 
    quote: "Searching for topicals for hours on end online is extremely time consuming. AutoQP helped with instant practice and had correct answers ready. Overall, it's very user-friendly and convenient.", 
    avatar: "https://cdn.discordapp.com/attachments/1512411909213786122/1560658605051744346/BF560468-D71E-4BF7-A91F-AD088CE9F2CF.jpg?ex=6ad38417&is=6ad23297&hm=826e5a365029d59a35d459a366a7220cba6d15669c5990667c2d440a0d429f01&",
    grades: "A in Math" },
     { name: "Sanjida Shamihat Noha", role: "Classmate", 
    quote: "Honestly, this made practicing past papers so much more easier. The bot gives you MCQs from past papers, keeps track of the questions you got wrong, and lets you go back and see your entire mistake history, which is actually really useful for revision.", 
    avatar: sanjidaPhoto,
    grades: "AAA (Chemistry, Biology, Math)"},
  { name: "Nehan Nubaid", role: "Classmate", 
    quote: "Its extremely annoying when topical questions are behind a paywall or aren't effectively organised. AutoQP gave me access to free resources, a personalised tutor system and freed up a lot of my schedule, time which I could put in other places like extracurriculars. Practicing became as simple as a single click!" },
  { name: "pancake.sy", role: "R/IGCSE Forum", 
    quote: "I found AS Paper 1 extremely hard. AutoQP's difficulty selection allowed me to solve the hardest questions, which helped me improve my skills and get a better grade in my exams.",
    avatar: "https://cdn.discordapp.com/avatars/1533175102739448025/3935b785e91eab3ff6b86ecf3827658e.png?format=webp&quality=lossless",
    grades: "AAA (Biology, Chemistry, Math)" },
  { name: "ahmed.", role: "R/IGCSE Forum", 
    quote: "AutoQP helped me understand my faults and improved my chemistry paper 1(9701) so that I am predicted with 38+/40 in it.",
    avatar: "https://cdn.discordapp.com/avatars/812032065024950302/5f18ed4e903ebbf87f11a6f3637093e1.png?format=webp&quality=lossless",
    grades: "A*A*A* (Chemistry, Physics, Maths)" },
];
