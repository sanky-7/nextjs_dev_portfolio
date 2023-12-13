"use client";

import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const initValues = { name: "", email: "", subject: "", message: "" };
const initState = { isLoading: false, error: "", values: initValues };

const EmailForm = () => {
  const form = useRef();
  const [state, setState] = useState(initState);

  const { values, isLoading } = state;

  const handleChange = ({ target }) =>
    setState((prev) => ({
      ...prev,
      values: {
        ...prev.values,
        [target.name]: target.value,
      },
    }));

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_1mpsatc",
        "template_n4xhloh",
        form.current,
        "TGXZDaOk2-TVMEKHt"
      )
      .then(
        (result) => {
          console.log(result.text);
          setState(initState);
          toast.success("Message sent", {
            position: "top-left",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
        },
        (error) => {
          console.log(error.text);
          toast.error("Something went wrong!", {
            position: "top-left",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
        }
      );
    console.log(values);
  };
  return (
    <form ref={form} onSubmit={sendEmail} className="min-w-[350px] sm:w-[500px] md:w-[600px] bg-[#080b19] p-6 gap-4 card card-bordered flex flex-col">
      <div className="flex flex-col">
        <label className="font-mono text-gray-300">Name</label>
        <input
          type="text"
          name="name"
          value={values.name}
          onChange={handleChange}
          required
          placeholder="Name"
          className="bg-base-200 input input-bordered w-full placeholder:text-gray-700"
        />
      </div>
      <div className="flex flex-col">
        <label className="font-mono text-gray-300">Email</label>
        <input
          type="email"
          name="email"
          value={values.email}
          onChange={handleChange}
          required
          placeholder="xyz@gmail.com"
          className="bg-base-200 input input-bordered w-full placeholder:text-gray-700"
        />
      </div>
      <div className="flex flex-col">
        <label  className="font-mono text-gray-300">Subject</label>
        <input
          type="subject"
          name="subject"
          value={values.subject}
          onChange={handleChange}
          required
          placeholder="Topic of communication"
          className="bg-base-200 input input-bordered w-full placeholder:text-gray-700"
        />
      </div>
      <div className="flex flex-col">
        <label className="font-mono text-gray-300">Message</label>
        <textarea
          type="text"
          name="message"
          value={values.message}
          onChange={handleChange}
          required
          placeholder="Your message..."
          className="bg-base-200 h-[80px] input input-bordered w-full placeholder:text-gray-700 placeholder:pt-2"
        />
      </div>
      <button
        type="submit"
        isLoading={isLoading}
        disabled={
          !values.name || !values.email || !values.subject || !values.message
        }
        className="btn btn-outline bordered border-[#17b978] border-[2px] hover:bg-[#17b978] hover:border-[#17b978] disabled:bg-base-300 disabled:text-gray-400 disabled:border-gray-600 md:w-[200px] mt-3"
      >
        Send
      </button>
    </form>
  );
};

export default EmailForm;
