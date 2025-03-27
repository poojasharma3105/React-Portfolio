import React, { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" }); // Clear error when user types
  };

  const validate = () => {
    let newErrors = {};
    if (!form.name.trim()) newErrors.name = "Name is required.";
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email))
      newErrors.email = "Valid email is required.";
    if (!form.message.trim()) newErrors.message = "Message cannot be empty.";
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
  
    setIsSubmitting(true);
    try {
      const formDataToSend = new FormData();
      formDataToSend.append("name", form.name);
      formDataToSend.append("email", form.email);
      formDataToSend.append("message", form.message);
  
      const response = await fetch("https://script.google.com/macros/s/AKfycbwbUHZLbx7TaLY5vgZD6Oa90sYqJu-AwA-d8cSKuodYfVsd6ZcRb5hGI8UhbX0PmXnwPQ/exec", {
        method: "POST",
        body: formDataToSend,
      });
  
      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }
  
      setForm({ name: "", email: "", message: "" });
      alert("Form submitted successfully!");
  
      setTimeout(() => {
        setIsSubmitting(false);
      }, 3000);
    } catch (error) {
      setErrors({ form: error.message });
      setIsSubmitting(false);
    }
  };
  

  return (
    <div id="contact" className="p-6 md:p-12 md:pt-0 m-auto text-white w-full max-w-4xl">
      <h1 className="text-2xl md:text-4xl font-bold text-center mb-10">Get In Touch</h1>

      <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-md border border-cyan-500/30 shadow-lg shadow-slate-900 p-8 rounded-2xl">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm mb-1">Name</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                className="w-full p-3 rounded-md bg-gray-800 text-white border border-gray-700 focus:border-cyan-400 outline-none"
              />
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
            </div>

            <div>
              <label className="block text-sm mb-1">Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="w-full p-3 rounded-md bg-gray-800 text-white border border-gray-700 focus:border-cyan-400 outline-none"
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>
          </div>

          <div>
            <label className="block text-sm mb-1">Message</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              className="w-full h-32 p-3 rounded-md bg-gray-800 text-white border border-gray-700 focus:border-cyan-400 outline-none"
            />
            {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 rounded-md text-lg font-semibold transition-all duration-300 ${isSubmitting ? "opacity-50 cursor-not-allowed" : "hover:opacity-85 hover:scale-105"}`}
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
