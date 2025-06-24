import requests
import json

# RESTCountries API data

API_URL = "https://restcountries.com/v3.1/all"

def fetch_countries():
    response = requests.get(API_URL)
    response.raise_for_status()
    data = response.json()

    countries = []

    for country in data:
        try:
            name = country["name"]["common"]
            code = country["cca2"]
            language_list = list(country.get("languages", {}).values())
            languages = ", ".join(language_list)
            temp = "Unknown"  # REST Countries API doesn't have temp data
            currency = ", ".join([v["name"] for v in country.get("currencies", {}).values()])
            capital = ", ".join(country.get("capital", []))
            region = country.get("region", "Unknown")
            image_url = f"https://flagcdn.com/w320/{code.lower()}.png"  # flag image
            times_visited = 0

            # Create simplified structure
            countries.append({
                "name": name,
                "code": code,
                "language": languages,
                "avg_temp": temp,
                "currency": currency,
                "capital": capital,
                "region": region,
                "passport_friendly": True,
                "budget": "$$",
                "food": [],
                "safety": {
                    "safe_areas": [],
                    "unsafe_areas": []
                },
                "tourist_attractions": [],
                "transport_friendly": True,
                "image_url": image_url,
                "times_visited": times_visited
            })
        except Exception as e:
            print(f"Error processing {country.get('name', {}).get('common', 'unknown')}: {e}")
            continue

    return countries

def save_to_file(countries, filename="countries.json"):
    with open(filename, "w", encoding="utf-8") as f:
        json.dump(countries, f, indent=2, ensure_ascii=False)

if __name__ == "__main__":
    countries_data = fetch_countries()
    save_to_file(countries_data)
    print(f"Saved {len(countries_data)} countries to countries.json")
