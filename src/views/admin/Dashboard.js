import React from "react";

// components

import CardLineChart from "components/Cards/CardLineChart.js";
// import CardBarChart from "components/Cards/CardBarChart.js";
// import CardStats from "components/Cards/CardStats.js";
import CardTable from "components/Cards/CardTableEdit.js";
import CardPageVisits from "components/Cards/CardPageVisits.js";
import CardSocialTraffic from "components/Cards/CardSocialTraffic.js";
import CardRecommedation from "components/Cards/CardRecommedation.js";
import CardCoverage from "components/Cards/CardCoverage.js";

export default function Dashboard() {
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
          <CardLineChart />
        </div>
        <div className="w-full xl:w-4/12 mb-12 xl:mb-0 px-4">
          <CardTable />
        </div>
      </div>
      <div className="flex flex-wrap">
        <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
          <CardRecommedation />
        </div>
        <div className="w-full xl:w-4/12 mb-12 xl:mb-0 px-4">
          <CardCoverage />
        </div>
      </div>
      <div className="flex flex-wrap mt-4">
        <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
          <CardPageVisits />
        </div>
        <div className="w-full xl:w-4/12 px-4">
          <CardSocialTraffic />
        </div>
      </div>
    </>
  );
}
