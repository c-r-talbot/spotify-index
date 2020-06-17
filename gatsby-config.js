module.exports = {
  /* Your site config here */
  plugins: [
​    {
​      resolve: `gatsby-source-spotify`,
​      options: {
​        clientId: `bf06bcb4249944fb998a345d6d6050ce`,
​        clientSecret: `71af1b3b552d4553a1e69551c02a8057`,
​        refreshToken: `AQAkbvIE-LLY7POWK1U0xqSuJwZtpCjM1jXX9wVdu4HQCaZ_a2Y6l87_n9JyxL31CQZqeh6JOBhADzSbZT9bxK1EnYaPaqOzSoUt9VFOjvPxnFARUPg1bJvUdOKmCghdWUA`,
​        fetchPlaylists: true, // optional. Set to false to disable fetching of your playlists
​        fetchRecent: true, // optional. Set to false to disable fetching of your recently played tracks
​        timeRanges: ['short_term', 'medium_term', 'long_term'], // optional. Set time ranges to be fetched
​      },
​    },
  ],
}


/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

// module.exports = {
//   /* Your site config here */
//   plugins: [
//     {
//       resolve: `gatsby-source-spotify`,
//       options: {
//         clientId: `process.env.SPOTIFY_CLIENT_ID`,
//         clientSecret: `process.env.SPOTIFY_CLIENT_SECRET`,
//         refreshToken: `process.env.SPOTIFY_CLIENT_TOKEN`,

//         fetchPlaylists: true, // optional. Set to false to disable fetching of your playlists
//         fetchRecent: true, // optional. Set to false to disable fetching of your recently played tracks
//         timeRanges: ['short_term', 'medium_term', 'long_term'], // optional. Set time ranges to be fetched
//       },
//     },
//   ],
// }

