function ProjectList() {
  return (
    <div id="projects" class="hero min-h-screen bg-base-200">
      <div class="hero-content text-center">
        <div class="max-w-sm sm:max-w-md md:max-w-lg lg:max-w-4xl xl:max-w-4xl">
          <h1 class="text-5xl font-bold">Projects</h1>
          <p class="p-2">Explore my recent work.</p>
          <div>
            <div class="card lg:card-side bg-base-100 shadow-xl m-7">
              <figure><img src="https://daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.jpg" alt="Album" /></figure>
              <div class="card-body">
                <h2 class="card-title">Friender</h2>
                <p class="text-left">A social networking site that allows users to find new friends in their area! Built with a React Frontend and a Flask Backend.</p>
                <p class="text-left"><b>Built with: </b>
                  <ul class="list-disc">
                    <li>React</li>
                    <li>Flask</li>
                    <li>SQLAlchemy</li>
                    <li>PostgreSQL</li>
                    <li>AWS S3</li>
                    <li>Bootstrap</li>
                  </ul>
                </p>
                <div class="card-actions justify-end">
                  <button class="btn btn-primary">Front End
                  <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><path d="M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"/></svg>
                  </button>
                  <button class="btn btn-primary">Back End
                  <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><path d="M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"/></svg>
                  </button>
                  <button class="btn btn-primary">Demo
                  <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><path d="M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"/></svg>
                 </button>
                </div>
              </div>
            </div>
            <div class="card lg:card-side bg-base-100 shadow-xl m-7">
              <figure><img src="https://daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.jpg" alt="Album" /></figure>
              <div class="card-body">
                <h2 class="card-title">Jobly</h2>
                <p class="text-left">A job search application that allows users to search for jobs and companies.  Built with a React Frontend and a Express Backend.</p>
                <p class="text-left"><b>Built with: </b>
                  <ul class="list-disc">
                    <li>React</li>
                    <li>Express</li>
                    <li>Node.js</li>
                    <li>PostgreSQL</li>
                    <li>Bootstrap</li>
                  </ul>
                </p>
                <div class="card-actions justify-end">
                  <button class="btn btn-primary">Front End
                  <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><path d="M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"/></svg>
                  </button>
                  <button class="btn btn-primary">Back End
                  <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><path d="M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"/></svg>
                  </button>
                  <button class="btn btn-primary">Demo
                  <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><path d="M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"/></svg>
                 </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>


  );
}

export default ProjectList;