import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, ArrowRight, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-university-navy via-university-blue to-university-navy text-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-university-gold/5 rounded-full blur-3xl -translate-y-48 translate-x-48"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-university-light-blue/10 rounded-full blur-3xl translate-y-40 -translate-x-40"></div>
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* University Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-4 mb-8 group">
              <div className="w-16 h-16 bg-university-gold rounded-3xl flex items-center justify-center shadow-glass group-hover:scale-110 transition-transform duration-300">
                <span className="text-university-navy font-bold text-2xl font-serif">UJI</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold font-serif">Universitas Jomok Indonesia</h3>
                <p className="text-white/80 font-medium">Excellence in Education</p>
              </div>
            </div>
            
            <p className="text-white/80 mb-8 max-w-md leading-relaxed font-light text-lg">
              Membangun masa depan bangsa melalui pendidikan berkualitas tinggi, 
              penelitian inovatif, dan pengabdian kepada masyarakat yang berkelanjutan.
            </p>
            
            <div className="flex space-x-4 mb-8">
              {[
                { Icon: Facebook, href: "#", label: "Facebook" },
                { Icon: Twitter, href: "#", label: "Twitter" },
                { Icon: Instagram, href: "#", label: "Instagram" },
                { Icon: Linkedin, href: "#", label: "LinkedIn" }
              ].map(({ Icon, href, label }) => (
                <a 
                  key={label}
                  href={href} 
                  className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center hover:bg-university-gold hover:text-university-navy transition-all duration-300 hover:scale-110 hover:shadow-glass group"
                  aria-label={label}
                >
                  <Icon className="h-5 w-5 group-hover:scale-110 transition-transform" />
                </a>
              ))}
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <h4 className="text-lg font-bold mb-4 font-serif">Newsletter</h4>
              <p className="text-white/80 mb-4 text-sm">Dapatkan info terbaru tentang UJI</p>
              <div className="flex gap-2">
                <input 
                  type="email" 
                  placeholder="Email Anda..." 
                  className="flex-1 bg-white/10 border border-white/20 rounded-xl px-4 py-2 text-sm placeholder-white/60 focus:outline-none focus:border-university-gold transition-colors"
                />
                <Button size="sm" className="bg-university-gold hover:bg-university-gold/90 text-university-navy font-semibold px-4 rounded-xl">
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-8 font-serif">Navigasi</h4>
            <ul className="space-y-4">
              {[
                { label: "Beranda", href: "#beranda" },
                { label: "Tentang Kami", href: "#tentang" },
                { label: "Struktur Organisasi", href: "#struktur" },
                { label: "Program Studi", href: "#" },
                { label: "Penelitian", href: "#" },
                { label: "Pengabdian Masyarakat", href: "#" }
              ].map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href} 
                    className="text-white/80 hover:text-university-gold transition-colors font-medium flex items-center group"
                  >
                    {link.label}
                    <ArrowRight className="h-4 w-4 ml-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-bold mb-8 font-serif">Kontak</h4>
            <div className="space-y-6">
              <div className="flex items-start space-x-4 p-4 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors">
                <div className="w-10 h-10 bg-university-gold/20 rounded-xl flex items-center justify-center mt-1">
                  <MapPin className="h-5 w-5 text-university-gold" />
                </div>
                <div>
                  <p className="font-medium mb-1">Alamat</p>
                  <p className="text-white/80 text-sm">Jl. Pendidikan No. 123<br />Jakarta Selatan, 12345</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 p-4 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors">
                <div className="w-10 h-10 bg-university-gold/20 rounded-xl flex items-center justify-center">
                  <Phone className="h-5 w-5 text-university-gold" />
                </div>
                <div>
                  <p className="font-medium mb-1">Telepon</p>
                  <p className="text-white/80 text-sm">+62 21 1234567</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 p-4 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors">
                <div className="w-10 h-10 bg-university-gold/20 rounded-xl flex items-center justify-center">
                  <Mail className="h-5 w-5 text-university-gold" />
                </div>
                <div>
                  <p className="font-medium mb-1">Email</p>
                  <p className="text-white/80 text-sm">info@uji.ac.id</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 mt-16 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-white/60 text-sm">
              <p>&copy; 2024 Universitas Jomok Indonesia. Seluruh hak cipta dilindungi undang-undang.</p>
            </div>
            
            <div className="flex items-center space-x-6 text-sm">
              <a href="#" className="text-white/60 hover:text-university-gold transition-colors flex items-center">
                Kebijakan Privasi
                <ExternalLink className="h-3 w-3 ml-1" />
              </a>
              <a href="#" className="text-white/60 hover:text-university-gold transition-colors flex items-center">
                Syarat & Ketentuan
                <ExternalLink className="h-3 w-3 ml-1" />
              </a>
              <a href="#" className="text-white/60 hover:text-university-gold transition-colors flex items-center">
                Sitemap
                <ExternalLink className="h-3 w-3 ml-1" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;