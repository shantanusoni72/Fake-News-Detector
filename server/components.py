from nltk import sentiment
import nltk
nltk.download('vader_lexicon')

def sentiment_analysis(news,res):
	emotions = sentiment.SentimentIntensityAnalyzer()
	if news != '':
		f = open('uses.log','a')
		log_data = ''
		status = emotions.polarity_scores(news)
		if status['pos'] > status['neg']:
			res["score"] = "Positive"
			log_data = '['+ str(res['id']) +'] ' + 'Message="'+ res['news_headline'] + '"' + '['+ str(res['score']) +'] \n'
			f.write(log_data)
			f.close() 
			return res
		elif status['neg'] > status['pos']:
			res["score"] = "Negative"
			log_data = '['+ str(res['id']) +'] ' + 'Message="'+ res['news_headline'] + '"' + '['+ str(res['score']) +'] \n'
			f.write(log_data)
			f.close()
			return res
		else:
			res["score"] = "Neutral"
			log_data = '['+ str(res['id']) +'] ' + 'Message="'+ res['news_headline'] + '"' + '['+ str(res['score']) +'] \n'
			f.write(log_data)
			f.close()
			return res
		return res