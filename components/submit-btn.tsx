"use client";

import React, { useState } from "react";

export default function SubmitBtn() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleClick = () => {
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
    }, 2000);
  };

  return (
    <button
      type="submit"
      className={`h-12 rounded-lg bg-blue-500 text-white ${
        isSubmitting ? "opacity-50 cursor-not-allowed" : ""
      }`}
      disabled={isSubmitting}
      onClick={handleClick}
    >
      {isSubmitting ? "Submitting..." : "Submit"}
    </button>
  );
}