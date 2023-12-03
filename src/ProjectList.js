import Card from './Card';

function ProjectList() {
  return (
    <div class="hero min-h-screen bg-base-200">
      <div class="hero-content text-center">
      <div class="max-w-sm sm:max-w-md md:max-w-lg lg:max-w-4xl xl:max-w-4xl">

        <h1 class="text-5xl font-bold p-4">Projects</h1>

        <div class="carousel carousel-center max-w-full p-4 space-x-4 bg-neutral rounded-box">
          <div class="carousel-item">
            <Card></Card>
          </div>
          <div class="carousel-item">
            <Card></Card>
          </div>
          <div class="carousel-item">
            <Card></Card>
          </div>
        </div>
      </div>
      </div>
    </div>


  );
}

export default ProjectList;