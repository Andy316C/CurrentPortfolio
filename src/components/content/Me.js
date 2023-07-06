import React from 'react';

export default function Me() {
  return (
    <div>
      <section className="about" id="about">

      <div className="avatar">
      <img src={require('../images/man-avatar.png')} alt="avatar"></img>
        </div>

          <div>
            <h6> A little info about who i am </h6>
            <span> Hi my name is Andrew Clark i am 36 years old. i was born and raised in Sydney and enjoy Sydney culture above any other state. 
              Below i have listed a few things about me that may help you understand the type of person i am. Which to be honest is pretty boring...lol. I mainly enjoy working on software development projects in my spare time</span>
          </div><br/>
          <div className="aboutlist">
            <h3>Favorite things to do</h3>
            <ul className="list-group">
              
              <li className="list-group-item list-group-item-secondary">Reading Fantasy novels.</li>
              <li className="list-group-item list-group-item-success">Relaxing by the pool on HOT DAY !.</li>
              <li className="list-group-item list-group-item-danger">Learning more about programming.</li>
              <li className="list-group-item list-group-item-warning">Playing with my Dog Buster.</li>
              <li className="list-group-item list-group-item-info">Playing Golf when ever i can get some free time</li>
            </ul>
            
            <h3>Hobbies</h3>
            <ul className="list-group">
              <li className="list-group-item list-group-item-primary">Playing most sports</li>
              <li className="list-group-item list-group-item-light">Swimming in the ocean, there is no greater feeling in the world.</li>
              <li className="list-group-item list-group-item-dark">Learning about things that cross my path in life.</li>
              <li className="list-group-item list-group-item-success">I Love golf , i could live on a golf course.</li>
            </ul>
            
        </div>
            </section>
    </div>
  );
}