import FoundItemForm from "./components/FoundItemForm";
import logo from "./assets/logo.png";

function App() {
  return (
    <div style={styles.page}>
      
      {/* HEADER */}
      <div style={styles.header}>
        <img src={logo} style={styles.logoImg} />
        <h1 style={styles.logo}>ARETRA</h1>
      </div>

      {/* TITLE */}
      <div style={styles.titleSection}>
        <h1 style={styles.title}>Lostify</h1>
        <p style={styles.subtitle}>
          "Where lost things find its way"
        </p>
      </div>

      {/* FORM CARD */}
      <div style={styles.card}>
        <FoundItemForm />
      </div>

    </div>
  );
}

const styles: any = {
  page: {
    minHeight: "100vh",
    background: "#071c2f",
    color: "white",
    padding: "20px",
    fontFamily: "Arial",
  },
  header: {
    display: "flex",
    alignItems: "center",
    marginBottom: "30px",
  },
  logoImg: {
    width: "50px",
    height: "50px",
    borderRadius: "50%",
    marginRight: "10px",
  },
  logo: {
    color: "#00e0ff",
    fontSize: "22px",
  },
  titleSection: {
    textAlign: "center",
    marginBottom: "30px",
  },
  title: {
    fontSize: "42px",
    marginBottom: "10px",
  },
  subtitle: {
  color: "#cbd5e1",
  fontStyle: "italic",
  fontSize: "16px",
  letterSpacing: "0.5px",
},
  card: {
    background: "#f8fafc",
    color: "black",
    maxWidth: "700px",
    margin: "auto",
    padding: "30px",
    borderRadius: "16px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.3)",
  },
};

export default App;