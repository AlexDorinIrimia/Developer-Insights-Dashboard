from flask import Flask, request, jsonify
from flask_cors import CORS
import pandas as pd
from analysis import analyze_data

app = Flask(__name__)
CORS(app)

df = pd.read_csv("survey_results_public.csv", dtype=str)

@app.route("/analyze", methods=["GET"])
def analyze():
    try:
        country = request.args.get("country")
        experience = request.args.get("experience")

        result = analyze_data(df, country, experience)
        return jsonify(result)
    except Exception as e:
        return jsonify({"message": str(e)}), 500

if __name__ == "__main__":
    app.run(debug=True)
