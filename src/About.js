function About() {
  return (
    <div id="about" className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold pb-3">About Me</h1>
          <p className="py-3">
          Hi! My name is Celeste and I am a recent University of Michigan
          graduate ready to kickstart my career. I majored in cognitive science
          with a specialized focus on decision-making processes, and I minored
          in quantitative methods in the social sciences.
          </p>
          <p className="py-3">
          Late in my college career, I took a Python course
          that ignited a passion for coding. I loved the puzzle-like nature of the
          problems we faced, and how coding allows you to be both creative and
          technical at the same time. Consequently, after graduating I proceeded
          to complete a software engineering bootcamp to further pursue my
          technical interests, from which I recently graduated.
          </p>
          <p className="py-3">
          Since graduation, I have been searching for a role in which I can
          leverage my varied experiences with cognitive science, data analysis,
          and software development.
          </p>
          {/* <p className="mb-4">I have a background in Cognitive Science, specifically focused on decision-making. I now leverage this interdisciplinary background to improve accessibility and optimize UX.</p> */}
          <a className="btn btn-primary mt-3" href="resume.pdf" target="_blank">Download Resume</a>
        </div>
      </div>
    </div>

  );
}

export default About;