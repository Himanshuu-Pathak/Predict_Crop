
export const predictCrop = async (inputData) => {
  try {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/api/recommend`, {

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

