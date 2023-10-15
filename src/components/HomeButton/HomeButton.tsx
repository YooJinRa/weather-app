"use client";

import { useRouter } from "next/navigation";
import React from "react";

const HomeButton = () => {
  const router = useRouter();
  const handleClick = () => {
    router.push("/");
  };
  return (
    <button type="button" onClick={handleClick}>
      홈으로
    </button>
  );
};

export default HomeButton;
