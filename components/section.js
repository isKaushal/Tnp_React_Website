export default function Saction({ className, children, withcolor }) {
  return (
    <section
      className={`w-full m-14 py-10 ${withcolor ? "bg-clrbglite" : ""} `}
    >
      <div
        className={`${className} xl:w-[1280px] lg:w-[1024px] w-full mx-auto px-8`}
      >
        {children}
      </div>
    </section>
  );
}
