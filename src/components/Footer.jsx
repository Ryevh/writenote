import { AiOutlineCopyrightCircle } from "react-icons/ai";

export const Footer = () => {
  return (
    <footer>
      <p>
        <AiOutlineCopyrightCircle /> {new Date().getFullYear()}
        <span>All rights Reserved</span>
      </p>
    </footer>
  );
};
