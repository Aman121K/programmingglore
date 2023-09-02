"use client"
import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";
import db from "../../Firebase"
import { useState, useEffect } from "react";

const Features = () => {
  const [featuresData,setFeaturesData] = useState({
    mainHeading:"",
    subHeading:""
  })
  useEffect(() => {
    getHomePageData();
    getServicesData();
  },[])
  console.log(featuresData)
  const getHomePageData = () => {
    db.collection("features_content").get().then((data)=>{
      data.forEach((doc) => {
        const data = doc.data();
        setFeaturesData({
          mainHeading:data.main_heading,
          subHeading:data.sub_heading,
        })
      } )
    })
  }
  const getServicesData = () => {
    db.collection("services_data").get().then((data)=>{
      data.forEach((doc) => {
        const data = doc.data();
        console.log("data...",data)
      } )
    })
  }
  return (
    <>
      <section
        id="features"
        className="bg-primary/[.03] py-16 md:py-20 lg:py-28"
      >
        <div className="container">
          <SectionTitle
            title={featuresData?.mainHeading}
            paragraph={featuresData?.subHeading}
            center
          />

          <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {/* {featuresData.map((feature) => (
              <SingleFeature key={feature.id} feature={feature} />
            ))} */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
