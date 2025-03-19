import React from "react";

const Details = ({ position, company, companyLink, time, address, work }) => {
  return (
    <div className="flex flex-col items-center justify-between my-8 first:mt-0 last:mt-0 w-[60%] mx-auto">
      <div>
        <h3 className="capitalize text-2xl font-bold">
          {position}&nbsp;
          <a
            href={companyLink}
            target="_blank"
            className="text-primary capitalize"
          >
            {company}
          </a>
        </h3>
        <span className="capitalize font-medium text-dark/75">
          {time} | {address}
        </span>
        <p className="font-medium w-full">{work}</p>
      </div>
    </div>
  );
};
const Experiance = () => {
  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center">
        Experiance
      </h2>
      <div claaName="w-[75%] mx-auto relative">
        <ul>
          <Details
            position="soft eng"
            company="a guy"
            companyLink="guy.com "
            time="2025 - debe"
            address="mountain gha lkhla "
            work="chi tkharbi9 osf chi haja tdwz biha lzaa ffrzzzeffz fzfzff hyujjjykkkoyyyyurryfe tgzttt zxgcyejci jooooooooooml utuurvvvvercza xxxxxxxxda"
          />
        </ul>
      </div>
    </div>
  );
};

export default Experiance;
