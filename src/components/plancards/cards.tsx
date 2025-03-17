import { FC } from "react";
import { useState } from "react";
import RangeSlider from "./planRange";
import "../../App.css";
import CheckIcon from "../icons/iconsvg";

interface Plan {
  id: number;
  title: string;
  price: number;
  features: {
    web: number | string;
    searchs: number;
    links: number;
    sites: number;
  };
}
export const plans: Plan[] = [
  {
    id: 1,
    title: "Basic",
    price: 0,
    features: {
      web: 1,
      searchs: 10,
      links: 10,
      sites: 30,
    },
  },
  //Starter plan//
  {
    id: 2,
    title: "Starter",
    price: 39,
    features: {
      web: 1,
      searchs: 50,
      links: 50,
      sites: 500,
    },
  },
  //pro plan//
  {
    id: 3,
    title: "Pro",
    price: 59,
    features: {
      web: 5,
      searchs: 100,
      links: 100,
      sites: 1000,
    },
  },
  //Business plan//
  {
    id: 4,
    title: "Business",
    price: 99,
    features: {
      web: 20,
      searchs: 250,
      links: 250,
      sites: 2500,
    },
  },

  //Enterprise plan//
  {
    id: 5,
    title: "Enterprise",
    price: 149,
    features: {
      web: "Unlimited",
      searchs: 500,
      links: 500,
      sites: 5000,
    },
  },

  //Premium plan//
  {
    id: 6,
    title: "Premium",
    price: 249,
    features: {
      web: "Unlimited",
      searchs: 1000,
      links: 1000,
      sites: 10000,
    },
  },
];
//fc component//

export const PricingPlans: FC = () => {
  const [planId, setPlanId] = useState<number>(1);

  const handlePlan = (id: number) => {
    console.log("Upgrading to plan:", id);
    setPlanId(id);
  };
  return (
    <>
     <RangeSlider currentIndex={planId - 1} setCurrentIndex={(index) => setPlanId(index + 1)} /> 
      <div className="container">
        {plans.map((plan) => (
          <div className={`card ${planId === plan.id ? "active" : ""}`}key={plan.id}>
            <h2>{plan.title}</h2>
            <p className="price-container">
              <sup className="dollar-sign">$ </sup>
              <span id="price">{plan.price}</span>
              /Mo
            </p>
            <ul>
              <li>
                <CheckIcon />
                <span>{plan.features.web}</span> website
              </li>
              <li>
                {" "}
                <CheckIcon />
                <span>{plan.features.searchs} </span>searches a month
              </li>
              <li>
                <CheckIcon /><span>{plan.features.links} </span>AI anchor
                generations
              </li>
              <li>
                {" "}
                <CheckIcon />
                <span>{plan.features.sites}</span> sites on my sites list
              </li>
            </ul>
            {planId === plan.id ? (
              <button className="current-plan-btn" disabled>
                Current Plan
              </button>
            ) : (
              <button
                className="upgrade-btn"
                onClick={() => handlePlan(plan.id)}
              >
                Upgrade
              </button>
            )}
          </div>
        ))}
      </div>
    </>
  );
};
