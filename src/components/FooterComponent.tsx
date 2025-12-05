const Footer = () => {
  return (
    <footer className="relative z-10 bg-gray-950 text-white px-6 md:px-12 lg:px-20 py-16 md:py-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center">
                <img src="/logo.jpg" alt="logo" className="rounded-xl"/>
              </div>
              <span className="text-xl font-bold">springmedia</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Wir bauen Social-Media-Systeme, die planbar Kunden und Wachstum bringen.
            </p>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Preise</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Leistungen</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Reviews</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Q&A</a></li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Legal Pages</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Impressum</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">AGB</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Widerrufsbelehrung</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Datenschutzerklärung</a></li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Socials</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Instagram</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">TikTok</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">YouTube</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">LinkedIn</a></li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-gray-800">
          <p className="text-gray-500 text-sm">Copyright 2026 to Spring Media</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;