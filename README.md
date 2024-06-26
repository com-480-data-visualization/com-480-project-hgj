# Project of Data Visualization (COM-480)

| Student's name | SCIPER |
| -------------- | ------ |
| Gerard Elias Antoun | 296102 |
| Haochen Su | 360059 |
| Jiaxin Dong | 367788 |

[Milestone 1](#milestone-1) • [Milestone 2](#milestone-2) • [Milestone 3](#milestone-3)

## Milestone 1 (29th March, 5pm)


### Dataset

Counter-Strike 2(previously CS:GO) is a multiplayer first-person shooter online competitive game. The dataset we will be using has collected the results of a total of 27,245 professional CS matches from November 2015 to March 2020. 

The dataset consists of 4 tables: 

> - **result.csv:** Includes match ID, world rankings of the competing teams, score results, and the winning team for each match.
> - **players.csv:** Contains personal information of players from both teams and their in-game statistics such as kills, assists, deaths, etc.
> - **map.csv:** Provides data on the map banning process for each match.
> - **economy.csv:** Presents the economic data of both teams for each match.

This dataset is exceptionally clean with minimal missing data. [Here](https://www.kaggle.com/datasets/mateusdmachado/csgo-professional-matches) is the link.

We are also interested in the data about the weapon in the game, such as weapon damage, win rate. So we will use the weapon_statistics.csv in [this](https://www.kaggle.com/datasets/computingvictor/counter-strike-2-statistic) dataset as well.

Except for the collected datasets, [HLTV](https://www.hltv.org/) will be the main resource that we will have the other information from.

### Problematic

**Overview**

Our project aims to serve as a comprehensive resource hub for Counter-Strike 2(previously CS:GO) enthusiasts, providing informative, interesting and interactive visualizations into top players, weapon statistics, map statistics, and professional match analyses. 

**Motivation**

As one of the most popular first-person shooter(FPS) video game, Counter-Strike has become a cornerstone of the esports community since its initial release in 1999. It is a true milestone in FPS game history, which has a large influence on more than one generation of FPS game fans. However, there’s no existing website that meets the need to have informative, interesting and interactive visualizations of the game. There are relevant statistics on HLTV(hltv.org) and statistics dataset existing, but the information needs data mining and the results need to be presented in a more attractive and easy-to-understand way. Therefore, we find it meaningful to do a related project on it.

**Target Audience**

The target audience is anyone interested in Counter-Strike 2. We strive to cater to the needs of both casual players exploring information of the game in an attractive way and hardcore fans looking to find detailed statistics of the game.

**Content**

At this stage, we decide to have three main parts as following:

> - **Top 20 players overview:**
Every year, HLTV announces the top 20 professional players of the year based on their playing statistics and honor they receive within the year. We will have a visualization of the top 20 players in six dimensions(RATING, DPR, KAST, IMPACT, ADR, KPA) comparing with average levels. There will be a timeline for each years’ data. And interesting way to look for each player(still to be decided, maybe related to team and nationalities on map).

> - **Weapon statistics:**
In this section we will present statistics of all the weapons in the game including damage, total kills, headshot rate etc. A character will be there and when you put your mouse on each body part of him/her, the relevant data will be shown. 

> - **Professional matches’ statistics on each map:**
In this part, the statistics(Win rate, ban/pick rate etc.) of each map and each side(T and CT) will be visualized with a timeline of years. You will also get a glimpse of the difference of different countries/continents’ professional players and teams’ performance on the statistics.


### Exploratory Data Analysis

Please refer to the jupyter notebook.

### Related work

As stated above, there’s no website that perfectly meets the need of providing informative, interesting and interactive visualizations of the Counter-Strike statistics. [HLTV](https://www.hltv.org/) is a news website and forum which covers professional Counter-Strike 2 esports news, tournaments and statistics. It is one of the leading websites within the Counter-Strike community with thorough and detailed statistics. It is informative enough, but not interesting and interactive. It is more like a display of pure data instead of data visualization. [Bo3](https://bo3.gg/) is another similar case with news and simple display of the statistics. 

Other than websites, there are some videos doing some visualization of the statistics. For example [this](https://www.bilibili.com/video/BV1YK411Y7j9/?share_source=copy_web&vd_source=1a80d0a287810aaed54bd1722292da14) video on bilibili has a very good visualization of the top 20 players in 2023, which gives us inspirations. 

Our project would be original because it includes multiple statistics in an informative, interesting and interactive way instead of just presenting it. And unlike other Counter-Strike related websites, we will only focus on statistics without presenting news on it. 

And just to clarify, we did not use any of the dataset before in other courses.

## Milestone 2 (26th April, 5pm)

Our Milestone 2 report is [here](https://github.com/com-480-data-visualization/com-480-project-hgj/blob/master/Milestone2.pdf)

And the skeleton is published on GitHub Pages with this URL: [https://com-480-data-visualization.github.io/com-480-project-hgj/](https://com-480-data-visualization.github.io/com-480-project-hgj/)

## Milestone 3 (31st May, 5pm)

- Our final website can be found [here](https://com-480-data-visualization.github.io/com-480-project-hgj/)

- Our Screencast is [here](https://www.youtube.com/watch?v=66_kw5B6rMk)

- The process book is available [here](https://github.com/com-480-data-visualization/com-480-project-hgj/blob/master/Process%20Book.pdf)

## Late policy

- < 24h: 80% of the grade for the milestone
- < 48h: 70% of the grade for the milestone

