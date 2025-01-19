"use server";

import React from "react";
import { Resend } from "resend";
import { validateString, getErrorMessage } from "@/lib/utils";
import ContactFormEmail from "@/email/contact-form-email";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get("senderEmail");
  const message = formData.get("message");

  // Ensure senderEmail and message are not null/undefined and valid
  if (!senderEmail || !validateString(senderEmail, 500) || !/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(senderEmail.toString())) {
    return {
      error: "Invalid sender email",
    };
  }
  if (!message || !validateString(message, 5000)) {
    return {
      error: "Invalid message",
    };
  }

  // Log the sender email and message for debugging
  console.log("Sender Email:", senderEmail);
  console.log("Message:", message);

  let data;
  try {
    data = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: "deysayandeepdev@gmail.com",
      subject: "Message from contact form",
      reply_to: senderEmail.toString(), 
      react: React.createElement(ContactFormEmail, {
        message: message.toString(),
        senderEmail: senderEmail.toString(),
      }),
    });
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    };
  }

  return {
    data,
  };
};