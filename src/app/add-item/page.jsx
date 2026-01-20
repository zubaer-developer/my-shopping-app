"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AddItemPage() {
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    description: "",
    image: "",
  });
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/items`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      alert("Product Added Successfully!");
      router.push("/items");
    }
  };

  return (
    <div className="p-10 flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-6">Add New Product</h1>
      <form
        onSubmit={handleSubmit}
        className="border-2 border-black p-8 space-y-4 w-full max-w-md"
      >
        <input
          type="text"
          placeholder="Item Name"
          className="border p-2 w-full"
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          required
        />
        <input
          type="number"
          placeholder="Price"
          className="border p-2 w-full"
          onChange={(e) => setFormData({ ...formData, price: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Image URL"
          className="border p-2 w-full"
          onChange={(e) => setFormData({ ...formData, image: e.target.value })}
          required
        />
        <textarea
          placeholder="Description"
          className="border p-2 w-full"
          onChange={(e) =>
            setFormData({ ...formData, description: e.target.value })
          }
          required
        />
        <button type="submit" className="bg-black text-white px-4 py-2 w-full">
          Add Item
        </button>
      </form>
    </div>
  );
}
