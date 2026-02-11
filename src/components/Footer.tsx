import React from "react";

const Footer: React.FC = () => {
  return (
    <footer style={{ marginTop: "4rem", textAlign: "center" }}>
      <p
        style={{
          marginBottom: "1.5rem",
          fontSize: "0.8rem",
          color: "var(--color-white)",
        }}
      >
        SELECT A COMMAND
        <br />
        TO VIEW MY OBSESSIONS.
      </p>
      <p style={{ fontSize: "0.6rem", color: "var(--color-gray)" }}>
        &copy; 2026 soko-no-otaku
      </p>
    </footer>
  );
};

export default Footer;
