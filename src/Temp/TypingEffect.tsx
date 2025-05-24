import React, { useEffect, useRef } from "react";
import { Typed } from "react-typed";

type Typing = {
  children: React.ReactNode;
};

const TypingEffect: React.FC<Typing> = ({ children }) => {
  const el = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    if (el.current) {
      const typed = new Typed(el.current, {
        strings: [typeof children === "string" ? children : ""],
        typeSpeed: 50,
        backSpeed: 25,
        loop: true
      });
      return () => {
        typed.destroy();
      };
    }
  }, [children]);

  return (
    <div style={{ textAlign: "center", marginTop: "10px" }}>
      <span ref={el}>{children}</span>
    </div>
  );
};

export default TypingEffect;
