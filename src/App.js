import React, { useEffect, useState } from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';
import wordsToNumbers from 'words-to-numbers';
import NewsCards from './components/NewsCards/NewsCards';
import useStyles from './styles'
import jhontoo from './images/jhontoo.png'
const alanKey = "9eb1c31406f530e43fa91e3c85127f292e956eca572e1d8b807a3e2338fdd0dc/stage";

const App = () => {
    const classes = useStyles();
    const [activeArticle, setActiveArticle] = useState(-1);
    
    const [newsArticles, setNewsArticles] = useState([]);
    useEffect(() => {
        alanBtn({
            key: alanKey,
            onCommand: ({ command, articles, number }) => {
                if(command === "newHeadlines"){
                    setNewsArticles(articles);
                    // setActiveArticle(-1);
                } else if(command === "highlight"){
                    setActiveArticle((prevActiveArticle) => prevActiveArticle + 1);
                } 
                else if(command === "open") {
                    const parsedNumber = number.length > 1 ? wordsToNumbers((number), {fuzzy: true}) : number;
                    const article = articles[parsedNumber - 1];

                    if (parsedNumber > articles.length) {
                        alanBtn().playText('Please try that again...');
                      } else if (article) {
                        window.open(article.url, '_blank');
                        alanBtn().playText('Opening...');
                      } else {
                        alanBtn().playText('Please try that again...');
                      }
                }
            }
        })
    }, [])
    return (
        <div>
            <div className={classes.logoContainer}>
                <img src={jhontoo} className={classes.alanLogo}/>
            </div>

            <NewsCards articles={newsArticles} activeArticle={activeArticle} />
        </div>
    );
};

export default App;