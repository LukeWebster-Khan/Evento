"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SearchForm() {
  const [formData, setFormData] = useState<string>("");

  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
    router.push(`/events/${formData}`);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full sm:w-[580px]">
      <input
        className="w-full h-16 rounded-lg bg-white/[7%] px-6 outline-none focus:ring-2 focus:bg-white/10 ring-accent/50 transition"
        placeholder="Search events in any city..."
        spellCheck={false}
        onChange={(e) => setFormData(e.target.value)}
        value={formData}
      />
    </form>
  );
}
