import React, { useState } from "react";

const RegionContext = React.createContext();

const RegionProvider = ({ children }) => {
  const [region, setRegion] = useState("all");

  return (
    <RegionContext.Provider
      value={{
        region,
        changeRegion: newRegion => setRegion(newRegion)
      }}
    >
      {children}
    </RegionContext.Provider>
  );
};

// then make a consumer which will surface it
const RegionConsumer = RegionContext.Consumer;

export default RegionProvider;
export { RegionConsumer, RegionContext };
