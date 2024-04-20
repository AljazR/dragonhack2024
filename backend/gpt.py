import os
import openai

TOKEN = os.environ["OPENAI_API_TOKEN"]
BASE_URL = "https://openai-proxy.sellestial.com/api"


def get_message(params):
    '''
    params:
    {
        "sender": "Rihard Šmid",
        "reason": "Concert tickets",
        "agressivnes": 5,
        "mafiozo": True,
        "citations": True,
        "stay_friends": False
    }
    '''

    TOKEN = os.environ["OPENAI_API_TOKEN"]
    BASE_URL = "https://openai-proxy.sellestial.com/api"

    client = openai.OpenAI(api_key=TOKEN, base_url=BASE_URL)
    model = "gpt-4-turbo"
    # model = "gpt-3.5-turbo"

    messages = [
        {
            "role": "system",
                    "content": "As a good post writer, your job is to write tweets that express protest on a given topic. \
                    When writing these tweets, it is important to use the same language as the topic of protest is written in.\
                    Also at the end of the post mention relavant politicians, that are responsible for the topic of protest. They have to be from the country of language of the post.",
        },
        {"role": "user", "content": "Davki kmetov"},
        {
            "role": "assistant",
                    "content": "Obdavčevanje naših pridnih kmetov je sramota! Slovenija se mora zavedati, da je naša kmetijska industrija hrbtenica našega gospodarstva. \
                                                Nehajte kaznovati tiste, ki nam zagotavljajo hrano, in začnite jih podpirati! #StopDavkomNaKmete #SlovenskaKmetijstvo #PodpriteKmete @MKGP_RS @vladaRS",
        },
        {"role": "user", "content": "Davki kmetov"},
        {
            "role": "assistant",
                    "content": "Obdavčevanje naših pridnih kmetov je sramota! Slovenija se mora zavedati, da je naša kmetijska industrija hrbtenica našega gospodarstva. \
                                                Nehajte kaznovati tiste, ki nam zagotavljajo hrano, in začnite jih podpirati! #StopDavkomNaKmete #SlovenskaKmetijstvo #PodpriteKmete @MKGP_RS @vladaRS",
        },
        {"role": "user", "content": "Davki kmetov"},
        {
            "role": "assistant",
                    "content": "Obdavčevanje naših pridnih kmetov je sramota! Slovenija se mora zavedati, da je naša kmetijska industrija hrbtenica našega gospodarstva. \
                                                Nehajte kaznovati tiste, ki nam zagotavljajo hrano, in začnite jih podpirati! #StopDavkomNaKmete #SlovenskaKmetijstvo #PodpriteKmete @MKGP_RS @vladaRS",
        },
        {"role": "user", "content": f"{params}"},
    ]

    response = client.chat.completions.create(
        model=model,
        messages=messages,
    )

    if response.ok:
        print(response.json()["choices"][0]["message"]["content"])

    return response.json()["choices"][0]["message"]["content"]
