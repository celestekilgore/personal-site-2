function Skills() {
  return (

    <div id="skills" class="hero min-h-screen bg-base-200">
      <div class="hero-content text-center">
        <div class="max-w-md">
          <h1 class="text-5xl font-bold mb-8">Skills</h1>

          <div class="flex text-left">

            <div class="card max-w bg-primary text-primary-content mr-3">
              <div class="card-body">
                <h2 class="card-title">Frontend</h2>
                <ul class="list-disc text-left">
                  <li>React</li>
                  <li>JavaScript</li>
                  <li>Jquery</li>
                  <li>HTML</li>
                  <li>CSS</li>
                </ul>
              </div>
            </div>
            <div class="card bg-primary text-primary-content ml-3">
              <div class="card-body">
                <h2 class="card-title">Backend</h2>
                <ul class="list-disc text-left">
                  <li>Flask</li>
                  <li>Node.js</li>
                  <li>Express</li>
                  <li>Django</li>
                  <li>SQL</li>
                  <li>SQLAlchemy</li>
                  <li>PostgreSQL</li>
                </ul>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}
export default Skills;