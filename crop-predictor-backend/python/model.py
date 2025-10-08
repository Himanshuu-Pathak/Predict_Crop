import sys
import joblib
import pandas as pd
import json
import os
from collections import Counter

model_files = {
    "Crop Model": "crop_model.pkl",
    "SVM": "SVM.pkl",
    "Naive Bayes": "NaiveBayes.pkl"
    # "standscaler": "standscaler.pkl"
}

# Load model

# MODEL_PATH = os.path.join(os.path.dirname(__file__), "crop_model.pkl") 
# model = joblib.load(MODEL_PATH)
model = {}
for name, filename in model_files.items():
    path = os.path.join(os.path.dirname(__file__), filename)
    model[name] = joblib.load(path)

# Read JSON from stdin
data = json.loads(sys.stdin.read())

# Define expected columns
expected_columns = ['N', 'P', 'K', 'temperature', 'humidity', 'ph', 'rainfall']

# Build DataFrame with correct structure


input_df = pd.DataFrame([[data[col] for col in expected_columns]], columns=expected_columns)

# Predict
#prediction = model.predict(input_df)

prediction = {}
for name, clf in model.items():
    prediction[name] = clf.predict(input_df)[0]


final_crop = Counter(prediction.values()).most_common(1)[0][0]

# Output result
#print(prediction[0])
print(json.dumps({"Predicted Crop": final_crop}))
