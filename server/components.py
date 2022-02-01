from nltk import sentiment
import nltk
nltk.download('vader_lexicon')
import random

def sentiment_analysis(news,res):
	emotions = sentiment.SentimentIntensityAnalyzer()
	if news != '':
		status = emotions.polarity_scores(news)
		if status['pos'] > status['neg']:
			res["score"] = "Positive"
			return res
		elif status['neg'] > status['pos']:
			res["score"] = "Negative"
			return res
		else:
			res["score"] = "Neutral"
			return res
		return res