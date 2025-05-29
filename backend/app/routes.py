from flask import Flask, jsonify, render_template, request, redirect, url_for
from flask_cors import CORS
import json
import os

app = Flask(__name__)
CORS(app)

# Load country data from JSON file
# with open('data/countries.json') as f:
#     countries = json.load(f)
@app.route('/')
@app.route("/home")
def home():
    return {
        'Name':"Asha", 
        "Age":"20",
        "Date":'5/28/25', 
        "Major":"History",
        "Travel Habits": "Often, 2-3 times a year"
        }

if __name__ == '__main__':
    app.run(debug=True, host="0.0.0.0")
    