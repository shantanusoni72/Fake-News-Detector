import streamlit as st

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
	st.button("Submit")
	return source

def load():
	source = web()
	return source

def printResult(source):
	st.write(source)

