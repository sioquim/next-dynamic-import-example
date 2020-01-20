import React, { useContext, useEffect, useState } from "react";

import { RegionContext } from "../components/region-provider";

const useRegion = settings => {
  const [isEnabled, setIsEnabled] = useState(false);
  const { region } = useContext(RegionContext);

  useEffect(() => {
    function checkIfEnabled() {
      if (!settings || !(settings && settings.length)) {
        setIsEnabled(false);
      } else if (
        (typeof settings === "string" && region === settings) ||
        (Array.isArray(settings) && settings.includes(region))
      ) {
        setIsEnabled(true);
      } else {
        setIsEnabled(false);
      }
    }

    checkIfEnabled();
  }, [region]);

  return isEnabled;
};

export default useRegion;
