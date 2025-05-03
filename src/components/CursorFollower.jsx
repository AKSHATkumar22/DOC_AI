import React, { useEffect, useRef } from "react";

const CursorFollower = () => {
  const dotRef = useRef(null);

  useEffect(() => {
    const moveDot = (e) => {
      if (dotRef.current) {
        dotRef.current.style.left = `${e.clientX}px`;
        dotRef.current.style.top = `${e.clientY}px`;
      }
    };

    document.addEventListener("mousemove", moveDot);
    return () => document.removeEventListener("mousemove", moveDot);
  }, []);

  return (
    <div
      ref={dotRef}
      className="fixed z-[9999] w-2 h-2 bg-primary rounded-full pointer-events-none transition-transform duration-75 ease-linear"
      style={{ transform: "translate(-50%, -50%)" }}
    />
  );
};

export default CursorFollower;
