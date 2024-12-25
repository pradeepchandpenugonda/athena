"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import car from "@/assets/car.png";
const CarForm: React.FC = () => {
  const [progress, setProgress] = useState(0); // Track progress (0 to 1)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });
  console.log(progress, 'progressprogress');

  const fields = Object.keys(formData);
  const totalFields = fields.length;

  // Handle input change and update progress
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, field: string) => {
    const value = e.target.value;
    setFormData((prev) => ({ ...prev, [field]: value }));

    // Calculate progress based on filled fields
    const filledFields = Object.values({ ...formData, [field]: value }).filter(
      (v) => v.trim() !== ""
    ).length;

    setProgress(filledFields / totalFields);
  };

  return (

    <div className="form-container">
      <div className="form">
        {fields.map((field, index) => (
          <div key={index} className="form-field">
            <label>{field.charAt(0).toUpperCase() + field.slice(1)}</label>
            <input
              type="text"
              value={formData[field as keyof typeof formData]}
              onChange={(e) => handleChange(e, field)}
              className="input"
            />
          </div>
        ))}
      </div>

      {/* Car Animation */}
      <div className="car-animation">
        <motion.div
          className="car"
          style={{
            background: `url(${car.src}) no-repeat center`,  // Use the imported image
            backgroundSize: 'contain',
            width: 200,
            height: 120,
          }}
          animate={{
            x: `${progress * 250}%`, // Moves based on progress (0% to 100%)
          }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        />
      </div>

      {/* Styles */}
      <style jsx>{`
        .form-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin: 20px;
        }

        .form {
          width: 100%;
          max-width: 400px;
          margin-bottom: 30px;
        }

        .form-field {
          margin-bottom: 20px;
        }

        label {
          display: block;
          font-size: 14px;
          font-weight: bold;
          margin-bottom: 5px;
        }

        .input {
          width: 100%;
          padding: 8px;
          font-size: 14px;
          border: 1px solid #ccc;
          border-radius: 4px;
        }

        .car-animation {
          width: 100%;
          height: 100px;
          position: relative;
          background: #f0f0f0;
          overflow: hidden;
        }

        .car {
          position: absolute;
          top: 25%;
          left: 0;
        }
      `}</style>
    </div>
  );
};

export default CarForm;
