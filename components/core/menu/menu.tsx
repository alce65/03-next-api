import menu from "./menu.module.css";
import Link from "next/link";
import { menuItemsI } from "../layout/layout";

export function Menu({ menuItems }: { menuItems: Array<menuItemsI> }) {
  return (
    <nav>
      <ul className={menu.ul}>
        {menuItems.map((item) => (
          <li key={item.label} className={menu.li}>
            <Link href={item.path}>
              <a>{item.label}</a>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
