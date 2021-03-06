module.exports = {
  siteMetadata: {
    title: `DYODE interview challenge`,
    description: `A static site I made for DYODE as a part of their interview proces`,
    author: `Hans Martin Hanken`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        data: `@import "${__dirname}/src/styles/variables";`,
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Lato`,
            variants: [`100`, `100i`, '300', '300i', '400', '400i', '700', '700i', '900', '900i'],
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        custom: {
          families: ['Pacifico'],
          urls: ['/fonts/fonts.css'],
        },
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Dyode interview challenge`,
        short_name: `dyode`,
        start_url: `/`,
      },
    },
  ],
}
