import { BrowserRouter, Link } from "react-router-dom";
import { links } from "./root.helper";

function Nav() {

    return (
        <div className="h-16 flex items-center justify-between px-6 bg-primary text-white">
            <BrowserRouter>
                <div className="flex items-center justify-between">
                    {links.map((link) => {
                        return (
                            <Link className="p-6" to={link.href}>
                                {link.name}
                            </Link>
                        );
                    })}
                </div>
            </BrowserRouter>
        </div>
    );
}
export default Nav;