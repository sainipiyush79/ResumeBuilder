import './resume.css'

function Education({data}) {
  //console.log(data)
  return (
    <div>
      <p className="head">Education</p>
      <ul>
        <a href="http://www.wiltonhighschool.org/pages/Wilton_High_School">
          <li>{data}</li>
        </a>
        <a href="https://www.silvermineart.org/">
          <li>Silvermine School of Arts</li>
        </a>
        <li>Codeacademy</li>
      </ul>
    </div>
  );
}

export default Education
