import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { Button, Modal } from "flowbite-react";
import ClipLoader from "react-spinners/ClipLoader";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const override = {
    display: "block",
    margin: "0 auto",
    position: "relative",
    top: -300,
  };
  const [formData, setFormData] = useState({
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (event) => {
    setOpenModal(true);
    setIsSubmitting(true);
    setTimeout(() => setOpenModal(false), 500);
    setTimeout(() => setIsSubmitting(false), 500);
    event.preventDefault();
    emailjs.init({ publicKey: process.env.REACT_APP_EMAILJS_USER_ID });

    emailjs
      .send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }
      )
      .then(() => {
        console.log("Email envoyé avec succès !");
        setFormData({ email: "", subject: "", message: "" });
        // Close modal after 1 second

        // Gérez le succès : effacez le formulaire, affichez un message de succès, etc.
      })
      .catch((error) => {
        console.error("Echec de l'envoi de l'email :", error);
        // Gérez l'erreur : affichez un message d'erreur à l'utilisateur, etc.
      });
  };

  return (
    <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
      <h2 class="mb-4 tracking-tight text-center text-6xl font-medium text-[#17E7ED] ">
        Contact
      </h2>
      <form onSubmit={handleSubmit} class="space-y-8">
        <div>
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={(event) =>
              setFormData({ ...formData, email: event.target.value })
            }
            class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#17E7ED] focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
            placeholder="Adresse email"
            required
          />
        </div>
        <div>
          <input
            type="text"
            id="subject"
            value={formData.subject}
            onChange={(event) =>
              setFormData({ ...formData, subject: event.target.value })
            }
            class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-[#17E7ED] focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
            placeholder="Intituler"
            required
          />
        </div>
        <div class="sm:col-span-2">
          <textarea
            id="message"
            rows="6"
            value={formData.message}
            onChange={(event) =>
              setFormData({ ...formData, message: event.target.value })
            }
            class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-[#17E7ED] focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            placeholder="Laissez un message..."
            required
          ></textarea>
        </div>
        <button
          type="submit"
          class="py-3 px-5bg-transparent border text-white bg-border hover:bg-white hover:text-slate-900  font-bold py-4 px-6 rounded-full"
        >
          Envoyez un message
        </button>

        {isSubmitting && (
          <ClipLoader
            size={75}
            cssOverride={{
              display: "block",
              margin: "0 auto",
              position: "relative",
              top: -300,
            }}
            color="#17E7ED"
          />
        )}
        <Modal
          dismissible
          show={openModal}
          onClose={() => setOpenModal(false)}
        ></Modal>
      </form>
    </div>
  );
}
