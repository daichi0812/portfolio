"use client";
import React from 'react';
import dynamic from "next/dynamic";

interface AnimatedNumbersProps {
  includeComma?: boolean;
  animateToNumber: number;
  locale?: string;
  className?: string;
  configs?: (value: number, index: number) => {
    mass: number;
    friction: number;
    tensions: number;
  };
}

const AnimatedNumbers = dynamic(
  () => import("react-animated-numbers"),
  { ssr: false }
) as React.ComponentType<AnimatedNumbersProps>;

interface AchievementProps {
  metric: string;
  value: number;
  prefix?: string;
  postfix?: string;
}

const achievementsList: AchievementProps[] = [
  {
    metric: "Projects",
    value: 2,
    postfix: "+",
  },
  {
    prefix: "~",
    metric: "Users",
    value: 10,
  },
  {
    metric: "Awards",
    value: 1,
  },
  {
    metric: "Years",
    value: 2,
  },
];

const AchievementsSection: React.FC = () => {
  return (
    <div className="py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
      <div className="sm:border-[#33353F] sm:border rounded-md py-8 px-16 flex flex-col sm:flex-row items-center justify-between">
        {achievementsList.map((achievement, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center mx-4 my-4 sm:my-0"
          >
            <h2 className="text-white text-4xl font-bold flex flex-row">
              {achievement.prefix}
              <AnimatedNumbers
                includeComma
                animateToNumber={achievement.value}
                locale="en-US"
                className="text-white text-4xl font-bold"
                configs={(_, idx) => ({
                  mass: 1,
                  friction: 100,
                  tensions: 140 * (idx + 1),
                })}
              />
              {achievement.postfix}
            </h2>
            <p className="text-[#ADB7BE] text-base">{achievement.metric}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AchievementsSection;