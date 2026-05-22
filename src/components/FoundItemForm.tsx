import { useState } from "react";
import type { CSSProperties } from "react";
import { User, MapPin, Upload } from "lucide-react";

export default function FoundItemForm() {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [photo, setPhoto] = useState<File | null>(null);

  const handleSubmit = async () => {
    console.log("Button clicked");

    try {
      const formData = new FormData();

      formData.append("name", name);
      formData.append("location", location);
      formData.append("description", description);

      if (photo) {
        formData.append("photo", photo);
      }

      const response = await fetch(
        "https://lost-found-backend-d4wt.onrender.com/report",
        {
          method: "POST",
          body: formData,
        }
      );

      console.log("STATUS:", response.status);

      const text = await response.text();
      console.log("RESPONSE TEXT:", text);

      alert("Report submitted!");
    } catch (error) {
      console.error("FULL ERROR:", error);
      alert("Error sending report");
    }
  };

  return (
    <div>
      <h2 style={title}>Report a Found Item</h2>
      <hr style={{ marginBottom: "20px" }} />

      <label style={label}>
        <User size={16} /> Your Name
      </label>
      <input
        style={input}
        placeholder="Enter your full name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label style={label}>
        <MapPin size={16} /> Place Found
      </label>
      <input
        style={input}
        placeholder="e.g., Building A, Floor 3, Cafeteria"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />

      <label style={label}>Item Description</label>
      <textarea
        style={input}
        placeholder="Describe the item in detail..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <label style={label}>
        <Upload size={16} /> Photo of Item
      </label>

      <label style={uploadBox}>
        <Upload size={30} />
        <p>
          {photo ? photo.name : "Click to upload photo"}
        </p>
        <small>PNG, JPG up to 10MB</small>

        <input
          type="file"
          accept="image/*"
          style={{ display: "none" }}
          onChange={(e) => {
            if (e.target.files && e.target.files[0]) {
              setPhoto(e.target.files[0]);
            }
          }}
        />
      </label>

      <button style={button} onClick={handleSubmit}>
        Submit Found Item Report
      </button>
    </div>
  );
}

const title = {
  marginBottom: "10px",
};

const label = {
  display: "flex",
  alignItems: "center",
  gap: "6px",
  marginBottom: "5px",
  fontWeight: "500",
};

const input = {
  width: "100%",
  padding: "12px",
  marginBottom: "15px",
  borderRadius: "10px",
  border: "1px solid #e2e8f0",
  background: "#f1f5f9",
};

const uploadBox: CSSProperties = {
  border: "2px dashed #cbd5e1",
  padding: "40px",
  textAlign: "center",
  marginBottom: "20px",
  borderRadius: "12px",
  background: "#f8fafc",
  color: "#64748b",
  cursor: "pointer",
};

const button = {
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
