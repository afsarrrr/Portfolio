import { FaInstagram, FaLinkedin, FaXTwitter } from "react-icons/fa6";

const SocialLinks = () => {
  return (
    <div className="flex gap-6">
      
      <a
        href="https://www.instagram.com/afsarrrr22/"
        target="_blank"
        rel="noreferrer"
        className="text-pink-500 text-3xl hover:scale-125 transition"
      >
        <FaInstagram />
      </a>

      <a
        href="https://www.linkedin.com/in/afsarrrr/"
        target="_blank"
        rel="noreferrer"
        className="text-blue-600 text-3xl hover:scale-125 transition"
      >
        <FaLinkedin />
      </a>

      <a
        href="https://x.com/iamafsarahmed"
        target="_blank"
        rel="noreferrer"
        className="text-black text-3xl hover:scale-125 transition"
      >
        <FaXTwitter />
      </a>

    </div>
  );
};

export default SocialLinks;
