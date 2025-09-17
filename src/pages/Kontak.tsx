import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { ArrowLeft, MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

const Kontak = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Pesan Terkirim!",
      description: "Terima kasih telah menghubungi kami. Kami akan segera merespon pesan Anda.",
    });
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Alamat",
      content: "Jl. Pendidikan No. 123, Ngawi, Jawa Timur 63216"
    },
    {
      icon: Phone,
      title: "Telepon",
      content: "+62 21 1234 5678"
    },
    {
      icon: Mail,
      title: "Email",
      content: "info@uji.ac.id"
    },
    {
      icon: Clock,
      title: "Jam Operasional",
      content: "Senin - Jumat: 08:00 - 17:00"
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
            Hubungi Kami
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Kami siap membantu Anda. Jangan ragu untuk menghubungi kami untuk informasi lebih lanjut.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <div className="space-y-6">
            <Card className="p-8 bg-card/50 backdrop-blur-sm border-border/50">
              <h2 className="text-2xl font-bold text-primary mb-6 font-serif">
                Kirim Pesan
              </h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="name">Nama Lengkap</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    placeholder="Masukkan nama Anda"
                    required
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    placeholder="email@example.com"
                    required
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="subject">Subjek</Label>
                  <Input
                    id="subject"
                    value={formData.subject}
                    onChange={(e) => setFormData({...formData, subject: e.target.value})}
                    placeholder="Subjek pesan Anda"
                    required
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="message">Pesan</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    placeholder="Tulis pesan Anda di sini..."
                    rows={5}
                    required
                    className="mt-1"
                  />
                </div>
                <Button 
                  type="submit"
                  className="w-full bg-gradient-primary hover:shadow-elegant transform hover:scale-105 transition-all duration-300"
                >
                  <Send className="mr-2 h-4 w-4" />
                  Kirim Pesan
                </Button>
              </form>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="p-8 bg-card/50 backdrop-blur-sm border-border/50">
              <h2 className="text-2xl font-bold text-primary mb-6 font-serif">
                Informasi Kontak
              </h2>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 rounded-lg hover:bg-secondary/30 transition-colors">
                    <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center flex-shrink-0">
                      <info.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">{info.title}</h3>
                      <p className="text-muted-foreground">{info.content}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="p-8 bg-primary/5 border-primary/20">
              <h3 className="text-xl font-bold text-primary mb-4 font-serif">
                Kunjungi Kampus Kami
              </h3>
              <p className="text-muted-foreground mb-4">
                Kami mengundang Anda untuk mengunjungi kampus kami dan merasakan langsung atmosfer akademik yang inspiratif.
              </p>
              <Button 
                variant="outline" 
                className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                Jadwalkan Kunjungan
              </Button>
            </Card>
          </div>
        </div>

        <div className="bg-card/50 backdrop-blur-sm rounded-3xl p-8 border border-border/50">
          <div className="aspect-video rounded-xl bg-muted flex items-center justify-center">
            <MapPin className="h-12 w-12 text-muted-foreground" />
            <span className="ml-4 text-muted-foreground">Peta Lokasi Kampus</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Kontak;