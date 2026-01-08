import React from 'react';
import CropForm from './components/CropForm';
import './App.css';

function App() {
  return (
    

    <div className="min-h-screen bg-green-50 flex flex-col items-center justify-center p-4">
      <h1 className="text-3xl font-bold text-green-700 mb-6">Crop Predictor</h1>
      <CropForm />
    </div>
  );
}

export default App;
