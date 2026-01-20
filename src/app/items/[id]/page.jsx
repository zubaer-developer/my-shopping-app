const ItemDetails = async ({ params }) => {
  // get id from url
  const { id } = await params;

  // get data that id from server
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/items/${id}`,
  );
  const item = await response.json();

  return (
    <div className="p-10 border-4 border-dashed border-purple-400">
      <h1 className="text-2xl font-bold">Product Details: {item.name}</h1>

      <div className="mt-6 flex flex-col md:flex-row gap-10">
        <img
          src={item.image}
          alt={item.name}
          className="w-80 h-60 object-cover border"
        />

        <div>
          <p className="text-xl text-gray-700">
            <strong>Description:</strong> {item.description}
          </p>
          <p className="text-2xl text-blue-600 font-bold mt-4">
            Price: ${item.price}
          </p>
          <button className="mt-6 bg-green-600 text-white px-6 py-2 rounded">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemDetails;
