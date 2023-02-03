import React from "react";
import { useStoreState } from "easy-peasy";

const Footer = () => {
  const today = new Date();
  const postCount = useStoreState((state) => state.postCount);
  return (
    <footer className="Footer">
      <p>
        Copyright &copy; {today.getFullYear()} &nbsp;&nbsp; &nbsp;&nbsp;{" "}
        <b>{postCount} Blog Posts</b>
      </p>
    </footer>
  );
};

export default Footer;
