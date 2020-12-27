import React from 'react';
import { HomepageBanner, HomepageCallout } from 'gatsby-theme-carbon';
import HomepageTemplate from 'gatsby-theme-carbon/src/templates/Homepage';
import { calloutLink } from './Homepage.module.scss';

import Tools from '../../images/tools.jpg';

const BannerText = () => <h1>SAP Commerce Workplace Tools</h1>;

const customProps = {
  Banner: <HomepageBanner renderText={BannerText} image={Tools} />,
};

// spreading the original props gives us props.children (mdx content)
function ShadowedHomepage(props) {
  return <HomepageTemplate {...props} {...customProps} />;
}

export default ShadowedHomepage;
