function Skills() {
  return (

    <div id="skills" className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold mb-8">Skills</h1>

          <div className="card w-96 bg-primary shadow-xl">
             <div className="card-body">
              <h2 className="card-title">Frontend</h2>
              <ul>
                <li>React</li>
                <li>Javascript</li>
                <li>jQuery</li>
                <li>Bootstrap</li>
              </ul>
            </div>
          </div>

          <div className="divider"></div>

          <div className="card w-96 bg-primary shadow-xl">
             <div className="card-body">
              <h2 className="card-title">Backend</h2>
              <ul>
                <li>Flask</li>
                <li>Node.js</li>
                <li>SQLAlchemy</li>
                <li>Express</li>
                <li>Postgresql</li>
              </ul>
            </div>
          </div>



        </div>

      </div>
    </div>

  );
}
export default Skills;