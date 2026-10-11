import Header from './components/Header';
import ProfileCard from './components/ProfileCard';
import Footer from './components/Footer';
import './App.css';
import type { Goal } from './types'
import Contacts from './components/Contacts';

const goals: Goal[] = [
  {
    skill: "HTML",
    currentLevel: "Beginner",
    desiredLevel: "Intermediate",
  },
  {
    skill: "Python",
    currentLevel: "Intermediate",
    desiredLevel: "Upper Intermediate",
  },
    {
    skill: "CSS",
    currentLevel: "No Knowledge",
    desiredLevel: "Beginner",
  },
];

function App() {
  return (
    <>
      <Header 
        name="Daniil Trukhanov"
        role="Aspiring Web Developer"
      />
      <ProfileCard
        name="Daniil Trukhanov"
        bio="My name is Daniil. I am a third-year university student studying at the Kazakh-British Technical University."
        avatarUrl='https://avatars.githubusercontent.com/u/291992310?v=4'
        skills={["HTML", "Python", "C++", "Git"]}
        goals={goals}
      />
      <Contacts />
      <Footer
        name="Daniil Trukhanov"
        year={2026}
      />
    </>
  )
}

export default App;