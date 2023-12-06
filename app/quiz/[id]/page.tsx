import React from "react";

const Quiz = ({ params }: { params: { id: number } }) => {
  return <div>Quiz {params.id}</div>;
};

export default Quiz;
