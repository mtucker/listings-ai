export const metadata = {
  title: "Properties",
};

export default function Listings() {
  return (
    <>
      <div className="w-full max-w-3/4 gap-6 justify-start">
        <h1 className="font-serif text-3xl mb-6">Listings</h1>
        <a
          href="/listings/create"
          class="inline-block rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Create a Listing
        </a>
      </div>
    </>
  );
}
