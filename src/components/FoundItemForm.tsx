import { User, MapPin, Upload } from "lucide-react";

export default function FoundItemForm() {

  const handleSubmit = async () => {
    console.log("Button clicked");

    try {
      const response = await fetch("http://localhost:5000/report", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: "Test Name",
          location: "Test Location",
          description: "Test Description",
        }),
      });

      console.log("STATUS:", response.status);

      const text = await response.text();
      console.log("RESPONSE TEXT:", text);

      alert("Report submitted!");
    } catch (error) {
      console.error("FULL ERROR:", error);
      alert("Error sending report");
    }
  }; // ✅ THIS WAS MISSING

  return (
    <div>
      <h2 style={title}>Report a Found Item</h2>
      <hr style={{ marginBottom: "20px" }} />

      <label style={label}>
        <User size={16} /> Your Name
      </label>
      <input style={input} placeholder="Enter your full name" />

      <label style={label}>
        <MapPin size={16} /> Place Found
      </label>
      <input style={input} placeholder="e.g., Building A, Floor 3, Cafeteria" />

      <label style={label}>Item Description</label>
      <textarea style={input} placeholder="Describe the item in detail..." />

      <label style={label}>
        <Upload size={16} /> Photo of Item
      </label>
      <div style={uploadBox}>
        <Upload size={30} />
        <p>Click to upload photo</p>
        <small>PNG, JPG up to 10MB</small>
      </div>

      <button style={button} onClick={handleSubmit}>
        Submit Found Item Report
      </button>
    </div>
  );
}

const title: any = {
  marginBottom: "10px",
};

const label: any = {
  display: "flex",
  alignItems: "center",
  gap: "6px",
  marginBottom: "5px",
  fontWeight: "500",
};

const input: any = {
  width: "100%",
  padding: "12px",
  marginBottom: "15px",
  borderRadius: "10px",
  border: "1px solid #e2e8f0",
  background: "#f1f5f9",
};

const uploadBox: any = {
  border: "2px dashed #cbd5e1",
  padding: "40px",
  textAlign: "center",
  marginBottom: "20px",
  borderRadius: "12px",
  background: "#f8fafc",
  color: "#64748b",
};

const button: any = {
  width: "100%",
  padding: "14px",
  background: "#071c2f",
  color: "white",
  border: "none",
  borderRadius: "10px",
  fontSize: "16px",
  fontWeight: "bold",
  cursor: "pointer",
};