import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowLeft, BookOpen, Users, Clock, Award } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ProgramStudi = () => {
  const navigate = useNavigate();

  const programs = [
    {
      name: "Teknik Informatika",
      degree: "S1",
      duration: "4 tahun",
      capacity: "120 mahasiswa/tahun",
      description: "Program studi yang mempelajari dan menerapkan prinsip-prinsip ilmu komputer dan analisis matematis dalam perancangan, pengujian, dan evaluasi sistem operasi, perangkat lunak, dan kinerja komputer.",
      features: ["Artificial Intelligence", "Cyber Security", "Software Engineering", "Data Science"],
      accreditation: "A"
    },
    {
      name: "Sistem Informasi",
      degree: "S1",
      duration: "4 tahun",
      capacity: "100 mahasiswa/tahun",
      description: "Fokus pada pengembangan dan pengelolaan sistem informasi untuk mendukung proses bisnis organisasi dengan memanfaatkan teknologi informasi.",
      features: ["Business Intelligence", "Enterprise Systems", "Digital Business", "IT Governance"],
      accreditation: "A"
    },
    {
      name: "Manajemen",
      degree: "S1",
      duration: "4 tahun",
      capacity: "150 mahasiswa/tahun",
      description: "Mempelajari pengelolaan sumber daya organisasi untuk mencapai tujuan secara efektif dan efisien dalam lingkungan bisnis yang dinamis.",
      features: ["Strategic Management", "Financial Management", "Marketing", "Human Resources"],
      accreditation: "B+"
    },
    {
      name: "Akuntansi",
      degree: "S1",
      duration: "4 tahun",
      capacity: "100 mahasiswa/tahun",
      description: "Program studi yang mempelajari pencatatan, pengklasifikasian, dan pelaporan transaksi keuangan suatu organisasi.",
      features: ["Financial Accounting", "Auditing", "Taxation", "Management Accounting"],
      accreditation: "B+"
    },
    {
      name: "Ilmu Komunikasi",
      degree: "S1",
      duration: "4 tahun",
      capacity: "80 mahasiswa/tahun",
      description: "Mempelajari proses penyampaian pesan, ide, dan informasi melalui berbagai media komunikasi di era digital.",
      features: ["Digital Media", "Public Relations", "Journalism", "Broadcasting"],
      accreditation: "B"
    },
    {
      name: "Hukum",
      degree: "S1",
      duration: "4 tahun",
      capacity: "120 mahasiswa/tahun",
      description: "Program studi yang mempelajari sistem hukum, peraturan perundang-undangan, dan penerapannya dalam kehidupan bermasyarakat.",
      features: ["Criminal Law", "Business Law", "Constitutional Law", "International Law"],
      accreditation: "B+"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <div className="container mx-auto px-4 py-8">
        <Button
          onClick={() => navigate('/')}
          variant="ghost"
          className="mb-6 hover:bg-secondary/50"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Kembali ke Beranda
        </Button>

        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4 font-serif">
            Program Studi
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Pilih program studi yang sesuai dengan minat dan bakat Anda. Kami menawarkan berbagai program berkualitas dengan kurikulum terkini.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {programs.map((program, index) => (
            <Card 
              key={index} 
              className="p-6 hover:shadow-elegant transition-all duration-300 border-border/50 bg-card/50 backdrop-blur-sm group hover:scale-105"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-primary font-serif mb-2">
                    {program.name}
                  </h3>
                  <div className="flex gap-2 mb-3">
                    <Badge variant="secondary">{program.degree}</Badge>
                    <Badge variant="outline">Akreditasi {program.accreditation}</Badge>
                  </div>
                </div>
                <BookOpen className="h-8 w-8 text-primary opacity-50 group-hover:opacity-100 transition-opacity" />
              </div>

              <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                {program.description}
              </p>

              <div className="space-y-3 mb-4">
                <div className="flex items-center gap-2 text-sm">
                  <Clock className="h-4 w-4 text-primary" />
                  <span>Durasi: {program.duration}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Users className="h-4 w-4 text-primary" />
                  <span>Kapasitas: {program.capacity}</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {program.features.map((feature, idx) => (
                  <Badge key={idx} variant="secondary" className="text-xs">
                    {feature}
                  </Badge>
                ))}
              </div>

              <Button className="w-full bg-gradient-primary hover:shadow-soft group-hover:scale-105 transition-all duration-300">
                Lihat Detail
              </Button>
            </Card>
          ))}
        </div>

        <div className="bg-primary/5 rounded-3xl p-8 text-center">
          <Award className="h-12 w-12 text-primary mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-primary mb-4 font-serif">
            Bergabunglah dengan Kami
          </h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Dapatkan pendidikan berkualitas dengan fasilitas modern dan pengajar berpengalaman. 
            Wujudkan impian Anda bersama Universitas Jomok Indonesia.
          </p>
          <Button 
            size="lg" 
            className="bg-gradient-primary hover:shadow-elegant transform hover:scale-105 transition-all duration-300"
            onClick={() => navigate('/kontak')}
          >
            Daftar Sekarang
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProgramStudi;