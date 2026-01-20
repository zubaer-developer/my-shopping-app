import {
  Zap,
  ShieldCheck,
  Globe,
  ArrowRight,
  Star,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-500">
      {/* Hero Section*/}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1600"
            className="w-full h-full object-cover opacity-20 dark:opacity-10"
            alt="Hero Background"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/50 to-white dark:via-slate-950/50 dark:to-slate-950"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 font-bold text-sm tracking-wide">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
              </span>
              NEXT.JS 15 POWERED
            </div>
            <h1 className="text-6xl md:text-8xl font-black leading-tight tracking-tighter">
              The Art of <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500">
                Innovation
              </span>
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-xl mx-auto lg:mx-0 leading-relaxed font-light">
              Experience a seamless interface designed for speed and elegance.
              Manage your products with a professional touch.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <button className="px-10 py-5 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold rounded-2xl shadow-2xl hover:scale-105 transition-all">
                Explore Shop
              </button>
              <button className="px-10 py-5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-bold rounded-2xl hover:bg-slate-50 transition-all flex items-center gap-2">
                Watch Demo{" "}
                <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center text-[10px] text-white">
                  ▶
                </div>
              </button>
            </div>
          </div>
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-[3rem] blur-2xl opacity-20 group-hover:opacity-40 transition duration-1000"></div>
            <img
              src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=800"
              className="relative rounded-[2.5rem] shadow-2xl border-8 border-white dark:border-slate-800 object-cover w-full h-[550px]"
              alt="Hero Feature"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-32 container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12">
          {[
            {
              title: "Fast Delivery",
              icon: <Zap />,
              img: "https://images.pexels.com/photos/4391470/pexels-photo-4391470.jpeg?auto=compress&cs=tinysrgb&w=400",
            },
            {
              title: "Secure Payment",
              icon: <ShieldCheck />,
              img: "https://images.pexels.com/photos/6203350/pexels-photo-6203350.jpeg?auto=compress&cs=tinysrgb&w=400",
            },
            {
              title: "Global Support",
              icon: <Globe />,
              img: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=400",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="group relative rounded-[2rem] overflow-hidden h-80 flex items-end p-8 shadow-xl"
            >
              <img
                src={item.img}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                alt={item.title}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent"></div>
              <div className="relative z-10 space-y-2">
                <div className="text-blue-400">{item.icon}</div>
                <h3 className="text-2xl font-bold text-white">{item.title}</h3>
                <p className="text-slate-300 text-sm">
                  Experience the highest standard of service in the industry.
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-slate-50 dark:bg-slate-900/50">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800"
              className="rounded-3xl shadow-2xl relative z-10"
              alt="About Team"
            />
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-blue-600 rounded-3xl -z-0 hidden md:block"></div>
          </div>
          <div className="space-y-8">
            <h2 className="text-5xl font-bold leading-tight">
              We Build Solutions That{" "}
              <span className="text-blue-600">Empower Users</span>
            </h2>
            <p className="text-lg text-slate-500 dark:text-slate-400 leading-relaxed">
              Our journey started with a simple belief: technology should be
              accessible, beautiful, and extremely efficient. We combine
              artistic design with robust code.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="p-4 bg-white dark:bg-slate-800 rounded-2xl shadow-sm border-l-4 border-blue-600">
                <div className="text-2xl font-bold">99.9%</div>
                <div className="text-sm text-slate-500">Server Uptime</div>
              </div>
              <div className="p-4 bg-white dark:bg-slate-800 rounded-2xl shadow-sm border-l-4 border-indigo-600">
                <div className="text-2xl font-bold">150k+</div>
                <div className="text-sm text-slate-500">Active Users</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Best Sellers */}
      <section className="py-32 container mx-auto px-6 text-center lg:text-left">
        <h2 className="text-4xl font-bold mb-16">Trending Products</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {[
            "https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&w=400",
            "https://images.pexels.com/photos/335257/pexels-photo-335257.jpeg?auto=compress&cs=tinysrgb&w=400",
            "https://images.pexels.com/photos/2783873/pexels-photo-2783873.jpeg?auto=compress&cs=tinysrgb&w=400",
            "https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&w=400",
          ].map((img, idx) => (
            <div key={idx} className="group cursor-pointer">
              <div className="aspect-square rounded-[2rem] overflow-hidden mb-6 relative shadow-lg">
                <img
                  src={img}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  alt="Product"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <button className="bg-white text-black px-6 py-2 rounded-full font-bold">
                    Quick View
                  </button>
                </div>
              </div>
              <h3 className="text-lg font-bold mb-1">Luxury Item 0{idx + 1}</h3>
              <div className="flex justify-between items-center px-1">
                <span className="text-blue-600 font-bold">$199.00</span>
                <span className="text-yellow-500 text-sm flex items-center gap-1">
                  <Star size={14} fill="currentColor" /> 4.8
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/graphy.png')]"></div>
        <div className="container mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-12 text-center relative z-10">
          {[
            { label: "Completed Projects", value: "2.5k" },
            { label: "Design Awards", value: "48" },
            { label: "Global Clients", value: "12k" },
            { label: "Code Commits", value: "85k" },
          ].map((stat, i) => (
            <div key={i} className="space-y-2 group">
              <div className="text-5xl font-black text-white group-hover:text-blue-400 transition-colors">
                {stat.value}
              </div>
              <div className="text-slate-500 uppercase tracking-widest text-xs font-bold">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 bg-white dark:bg-slate-950">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="text-6xl text-blue-600/20 font-serif">“</div>
            <h2 className="text-3xl md:text-4xl font-light italic leading-relaxed text-slate-800 dark:text-slate-200">
              "This platform has completely redefined how we showcase our
              inventory. The performance and design are simply world-class."
            </h2>
            <div className="flex items-center gap-4">
              <img
                src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=200"
                className="w-16 h-16 rounded-full object-cover"
                alt="User"
              />
              <div>
                <div className="font-bold text-lg">Mark Stevenson</div>
                <div className="text-blue-600">Director, TechNova Group</div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=400"
              className="rounded-2xl h-64 w-full object-cover"
              alt="Review 1"
            />
            <img
              src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=400"
              className="rounded-2xl h-64 w-full object-cover mt-12"
              alt="Review 2"
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 container mx-auto px-6">
        <div className="relative rounded-[3rem] overflow-hidden">
          <img
            src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1600"
            className="absolute inset-0 w-full h-full object-cover"
            alt="Contact Bg"
          />
          <div className="absolute inset-0 bg-blue-900/90 backdrop-blur-sm"></div>
          <div className="relative z-10 grid lg:grid-cols-2 p-12 lg:p-24 gap-16 text-white">
            <div className="space-y-8">
              <h2 className="text-5xl font-black">
                Let's Create <br /> Something Special
              </h2>
              <p className="text-blue-100/70 text-lg">
                Ready to take your business to the next level? Our experts are
                here to help you build your dream application.
              </p>
              <div className="space-y-4 pt-4">
                <div className="flex items-center gap-4">
                  <Mail className="text-blue-400" /> contact@nextdev.com
                </div>
                <div className="flex items-center gap-4">
                  <Phone className="text-blue-400" /> +880 1234-567890
                </div>
                <div className="flex items-center gap-4">
                  <MapPin className="text-blue-400" /> Dhaka, Bangladesh
                </div>
              </div>
            </div>
            <form className="bg-white/10 backdrop-blur-xl p-8 rounded-[2rem] border border-white/20 space-y-6">
              <input
                placeholder="Full Name"
                className="w-full p-4 rounded-xl bg-white/5 border border-white/10 outline-none focus:border-blue-400 transition-all"
              />
              <input
                placeholder="Email Address"
                className="w-full p-4 rounded-xl bg-white/5 border border-white/10 outline-none focus:border-blue-400 transition-all"
              />
              <textarea
                placeholder="Your Message"
                rows={4}
                className="w-full p-4 rounded-xl bg-white/5 border border-white/10 outline-none focus:border-blue-400 transition-all"
              ></textarea>
              <button className="w-full py-5 bg-blue-600 text-white font-bold rounded-xl shadow-xl hover:bg-blue-500 transition-all">
                Submit Inquiry
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
