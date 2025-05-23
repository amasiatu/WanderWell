from flask import Flask, jsonify, render_template, request, redirect, url_for
import json
import os

app = Flask(__name__)

# Load country data from JSON file
with open('data/countries.json') as f:
    countries = json.load(f)
    