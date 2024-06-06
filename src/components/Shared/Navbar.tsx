import { IoMdHeartEmpty } from "react-icons/io";
import { PiShoppingCartSimple } from "react-icons/pi";
import { CiUser } from "react-icons/ci";
import Link from "next/link";
import { IoSearch } from "react-icons/io5";
import Container from "@/utils/Container";
import SubNavbar from "./SubNavbar";
import Image from "next/image";
import logo from "@/assets/logo/logo.png";
const Navbar = () => {
  return (
    <nav className="w-full ">
      <Container className="w-full max-w-[1220px] mx-auto  flex justify-between items-center gap-20 px-3 py-2">
        <div>
          <Image width={50} height={50} src={logo} className="mx-auto" alt="logo" />
          <h1>NovelNest</h1>
        </div>
        <form className="w-full flex justify-between items-center">
          <input
            className="w-full px-2 bg-white py-[9px] rounded-l-lg outline-none border-l border-y "
            type="text"
            name="search"
            id="search"
            placeholder="Search your book"
          />
          <button className="bg-pink-500 px-4 py-3 border-2 border-pink-500 rounded-r-xl">
            <IoSearch className="text-white" />
          </button>
        </form>
        <div className="flex items-center gap-4">
          <Link href={"/login"}>
            <IoMdHeartEmpty className="w-7 h-7" />
          </Link>
          <Link href={"/login"}>
            <PiShoppingCartSimple className="w-7 h-7 " />
          </Link>
          <Link href={"/login"}>
            <CiUser className="w-7 h-7" />
          </Link>
        </div>
      </Container>
      <SubNavbar />
    </nav>
  );
};

export default Navbar;
