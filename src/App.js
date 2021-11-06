import React, { useEffect, useState } from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';

import NewsCards from './components/NewsCards/NewsCards';
import useStyles from './styles'

const alanKey = '9eb1c31406f530e43fa91e3c85127f292e956eca572e1d8b807a3e2338fdd0dc/stage';

const App = () => {
    const classes = useStyles();
    
    const [newsArticles, setNewsArticles] = useState([]);
    useEffect(() => {
        alanBtn({
            key: alanKey,
            onCommand: ({ command, articles }) => {
                if(command === "newHeadlines"){
                    setNewsArticles(articles);

                }
            }
        })
    }, [])
    return (
        <div>
            <div className={classes.logoContainer}>
                <img src="https://alan.app/brand_assets/logo-horizontal/color/alan-logo-horizontal-color.png" className={classes.alanLogo}/>
            </div>

            <NewsCards articles={newsArticles} />
        </div>
    );
};

export default App;