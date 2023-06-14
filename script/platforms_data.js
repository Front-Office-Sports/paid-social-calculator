/*
Store the platforms data dictionary here.
Store lowCPM, avgCPM, highCPM, avgOrganicImpressions for each platform.
This is used to calculate the cost for each platform.

NOTE: Currently hard coded, but likely will need to be replaced with a database
that has a collection of out social platforms and their data.
*/

const PLATFORMS_DATA_DICT = {
  "Instagram - Public": {
    lowCPM: 0.49,
    avgCPM: 6.28,
    highCPM: 13.06,
    avgOrganicImpressions: 33928,
  },
  "Instagram - Dark Post": {
    lowCPM: 1.3,
    avgCPM: 1.64,
    highCPM: 1.98,
    avgOrganicImpressions: 0,
  },
  "Twitter - Overall": {
    lowCPM: 0.58,
    avgCPM: 2.31,
    highCPM: 6.57,
    avgOrganicImpressions: 40142,
  },
  "TikTok - Overall": {
    lowCPM: 4.71,
    avgCPM: 5.57,
    highCPM: 6.28,
    avgOrganicImpressions: 1984,
  },
  "LinkedIn - Overall": {
    lowCPM: 7.53,
    avgCPM: 9.1,
    highCPM: 10.66,
    avgOrganicImpressions: 24501,
  },
  // "Instagram - Feed Boost": {
  //   lowCPM: 2.46,
  //   avgCPM: 5.0,
  //   highCPM: 7.55,
  //   avgOrganicImpressions: 16669,
  // },
  // "Instagram - Reel Boost": {
  //   lowCPM: 8.17,
  //   avgCPM: 9.91,
  //   highCPM: 12.56,
  //   avgOrganicImpressions: 23439,
  // },
};
