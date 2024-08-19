import Section from "./Section";
import { socials } from "../constants";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <Section id={"footer"} crosses customPaddings={"px-10 py-10"}>
      <footer className="container relative flex flex-col sm:flex-row items-center justify-center sm:justify-between gap-8">
        <div>
          <p className="caption text-n-4">
            &copy; {new Date().getFullYear()}. All rights reserved.
          </p>
        </div>
        <div className="flex flex-row items-center gap-5">
          {socials.map((social) => (
            <Link
              key={social.id}
              to={social.url}
              className="p-3 bg-n-7 hover:bg-n-6 transition-all duration-300 rounded-full"
            >
              <img src={social.iconUrl} alt={social.title} width={15} />
            </Link>
          ))}
        </div>
      </footer>
    </Section>
  );
}

export default Footer;
