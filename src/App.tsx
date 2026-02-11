import Footer from "./components/Footer";

function App() {
  return (
    <div
      className="container"
      style={{
        padding: "2rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        boxSizing: "border-box",
      }}
    >
      <main className="pixel-box">
        <Footer />
      </main>
    </div>
  );
}

export default App;
