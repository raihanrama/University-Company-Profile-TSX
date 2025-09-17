import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Mail, Phone, MapPin, Users, X } from 'lucide-react';
import { useState } from 'react';
import rectorPlaceholder from '@/assets/Fadlanr-1.jpg';
import dean1Placeholder from '@/assets/kevin.jpg';
import dean2Placeholder from '@/assets/mattew.jpg';
import dean3Placeholder from '@/assets/ardi.jpg';
import kevinPhoto from '@/assets/bimo.jpg';
import mattewPhoto from '@/assets/gilang.jpg';

interface LeadershipData {
  name: string;
  position: string;
  faculty?: string;
  image: string;
  instagram: string;
  phone: string;
  isRektor?: boolean;
  biography?: string;
  education?: string[];
  achievements?: string[];
}

interface LeadershipCardProps extends LeadershipData {
  onClick: () => void;
}

const LeadershipCard = ({ name, position, faculty, image, instagram, phone, isRektor = false, onClick }: LeadershipCardProps) => {
  return (
    <Card className={`shadow-soft hover:shadow-elegant transition-all duration-500 border-0 bg-white/60 backdrop-blur-sm hover:bg-white/80 group cursor-pointer ${isRektor ? 'lg:col-span-full max-w-md mx-auto' : ''}`} onClick={onClick}>
      <CardContent className="p-8 text-center relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-primary/5 rounded-full -translate-y-12 translate-x-12"></div>
        
        <div className="relative mb-8">
          <div className={`${isRektor ? 'w-36 h-36' : 'w-28 h-28'} mx-auto rounded-3xl overflow-hidden shadow-glass ring-4 ring-white/20 group-hover:ring-university-gold/30 transition-all duration-300`}>
            <img 
              src={image} 
              alt={name}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
          </div>
          {isRektor && (
            <Badge className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 bg-university-gold text-university-navy font-bold px-4 py-1 shadow-soft">
              Rektor
            </Badge>
          )}
        </div>
        
        <h3 className={`${isRektor ? 'text-3xl' : 'text-xl'} font-bold text-primary mb-3 font-serif`}>
          {name}
        </h3>
        
        <p className={`${isRektor ? 'text-lg' : 'text-base'} text-university-text-muted mb-2 font-medium`}>
          {position}
        </p>
        
        {faculty && (
          <p className="text-sm text-university-blue font-semibold mb-6 bg-university-blue/10 px-3 py-1 rounded-full inline-block">
            {faculty}
          </p>
        )}
        
        <div className="space-y-3 text-sm text-university-text-muted">
          <div className="flex items-center justify-center space-x-2 p-2 rounded-xl bg-white/30 hover:bg-white/50 transition-colors">
            <Mail className="h-4 w-4 text-university-blue" />
            <span className="font-medium">{instagram}</span>
          </div>
          <div className="flex items-center justify-center space-x-2 p-2 rounded-xl bg-white/30 hover:bg-white/50 transition-colors">
            <Phone className="h-4 w-4 text-university-blue" />
            <span className="font-medium">{phone}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const OrganizationalStructure = () => {
  const [selectedLeader, setSelectedLeader] = useState<LeadershipData | null>(null);

  const leadership: LeadershipData[] = [
    {
      name: "Prof. Dr. Muhamad Fadlan, S.Mok, J.Mok, Se.Mok, M.Mok",
      position: "Rektor Universitas Jomok Indonesia",
      image: rectorPlaceholder,
      instagram: "@muhamad_fadlan_",
      phone: "+62 21 1234567",
      isRektor: true,
      biography: "Prof. Dr. Muhamad Fadlan adalah seorang akademisi berpengalaman dengan lebih dari 25 tahun dalam bidang pendidikan kejomokan. Beliau memiliki visi untuk menjadikan Universitas Jomok Indonesia sebagai institusi pendidikan berkelas dunia.",
      education: ["Ph.D. Kejomokan, Ngawi University (1995)", "S2 Ambasing, Universitas Rudi Rudal (1988)", "S1 Rodog, Universitas Ngawijaya (1985)"],
      achievements: ["Penghargaan Rektor Jomok Terbaik Indonesia 2022", "Publikasi 50+ jurnal internasional", "Pembicara di 15+ konferensi internasional"]
    },
    {
      name: "Dr. Kevin Harvian, M.mok, Am.sing, Ah.ah",
      position: "Dekan",
      faculty: "Fakultas Teknik dan Ilmu Komputer Kejomokan",
      image: dean1Placeholder,
      instagram: "@kevinharvian",
      phone: "+62 21 1234568",
      biography: "Dr. Kevin Harvian adalah ahli teknologi informasi dengan spesialisasi dalam artificial intelligence dan machine learning di bidang jomok. Beliau memimpin fakultas dengan fokus pada inovasi teknologi kejomokan di masa depan.",
      education: ["Ph.D. Computer Science, AMBA (2010)", "S2 Teknik Informatika, NGW (2005)", "S1 Teknik Informatika, UIA (2003)"],
      achievements: ["Research Excellence Award 2021", "Patent holder untuk 5 teknologi AI", "Google Faculty Research Award recipient"]
    },
    {
      name: "Dr. Matthew Ahtur",
      position: "Dekan",
      faculty: "Fakultas Ekonomi dan Bisnis",
      image: dean2Placeholder,
      instagram: "@matthewaps",
      phone: "+62 21 1234569",
      biography: "Dr. Mattew adalah pakar ekonomi digital dan entrepreneurship. Beliau aktif dalam pengembangan startup ecosystem jomok di Indonesia dan memiliki pengalaman sebagai konsultan untuk berbagai perusahaan multinasional.",
      education: ["Ph.D. Economics, Ngawi School of Economics (2008)", "S2 Manajemen, AMBA (2004)", "S1 Ekonomi, Universitas Jember (2001)"],
      achievements: ["Best Business School Dean Award 2020", "Advisor untuk 20+ startup unicorn", "Author of 3 bestselling business books"]
    },
    {
      name: "Dr. Ardiansyah, Smoke, SOS, NIUNIU",
      position: "Dekan",
      faculty: "Fakultas Ilmu Sosial Ngawi",
      image: dean3Placeholder,
      instagram: "@m.ardiansyh14",
      phone: "+62 21 1234570",
      biography: "Dr. Maya Sari adalah seorang antropolog dan sosiolog yang berfokus pada studi budaya digital dan transformasi sosial. Beliau aktif dalam penelitian cross-cultural dan pengembangan program studi yang relevan dengan era digital.",
      education: ["Ph.D. Anthropology, Oxford University (2009)", "S2 Sosiologi, Universitas Indonesia (2005)", "S1 Antropologi, Universitas Gadjah Mada (2002)"],
      achievements: ["UNESCO Social Science Research Award 2019", "Published 30+ research papers", "Cultural Heritage Preservation Advocate"]
    },
    {
      name: "Dr. Bimo Widharma, M.MOK, SE.MOK, DE.SAH",
      position: "Wakil Dekan",
      faculty: "Fakultas Teknik dan Ilmu Komputer Kejomokan",
      image: kevinPhoto,
      instagram: "@bimosetiawan",
      phone: "+62 21 1234571",
      biography: "Dr. Bimo Setiawan adalah pakar dalam bidang teknologi kejomokan dengan spesialisasi dalam pengembangan sistem informasi. Beliau aktif dalam penelitian dan pengembangan teknologi kejomokan terapan.",
      education: ["Ph.D. Information Systems, MIT (2012)", "S2 Teknik Informatika, ITB (2007)", "S1 Ilmu Komputer, UI (2004)"],
      achievements: ["Best Paper Award di International Conference on Jomok Technology 2020", "Peneliti Terbaik Fakultas 2019", "Pengembang 3 aplikasi kejomokan nasional"]
    },
    {
      name: "Dr. Bopak Santoso, M.MOK, SE.MOK, DE.SAH",
      position: "Wakil Dekan",
      faculty: "Fakultas Ekonomi dan Bisnis",
      image: mattewPhoto,
      instagram: "@bopaksantoso",
      phone: "+62 21 1234572",
      biography: "Dr. Bopak Santoso adalah ahli ekonomi kejomokan dengan fokus pada manajemen keuangan dan investasi. Beliau memiliki pengalaman luas dalam konsultasi bisnis dan pengembangan kurikulum ekonomi kejomokan.",
      education: ["Ph.D. Business Economics, Harvard University (2011)", "S2 Manajemen Keuangan, Universitas Indonesia (2006)", "S1 Ekonomi, Universitas Gadjah Mada (2003)"],
      achievements: ["Financial Educator of the Year 2021", "Penulis buku 'Ekonomi Kejomokan Modern'", "Konsultan untuk 10+ perusahaan multinasional"]
    }
  ];

  return (
    <section id="struktur" className="py-32 bg-gradient-to-br from-background via-university-accent/10 to-background relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-university-blue/5 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-university-gold/5 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-flex items-center space-x-2 bg-university-blue/10 px-4 py-2 rounded-full border border-university-blue/20 mb-6">
            <Users className="h-5 w-5 text-university-blue" />
            <span className="text-sm font-semibold text-university-blue">Kepemimpinan</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold text-primary mb-8 font-serif">
            Struktur Organisasi
          </h2>
          <p className="text-xl text-university-text-muted max-w-3xl mx-auto leading-relaxed">
            Kepemimpinan visioner yang berpengalaman dalam memajukan pendidikan tinggi 
            dan mengembangkan generasi masa depan Indonesia
          </p>
        </div>

        {/* Rektor Section */}
        <div className="mb-24 animate-slide-up">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-primary mb-4 font-serif">Pimpinan Universitas</h3>
            <div className="w-32 h-1.5 bg-gradient-primary mx-auto rounded-full"></div>
          </div>
          
          <LeadershipCard
            {...leadership[0]}
            onClick={() => setSelectedLeader(leadership[0])}
          />
        </div>

        {/* Deans Section */}
        <div className="animate-scale-in">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-primary mb-4 font-serif">Para Dekan Fakultas</h3>
            <div className="w-32 h-1.5 bg-gradient-primary mx-auto rounded-full mb-4"></div>
            <p className="text-university-text-muted max-w-2xl mx-auto">
              Pemimpin fakultas yang berdedikasi dalam mengembangkan program akademik berkualitas tinggi
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {leadership.slice(1, 4).map((leader, index) => (
              <div 
                key={index}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <LeadershipCard
                  {...leader}
                  onClick={() => setSelectedLeader(leader)}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Vice Deans Section */}
        <div className="animate-scale-in mt-24">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-primary mb-4 font-serif">Wakil Dekan</h3>
            <div className="w-32 h-1.5 bg-gradient-primary mx-auto rounded-full mb-4"></div>
            <p className="text-university-text-muted max-w-2xl mx-auto">
              Wakil dekan yang mendukung pengembangan fakultas dan program akademik
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {leadership.slice(4).map((leader, index) => (
              <div 
                key={index}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <LeadershipCard
                  {...leader}
                  onClick={() => setSelectedLeader(leader)}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Contact Information */}
        <div className="mt-24 bg-gradient-card rounded-[2.5rem] p-12 md:p-16 shadow-elegant border border-white/20 backdrop-blur-sm animate-fade-in">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-primary mb-6 font-serif">
              Informasi Kontak & Kunjungan
            </h3>
            <p className="text-university-text-muted mb-8 max-w-3xl mx-auto leading-relaxed">
              Untuk informasi lebih lanjut mengenai program akademik, kerjasama, atau pertanyaan umum, 
              jangan ragu untuk menghubungi kami atau mengunjungi kampus.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="text-center p-6 rounded-2xl bg-white/30 backdrop-blur-sm">
              <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-soft">
                <MapPin className="h-8 w-8 text-primary-foreground" />
              </div>
              <h4 className="text-lg font-bold text-primary mb-2 font-serif">Alamat Kampus</h4>
              <p className="text-university-text-muted">
                Jl. Pendidikan No. 123<br />
                Ngawi, Jawa Timur, 63216<br />
                Indonesia
              </p>
            </div>
            
            <div className="text-center p-6 rounded-2xl bg-white/30 backdrop-blur-sm">
              <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-soft">
                <Phone className="h-8 w-8 text-primary-foreground" />
              </div>
              <h4 className="text-lg font-bold text-primary mb-2 font-serif">Jam Operasional</h4>
              <p className="text-university-text-muted">
                Senin - Jumat: 08:00 - 17:00<br />
                Sabtu: 08:00 - 12:00<br />
                Minggu: Tutup
              </p>
            </div>
          </div>
          
          <div className="text-center mt-8 p-6 rounded-2xl bg-university-blue/10 border border-university-blue/20">
            <p className="text-university-blue font-semibold">
              📧 Email Umum: info@uji.ac.id | 📞 Telepon: +62 21 1234567
            </p>
          </div>
        </div>
      </div>

      {/* Detail Modal */}
      <Dialog open={!!selectedLeader} onOpenChange={() => setSelectedLeader(null)}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto bg-white/95 backdrop-blur-md border-0 shadow-elegant">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-primary font-serif flex items-center gap-4">
              {selectedLeader && (
                <>
                  <div className="w-16 h-16 rounded-full overflow-hidden shadow-glass">
                    <img 
                      src={selectedLeader.image} 
                      alt={selectedLeader.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <div>{selectedLeader.name}</div>
                    <div className="text-lg text-university-text-muted font-medium">
                      {selectedLeader.position}
                    </div>
                    {selectedLeader.faculty && (
                      <div className="text-sm text-university-blue font-semibold bg-university-blue/10 px-3 py-1 rounded-full inline-block mt-2">
                        {selectedLeader.faculty}
                      </div>
                    )}
                  </div>
                </>
              )}
            </DialogTitle>
          </DialogHeader>
          
          {selectedLeader && (
            <div className="space-y-6 pt-4">
              {/* Biography */}
              <div>
                <h4 className="font-bold text-primary mb-3 font-serif text-lg">Biografi</h4>
                <p className="text-university-text-muted leading-relaxed">{selectedLeader.biography}</p>
              </div>
              
              {/* Education */}
              <div>
                <h4 className="font-bold text-primary mb-3 font-serif text-lg">Pendidikan</h4>
                <ul className="space-y-2">
                  {selectedLeader.education?.map((edu, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-university-gold rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-university-text-muted">{edu}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Achievements */}
              <div>
                <h4 className="font-bold text-primary mb-3 font-serif text-lg">Prestasi & Penghargaan</h4>
                <ul className="space-y-2">
                  {selectedLeader.achievements?.map((achievement, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-university-blue rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-university-text-muted">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Contact Information */}
              <div className="bg-gradient-card rounded-2xl p-6 border border-white/20">
                <h4 className="font-bold text-primary mb-4 font-serif text-lg">Informasi Kontak</h4>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 p-3 rounded-xl bg-white/30">
                    <Mail className="h-5 w-5 text-university-blue" />
                    <span className="text-university-text-muted font-medium">{selectedLeader.instagram}</span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 rounded-xl bg-white/30">
                    <Phone className="h-5 w-5 text-university-blue" />
                    <span className="text-university-text-muted font-medium">{selectedLeader.phone}</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default OrganizationalStructure;