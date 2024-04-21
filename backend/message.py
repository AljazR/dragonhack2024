import os
from twilio.rest import Client
from gpt import get_message


def send_message(request):
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
    
    platform = request.get_json()['platform']

    if platform == "SMS":
        return send_sms(request)
    elif platform == "Email":
        return send_email(request)
    elif platform == "Viber":
        return send_viber(request)
    elif platform == "Facebook":
        return send_facebook(request)
    elif platform == "Instagram":
        return send_instagram(request)
    else:
        return "Platform not supported", 400


def send_sms(request):
    account_sid = os.environ['TWILIO_ACCOUNT_SID']
    auth_token = os.environ['TWILIO_AUTH_TOKEN']
    client = Client(account_sid, auth_token)

    text = get_message(request)
    # text = "Dj mi dnar!"

    # phone_number = request.get_json()['contact']
    phone_number = os.environ['DEFAULT_PHONE_NUMBER']

    message = client.messages.create(
        body=text,
        from_=os.environ['TWILIO_PHONE_NUMBER'],
        to=phone_number
    )

    return text, message.status

def send_email(request):
    return "Email not supported", 400

def send_viber(request):
    return "Viber not supported", 400

def send_facebook(request):
    return "Facebook not supported", 400

def send_instagram(request):
    return "Instagram not supported", 400
