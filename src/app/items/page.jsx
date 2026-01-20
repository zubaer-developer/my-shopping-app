import Link from "next/link";
import { ShoppingBag, ArrowRight, Star } from "lucide-react";

const ItemsPage = async () => {
  // data fetch
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/items`);
  const items = await response.json();

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <h1 className="text-4xl md:text-5xl font-black tracking-tight text-slate-900 dark:text-white">
              Our <span className="text-blue-600">Collections</span>
            </h1>
            <p className="text-slate-500 dark:text-slate-400 mt-2 text-lg">
              Explore our handpicked premium items just for you.
            </p>
          </div>
          <div className="flex items-center gap-2 text-sm font-bold text-slate-400 uppercase tracking-widest">
            <span className="text-blue-600">{items.length}</span> Items Found
          </div>
        </div>

        {/* data map */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {items.map((item) => (
            <div
              key={item.id}
              className="group bg-white dark:bg-slate-900 rounded-[2.5rem] overflow-hidden border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-2xl hover:border-blue-500/20 transition-all duration-500 transform hover:-translate-y-2"
            >
              {/* Image Container */}
              <div className="relative aspect-[4/5] overflow-hidden bg-slate-100 dark:bg-slate-800">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">
                  <ShoppingBag size={18} className="text-blue-600" />
                </div>
                <div className="absolute bottom-4 left-4">
                  <div className="bg-blue-600 text-white text-[10px] font-bold px-3 py-1 rounded-full shadow-lg">
                    NEW ARRIVAL
                  </div>
                </div>
              </div>

              {/* Content Container */}
              <div className="p-6 space-y-3">
                <div className="flex justify-between items-start">
                  <h2 className="font-bold text-xl text-slate-900 dark:text-white line-clamp-1 group-hover:text-blue-600 transition-colors">
                    {item.name}
                  </h2>
                </div>

                <p className="text-slate-500 dark:text-slate-400 text-sm line-clamp-2 leading-relaxed">
                  {item.description}
                </p>

                <div className="flex items-center gap-1 text-yellow-400">
                  <Star size={14} fill="currentColor" />
                  <Star size={14} fill="currentColor" />
                  <Star size={14} fill="currentColor" />
                  <Star size={14} fill="currentColor" />
                  <span className="text-slate-400 text-xs ml-1">(4.8)</span>
                </div>

                <div className="pt-4 flex items-center justify-between border-t border-slate-50 dark:border-slate-800">
                  <div className="flex flex-col">
                    <span className="text-xs text-slate-400 font-bold uppercase tracking-tighter">
                      Price
                    </span>
                    <p className="text-2xl font-black text-slate-900 dark:text-white">
                      ${item.price}
                    </p>
                  </div>

                  <Link href={`/items/${item.id}`}>
                    <button className="bg-slate-900 dark:bg-white text-white dark:text-slate-900 p-4 rounded-2xl hover:bg-blue-600 dark:hover:bg-blue-600 hover:text-white transition-all shadow-lg active:scale-90">
                      <ArrowRight size={20} />
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ItemsPage;
