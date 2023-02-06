import requests

url = 'https://darksidepanel.com/api/v2'
headers = {'Content-Type': 'application/json'}
api_key = {'api_key': '9a251eb9b68db886d02b1ee77d42956e'}
params = {
    'key': api_key,
    'action': 'action_value',
    'service': 'service_value',
    'quantity': 'quantity_value',
    'username': 'username_value'
}

response = requests.post(url, headers=headers, json=params)

if response.status_code == 200:
    data = response.json()
    print(data)
else:
    print('Error:', response.status_code)