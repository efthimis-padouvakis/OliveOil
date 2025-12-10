"use client";

import { useState } from "react";

export default function MovementPage() {
  const [formData, setFormData] = useState({
    prionKleidi: "",
    dexameni: "",
    parastatiko: "",
    dofeia: "",
    imera: "",
    pelatis: "",
    proion: "",
    katharoProion: "",
    katharo: "",
    fpa: "",
    axia: "",
    ergatika: "",
    promitheies: "",
  });

  const [errors, setErrors] = useState<string[]>([]);
  const [success, setSuccess] = useState("");

  // Labels για εμφάνιση
  const requiredFields: Record<string, string> = {
    prionKleidi: "Πρώτο Κλειδί",
    dexameni: "Δεξαμενή",
    parastatiko: "Παραστατικό",
    dofeia: "Δοφεία",
    imera: "Ημερομηνία",
    pelatis: "Πελάτης",
    proion: "Προϊόν",
    katharoProion: "Καθαρό Προϊόν",
    katharo: "Καθαρό",
    fpa: "ΦΠΑ",
    axia: "Αξία",
    ergatika: "Εργατικά",
    promitheies: "Προμήθειες",
  };

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
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
      console.log("Movement Data:", formData);
    }
    setFormData(
      Object.fromEntries(Object.keys(formData).map((k) => [k, ""])) as any
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="w-full max-w-4xl bg-white shadow-md rounded-xl p-8">
        <h1 className="text-2xl font-semibold mb-6 text-center">
          Καταχώρηση Κίνησης
        </h1>

        {errors.length > 0 && (
          <ul className="mb-4 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg">
            {errors.map((err, i) => (
              <li key={i} className="text-sm">
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
            <div key={key}>
              <label className="text-sm font-medium mb-1 block">{label}</label>
              <input
                type={key === "imera" ? "date" : "text"}
                name={key}
                value={formData[key as keyof typeof formData]}
                onChange={handleChange}
                className="border rounded-lg w-full px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
          ))}

          <div className="col-span-1 md:col-span-2">
            <button
              type="submit"
              className="w-full bg-orange-600 hover:bg-orange-700 text-white py-2 mt-4 rounded-lg font-semibold transition"
            >
              Καταχώρηση Κίνησης
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
