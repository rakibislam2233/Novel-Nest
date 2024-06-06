import Container from "@/utils/Container";
import Link from "next/link";

const SubNavbar = () => {
  const menuList = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "Books",
      path: "/books",
    },
    {
      title: "Writers",
      path: "/writers",
    },
    {
      title: "Publications",
      path: "/publication",
    },
    {
        title: "Islamic Book",
        path: "/islamic-book",
  
    },
    {
      title: "Pre Order",
      path: "/pre-order",
    },
    {
      title: "Blog",
      path: "/blog",
    },
    {
      title: "Contact",
      path: "/contact",
    },
  ];
  return (
    <div className="w-full bg-neutral-50 border-y shadow-sm">
      <Container>
        <ul className="flex ">
          {menuList.map((menu) => (
            <li
              key={menu.title}
              className="px-5 py-2 flex justify-center items-center border-l border-gray-300 hover:bg-pink-500 hover:text-white transition-all duration-300 cursor-pointer"
            >
              <Link href={menu.path}>{menu.title}</Link>
            </li>
          ))}
        </ul>
      </Container>
    </div>
  );
};

export default SubNavbar;
