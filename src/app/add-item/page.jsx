export default function AddItemPage() {
  return (
    <div className="p-10 border-4 border-double border-red-500">
      <h1 className="text-2xl font-bold underline">Add New Item</h1>
      <p className="mt-4 text-gray-700">
        Only logged-in users can see this page.
      </p>

      {/* add item form */}
      <form className="mt-6 space-y-4 max-w-sm">
        <input
          type="text"
          placeholder="Item Name"
          className="border p-2 w-full"
        />
        <button className="bg-green-600 text-white px-4 py-2">Submit</button>
      </form>
    </div>
  );
}
