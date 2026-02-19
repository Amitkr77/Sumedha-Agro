import React, { useState } from "react";
import FormOne from "../components/FormOne";
import FormSecond from "../components/FormSecond";
import FormThird from "../components/FormThird";
import FormFour from "../components/FormFour";
import { useLocation } from "react-router-dom";
export default function GetQuote() {
  const [section, setsection] = useState(0);
  const location = useLocation();
  const emailFromProducts = location.state?.email || "";
  const next = () => {
    setsection((prev) => Math.min(prev + 1, 3));
  };

  const prev = () => {
    setsection((prev) => Math.max(prev - 1, 0));
  };

  // 🔥 Add this
  const goToStep = (stepNumber) => {
    setsection(stepNumber);
  };

  return (
    <section>
      {section === 0 && <FormOne handleNext={next} defaultEmail={emailFromProducts} />}

      {section === 1 && (
        <FormSecond
          handlePrev={prev}
          handleNext2={next}
        />
      )}

      {section === 2 && (
        <FormThird
          handlePrevious={prev}
          handleNext={next}
          goToStep={goToStep}   // 🔥 pass this
        />
      )}

      {section === 3 && <FormFour />}
    </section>
  );
}

