import streamlit as st

def web():
	st.header("Fake News Detector")
	source = st.text_input("Enter the source")
	st.button("Ok")
	return source

def load():
	source = web()
	return source

def printResult(source):
	st.write(source)

