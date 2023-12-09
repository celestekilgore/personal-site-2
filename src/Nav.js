import ThemeController from "./ThemeController";

function Nav() {
  return (
    <div class="navbar bg-primary">
      <div class="flex-1">
        <a href="#home" class="btn btn-ghost text-xl">Celeste Kilgore</a>
      </div>
      <div class="flex-none">
        <ul class="menu menu-horizontal">
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
      <ThemeController></ThemeController>
    </div>
  );
}

export default Nav;