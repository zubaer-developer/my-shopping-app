"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  PlusCircle,
  Package,
  DollarSign,
  Image as ImageIcon,
  AlignLeft,
  Send,
  CheckCircle2,
} from "lucide-react";

export default function AddItemPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    image: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/items`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          price: parseFloat(formData.price),
        }),
      });

      if (response.ok) {
        alert("Item Added Successfully!");
        router.push("/items");
      }
    } catch (error) {
      console.error("Error adding item:", error);
      alert("Something went wrong!");
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 pt-32 pb-20 px-6 relative overflow-hidden">
      {/* Decorative Blur Background */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[120px] -z-10"></div>

      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-12 text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs font-black tracking-widest uppercase mb-4">
            <CheckCircle2 size={14} /> Admin Dashboard
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
            Add New <span className="text-blue-600">Product</span>
          </h1>
          <p className="mt-4 text-slate-500 dark:text-slate-400 font-medium">
            Only logged-in users can see this page. Fill in the details to list
            a new item.
          </p>
        </div>

        {/* add item form */}
        <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6 bg-white dark:bg-slate-900 p-8 rounded-[2.5rem] shadow-xl border border-slate-100 dark:border-slate-800">
            {/* Item Name */}
            <div className="space-y-2">
              <label className="text-xs font-black uppercase tracking-widest text-slate-400 flex items-center gap-2 ml-1">
                <Package size={14} /> Item Name
              </label>
              <input
                type="text"
                placeholder="e.g. Mechanical Keyboard"
                className="w-full p-4 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-all dark:text-white"
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                required
              />
            </div>

            {/* Price */}
            <div className="space-y-2">
              <label className="text-xs font-black uppercase tracking-widest text-slate-400 flex items-center gap-2 ml-1">
                <DollarSign size={14} /> Price ($)
              </label>
              <input
                type="number"
                placeholder="99.99"
                className="w-full p-4 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-all dark:text-white"
                onChange={(e) =>
                  setFormData({ ...formData, price: e.target.value })
                }
                required
              />
            </div>

            {/* Image URL */}
            <div className="space-y-2">
              <label className="text-xs font-black uppercase tracking-widest text-slate-400 flex items-center gap-2 ml-1">
                <ImageIcon size={14} /> Image URL
              </label>
              <input
                type="text"
                placeholder="https://images.pexels.com/..."
                className="w-full p-4 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-all dark:text-white"
                onChange={(e) =>
                  setFormData({ ...formData, image: e.target.value })
                }
                required
              />
            </div>
          </div>

          <div className="space-y-6 flex flex-col">
            <div className="flex-1 bg-white dark:bg-slate-900 p-8 rounded-[2.5rem] shadow-xl border border-slate-100 dark:border-slate-800 space-y-4">
              {/* Description */}
              <label className="text-xs font-black uppercase tracking-widest text-slate-400 flex items-center gap-2 ml-1">
                <AlignLeft size={14} /> Description
              </label>
              <textarea
                placeholder="Tell us about the product features..."
                rows={8}
                className="w-full p-4 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-all dark:text-white resize-none"
                onChange={(e) =>
                  setFormData({ ...formData, description: e.target.value })
                }
                required
              ></textarea>
            </div>

            <button className="mt-6 w-full py-5 bg-blue-600 hover:bg-blue-500 text-white font-black rounded-[1.5rem] shadow-2xl shadow-blue-500/30 transition-all flex items-center justify-center gap-3 transform active:scale-95 group">
              <PlusCircle size={24} />
              PUBLISH ITEM
              <Send
                size={18}
                className="group-hover:translate-x-2 group-hover:-translate-y-1 transition-transform"
              />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
