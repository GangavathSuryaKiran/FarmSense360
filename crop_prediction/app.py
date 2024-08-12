from flask import Flask, render_template, jsonify
from flask_cors import CORS, cross_origin
import numpy as np
import pandas as pd
from datetime import datetime
import random
from sklearn.tree import DecisionTreeRegressor
from crops import crop  # Import the crop function from crops.py

app = Flask(__name__)
app.config['CORS_HEADERS'] = 'Content-Type'

# Set up CORS. Allow all origins for now.
cors = CORS(app, resources={r"/ticker/*": {"origins": "*"}, r"/flask-endpoint": {"origins": "http://localhost:3000"}})
# Define the commodity dictionary and other constants
commodity_dict = {
    "Arhar": "static/Arhar.csv",
    "Bajra": "static/Bajra.csv",
    "Barley": "static/Barley.csv",
    "Copra": "static/Copra.csv",
    "Cotton": "static/Cotton.csv",
    "Sesamum": "static/Sesamum.csv",
    "Gram": "static/Gram.csv",
    "Groundnut": "static/Groundnut.csv",
    "Jowar": "static/Jowar.csv",
    "Maize": "static/Maize.csv",
    "Masoor": "static/Masoor.csv",
    "Moong": "static/Moong.csv",
    "Niger": "static/Niger.csv",
    "Paddy": "static/Paddy.csv",
    "Ragi": "static/Ragi.csv",
    "Rape": "static/Rape.csv",
    "Jute": "static/Jute.csv",
    "Safflower": "static/Safflower.csv",
    "Soyabean": "static/Soyabean.csv",
    "Sugarcane": "static/Sugarcane.csv",
    "Sunflower": "static/Sunflower.csv",
    "Urad": "static/Urad.csv",
    "Wheat": "static/Wheat.csv"
}

annual_rainfall = [29, 21, 37.5, 30.7, 52.6, 150, 299, 251.7, 179.2, 70.5, 39.8, 10.9]

# Base prices for each crop
base = {
    "Paddy": 1245.5,
    "Arhar": 3200,
    "Bajra": 1175,
    "Barley": 980,
    "Copra": 5100,
    "Cotton": 3600,
    "Sesamum": 4200,
    "Gram": 2800,
    "Groundnut": 3700,
    "Jowar": 1520,
    "Maize": 1175,
    "Masoor": 2800,
    "Moong": 3500,
    "Niger": 3500,
    "Ragi": 1500,
    "Rape": 2500,
    "Jute": 1675,
    "Safflower": 2500,
    "Soyabean": 2200,
    "Sugarcane": 2250,
    "Sunflower": 3700,
    "Urad": 4300,
    "Wheat": 1350
}

commodity_list = []
crops_predictor_list = {}


class Commodity:
    def __init__(self, csv_name):
        self.name = csv_name
        dataset = pd.read_csv(csv_name)
        self.X = dataset.iloc[:, :-1].values
        self.Y = dataset.iloc[:, 3].values
        depth = random.randint(7, 17)  # Random depth for decision tree
        self.regressor = DecisionTreeRegressor(max_depth=depth)
        self.regressor.fit(self.X, self.Y)

    def getPredictedValue(self, value):
        if value[1] >= 2019:
            fsa = np.array(value).reshape(1, 3)
            return self.regressor.predict(fsa)[0]
        else:
            # Find the nearest historical value
            c = self.X[:, 0:2]
            x = []
            for i in c:
                x.append(i.tolist())
            fsa = [value[0], value[1]]
            ind = 0
            for i in range(0, len(x)):
                if x[i] == fsa:
                    ind = i
                    break
            return self.Y[ind]

    def getCropName(self):
        return self.name.split('/')[-1].split('.')[0]


@app.route('/flask-endpoint', methods=['GET'])
@cross_origin(origin='localhost', headers=['Content-Type', 'Authorization'])
def flask_endpoint():
    # Implement your logic here
    return jsonify({'message': 'Hello from Flask endpoint!'})


@app.route('/')
@cross_origin(origin='localhost', headers=['Content- Type', 'Authorization'])
def index():
    context = {
        "top5": TopFiveWinners(),
        "bottom5": TopFiveLosers(),
        "sixmonths": SixMonthsForecast()
    }
    return render_template('index.html', context=context)


@app.route('/commodity/<name>')
def crop_profile(name):
    name = name.capitalize()  # Ensure the crop name has the correct case
    if name not in crops_predictor_list:
        return "Crop not found", 404
    
    max_crop, min_crop, forecast_crop_values = TwelveMonthsForecast(name)
    prev_crop_values = TwelveMonthPrevious(name)
    forecast_x = [item[0] for item in forecast_crop_values]
    forecast_y = [item[1] for item in forecast_crop_values]
    current_price = CurrentMonth(name)
    crop_data = crop(name.lower())  # Use crop function from crops.py

    # Print forecast values to console
    print(f"Forecast Crop Values for {name}: {forecast_crop_values}")

    context = {
        "name": name,
        "max_crop": max_crop,
        "min_crop": min_crop,
        "forecast_values": forecast_crop_values,
        "forecast_x": forecast_x,
        "forecast_y": forecast_y,
        "previous_values": prev_crop_values,
        "current_price": current_price,
        "image_url": crop_data[0],
        "prime_loc": crop_data[1],
        "type_c": crop_data[2],
        "export": crop_data[3]
    }
    return render_template('commodity.html', context=context)


