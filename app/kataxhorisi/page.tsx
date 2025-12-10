"use client";

import { useState } from "react";

export default function OliveForm() {
  const [customer, setCustomer] = useState("");
  const [karpos, setKarpos] = useState("");
  const [poiotita, setPoiotita] = useState("02");
  const [date, setDate] = useState(() => new Date().toISOString().slice(0, 10));
  const [kila, setKila] = useState("");
  const [ardefsi, setArdefsi] = useState("1");

  // Πελάτες
  const customers = [
    { id: "000001", name: "ΑΥΓΕΝΑΚΗΣ ΙΩΑΝΝΗΣ" },
    { id: "000005", name: "ΑΝΤΩΝΑΚΑΚΗΣ ΙΩΑΝΝΗΣ" },
    { id: "000006", name: "ΑΥΓΕΝΑΚΗ ΠΕΛΑΓΙΑ" },
  ];

  // Τεμάχια
  const fields = [
    // AM = 000001
    { am: "000001", id: "5768833392015", name: "ΚΑΚΗ – 1.2στρ – 45 δέντρα" },
    { am: "000001", id: "5768841040027", name: "ΑΓΙΑ – 3.4στρ – 80 δέντρα" },

    // AM = 000005
    { am: "000005", id: "5768837873010", name: "ΤΡΙΑ – 4.7στρ – 64 δέντρα" },
    { am: "000005", id: "5768846402016", name: "ΚΑΚΗ – 0.5στρ – 7 δέντρα" },
    { am: "000005", id: "5778847573021", name: "ΧΕΛΙ – 3.3στρ – 67 δέντρα" },

    // AM = 000006
    { am: "000006", id: "5758847738025", name: "ΡΥΑΚ – 2.0στρ – 35 δέντρα" },
    { am: "000006", id: "5758850420001", name: "ΚΑΛΥ – 1.2στρ – 8 δέντρα" },
  ];

  const filteredFields = fields.filter((f) => f.am === customer);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!customer) return alert("Επιλέξτε πελάτη!");
    if (!karpos) return alert("Επιλέξτε τεμάχιο!");
    if (!kila || Number(kila) <= 0) return alert("Δώστε έγκυρα κιλά!");

    console.log("➡️ Πελάτης:", customer);
    console.log("➡️ Καρπός:", karpos);
    console.log("➡️ Ποιότητα:", poiotita);
    console.log("➡️ Ημερομηνία:", date);
    console.log("➡️ Κιλά:", kila);
    console.log("➡️ Αρδευόμενο:", ardefsi);

    alert("✔ Καταχωρήθηκε με επιτυχία!");
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="w-full max-w-lg bg-white shadow-md rounded-xl p-6">
        <h1 className="text-xl font-semibold mb-4 text-center">
          Καταχώρηση Καρπού
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Πελάτης */}
          <div className="flex flex-col">
            <label className="text-sm font-medium mb-1">Πελάτης</label>
            <select
              value={customer}
              onChange={(e) => {
                setCustomer(e.target.value);
                setKarpos("");
              }}
              className="border rounded-lg px-3 py-2"
            >
              <option value="">-- Επιλογή Πελάτη --</option>
              {customers.map((c) => (
                <option key={c.id} value={c.id}>
                  {c.name}
                </option>
              ))}
            </select>
          </div>

          {/* Καρπός */}
          <div className="flex flex-col">
            <label className="text-sm font-medium mb-1">Καρπός</label>
            <select
              value={karpos}
              onChange={(e) => setKarpos(e.target.value)}
              className="border rounded-lg px-3 py-2"
              disabled={!customer}
            >
              <option value="">-- Επιλογή Καρπού --</option>
              {filteredFields.map((k) => (
                <option key={k.id} value={k.id}>
                  {k.name}
                </option>
              ))}
            </select>
          </div>

          {/* Ποιότητα */}
          <div className="flex flex-col">
            <label className="text-sm font-medium mb-1">Ποιότητα</label>
            <select
              value={poiotita}
              onChange={(e) => setPoiotita(e.target.value)}
              className="border rounded-lg px-3 py-2"
            >
              <option value="02">Ελαιοποιήσιμες</option>
              <option value="01">Επιτραπέζιες</option>
              <option value="03">Διπλής Χρήσης</option>
            </select>
          </div>

          {/* Ημερομηνία */}
          <div className="flex flex-col">
            <label className="text-sm font-medium mb-1">
              Ημερομηνία Παράδοσης
            </label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="border rounded-lg px-3 py-2"
            />
          </div>

          {/* Κιλά */}
          <div className="flex flex-col">
            <label className="text-sm font-medium mb-1">Κιλά Καρπού</label>
            <input
              type="number"
              step="0.01"
              min="0"
              value={kila}
              onChange={(e) => setKila(e.target.value)}
              className="border rounded-lg px-3 py-2"
              placeholder="0.00"
            />
          </div>

          {/* Αρδευόμενο */}
          <div className="flex flex-col">
            <label className="text-sm font-medium mb-1">Αρδευόμενο</label>
            <select
              value={ardefsi}
              onChange={(e) => setArdefsi(e.target.value)}
              className="border rounded-lg px-3 py-2"
            >
              <option value="1">Ναι</option>
              <option value="0">Όχι</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg font-semibold transition"
          >
            Αποθήκευση
          </button>
        </form>
      </div>
    </div>
  );
}
