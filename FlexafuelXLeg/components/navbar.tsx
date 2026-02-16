export function Navbar() {
  return (
    <nav className="w-full bg-background border-b border-border sticky top-0 z-50">
      <div className="w-full px-4 sm:px-6 py-5 flex items-center justify-center">
        <div className="text-2xl sm:text-3xl font-bold text-primary italic">
          <img src="./flexafuel-logo.png" alt="" className="h-14 sm:h-12 md:h-20 w-full"/>
        </div>
      </div>
    </nav>
  );
}
