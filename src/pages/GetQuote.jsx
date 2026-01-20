import React, { useState } from "react";
import FormOne from "../components/FormOne";
import FormSecond from "../components/FormSecond";
import FormThird from "../components/FormThird";
import FormFour from "../components/FormFour";

export default function GetQuote() {
  const [section, setsection] = useState(0);

  const next = () => {
    setsection((prev) => Math.min(prev + 1, 3));
  };

  const prev = () => {
    setsection((prev) => Math.min(prev - 1, 0));
  };
  return (
    <section>
      {section === 0 && <FormOne handleNext={next} />}

      {section === 1 && <FormSecond handlePrev={prev} handleNext2={next} />}

      {section === 2 && <FormThird handlePrevious={prev} handleNext={next} />}

      {section === 3 && <FormFour />}
    </section>
  );
}
