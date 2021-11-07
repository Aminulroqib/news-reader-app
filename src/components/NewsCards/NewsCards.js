import React from 'react';
import {Grid, Grow, Typography} from '@material-ui/core'
import useStyles from './styles'

import NewsCard from '../NewsCard/NewsCard'

const infoCards = [
    { color: '#00A6A6', title: 'Latest News', text: 'Give me the latest news' },
    { color: '#32AAE1', title: 'News by Categories', info: 'Business, Entertainment, General, Health, Science, Sports, Technology', text: 'Give me the latest Technology news' },
    { color: '#F08700', title: 'News by Terms', info: 'Cricket, Chittagong, Smartphones, Football...', text: 'What\'s up with Bangladesh' },
    { color: '#29285B', title: 'News by Sources', info: 'CNN, Wired, BBC News, Time, IGN, Buzzfeed, ABC News...', text: 'Give me the news from CNN' },
  ];

const NewsCards = ({articles, activeArticle}) => {
    const classes = useStyles();

    if(!articles.length){
        return (
            <Grow in>
            <Grid className={classes.container} container alignItems="stretch" spacing={3}>
              {infoCards.map((infoCard) => (
                <Grid item xs={12} sm={6} md={4} lg={3} className={classes.infoCard}>
                  <div className={classes.card} style={{ backgroundColor: infoCard.color }}>
                    <Typography variant="h5" component="h5">{infoCard.title}</Typography>
                    {
                    infoCard.info 
                    ? 
                    <Typography variant="h6" component="h6">
                        <strong>
                            {infoCard.title.split(' ')[2]}
                        </strong>: <br />{infoCard.info}
                        </Typography> : null}
                    <Typography variant="h6" component="h6">
                        Try saying: <br /> <i>{infoCard.text}</i>
                    </Typography>
                  </div>
                </Grid>
              ))}
            </Grid>
          </Grow>
        )
    }

    return (
        <Grow in>
            <Grid className ={classes.container} container alignItems="strecth" spacing ={3}>
            {
                articles.map((article, i) =>(
                    <Grid item xs={12} sm={6} md={4} lg={3} style={{display: 'flex'}}>
                    <NewsCard article={article} i={i} activeArticle={activeArticle}/>
                    </Grid>
                ))
            }

            </Grid>
        </Grow>
    );
};

export default NewsCards;