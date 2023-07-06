import React from 'react';
const styles = {
    contactStyle: {
      background: '#2779e2',
    },
    
  };
//"background-color: #2779e2;"
export default function Contact() {
  return (
    <div>
      <h1>Contact Page</h1>
      <section class="vh-100" style={styles.contactStyle}>
  <div class="container h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-xl-9">

        <h1 class="text-white mb-4">Leave your details for me to contact you!</h1>

        <div class="card" style={{borderRadius: '15px!important'}}>
          <div class="card-body">

            <div class="row align-items-center pt-4 pb-3">
              <div class="col-md-3 ps-5">

                <h6 class="mb-0">Full name</h6>

              </div>
              <div class="col-md-9 pe-5">

                <input type="text" class="form-control form-control-lg" />

              </div>
            </div>

            <hr class="mx-n3"/>

            <div class="row align-items-center py-3">
              <div class="col-md-3 ps-5">

                <h6 class="mb-0">Email address</h6>

              </div>
              <div class="col-md-9 pe-5">

                <input type="email" class="form-control form-control-lg" placeholder="example@example.com" />

              </div>
            </div>

            <hr class="mx-n3"/>

            <div class="row align-items-center py-3">
              <div class="col-md-3 ps-5">

                <h6 class="mb-0">Comment</h6>

              </div>
              <div class="col-md-9 pe-5">

                <textarea class="form-control" rows="3" placeholder="Message sent to the employer"></textarea>

              </div>
            </div>
            <div class="px-5 py-4">
              <button type="submit" class="btn btn-primary btn-lg">Send Message</button>
            </div>

            

           

           

          </div>
        </div>

      </div>
    </div>
  </div>
</section>
    </div>
  );
}
