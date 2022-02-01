from flask import Flask, request, jsonify
import random
from nltk import sentiment
import nltk
nltk.download('vader_lexicon')
from components import sentiment_analysis

app = Flask(__name__)

@app.route('/members')
def members():
   res = {"name":"hello","about":"hi"}
   return res

@app.route('/search/<string:news>')
def search(news):
   res = { "id": random.randint(0,100000), "news_headline":news ,"score": "","result":"" }
   news = sentiment_analysis(news,res)
   return news

if __name__ == "__main__":
   app.run(debug=True)