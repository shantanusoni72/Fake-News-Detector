from flask import Flask, request, jsonify
import random
from nltk import sentiment
import nltk
nltk.download('vader_lexicon')
from components import sentiment_analysis
from components import write

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

@app.route('/feedback/<string:email>/<string:name>/<string:message>')
def feedback(email,name,message):
    res = { "id": random.randint(0,100000), "email":email ,"name": name,"message":message }
    write(res,'feedback.log')
    return res

if __name__ == "__main__":
   app.run(debug=True)