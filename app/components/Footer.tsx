export const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-black/70 py-12">
      <div className="container mx-auto flex px-4 text-center font-serif text-xl">
        <img className="h-12 w-14 flex-none" src={'/star-logo.png'} alt="logo" />
        <div className="mx-auto flex flex-col sm:flex-row">
          <div className="p-2 text-2xl sm:p-4">All Star Tours</div>
          <div className="mx-auto p-2 text-2xl sm:p-4">204-XXX-XXXX</div>
        </div>
      </div>
    </footer>
  );
};
