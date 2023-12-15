import ThemeController from "./ThemeController";

function Nav() {
  return (
    <div className="navbar bg-primary">
      <div className="flex-1">
        <a href="#home" className="btn btn-ghost text-xl">Celeste Kilgore</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal">
          <li><a href="#about">About</a></li>
          {/* <li><a href="#skills">Skills</a></li> */}
          <li><a href="#projects">Projects</a></li>
          {/* <li><a href="#contact">Contact</a></li> */}
        </ul>
      </div>
      <ThemeController></ThemeController>
    </div>
  );
}

export default Nav;