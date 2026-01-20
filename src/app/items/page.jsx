const ItemsPage = async () => {
  // data fetch
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/items`);
  const items = await response.json();

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6 underline">Product List</h1>

      {/* data map */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {items.map((item) => (
          <div
            key={item.id}
            className="border-2 border-gray-300 p-4 rounded shadow-md"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-40 object-cover mb-2"
            />
            <h2 className="font-bold text-lg">{item.name}</h2>
            <p className="text-gray-600 text-sm">{item.description}</p>
            <p className="text-blue-600 font-bold mt-2">Price: ${item.price}</p>

            <button className="mt-3 bg-black text-white px-4 py-1 rounded w-full">
              View Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemsPage;
