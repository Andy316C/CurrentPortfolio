import React from 'react';
const styles = {
  footerStyle: {
    background: '#3f51b5',
    height: '50px',
    padding: '10px'
  },
  footerStyle2: {
    background: '#000000',
  },

  footerStyle3: {
    padding: '10px',
  },
  
};

export default function Footer() {
  return (
    
    

  <div >
    <div className="container my-5">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
 <footer className="text-center text-white" style={styles.footerStyle}>
   
   {/* <div className="container"> */}
    
     {/* <hr className="my-5" /> */}

     <section className="text-center mb-5">
       <a href="https://www.facebook.com/" className="text-white me-4" style={styles.footerStyle3}>
         <i className="fa fa-facebook-f"></i>
       </a>
       <a href="https://www.twitter.com/" className="text-white me-4" style={styles.footerStyle3}>
         <i className="fa fa-twitter"></i>
       </a>
       <a href="https://www.google.com/" className="text-white me-4" style={styles.footerStyle3}>
         <i className="fa fa-google"></i>
       </a>
       <a href="https://www.instagram.com/" className="text-white me-4" style={styles.footerStyle3}>
         <i className="fa fa-instagram"></i>
       </a>
       <a href="https://www.linkedin.com/" className="text-white me-4" style={styles.footerStyle3}>
         <i className="fa fa-linkedin"></i>
       </a>
       <a href="https://www.github.com/" className="text-white me-4" style={styles.footerStyle3}>
         <i className="fa fa-github"></i>
       </a>
     </section>
     {/* <!-- Section: Social --> */}
   {/* </div> */}
   {/* <!-- Grid container --> */}

   {/* <!-- Copyright --> */}
   
   
 </footer>

</div>
   
   
    
  </div>
  

  
  
      
  );
}