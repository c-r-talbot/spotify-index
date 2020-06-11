/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    {
      resolve: `gatsby-source-spotify`,
      options: {
        clientId: `f2c780eb1c7b4ba0b1c470370f9865b3`,
        clientSecret: `9091acf29d604a648dee7b437e25dfe5`,
        refreshToken: `AQAPc9beZe70R9nT9KDKG7XRqP3JcsCxNNaEkHuOLGRblUIlAyVaDoxJWyqMAI-yY9oLx1uFN9Xmzz6oB5M72SZT6_3gKXflEbwWKEQiSI4X9I53hWyZp7lPVNyWdm2cX0Q`,
    
        fetchPlaylists: true, // optional. Set to false to disable fetching of your playlists
        fetchRecent: true, // optional. Set to false to disable fetching of your recently played tracks
        timeRanges: ['short_term', 'medium_term', 'long_term'], // optional. Set time ranges to be fetched
      },
    },
  ],
}
