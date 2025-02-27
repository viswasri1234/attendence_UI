import { Box } from "@mui/material";
import HomepageCard from "./HomepageCard";
import { useState, useEffect } from "react";
import Notification from "./Notification";
import Footer from "./Footer";
import 

const Home = () => {
  const cards = [
    {
      title: "APRIL-2024 Examination",
      url: "/sections/april2024",
    },
    {
      title: "NOVEMBER-2024 Examination",
      url: "/sections/november2024",
    },
  ];

  return (
    <>
      <Box className="overflow-auto">
        <Box className="d-flex justify-content-center text-light bg-primary rounded py-3">
          <h3>
            <strong>MSU Software Solutions</strong>
          </h3>
        </Box>
        <Box className="p-3" style={{ width: "100%" }}>
          {cards.map((card) => (
            <HomepageCard title={card?.title} url={card?.url} />
          ))}
        </Box>
      </Box>
      <Footer/>
    </>
  );
};

export default Home;