@app.route('/ticker/<item>/<number>')
@cross_origin(origin='localhost', headers=['Content- Type', 'Authorization'])
def ticker(item, number):
    n = int(number)
    i = int(item)
    data = SixMonthsForecast()
    context = str(data[n][i])
    if i == 2 or i == 5:
        context = '₹' + context
    elif i == 3 or i == 6:
        context = context + '%'
    return context


def TopFiveWinners():
    current_month = datetime.now().month
    current_year = datetime.now().year
    current_rainfall = annual_rainfall[current_month - 1]
    prev_month = current_month - 1
    prev_rainfall = annual_rainfall[prev_month - 1]
    current_month_prediction = []
    prev_month_prediction = []
    change = []

    for i in commodity_list:
        current_predict = i.getPredictedValue([float(current_month), current_year, current_rainfall])
        current_month_prediction.append(current_predict)
        prev_predict = i.getPredictedValue([float(prev_month), current_year, prev_rainfall])
        prev_month_prediction.append(prev_predict)
        change.append((((current_predict - prev_predict) * 100 / prev_predict), commodity_list.index(i)))
    sorted_change = sorted(change, reverse=True)

    to_send = []
    for j in range(0, 5):
        perc, i = sorted_change[j]
        name = commodity_list[i].getCropName()
        to_send.append([name, round((current_month_prediction[i] * base[name]) / 100, 2), round(perc, 2)])
    return to_send


def TopFiveLosers():
    current_month = datetime.now().month
    current_year = datetime.now().year
    current_rainfall = annual_rainfall[current_month - 1]
    prev_month = current_month - 1
    prev_rainfall = annual_rainfall[prev_month - 1]
    current_month_prediction = []
    prev_month_prediction = []
    change = []

    for i in commodity_list:
        current_predict = i.getPredictedValue([float(current_month), current_year, current_rainfall])
        current_month_prediction.append(current_predict)
        prev_predict = i.getPredictedValue([float(prev_month), current_year, prev_rainfall])
        prev_month_prediction.append(prev_predict)
        change.append((((current_predict - prev_predict) * 100 / prev_predict), commodity_list.index(i)))
    sorted_change = sorted(change)

    to_send = []
    for j in range(0, 5):
        perc, i = sorted_change[j]
        name = commodity_list[i].getCropName()
        to_send.append([name, round((current_month_prediction[i] * base[name]) / 100, 2), round(perc, 2)])
    return to_send


def SixMonthsForecast():
    forecast = []
    current_month = datetime.now().month
    current_year = datetime.now().year
    current_rainfall = annual_rainfall[current_month - 1]

    for i in range(6):
        month_prediction = []
        for commodity in commodity_list:
            prediction = commodity.getPredictedValue([float(current_month), current_year, current_rainfall])
            month_prediction.append(prediction)
        forecast.append(month_prediction)
        current_month += 1
        if current_month > 12:
            current_month = 1
            current_year += 1
        current_rainfall = annual_rainfall[current_month - 1]

    to_send = []
    for i, commodity in enumerate(commodity_list):
        name = commodity.getCropName()
        values = [round(forecast[j][i] * base[name] / 100, 2) for j in range(6)]
        to_send.append([name] + values)
    return to_send


def TwelveMonthsForecast(name):
    forecast = []
    current_month = datetime.now().month
    current_year = datetime.now().year
    current_rainfall = annual_rainfall[current_month - 1]
    commodity = crops_predictor_list[name]

    for i in range(12):
        prediction = commodity.getPredictedValue([float(current_month), current_year, current_rainfall])
        forecast.append((f"{current_month}-{current_year}", round(prediction * base[name] / 100, 2)))
        current_month += 1
        if current_month > 12:
            current_month = 1
            current_year += 1
        current_rainfall = annual_rainfall[current_month - 1]

    max_crop = max(forecast, key=lambda x: x[1])
    min_crop = min(forecast, key=lambda x: x[1])
    return max_crop, min_crop, forecast


def TwelveMonthPrevious(name):
    previous_values = []
    current_month = datetime.now().month
    current_year = datetime.now().year - 1
    current_rainfall = annual_rainfall[current_month - 1]
    commodity = crops_predictor_list[name]

    for i in range(12):
        prediction = commodity.getPredictedValue([float(current_month), current_year, current_rainfall])
        previous_values.append((f"{current_month}-{current_year}", round(prediction * base[name] / 100, 2)))
        current_month += 1
        if current_month > 12:
            current_month = 1
            current_year += 1
        current_rainfall = annual_rainfall[current_month - 1]

    return previous_values


def CurrentMonth(name):
    current_month = datetime.now().month
    current_year = datetime.now().year
    current_rainfall = annual_rainfall[current_month - 1]
    commodity = crops_predictor_list[name]
    current_prediction = commodity.getPredictedValue([float(current_month), current_year, current_rainfall])
    return round(current_prediction * base[name] / 100, 2)


if __name__ == '__main__':
    for crop_name, file_path in commodity_dict.items():
        commodity = Commodity(file_path)
        commodity_list.append(commodity)
        crops_predictor_list[crop_name] = commodity
    app.run(debug=True, port=8080)
