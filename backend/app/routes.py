from flask import Flask, jsonify, render_template, request, redirect, url_for
from flask_cors import CORS
import json
import os

app = Flask(__name__)
CORS(app)

DATA_PATH = '../data/countries.json'

# Load country data from JSON file
def load_countries():
    with open(DATA_PATH, 'r', encoding='utf-8') as f:
        return json.load(f)

# Save country data to JSON file
def save_countries(data):
    with open(DATA_PATH, 'w', encoding='utf-8') as f:
        json.dump(data, f, indent=2)

countries = load_countries()

@app.route('/')
@app.route("/home")
def home():
    sort_method = request.args.get('sort', default='popular')
    filter_type = request.args.get('type', default='all')

    # Filter by type
    if filter_type.lower() in ['country', 'city']:
        filtered = [c for c in countries if c.get('type', 'country').lower() == filter_type.lower()]
    else:
        filtered = countries[:]

    # Sort by requested method
    if sort_method == 'az':
        filtered.sort(key=lambda x: x.get('name', '').lower())
    elif sort_method == 'za':
        filtered.sort(key=lambda x: x.get('name', '').lower(), reverse=True)
    elif sort_method == 'popular':
        filtered.sort(key=lambda x: x.get('times_visited', 0), reverse=True)

    return jsonify(filtered)

@app.route('/country/<country_code>')
def country_page(country_code):
    global countries
    found = False

    for country in countries:
        if country["code"].lower() == country_code.lower():
            # for sorting functionality
            country["times_visited"] = country.get("times_visited", 0) + 1
            save_countries(countries)
            found = True
            return jsonify(country)

    if not found:
        return jsonify({"error": "Country not found"}), 404


@app.route('/map')
def map_page():
    return render_template('map.html', countries=countries)

if __name__ == '__main__':
    app.run(debug=True, host="0.0.0.0", port=5000)
    