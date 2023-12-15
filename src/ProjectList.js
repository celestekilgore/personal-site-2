function ProjectList() {
  return (
    <div id="projects" className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-sm sm:max-w-md md:max-w-lg lg:max-w-4xl xl:max-w-4xl">
          <h1 className="text-5xl font-bold">Projects</h1>
          <p className="p-2">Explore my recent work.</p>
          <div>
            <div className="card lg:card-side bg-base-100 shadow-xl m-7">
              <figure><img src="https://daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.jpg" alt="Album" /></figure>
              <div className="card-body">
                <h2 className="card-title">Friender</h2>
                <p className="text-left">A social networking site that allows users to find new friends in their area! Built with a React Frontend and a Flask Backend.</p>
                <p className="text-left"><b>Built with: </b>React, Flask, SQLAlchemy, PostgreSQL, AWS S3, Bootstrap</p>
                <div className="card-actions justify-end">
                  <a className="btn btn-primary" href="https://github.com/celestekilgore/friender-frontend" target="_blank">Frontend
                  <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><path d="M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"/></svg>
                  </a>
                  <a className="btn btn-primary" href="https://github.com/celestekilgore/friender-backend" target="_blank">Backend
                  <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><path d="M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"/></svg>
                  </a>
                  <a className="btn btn-primary" href="" target="_blank">Demo
                  <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><path d="M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"/></svg>
                 </a>
                </div>
              </div>
            </div>
            <div className="card lg:card-side bg-base-100 shadow-xl m-7">
              <figure><img src="https://daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.jpg" alt="Album" /></figure>
              <div className="card-body">
                <h2 className="card-title">Jobly</h2>
                <p className="text-left">A job search application that allows users to search for jobs and companies.  Built with a React Frontend and a Express Backend.</p>
                <p className="text-left"><b>Built with: </b>React, Express, Node.js, PostgreSQL, Bootstrap</p>
                <div className="card-actions justify-end">
                  <a className="btn btn-primary" href="https://github.com/celestekilgore/jobly-frontend" target="_blank">Frontend
                  <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><path d="M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"/></svg>
                  </a>
                  <a className="btn btn-primary" href="https://github.com/celestekilgore/jobly-backend" target="_blank">Backend
                  <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><path d="M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"/></svg>
                  </a>
                  <a className="btn btn-primary" href="" target="_blank">Demo
                  <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><path d="M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"/></svg>
                 </a>
                </div>
              </div>
            </div>
            <div className="card lg:card-side bg-base-100 shadow-xl m-7 mb-15">
              <figure><img src="warbler.png" alt="Album" /></figure>
              <div className="card-body">
                <h2 className="card-title">Warbler</h2>
                <p className="text-left">A twitter clone that allows users to follow/unfollow other users, like/unlike user's warbles, and view a feed of warbles.</p>
                <p className="text-left"><b>Built with: </b>Flask, Python, PostgreSQL, SQLAlchemy, Jinja, WTForms</p>
                <div className="card-actions justify-end">
                  <a className="btn btn-primary" href="https://github.com/celestekilgore/jobly-frontend" target="_blank">Frontend
                  <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><path d="M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"/></svg>
                  </a>
                  <a className="btn btn-primary" href="https://github.com/celestekilgore/jobly-backend" target="_blank">Backend
                  <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><path d="M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"/></svg>
                  </a>
                  <a className="btn btn-primary" href="" target="_blank">Demo
                  <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><path d="M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"/></svg>
                 </a>
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