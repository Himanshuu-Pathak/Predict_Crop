import React, { useState } from 'react';
import { predictCrop } from '../services/api';

function CropForm() {
  const [formData, setFormData] = useState({
    nitrogen: '',
    phosphorus: '',
    potassium: '',
    temperature: '',
    humidity: '',
    ph: '',
    rainfall: ''
  });

  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);

  const formattedData = {
    N: Number(formData.nitrogen),
    P: Number(formData.phosphorus),
    K: Number(formData.potassium),
    temperature: Number(formData.temperature),
    humidity: Number(formData.humidity),
    ph: Number(formData.ph),
    rainfall: Number(formData.rainfall)
  };

  try {
    const prediction = await predictCrop(formattedData);
    setResult(prediction.recommended_crop); // see next fix
  } catch (err) {
    console.error(err);
    setResult('Error predicting crop');
  } finally {
    setLoading(false);
  }
};


  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-full max-w-md">
      {Object.keys(formData).map((key) => (
        <div key={key} className="mb-4">
          <label className="block text-gray-700 mb-1 capitalize">{key}</label>
          {key === 'ph' ? (
      <input
        type="number"
        name={key}
        value={formData[key]}
        onChange={handleChange}
        min="1"
        max="14"
        step="0.1"
        className="border rounded px-3 py-2 w-full"
        required
      />
    ) : (
      <input
        type="number"
        name={key}
        value={formData[key]}
        onChange={handleChange}
        className="border rounded px-3 py-2 w-full"
        required
      />
    )}
        </div>
      ))}
      <button
        type="submit"
        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 w-full"
      >
        {loading ? 'Predicting...' : 'Predict Crop'}
      </button>

      {result && (
        <div className="mt-6 text-xl text-green-800 font-semibold text-center">
          🌱 Predicted Crop: {result}
        </div>
      )}
    </form>
  );
}

export default CropForm;
