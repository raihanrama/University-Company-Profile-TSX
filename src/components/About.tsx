import { Card, CardContent } from '@/components/ui/card';
import { BookOpen, Lightbulb, Target, Globe, TrendingUp, Heart } from 'lucide-react';

const About = () => {
  return (
    <section id="tentang" className="py-32 bg-gradient-elegant relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-10 right-10 w-72 h-72 bg-university-light-blue/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-university-accent/20 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-flex items-center space-x-2 bg-university-blue/10 px-4 py-2 rounded-full border border-university-blue/20 mb-6">
            <Heart className="h-5 w-5 text-university-blue" />
            <span className="text-sm font-semibold text-university-blue">Tentang Kami</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold text-primary mb-8 font-serif leading-tight">
            Universitas Jomok
            <span className="block text-university-light-blue">Indonesia</span>
          </h2>
          
          <p className="text-xl text-university-text-muted max-w-4xl mx-auto leading-relaxed font-light">
            Lebih dari sekadar institusi pendidikan, kami adalah ekosistem pembelajaran yang 
            memadukan tradisi akademik dengan inovasi masa depan untuk menciptakan pemimpin yang visioner.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="animate-slide-up">
            <h3 className="text-4xl font-bold text-primary mb-8 font-serif">Visi & Misi Kami</h3>
            
            <div className="space-y-8">
              <div className="group">
                <div className="flex items-start space-x-4 p-6 rounded-3xl bg-white/50 backdrop-blur-sm border border-white/20 hover:shadow-soft transition-all duration-300 hover:bg-white/70">
                  <div className="w-14 h-14 bg-gradient-primary rounded-2xl flex items-center justify-center shadow-soft group-hover:scale-110 transition-transform flex-shrink-0">
                    <Target className="h-7 w-7 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-primary mb-3 font-serif">Visi</h4>
                    <p className="text-university-text-muted leading-relaxed">
                      Menjadi universitas unggul yang menghasilkan lulusan Jomok 
                      dan berdaya saing global pada tahun 2030 dengan standar kelas dunia.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="group">
                <div className="flex items-start space-x-4 p-6 rounded-3xl bg-white/50 backdrop-blur-sm border border-white/20 hover:shadow-soft transition-all duration-300 hover:bg-white/70">
                  <div className="w-14 h-14 bg-gradient-primary rounded-2xl flex items-center justify-center shadow-soft group-hover:scale-110 transition-transform flex-shrink-0">
                    <Globe className="h-7 w-7 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-primary mb-3 font-serif">Misi</h4>
                    <ul className="text-university-text-muted space-y-2 leading-relaxed">
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-university-gold rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        Menyelenggarakan pendidikan tinggi Kejomokan berkualitas dengan standar internasional
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-university-gold rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        Mengembangkan penelitian jomok inovatif yang berkelanjutan dan berdampak
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-university-gold rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        Melaksanakan pengabdian jomok kepada masyarakat dengan pendekatan kolaboratif
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-6 animate-scale-in">
            {[
              {
                icon: BookOpen,
                title: "Pendidikan Jomok",
                description: "Kurikulum yang mengintegrasikan hard skills dan soft skills untuk menghasilkan lulusan yang siap menghadapi kejomokan global",
                gradient: "from-blue-500 to-indigo-600"
              },
              {
                icon: Lightbulb,
                title: "Riset & Inovasi",
                description: "Pusat penelitian multidisiplin yang mendorong breakthrough dalam teknologi dan solusi sosial berkelanjutan",
                gradient: "from-purple-500 to-pink-600"
              },
              {
                icon: TrendingUp,
                title: "Pengembangan Karier Menjadi Streamer OnlyFans",
                description: "Program mentoring dan networking yang menghubungkan mahasiswa dengan industri dan alumni sukses",
                gradient: "from-green-500 to-teal-600"
              }
            ].map((item, index) => (
              <Card 
                key={index} 
                className="shadow-soft hover:shadow-elegant transition-all duration-500 border-0 bg-white/60 backdrop-blur-sm hover:bg-white/80 group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className={`w-14 h-14 bg-gradient-to-br ${item.gradient} rounded-2xl flex items-center justify-center mr-4 shadow-soft group-hover:scale-110 transition-transform`}>
                      <item.icon className="h-7 w-7 text-white" />
                    </div>
                    <h4 className="text-xl font-bold text-primary font-serif">{item.title}</h4>
                  </div>
                  <p className="text-university-text-muted leading-relaxed">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="text-center bg-gradient-card rounded-[2.5rem] p-12 md:p-16 shadow-elegant animate-fade-in border border-white/20 backdrop-blur-sm">
          <h3 className="text-4xl font-bold text-primary mb-8 font-serif">
            Bergabunglah dengan Keluarga Besar UJI
          </h3>
          <p className="text-xl text-university-text-muted mb-12 max-w-4xl mx-auto leading-relaxed">
            Wujudkan impian akademik Anda bersama komunitas pembelajar yang inspiratif. 
            Kami berkomitmen untuk mengembangkan potensi terbaik setiap individu menuju kesuksesan yang berkelanjutan.
          </p>
          
          <div className="grid sm:grid-cols-3 gap-8 max-w-2xl mx-auto">
            {[
              { number: "15+", label: "Program Studi Terakreditasi" },
              { number: "5,000+", label: "Mahasiswa Aktif" },
              { number: "200+", label: "Dosen Berpengalaman" }
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="text-4xl font-bold text-university-blue mb-2 font-serif group-hover:scale-110 transition-transform">{stat.number}</div>
                <div className="text-university-text-muted font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;