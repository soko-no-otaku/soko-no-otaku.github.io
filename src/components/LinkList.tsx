import React from "react";

interface LinkItem {
  command: string;
  service: string;
  account: string;
  url: string;
}

const links: LinkItem[] = [
  {
    command: "READ",
    service: "Bookmeter",
    account: "sokobook",
    url: "https://bookmeter.com/users/980031",
  },
  {
    command: "WATCH",
    service: "Filmarks",
    account: "sokofilm",
    url: "https://filmarks.com/users/soko_no_otaku",
  },
];

const LinkList: React.FC = () => {
  return (
    <div style={{ width: "100%" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1.5rem",
          width: "100%",
          maxWidth: "400px",
          margin: "0 auto",
        }}
      >
        {links.map((link) => (
          <a
            key={link.command}
            href={link.url}
            className="pixel-btn"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              textAlign: "left",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              textDecoration: "none",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                whiteSpace: "nowrap",
              }}
            >
              <span>▶&nbsp;{link.command}</span>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-end",
                lineHeight: "1.2",
              }}
            >
              <span style={{ fontSize: "0.7rem", color: "var(--color-gray)" }}>
                @{link.account}
              </span>
              <span style={{ fontSize: "0.6rem", color: "var(--color-pink)" }}>
                &lt;{link.service}&gt;
              </span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default LinkList;
