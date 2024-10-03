import React, { useEffect, useState } from "react";

const CardComp = ({ data }) => {
  const [showData, setShowData] = useState({});
  console.log(showData);

//   const {} = showData?.
  useEffect(() => {
    setShowData(data);
  }, [data]);
  return <></>;
};
export default CardComp;
