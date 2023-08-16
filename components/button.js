import Link from "next/link";

export default function Button({
  label = "Get Demo",
  link = "#",
  submit,
  justify = "center",
}) {
  return (
    <>
      {submit ? (
        <div className="p-4 flex " style={{ justifyContent: `${justify}` }}>
          <button
            type="submit"
            className="bg-clrpink px-8 py-2 rounded-full text-white font-semibold"
          >
            Submit
          </button>
        </div>
      ) : (
        <div className="p-4 flex " style={{ justifyContent: `${justify}` }}>
          <Link href={link}>
            <button className="bg-clrpink px-8 py-2 rounded-full text-white font-semibold">
              {label}
            </button>
          </Link>
        </div>
      )}
    </>
  );
}
