"use client";

import { useState } from "react";

export default function Page() {
  const [formData, setFormData] = useState({
    onoma: "",
    eponymo: "",
    patronymo: "",
    eponymia: "",
    dieythinsi: "",
    tk: "",
    poli: "",
    syneterismos: "",
    afm: "",
    dou: "",
    tautotita: "",
    amka: "",
    tilefono: "",
  });

  const [errors, setErrors] = useState<string[]>([]);
  const [success, setSuccess] = useState("");

  const requiredFields = {
    onoma: "Όνομα",
    eponymo: "Επώνυμο",
    patronymo: "Πατρώνυμο",
    eponymia: "Επωνυμία",
    dieythinsi: "Διεύθυνση",
    tk: "Τ.Κ.",
    poli: "Πόλη",
    syneterismos: "Συνεταιρισμός",
    afm: "ΑΦΜ",
    dou: "Δ.Ο.Υ.",
    tautotita: "Αριθμός Ταυτότητας",
    amka: "ΑΜΚΑ",
    tilefono: "Τηλέφωνο",
  };

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSuccess("");
    const newErrors: string[] = [];

    Object.entries(requiredFields).forEach(([key, label]) => {
      if (!formData[key as keyof typeof formData].trim()) {
        newErrors.push(`Παρακαλώ συμπληρώστε: ${label}`);
      }
    });

    if (newErrors.length > 0) {
      setErrors(newErrors);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      setErrors([]);
      setSuccess("Επιτυχής καταχώρηση!");
      window.scrollTo({ top: 0, behavior: "smooth" });

      console.log("Submitted Data:", formData);

      // optional: reset fields
      setFormData(
        Object.fromEntries(Object.keys(formData).map((k) => [k, ""])) as any
      );
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="w-full max-w-3xl bg-white shadow-md rounded-xl p-8">
        <h1 className="text-2xl font-semibold mb-6 text-center">
          Καταχώρηση Πελάτη
        </h1>

        {errors.length > 0 && (
          <ul className="mb-4 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg">
            {errors.map((err, idx) => (
              <li key={idx} className="text-sm">
                {err}
              </li>
            ))}
          </ul>
        )}

        {success && (
          <p className="mb-4 bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg text-center font-medium">
            {success}
          </p>
        )}

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          {Object.entries(requiredFields).map(([key, label]) => (
            <div key={key} className="flex flex-col">
              <label className="text-sm font-medium mb-1">{label}</label>
              <input
                type="text"
                name={key}
                value={formData[key as keyof typeof formData]}
                onChange={handleChange}
                className="border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
          ))}

          <div className="col-span-1 md:col-span-2">
            <button
              type="submit"
              className="w-full bg-orange-600 hover:bg-orange-700 text-white py-2 mt-4 rounded-lg font-semibold transition"
            >
              Καταχώρηση
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
