import { useEffect, useRef } from "react";

const Eye = () => {
  const eyeRef = useRef(null);

  useEffect(() => {
    const moveEye = (e) => {
      const eye = eyeRef.current;
      const rect = eye.getBoundingClientRect();

      const eyeX = rect.left + rect.width / 2;
      const eyeY = rect.top + rect.height / 2;

      const angle = Math.atan2(e.clientY - eyeY, e.clientX - eyeX);

      const pupil = eye.querySelector(".pupil");
      const radius = 8;

      pupil.style.transform = `
        translate(
          ${Math.cos(angle) * radius}px,
          ${Math.sin(angle) * radius}px
        )
      `;
    };

    window.addEventListener("mousemove", moveEye);

    return () => window.removeEventListener("mousemove", moveEye);
  }, []);

  return (
    <div
      ref={eyeRef}
      className="w-20 h-20 bg-black rounded-full flex items-center justify-center shadow-lg"
    >
      <div className="pupil w-6 h-6 bg-white rounded-full"></div>
    </div>
  );
};

export default Eye;
