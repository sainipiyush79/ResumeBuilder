import './App.css';
import CreateButton from './componenet/CreateButton';
import Resume from './componenet/Resume';

let data = {
  Experience : [ "Something"],
  Education: ['University of Rochester' ],
  Skills :   ['react js', 'node js'],
  Interests: ["Chess", "Reading"]
}

function App() {

  console.log(data.education)
  return (
    <>
  <Resume 
      educationInfo = {data.education}
      experienceInfo = {data.experience}
      skillsInfo = {data.skills}
      interestsInfo = {data.Interests}
      ></Resume>

      <CreateButton name= "Edit" message= "Successfully edited"></CreateButton>
      </>
      );
}

export default App;
