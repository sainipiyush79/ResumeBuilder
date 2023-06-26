import Education from './Education';
import Experience from './Experience';
import Skills from './Skills';
import Interests from './Interests';


function Resume({educationInfo, experienceInfo, skillsInfo, interestsInfo }){
    console.log(educationInfo)
    return (
        
    <div>
        <h1>RESUME</h1>
        <Education data = {educationInfo}></Education>
        <Experience data = {experienceInfo}></Experience>
        <Skills data = {skillsInfo}></Skills>
        <Interests data = {interestsInfo}></Interests>
    </div>
    );
}

export default Resume