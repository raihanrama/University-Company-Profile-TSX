import { Button } from '@/components/ui/button';
import { GraduationCap, Users, Award, ArrowRight, Sparkles } from 'lucide-react';
import universityHero from '@/assets/university-hero.jpg';

const Hero = () => {
  return (
    <section id="beranda" className="relative min-h-screen flex items-center overflow-hidden pt-20">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-105"
        style={{ backgroundImage: `url(${universityHero})` }}
      >
        <div className="absolute inset-0 bg-gradient-hero opacity-85"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/20"></div>
      </div>
      
      {/* Floating elements */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-university-gold/10 rounded-full blur-xl animate-float"></div>
      <div className="absolute bottom-40 left-10 w-24 h-24 bg-university-light-blue/10 rounded-full blur-xl animate-float" style={{animationDelay: '1s'}}></div>
      
      <div className="relative container mx-auto px-4 py-20 z-10">
        <div className="max-w-5xl mx-auto text-center text-white">
          <div className="animate-fade-in">
            <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight font-serif">
              <span className="block">Universitas</span>
              <span className="block bg-gradient-to-r from-university-gold via-yellow-300 to-university-gold bg-clip-text text-transparent animate-scale-in">
                Jomok Indonesia
              </span>
            </h1>
          </div>
          
          <div className="animate-slide-up">
            <p className="text-xl md:text-2xl mb-12 text-white/90 max-w-4xl mx-auto leading-relaxed font-light">
              Membangun masa depan bangsa melalui pendidikan berkualitas tinggi, 
              penelitian inovatif, dan pengabdian kepada masyarakat yang berkelanjutan
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <Button 
                size="lg" 
                onClick={() => document.getElementById('tentang')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-university-gold hover:bg-university-gold/90 text-university-navy font-bold px-10 py-6 text-lg rounded-2xl shadow-glass transform hover:scale-105 hover:shadow-elegant transition-all duration-300 group"
              >
                Pelajari Lebih Lanjut
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                onClick={() => window.location.href = '/program-studi'}
                className="border-2 border-university-gold text-university-gold hover:bg-university-gold hover:text-university-navy backdrop-blur-md font-bold px-10 py-6 text-lg rounded-2xl hover:shadow-glass transform hover:scale-105 transition-all duration-300"
              >
                Program Studi
              </Button>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: GraduationCap,
                title: "Pendidikan Berkualitas",
                description: "Program akademik yang disesuaikan dengan kebutuhan industri 4.0 dan revolusi digital"
              },
              {
                icon: Users,
                title: "Komunitas Global",
                description: "Lingkungan multikultural yang mendukung pengembangan soft skills dan leadership"
              },
              {
                icon: Award,
                title: "Prestasi Unggul",
                description: "Komitmen terhadap keunggulan akademik dengan standar internasional"
              }
            ].map((item, index) => (
              <div 
                key={index} 
                className="text-center group animate-fade-in backdrop-blur-md bg-white/5 p-8 rounded-3xl border border-white/10 hover:bg-white/10 transition-all duration-500 hover:shadow-glass"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="w-20 h-20 bg-gradient-glass rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-soft">
                  <item.icon className="h-10 w-10 text-university-gold" />
                </div>
                <h3 className="text-xl font-bold mb-4 font-serif">{item.title}</h3>
                <p className="text-white/80 leading-relaxed font-light">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;