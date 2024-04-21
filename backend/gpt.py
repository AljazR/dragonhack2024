import os
import openai

TOKEN = os.environ["OPENAI_API_TOKEN"]
BASE_URL = "https://openai-proxy.sellestial.com/api"


def get_message(request):
    """
    Request format (JSON):
    "user": "Matevž Vidovič",
    "debtor_name": "Sebastjan Kordiš",
    "sending_interval": "15min",
    "platform": "Viber",
    "contact": "+1234567890",
    "promt_params": {
        "money": "50€",
        "reason": "Car gas",
        "aggression": "4",
        "style": "friendly"
    }
    """

    TOKEN = os.environ["OPENAI_API_TOKEN"]
    BASE_URL = "https://openai-proxy.sellestial.com/api"

    client = openai.OpenAI(api_key=TOKEN, base_url=BASE_URL)
    model = "gpt-4-turbo"
    # model = "gpt-3.5-turbo"

    messages = [
        {
            "role": "system",
                    "content": "You are a normal dude, from whome a friend borrowed some money. You want to remind him to return it. \
                                So you decided to send him a peridoical message on specified platform with a web app Juicer. \
                                Your job is to write the best message that is suitable for a platform and fullfills the next conditions: \
                                    - You include the amount of money borrowed. \
                                    - You include the reason debtor borrowed the money. \
                                    - You make the message agressive based on the agression parameter form 1(not agressive at all) to 7(very agressive)\
                                    - You use the style of message based on the style parameter: friendly, neutral, passive agressive, blood feud, mafia boss, ... \
                                    - You include the name of the debtor in the message. \
                                    - You include the name of the user in the message.\
                                You don't have to use direct variables. but modify them so it makes sense in the message."
        },
        
        {"role": "user", "content": '"user": "Matevž Vidovič",\
                                    "debtor_name": "Sebastjan Kordiš",\
                                    "platform": "SMS",\
                                    "promt_params": {\
                                        "money": "50€",\
                                        "reason": "Car gas",\
                                        "aggression": "4",\
                                        "style": "mafia boss"\
                                    }'
        },
        {
            "role": "assistant",
                    "content": "Listen Sebastjan, there's a debt that needs to be paid. You know which one I'm talking about. No more delays. Handle this now or there will be consequences. I want my 50€ before next morning.\
                                Matevž",
        },
        {"role": "user", "content": '"debtor_name": "Sebastjan Kordi\u0161",\
                                    "platform": "SMS",\
                                    "promt_params": {\
                                        "money": "50€",\
                                        "reason": "Car gas",\
                                        "aggression": "1",\
                                        "style": "friendly"\
                                    }'
        },
        {
            "role": "assistant",
                    "content": "Hey Sebastjan, I hope you are doing well. I just wanted to remind you that you borrowed 50€ from me for car gas.\
                                 Matevž Vidovič",
        },
        {"role": "user", "content": f"{request.get_json()}"},
    ]

    response = client.chat.completions.create(
        model=model,
        messages=messages,
    )
   
    return response.choices[0].message.content
