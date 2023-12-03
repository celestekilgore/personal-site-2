import ThemeController from "./ThemeController";

function Nav() {
  return (
    <div class="navbar bg-primary">
      <div class="flex-1">
        <a class="btn btn-ghost text-xl">Celeste Kilgore</a>
      </div>
      <div class="flex-none">
        <ul class="menu menu-horizontal">
          <li><a>About</a></li>
          <li><a>Projects</a></li>
          <li><a>Contact</a></li>
        </ul>
      </div>
      <ThemeController></ThemeController>
    </div>
  );
}

export default Nav;