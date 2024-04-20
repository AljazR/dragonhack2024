import os
from flask import Flask, request, jsonify
from twilio.rest import Client
from gpt import get_message

app = Flask(__name__)


@app.route('/')
def home():
    return """
    <h1>Juicer is running \U0001F34B \U00002192 \U0001F9C3</h1>
    <p>Send a POST request to /send_sms with a JSON body to send an SMS.</p>
    """


@app.route('/send_sms', methods=['POST'])
def send_sms():

    account_sid = os.environ['TWILIO_ACCOUNT_SID']
    auth_token = os.environ['TWILIO_AUTH_TOKEN']
    client = Client(account_sid, auth_token)

    # text = get_message(request.json['message'])
    text = "Dj mi dnar!"

    message = client.messages.create(
        body=text,
        from_=os.environ['TWILIO_PHONE_NUMBER'],
        to=request.json['phone_number']
    )

    return jsonify({'message': text, 'sid': message.sid})


if __name__ == '__main__':
    app.run(debug=True)
