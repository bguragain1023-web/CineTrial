import React from "react";
import { Moviecard } from "./Moviecard";

export const Display = () => {
  return (
    <>
      <div className="display-wrapper mt-3  border ">
        <span className="text-white ">popular now</span>
        <div className="moviecard-wrapper">
          <Moviecard />
        </div>
      </div>
    </>
  );
};
