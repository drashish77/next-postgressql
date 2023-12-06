import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <nav>
      layout of quiz
      {children}
    </nav>
  );
};

export default layout;
