import { AiFillGithub } from "react-icons/ai";

const Header = () => {
  return (
    <div>
      <div className="logo border-b bg-primaryLight z-50 border-primaryLight  fixed top-0 left-0 right-0 px-4 py-2  flex items-center justify-between gap-2">
        <div className="logo flex gap-2 items-center">
          <img className="w-16" src="../../assets/logo.png" alt="" />
          <span className="text-xl font-black">EZQR</span>
        </div>
        <a
          href="https://github.com/asherayub"
          target="_blank"
          rel="noreferrer"
          className="text-3xl  inline-block"
        >
          <AiFillGithub />
        </a>
      </div>
    </div>
  );
};

export default Header;
