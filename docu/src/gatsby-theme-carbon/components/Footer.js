import React from 'react';
import Footer from 'gatsby-theme-carbon/src/components/Footer';

const Content = ({ buildTime }) => (
  <>
    <p>Last documentation build time: {buildTime}</p>
  </>
);

const links = {
  firstCol: [ ],
  secondCol: [ ],
};

const logo = () => (
    <p>&nbsp;</p>
);

const CustomFooter = () => <Footer links={links} Content={Content} Logo={logo} />;

export default CustomFooter;
