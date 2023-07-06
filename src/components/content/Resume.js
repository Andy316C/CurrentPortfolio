import React from 'react';
const styles = {
  resumeStyle: {
    margin: "25px",
  },
}
export default function Resume() {
  return (
    <div style={styles.resumeStyle}>
      <h4>Personel Profile</h4>
      <p>
        Hi my name is Andrew Clark, my goal in life is to become a software developer for atlassian. 
        i am very active person who enjoys nature and accomplishing tasks that i set my mind to, even if these are almost impossible.
      </p>

      <h4>Work Experiance</h4>
      <p>
        <h6>i-link Research solutions</h6>
        My duties at i-link require mant facets of design patterns and meetings to discuss how Projects are evolving and any issues that may arise
         from the situation that we are facing
      </p>

      <h4>Key Skills</h4>
      <p>
        
        My duties at i-link require many roles, mainly design patterns and meetings to discuss how Projects are evolving and any issues that may arise
         from the situation that we are facing.
          <ol>
            <li>Attend Managemnet meetings</li>
            <li>Discuss and address any concerns regarding time frames and deadlines</li>
            <li>Complete tasks that are assigned to me</li>
          </ol>
      </p>

      <h4>Education</h4>
      <p>
        <h6>Randwick Boys High School</h6>
        Completed my HSC
      </p>
      <p>
        <h6>Sydney Uni Full Stack web development </h6>
        Completed my Fullstack web development course
      </p>
    </div>
  );
}
