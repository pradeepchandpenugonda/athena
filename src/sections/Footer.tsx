import logo from "@/assets/logosaas.png";
import Image from "next/image";
import Social from "@/assets/social-x.svg";
import Socialinst from "@/assets/social-insta.svg";
import Sociallink from "@/assets/social-linkedin.svg";
import Socialpin from "@/assets/social-pin.svg";
import Socialyoutube from "@/assets/social-youtube.svg";

export const Footer = () => {
  return (
    <footer className="bg-black text-[#BCBCBC] text-sm py-10 text-center">
      <div className="container">
        <div className="inline-flex relative before:content-[''] before:top-2 before:bottom-0 before:w-full  before:blur before:bg-[linear-gradient(to_right, #F87BFF, #FB92CF, #FFDD9B, #C2F0B1, #2FDBFE)] before:absolute  ">
          <Image src={logo} alt="logo" className="relative" />
        </div>
        <nav className="flex flex-col md:flex-row md:justify-center gap-6 mt-6 ">
          <a href="#">About</a>
          <a href="#">Features</a>
          <a href="#">Customers</a>
          <a href="#">updates</a>
          <a href="#">Help</a>
        </nav>
        <div className="flex justify-center gap-6 mt-6">
          <Social />
          <Socialinst />
          <Sociallink />
          <Socialpin />
          <Socialyoutube />
        </div>
        <p className="mt-6">&copy: 2025 your company, Inc.All rights reserved.</p>
      </div>
    </footer>
  );
};