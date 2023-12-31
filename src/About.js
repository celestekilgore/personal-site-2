function About() {
  return (
    <div id="about" className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold pb-3">About Me</h1>
          <p className="py-3">I am a detail-oriented, thoughtful, and organized software engineer with a passion for developing user-friendly, intuitive web applications.</p>
          <p className="py-3"> I have a background in Cognitive Science, specifically focused on decision-making. I now leverage this interdisciplinary background to make thoughtful design decisions and optimize UX.</p>
          {/* <p className="mb-4">I have a background in Cognitive Science, specifically focused on decision-making. I now leverage this interdisciplinary background to improve accessibility and optimize UX.</p> */}
          <a className="btn btn-primary mt-3" href="resume.pdf" target="_blank">Download CV</a>
        </div>
      </div>
    </div>

  );
}

export default About;