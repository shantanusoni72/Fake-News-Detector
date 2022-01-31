from flask import Flask, request, jsonify
import random
from nltk import sentiment
import nltk
nltk.download('vader_lexicon')

app = Flask(__name__)

@app.route('/members')
def members():
   res = {"name":"hello","about":"hi"}
   return res

@app.route('/search/<string:news>')
def search(news):
   emotions = sentiment.SentimentIntensityAnalyzer()
   res = { "id": random.randint(0,100000), "news_headline":news ,"score": "" }
   if news != '':
      status = emotions.polarity_scores(news)
      if status['pos'] > status['neg']:
         res["score"] = "Positive"
         return res
      elif status['neg'] > status['pos']:
         res["score"] = "Negative"
         return res
      else:
         res["score"] = "Neutal"
         return res
   return news

if __name__ == "__main__":
   app.run(debug=True)