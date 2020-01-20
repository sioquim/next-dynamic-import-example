import React from "react";
import cowsay from "cowsay-browser";

function CowsayHi({ message }) {
  return <pre>{cowsay.say({ text: message || "hi there!" })}</pre>;
}

export default CowsayHi;
