import streamlit as st
from nltk import sentiment
import nltk
nltk.download('vader_lexicon')

def web():
	html = """
	<style>
	#fake-news-detector {
		font-size:45px
	}
	.css-qrbaxs {
		font-size:19px
	}
	.st-ba {
		width:75%;
		border-radius:7px
	}
	.css-ns78wr {
		width:45%;
		color:black;
		border-radius:10px;
		margin-left:100px
	}
	</style>
	"""
	st.markdown(html, unsafe_allow_html=True)
	st.header("Fake News Detector")
	source = st.text_input("", placeholder="Enter the alleged news heading in max 20 words")
	onCLickSubmitBtn(source)
	return source

def load():
	source = web()
	return source

def printResult(source):
	if source != "":
		st.write("Sentiment Analysis of alleged news: "+source)

def sentimentAnalysis(source):
	emotions = sentiment.SentimentIntensityAnalyzer()
	if source != '':
		status = emotions.polarity_scores(source)
		if status['pos'] > status['neg']:
			st.image('img/positive.png', width=50)
		elif status['neg'] > status['pos']:
			st.image('img/negative.png', width=50)
		else:
			st.image('img/neutral.png', width=50)

def onCLickSubmitBtn(source):
	if st.button('Submit'):
		if source != '':
			printResult(source)
			sentimentAnalysis(source)