"use client";
import { Menu } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import Link from "next/link";
import { CgMenuLeftAlt } from "react-icons/cg";
import { TbLayoutGridAdd } from "react-icons/tb";

type MenuItem = {
  label: string;
  href: string;
};

export default function DropDownMenu({ menus }: { menus: MenuItem[] }) {
  const matches = useMediaQuery("(max-width: 64rem)");
  return (
    <div>
      {matches ? (
        <Menu>
          <Menu.Target>
            <CgMenuLeftAlt size={25} />
          </Menu.Target>
          <Menu.Dropdown>
            {menus.map((menu: MenuItem) => (
              <Menu.Item
                key={menu.label}
                leftSection={<TbLayoutGridAdd size={14} />}
              >
                <Link href={menu.href}>
                  <span>{menu.label}</span>
                </Link>
              </Menu.Item>
            ))}
          </Menu.Dropdown>
        </Menu>
      ) : (
        ""
      )}
    </div>
  );
}
