import {
  ArrowLeft,
  ShoppingCart,
  ShieldCheck,
  Truck,
  RefreshCcw,
  Star,
} from "lucide-react";
import Link from "next/link";

const ItemDetails = async ({ params }) => {
  // get id from url
  const { id } = await params;

  // get data that id from server
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/items/${id}`,
  );
  const item = await response.json();

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Back Button */}
        <Link
          href="/items"
          className="inline-flex items-center gap-2 text-slate-500 hover:text-blue-600 transition-colors mb-10 group font-bold"
        >
          <ArrowLeft
            size={20}
            className="group-hover:-translate-x-1 transition-transform"
          />
          Back to Collections
        </Link>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: Product Image Section */}
          <div className="relative group">
            <div className="absolute -inset-4 bg-blue-100 dark:bg-blue-900/20 rounded-[3rem] blur-2xl opacity-50 group-hover:opacity-80 transition-opacity"></div>
            <div className="relative aspect-square rounded-[3rem] overflow-hidden bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-800 shadow-2xl">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>

          {/* Right: Product Info Section */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-blue-600 font-bold uppercase tracking-widest text-sm">
                <span className="w-10 h-0.5 bg-blue-600"></span>
                Premium Quality
              </div>
              <h1 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white leading-tight">
                {item.name}
              </h1>
              <div className="flex items-center gap-4">
                <div className="flex text-yellow-400">
                  <Star size={18} fill="currentColor" />
                  <Star size={18} fill="currentColor" />
                  <Star size={18} fill="currentColor" />
                  <Star size={18} fill="currentColor" />
                  <Star size={18} fill="currentColor" />
                </div>
                <span className="text-slate-400 font-medium">
                  (120+ Customer Reviews)
                </span>
              </div>
            </div>

            <div className="p-6 bg-slate-50 dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800">
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg italic">
                "{item.description}"
              </p>
            </div>

            <div className="flex items-end gap-3">
              <span className="text-5xl font-black text-slate-900 dark:text-white">
                ${item.price}
              </span>
              <span className="text-slate-400 line-through text-xl mb-1">
                ${(item.price * 1.2).toFixed(2)}
              </span>
              <span className="bg-green-100 text-green-600 text-xs font-bold px-2 py-1 rounded-md mb-2">
                20% OFF
              </span>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <button className="flex-1 bg-blue-600 hover:bg-blue-500 text-white font-black py-5 rounded-2xl shadow-xl shadow-blue-500/20 transition-all flex items-center justify-center gap-3 active:scale-95">
                <ShoppingCart size={24} />
                ADD TO CART
              </button>
              <button className="flex-1 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-black py-5 rounded-2xl transition-all hover:opacity-90 active:scale-95">
                BUY NOW
              </button>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-3 gap-4 pt-10 border-t border-slate-100 dark:border-slate-800">
              <div className="text-center space-y-2">
                <div className="w-12 h-12 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center mx-auto text-blue-600">
                  <Truck size={20} />
                </div>
                <p className="text-[10px] font-bold uppercase tracking-tighter dark:text-slate-300">
                  Fast Shipping
                </p>
              </div>
              <div className="text-center space-y-2">
                <div className="w-12 h-12 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center mx-auto text-blue-600">
                  <ShieldCheck size={20} />
                </div>
                <p className="text-[10px] font-bold uppercase tracking-tighter dark:text-slate-300">
                  Secure Warranty
                </p>
              </div>
              <div className="text-center space-y-2">
                <div className="w-12 h-12 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center mx-auto text-blue-600">
                  <RefreshCcw size={20} />
                </div>
                <p className="text-[10px] font-bold uppercase tracking-tighter dark:text-slate-300">
                  Easy Returns
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetails;
