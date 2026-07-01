"use client";

import { useState, useCallback } from "react";
import { Button } from "@/components/ui/Button";
import { Modal } from "@/components/ui/Modal";

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

function validateText(value: string): boolean {
  // Only allow letters, spaces, hyphens, apostrophes, periods, commas
  return /^[a-zA-Z\s\-'.,!?()]+$/.test(value);
}

function validateEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [showModal, setShowModal] = useState(false);

  const validateForm = useCallback((): boolean => {
    const newErrors: FormErrors = {};

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (!validateText(formData.name.trim())) {
      newErrors.name = "Name must contain only text characters";
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!validateEmail(formData.email.trim())) {
      newErrors.email = "Please enter a valid email address";
    }

    // Subject validation
    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
    } else if (!validateText(formData.subject.trim())) {
      newErrors.subject = "Subject must contain only text characters";
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }, [formData]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setShowModal(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
      setErrors({});
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error on change
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="flex flex-col gap-8" noValidate>
        <div className="flex flex-col gap-5">
          {/* Name */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="name"
              className="font-body text-sm font-medium uppercase tracking-wide text-neutral-offwhite"
            >
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              placeholder="John Doe"
              autoComplete="name"
              className="rounded-[2px] border border-neutral-dark-gray bg-neutral-card px-4 py-3 font-body text-base font-normal text-neutral-white placeholder:text-neutral-dark-gray transition-colors focus-visible:border-primary focus-visible:outline-none"
            />
            {errors.name && (
              <p className="font-body text-xs text-primary">{errors.name}</p>
            )}
          </div>

          {/* Email */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="email"
              className="font-body text-sm font-medium uppercase tracking-wide text-neutral-offwhite"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="you@example.com"
              autoComplete="email"
              className="rounded-[2px] border border-neutral-dark-gray bg-neutral-card px-4 py-3 font-body text-base font-normal text-neutral-white placeholder:text-neutral-dark-gray transition-colors focus-visible:border-primary focus-visible:outline-none"
            />
            {errors.email && (
              <p className="font-body text-xs text-primary">{errors.email}</p>
            )}
          </div>

          {/* Subject */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="subject"
              className="font-body text-sm font-medium uppercase tracking-wide text-neutral-offwhite"
            >
              Subject
            </label>
            <input
              id="subject"
              name="subject"
              type="text"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Project inquiry"
              className="rounded-[2px] border border-neutral-dark-gray bg-neutral-card px-4 py-3 font-body text-base font-normal text-neutral-white placeholder:text-neutral-dark-gray transition-colors focus-visible:border-primary focus-visible:outline-none"
            />
            {errors.subject && (
              <p className="font-body text-xs text-primary">{errors.subject}</p>
            )}
          </div>

          {/* Message */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="message"
              className="font-body text-sm font-medium uppercase tracking-wide text-neutral-offwhite"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell me about your project..."
              className="resize-none rounded-[2px] border border-neutral-dark-gray bg-neutral-card px-4 py-3 font-body text-base font-normal text-neutral-white placeholder:text-neutral-dark-gray transition-colors focus-visible:border-primary focus-visible:outline-none"
            />
            {errors.message && (
              <p className="font-body text-xs text-primary">{errors.message}</p>
            )}
          </div>
        </div>

        <Button variant="submit" type="submit">
          Send Inquiry
        </Button>
      </form>

      {/* Confirmation Modal */}
      <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        <div className="flex flex-col items-center gap-6 text-center">
          {/* Check icon */}
          <div className="flex size-16 items-center justify-center rounded-full border-2 border-primary">
            <svg
              className="size-8 text-primary"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 12.75l6 6 9-13.5"
              />
            </svg>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="font-display text-3xl leading-none text-neutral-white">
              Thank You!
            </h3>
            <p className="font-body text-base leading-relaxed text-neutral-offwhite">
              Your inquiry has been received successfully. I&apos;m excited to
              learn more about your project and will get back to you as soon as
              possible. Looking forward to connecting!
            </p>
          </div>

          <button
            type="button"
            onClick={() => setShowModal(false)}
            className="mt-2 rounded-[2px] bg-primary px-8 py-3 font-body text-sm font-bold uppercase tracking-wider text-neutral-black transition-colors hover:bg-primary-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-card"
          >
            Got It
          </button>
        </div>
      </Modal>
    </>
  );
}
