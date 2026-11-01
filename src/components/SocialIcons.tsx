import { FaGithub, FaLinkedinIn, FaCode } from "react-icons/fa6";
import "./styles/SocialIcons.css";
import { TbNotes } from "react-icons/tb";
import { useEffect } from "react";
import HoverLinks from "./HoverLinks";
import { config } from "../config";

const SocialIcons = () => {
  const socialLinks = [
    { url: config.contact.github, icon: <FaGithub />, label: "GitHub" },
    ...(config.contact.linkedin
      ? [{ url: config.contact.linkedin, icon: <FaLinkedinIn />, label: "LinkedIn" }]
      : []),
    ...(config.contact.leetcode
      ? [{ url: config.contact.leetcode, icon: <FaCode />, label: "LeetCode" }]
      : []),
  ];

  useEffect(() => {
    const social = document.getElementById("social") as HTMLElement;

    social.querySelectorAll("span").forEach((item) => {
      const elem = item as HTMLElement;
      const link = elem.querySelector("a") as HTMLElement;

      const rect = elem.getBoundingClientRect();
      let mouseX = rect.width / 2;
      let mouseY = rect.height / 2;
      let currentX = 0;
      let currentY = 0;

      const updatePosition = () => {
        currentX += (mouseX - currentX) * 0.1;
        currentY += (mouseY - currentY) * 0.1;

        link.style.setProperty("--siLeft", `${currentX}px`);
        link.style.setProperty("--siTop", `${currentY}px`);

        requestAnimationFrame(updatePosition);
      };

      const onMouseMove = (e: MouseEvent) => {
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        if (x < 40 && x > 10 && y < 40 && y > 5) {
          mouseX = x;
          mouseY = y;
        } else {
          mouseX = rect.width / 2;
          mouseY = rect.height / 2;
        }
      };

      document.addEventListener("mousemove", onMouseMove);

      updatePosition();

      return () => {
        elem.removeEventListener("mousemove", onMouseMove);
      };
    });
  }, []);

  return (
    <div className="icons-section">
      <div className="social-icons" data-cursor="icons" id="social">
        {socialLinks.map(({ url, icon, label }) => (
          <span key={label}>
            <a href={url} target="_blank" rel="noopener noreferrer" aria-label={label}>
              {icon}
            </a>
          </span>
        ))}
      </div>
      {config.contact.resume ? (
        <a
          className="resume-button"
          href={config.contact.resume}
          target="_blank"
          rel="noopener noreferrer"
          data-cursor="disable"
        >
          <HoverLinks text="RESUME" />
          <span>
            <TbNotes />
          </span>
        </a>
      ) : (
        <span
          className="resume-button resume-button-disabled"
          aria-label="Resume coming soon"
          title="Add your resume PDF to enable this link"
        >
          <HoverLinks text="RESUME" />
          <span>
            <TbNotes />
          </span>
        </span>
      )}
    </div>
  );
};

export default SocialIcons;
