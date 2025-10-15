import Logo from "@/components/ui/Logo";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="container py-6 backdrop-blur-3xl border mt-3 overflow-hidden">
      <div className="flex items-center justify-between">
        <Logo />
        <ul className="hidden sm:flex items-center justify-center gap-x-10">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Skills</a>
          </li>
          <li>
            <a href="#">Projects</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
        <div className="sm:hidden" onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </div>
      </div>
    </nav>
  );
};

export default Header;
