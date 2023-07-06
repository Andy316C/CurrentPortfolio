import React from 'react';
const styles = {
  portStyle: {
    margin: "25px",
  },
  portheadStyle: {
    marginLeft: "35%",
  },

  widthImg: {
    width: '75%'
  }
}
export default function Portfolio() {
  return (
    <div>
      <h3 style={styles.portheadStyle}>Projects that i have built</h3><br/>
      <div style={styles.portStyle}>
      <h6>PWA_TextEditor</h6>
      <p>A progressive Web Application Text editor</p>
      <a href="https://pwatexteditorlocal-d5e8fd656fa7.herokuapp.com/">View PWA Texteditor application</a><br/>
      <img src={require('../images/pwa.png')} alt="PWA" style={styles.widthImg}></img>
      </div>

      <div style={styles.portStyle}>
      <h6>Whether API Application</h6>
      <p>A Whether reader form an external API</p>
      <a href="https://andy316c.github.io/Whether-Api-App/">View Whether application</a><br/>
      <img src={require('../images/weather.png')} alt="wether" style={styles.widthImg}></img>
      </div>

      <div style={styles.portStyle}>
      <h6>Password Generator</h6>
      <p>Generate a password with one click of the button</p>
      <a href="https://andy316c.github.io/Password-Generator/">View Password Generator</a><br/>
      <img src={require('../images/password.png')} alt="password" style={styles.widthImg}></img>
      </div>

      <div style={styles.portStyle}>
      <h6>Blog Site</h6>
      <p>A Blog site for keen bloggers</p>
      <a href="https://bloggerblogscms.herokuapp.com/">View Blog Site</a><br/>
      <img src={require('../images/blog.png')} alt="blog" style={styles.widthImg}></img>
      </div>
      

      <div style={styles.portStyle}>
      <h6>Quiz Game</h6>
      <p>A quiz game made from javascript</p>
      <a href="https://andy316c.github.io/Quiz-Game/">View Quiz Game application</a><br/>
      <img src={require('../images/quiz.png')} alt="quiz" style={styles.widthImg}></img>
      </div>
    </div>


  );
}

