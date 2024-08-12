# crops.py

def crop(crop_name):
    crop_data = {
        "wheat": ["/static/images/wheat.jpg", "U.P., Punjab, Haryana, Rajasthan, M.P., Bihar", "rabi", "Sri Lanka, United Arab Emirates, Taiwan"],
        "paddy": ["/static/images/paddy.jpg", "W.B., U.P., Andhra Pradesh, Punjab, T.N.", "kharif", "Bangladesh, Saudi Arabia, Iran"],
        "barley": ["/static/images/barley.jpg", "Rajasthan, Uttar Pradesh, Madhya Pradesh, Haryana, Punjab", "rabi", "Oman, UK, Qatar, USA"],
        "maize": ["/static/images/maize.jpg", "Karnataka, Andhra Pradesh, Tamil Nadu, Rajasthan, Maharashtra", "kharif", "Hong Kong, United Arab Emirates, France"],
        "bajra": ["/static/images/bajra.jpg", "Rajasthan, Maharashtra, Haryana, Uttar Pradesh and Gujarat", "kharif", "Oman, Saudi Arabia, Israel, Japan"],
        "copra": ["/static/images/copra.jpg", "Kerala, Tamil Nadu, Karnataka, Andhra Pradesh, Orissa, West Bengal", "rabi", "Vietnam, Bangladesh, Iran, Malaysia"],
        "cotton": ["/static/images/cotton.jpg", "Punjab, Haryana, Maharashtra, Tamil Nadu, Madhya Pradesh, Gujarat", "kharif", "China, Bangladesh, Egypt"],
        "masoor": ["/static/images/masoor.jpg", "Uttar Pradesh, Madhya Pradesh, Bihar, West Bengal, Rajasthan", "rabi", "Pakistan, Cyprus, United Arab Emirates"],
        "gram": ["/static/images/gram.jpg", "Madhya Pradesh, Maharashtra, Rajasthan, Uttar Pradesh, Andhra Pradesh & Karnataka", "rabi", "Vietnam, Spain, Myanmar"],
        "groundnut": ["/static/images/groundnut.jpg", "Andhra Pradesh, Gujarat, Tamil Nadu, Karnataka, and Maharashtra", "kharif", "Indonesia, Jordan, Iraq"],
        "arhar": ["/static/images/arhar.jpg", "Maharashtra, Karnataka, Madhya Pradesh and Andhra Pradesh", "kharif", "United Arab Emirates, USA, Chicago"],
        "sesamum": ["/static/images/sesamum.jpg", "Maharashtra, Rajasthan, West Bengal, Andhra Pradesh, Gujarat", "rabi", "Iraq, South Africa, USA, Netherlands"],
        "jowar": ["/static/images/jowar.jpg", "Maharashtra, Karnataka, Andhra Pradesh, Madhya Pradesh, Gujarat", "kharif", "Toronto, Sydney, New York"],
        "moong": ["/static/images/moong.jpg", "Rajasthan, Maharashtra, Andhra Pradesh", "rabi", "Qatar, United States, Canada"],
        "niger": ["/static/images/niger.jpg", "Andha Pradesh, Assam, Chattisgarh, Gujarat, Jharkhand", "kharif", "United States of America, Argentina, Belgium"],
        "rape": ["/static/images/rape.jpg", "Rajasthan, Uttar Pradesh, Haryana, Madhya Pradesh, and Gujarat", "rabi", "Vietnam, Malaysia, Taiwan"],
        "jute": ["/static/images/jute.jpg", "West Bengal, Assam, Orissa, Bihar, Uttar Pradesh", "kharif", "Jordan, United Arab Emirates, Taiwan"],
        "safflower": ["/static/images/safflower.jpg", "Maharashtra, Karnataka, Andhra Pradesh, Madhya Pradesh, Orissa", "kharif", "Philippines, Taiwan, Portugal"],
        "soyabean": ["/static/images/soyabean.jpg", "Madhya Pradesh, Maharashtra, Rajasthan, Madhya Pradesh and Maharashtra", "kharif", "Spain, Thailand, Singapore"],
        "urad": ["/static/images/urad.jpg", "Andhra Pradesh, Maharashtra, Madhya Pradesh, Tamil Nadu", "rabi", "United States, Canada, United Arab Emirates"],
        "ragi": ["/static/images/ragi.jpg", "Maharashtra, Tamil Nadu and Uttarakhand", "kharif", "United Arab Emirates, New Zealand, Bahrain"],
        "sunflower": ["/static/images/sunflower.jpg", "Karnataka, Andhra Pradesh, Maharashtra, Bihar, Orissa", "rabi", "Philippines, United States, Bangladesh"],
        "sugarcane": ["/static/images/sugarcane.jpg", "Uttar Pradesh, Maharashtra, Tamil Nadu, Karnataka, Andhra Pradesh", "kharif", "Kenya, United Arab Emirates, United Kingdom"]
    }
    
    crop_data_default = ["/static/images/default.jpg", "Unknown", "Unknown", "Unknown"]
    
    # Convert crop_name to lowercase
    crop_name_lower = crop_name.lower()
    
    # Retrieve crop data using lowercase crop_name
    crop_info = crop_data.get(crop_name_lower)
    
    # If crop_info is None, return the default data
    if crop_info is None:
        return crop_data_default
    
    return crop_info
