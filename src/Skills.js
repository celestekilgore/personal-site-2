function Skills() {
  return (

    <div id="skills" class="hero min-h-screen bg-base-200">
      <div class="hero-content text-center">
        <div class="max-w-md">
          <h1 class="text-5xl font-bold mb-8">Skills</h1>

          <div class="card w-96 bg-primary shadow-xl">
             <div class="card-body">
              <h2 class="card-title">Frontend</h2>
              <ul>
                <li>React</li>
                <li>Javascript</li>
                <li>jQuery</li>
                <li>Bootstrap</li>
              </ul>
            </div>
          </div>

          <div class="divider"></div>

          <div class="card w-96 bg-primary shadow-xl">
             <div class="card-body">
              <h2 class="card-title">Backend</h2>
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