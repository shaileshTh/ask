import React from 'react';

const SnippetList = (props) => {
    return(
    <div>
    <div className = "grid">
        {props.snippets.map((snippet) => {
            return <div className = "card" key = {snippet.cacheId}>
                <p dangerouslySetInnerHTML = {{__html: `${snippet.htmlSnippet}`}} />
                <small>
                    snippet from<br/>
                    <a href = {`${snippet.link}`} target = "_blank">{snippet.title}</a>
                </small>
            </div>
        })}
    </div>
    <style jsx>{`
        .grid {
            display: flex;
            align-items: center;
            justify-content: center;
            flex-wrap: wrap;
  
            max-width: 800px;
            margin-top: 3rem;
          }
  
          .card {
            margin: 1rem;
            flex-basis: 45%;
            padding: 1.5rem;
            text-align: left;
            color: inherit;
            text-decoration: none;
            border: 1px solid #eaeaea;
            border-radius: 10px;
            transition: color 0.15s ease, border-color 0.15s ease;
          }
  
          .card:hover,
          .card:focus,
          .card:active {
            color: #0070f3;
            border-color: #0070f3;
          }
  
          .card h3 {
            margin: 0 0 1rem 0;
            font-size: 1.5rem;
          }
  
          .card p {
            margin: 0;
            font-size: 1.25rem;
            line-height: 1.5;
          }
  
    `}</style>
    </div>
    )
}

export default SnippetList;