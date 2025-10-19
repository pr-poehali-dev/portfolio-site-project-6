import { useState, useEffect } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const skills = [
    { name: 'UI/UX Design', level: 95, icon: 'Palette' },
    { name: 'Frontend Development', level: 90, icon: 'Code' },
    { name: 'Brand Identity', level: 85, icon: 'Sparkles' },
    { name: 'Motion Design', level: 80, icon: 'Film' },
  ];

  const projects = [
    {
      id: 1,
      title: 'E-commerce Platform',
      category: 'Web Design',
      image: 'https://cdn.poehali.dev/projects/2d38eeee-1d8d-4633-9f27-b935e4507b71/files/14cb0c49-495d-4fd3-a466-4c01b49723db.jpg',
    },
    {
      id: 2,
      title: 'Mobile Banking App',
      category: 'UI/UX',
      image: 'https://cdn.poehali.dev/projects/2d38eeee-1d8d-4633-9f27-b935e4507b71/files/8bf1f324-212b-4177-9b07-454aad5148b3.jpg',
    },
    {
      id: 3,
      title: 'Brand Redesign',
      category: 'Branding',
      image: 'https://cdn.poehali.dev/projects/2d38eeee-1d8d-4633-9f27-b935e4507b71/files/30239ec1-9396-4fed-b613-429b5fa4ea5a.jpg',
    },
    {
      id: 4,
      title: 'SaaS Dashboard',
      category: 'Web App',
      image: 'https://cdn.poehali.dev/projects/2d38eeee-1d8d-4633-9f27-b935e4507b71/files/04737225-981f-4deb-8763-115aad98fa31.jpg',
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold tracking-tight mb-6">
            Дизайн это <br />
            <span className="text-primary">простота</span>
          </h1>
          <p className="text-xl sm:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Создаю цифровые продукты, которые работают красиво и понятно
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button size="lg" className="gap-2">
              Посмотреть работы
              <Icon name="ArrowRight" size={20} />
            </Button>
            <Button size="lg" variant="outline" className="gap-2">
              Связаться
              <Icon name="Mail" size={20} />
            </Button>
          </div>
        </div>
      </section>

      <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                <Icon name="User" size={120} className="text-primary/40" />
              </div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <h2 className="text-4xl sm:text-5xl font-bold mb-6">Обо мне</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Привет! Я дизайнер и разработчик с 5-летним опытом создания 
                цифровых продуктов. Специализируюсь на минималистичном дизайне, 
                который решает бизнес-задачи.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                Работал с компаниями от стартапов до корпораций. Верю, что 
                лучший дизайн — это тот, который незаметен для пользователя.
              </p>
              <div className="flex gap-4">
                <Button variant="outline" size="icon" className="rounded-full">
                  <Icon name="Github" size={20} />
                </Button>
                <Button variant="outline" size="icon" className="rounded-full">
                  <Icon name="Linkedin" size={20} />
                </Button>
                <Button variant="outline" size="icon" className="rounded-full">
                  <Icon name="Twitter" size={20} />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold mb-16 text-center">Навыки</h2>
          <div className="space-y-8">
            {skills.map((skill, index) => (
              <div
                key={skill.name}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <Icon name={skill.icon} size={24} className="text-primary" />
                    <span className="text-lg font-medium">{skill.name}</span>
                  </div>
                  <span className="text-sm text-muted-foreground">{skill.level}%</span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div
                    className="h-full bg-primary transition-all duration-1000 ease-out"
                    style={{
                      width: isVisible ? `${skill.level}%` : '0%',
                      transitionDelay: `${index * 0.1 + 0.3}s`,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold mb-16 text-center">Портфолио</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card
                key={project.id}
                className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="aspect-[4/3] overflow-hidden bg-muted">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <p className="text-sm text-primary font-medium mb-2">{project.category}</p>
                  <h3 className="text-2xl font-semibold">{project.title}</h3>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-muted-foreground">
            © 2024 Портфолио. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;