import React from 'react'
import jsPDF from 'jspdf'

export default function result(props) {
    const download = () => {
        var download_btn = document.getElementById("download-btn");
        if (download_btn.checked) {
            var doc = new jsPDF()
            const content = '['+props.res.id+'] News Analysis Report: \n'+'Sentiment Analysis: '+props.res.score+'\n'+'News Headline: '+props.res.news
            doc.text(content, 10, 10)
            const filename = 'news-analysis-report-'+props.id+'.pdf'
            doc.save(filename)
        }
    }
    return (
        <div className="rank">
            <h3>[{props.res.id}] News Analysis Report: </h3>
            <p><b>Sentiment Analysis: </b>{props.res.score}</p>
            <p><b>News Headline: </b>{props.res.news}</p>
            <div className="download-link"><input id="download-btn" onChange={() => download()} type="checkbox" /><label>Download Report</label></div>
        </div>
    )
}
