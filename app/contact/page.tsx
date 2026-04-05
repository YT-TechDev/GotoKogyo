"use client";

import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const submit = async (e:any) => {
    e.preventDefault();

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    if (res.ok) {
      alert("送信完了！");
    } else {
      alert("エラー");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 text-black">
      <form
        onSubmit={submit}
        className="bg-white p-8 rounded-xl shadow w-full max-w-md space-y-4"
      >
        <h1 className="text-2xl font-bold">お問い合わせ</h1>

        <input
          className="w-full border p-3 rounded"
          placeholder="名前"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />

        <input
          className="w-full border p-3 rounded"
          placeholder="メール"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />

        <textarea
          className="w-full border p-3 rounded h-32"
          placeholder="内容"
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
        />

        <button className="w-full bg-yellow-500 py-3 rounded font-bold">
          送信
        </button>
      </form>
    </div>
  );
}