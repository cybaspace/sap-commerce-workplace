module.exports = {
  siteMetadata: {
    title: "SAP Commerce Workplace Tools",
    description: "Tools to empower you work with SAP Commerce in a more powerful way",
    keywords: "sap,commerce,tool,workplace",
    lang: "en",
  },
  plugins: [

    {
      resolve: 'gatsby-theme-carbon',
      options: {
        isSearchEnabled: false,
        navigationStyle: 'header',
        name: "SAP Commerce Workplace Tools",
        icon: "src/images/favicon.svg",
        short_name: "SAP Commerce Workplace Tools",
        start_url: "/",
        background_color: "#ffffff",
        theme_color: "#0062ff",
        display: "browser",
        theme: {
          homepage: 'white',
          interior: 'g10',
        },
      },
    }
  ],
};
