import React from 'react';
import { resourcesLinks, platformLinks, communityLinks } from '../Constants';

const FooterTags = ({ props, title }) => {
  return (
    <>
      <ul className="space-y-3">
        <h3 className="text-2xl">{title}</h3>
        {props.map((item, index) => (
          <li key={index} className="flex">
            <a className="text-neutral-600 hover:text-white" href={item.href}>
              {item.text}
            </a>
          </li>
        ))}
      </ul>
    </>
  );
};
const Footer = () => {
  return (
    <>
      <div className=" mt-20 mb-5 border border-neutral-400 w-full" />
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 mb-5 ">
        <FooterTags props={resourcesLinks} title={'Resource'} />
        <FooterTags props={platformLinks} title={'PlatForm'} />
        <FooterTags props={communityLinks} title={'Community'} />
      </div>
    </>
  );
};

export default Footer;
