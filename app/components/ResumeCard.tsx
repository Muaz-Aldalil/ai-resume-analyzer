import React from "react";
import { Link } from "react-router";
import ScoreCircle from "./ScoreCircle";

const ResumeCard = ({
  resume: { id, companyName, jobTitle, feedback, imagePath },
}: {
  resume: Resume;
}) => {
  return (
    <Link
      to={`/resume/${id}`}
      className="resume-card animate-in fade-in duration-1000"
    >
      <div className="resume-card-header">
        <div className="flex flex-col gap-2">
          <h2 className="text-black font-bold break-word">{companyName}</h2>
          <p className="text-lg break-word text-gray-500">{jobTitle}</p>
        </div>
        {/*  */}
        <ScoreCircle score={feedback.overallScore} />
      </div>
      {/* uploaded img */}
      <div className="gradient-border animate-in fade-in duration-1000">
        <div className="w-full h-full">
          <img src={imagePath} className="w-full h-[280px] max-sm:h-[200px] object-cover object-top" />
        </div>
      </div>
    </Link>
  );
};

export default ResumeCard;
