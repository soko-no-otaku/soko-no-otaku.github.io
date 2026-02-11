import React from "react";

const Profile: React.FC = () => {
  return (
    <div style={{ marginBottom: "2rem" }}>
      <div
        style={{
          border: "4px solid var(--color-white)",
          padding: "1.5rem",
          marginBottom: "2rem",
          display: "flex",
          flexDirection: "column",
          gap: "1.5rem",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            borderBottom: "2px dashed var(--color-gray)",
            paddingBottom: "1rem",
          }}
        >
          <span>
            NAME: <span className="pixel-text-pink">soko-no-otaku</span>
          </span>
        </div>

        <div style={{ display: "flex", gap: "2rem", alignItems: "center" }}>
          <div
            style={{
              width: "80px",
              height: "80px",
              background: "var(--color-pink)",
              border: "2px solid var(--color-white)",
              display: "grid",
              placeItems: "center",
              flexShrink: 0,
            }}
          >
            <span style={{ fontSize: "2rem", color: "black" }}>👾</span>
          </div>

          <div style={{ flex: 1, fontSize: "0.8rem", lineHeight: "2" }}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <span>LV:</span>
              <span>30</span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <span>JOB:</span>
              <span>WEB ENGINEER</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
