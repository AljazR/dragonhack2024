from flask import Flask, request, jsonify
from flask_cors import CORS
from message import send_message
import json
from datetime import datetime, timedelta
import threading

app = Flask(__name__)
CORS(app)

# Home route
@app.route('/')
def home():
    return """
    <h1>Juicer is running \U0001F34B \U00002192 \U0001F9C3</h1>
    <p>Send a POST request to /send_sms with a JSON body to send an SMS.</p>
    """

# Add new debtor to user.json and send first message
@app.route('/new_debtor', methods=['POST'])
def new_debtor():
    """
    Request format (JSON):
    "user": "Matevž Vidovič",
    "debtor_name": "Sebastjan Kordiš",
    "sending_interval": "15min",
    "platform": "Viber",
    "contact": "+1234567890",
    "promt_params": {
        "money": "50",
        "reason": "Car gas",
        "aggression": "4",
        "style": "friendly"
    }
    """

    new_debtor = request.get_json()
    print("new_debtor")
    print(new_debtor)

    # Load existing data from file
    with open('users.json', 'r') as f:
        existing_data = json.load(f)

    for user in existing_data:
        if user['user'] == new_debtor['user']:
            user['debtors'].append({
                'debtor_name': new_debtor['debtor_name'],
                'sending_interval': new_debtor['sending_interval'],
                'last_sent': datetime.now().strftime("%Y-%m-%d %H:%M:%S"),
                'platform': new_debtor['platform'],
                'contact': new_debtor['contact'],
                'promt_params': new_debtor['promt_params']
            })

    with open('users.json', 'w') as f:
        json.dump(existing_data, f, indent=4)

    text, status = send_message(request)

    return jsonify({'message': text, 'status': status})

# Return all debtors of a user
@app.route('/all_debtors', methods=['GET'])
def all_debtors():
    with open('users.json', 'r') as f:
        data = json.load(f)

    for u in data:
        if u['user'] == request.get_json()["user"]:
            return jsonify(u['debtors'])
        
    return jsonify({'message': 'User not found'}), 404

# Delete debtor of user from user.json 
@app.route('/delete_debtor', methods=['DELETE'])
def delete_debtor():
    with open('users.json', 'r') as f:
        data = json.load(f)

    user = request.get_json()["user"]
    debtor = request.get_json()["debtor"]

    for u in data:
        if u['user'] == user:
            for d in u['debtors']:
                if d['debtor_name'] == debtor:
                    u['debtors'].remove(d)

    with open('users.json', 'w') as f:
        json.dump(data, f, indent=4)

    return jsonify({'message': 'debtor deleted'})

# Sent interval messages to all debtors
def send_all_messages():
    with app.app_context():
        with open('users.json', 'r') as f:
            data = json.load(f)

        for user in data:
            for debtor in user['debtors']:
                last_sent = datetime.strptime(debtor['last_sent'], "%Y-%m-%d %H:%M:%S")

                sending_interval = None
                if debtor['sending_interval'][-3:] == 'min':
                    sending_interval = timedelta(minutes=int(debtor['sending_interval'][:-3]))
                elif debtor['sending_interval'][-1:] == 'h':
                    sending_interval = timedelta(hours=int(debtor['sending_interval'][:-1]))
                elif debtor['sending_interval'][-1:] == 'd':
                    sending_interval = timedelta(days=int(debtor['sending_interval'][:-1]))        

                if datetime.now() - last_sent > sending_interval:
                    debtor['last_sent'] = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
                    request = {
                        'user': user['user'],
                        'debtor_name': debtor['debtor_name'],
                        'sending_interval': debtor['sending_interval'],
                        'platform': debtor['platform'],
                        'contact': debtor['contact'],
                        'promt_params': debtor['promt_params']
                    }
                    send_message(jsonify(request))

        threading.Timer(60, send_all_messages).start()

# Start the scheduler
send_all_messages()

if __name__ == '__main__':
    app.run(debug=True)
