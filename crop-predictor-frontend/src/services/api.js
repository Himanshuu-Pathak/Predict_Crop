// export async function predictCrop(features) {
//   const response = await fetch('http://localhost:5000/api/recommend', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(features)
//   });

//   if (!response.ok) {
//     throw new Error('Failed to fetch prediction');
//   }

//   const data = await response.json();
//   return data;
// }

export const predictCrop = async (inputData) => {
  try {
    const response = await fetch("http://localhost:5000/api/recommend", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(inputData),
    });

    const result = await response.json();
    if (result.error) {
      throw new Error(result.error);
    }

    return result;
  } catch (error) {
    console.error("Error predicting crop:", error.message);
    throw error;
  }
};

