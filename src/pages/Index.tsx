import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import ProfessionModal from "@/components/ProfessionModal";
import FeedbackForm from "@/components/FeedbackForm";

export default function Index() {
  const [selectedProfession, setSelectedProfession] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const heroAnimation = useScrollAnimation();
  const aboutAnimation = useScrollAnimation();
  const professionsAnimation = useScrollAnimation();
  const admissionAnimation = useScrollAnimation();
  const contactAnimation = useScrollAnimation();

  const professions = [
    {
      title: "Программист",
      description: "Создавай будущее с помощью кода",
      duration: "3.5 года",
      level: "Базовая подготовка",
      demand: "Высокий спрос",
      icon: "Code2",
      subjects: ["JavaScript", "Python", "React", "Базы данных", "Алгоритмы", "Веб-разработка"],
      skills: ["Создание веб-сайтов", "Мобильные приложения", "Работа с базами данных", "Командная разработка", "Тестирование кода", "Решение алгоритмических задач"],
      salary: "80-150 тыс. руб.",
      employment: ["IT-компании", "Банки", "Стартапы", "Фриланс", "Государственные учреждения", "Телеком компании"]
    },
    {
      title: "Дизайнер",
      description: "Воплощай творческие идеи в жизнь",
      duration: "3 года",
      level: "Углубленная подготовка", 
      demand: "Растущий спрос",
      icon: "Palette",
      subjects: ["Photoshop", "Illustrator", "Figma", "Типографика", "Композиция", "Цветоведение"],
      skills: ["UI/UX дизайн", "Брендинг", "Веб-дизайн", "Создание логотипов", "Работа с клиентами", "Презентация проектов"],
      salary: "60-120 тыс. руб.",
      employment: ["Дизайн-студии", "Рекламные агентства", "IT-компании", "Издательства", "Телевидение", "Фриланс"]
    },
    {
      title: "Медсестра",
      description: "Заботься о здоровье людей",
      duration: "2.5 года",
      level: "Базовая подготовка",
      demand: "Очень высокий спрос",
      icon: "Heart",
      subjects: ["Анатомия", "Сестринское дело", "Фармакология", "Гигиена", "Первая помощь", "Психология"],
      skills: ["Уход за пациентами", "Инъекции и процедуры", "Работа с медоборудованием", "Ведение документации", "Экстренная помощь", "Работа в команде"],
      salary: "45-80 тыс. руб.",
      employment: ["Больницы", "Поликлиники", "Частные клиники", "Санатории", "Скорая помощь", "Домашний уход"]
    },
    {
      title: "Повар",
      description: "Создавай кулинарные шедевры",
      duration: "2 года",
      level: "Базовая подготовка",
      demand: "Стабильный спрос",
      icon: "ChefHat",
      subjects: ["Кулинария", "Технология приготовления", "Санитария", "Калькуляция", "Товароведение", "Диетология"],
      skills: ["Приготовление блюд", "Работа с ножами", "Планирование меню", "Контроль качества", "Управление кухней", "Креативность в подаче"],
      salary: "40-100 тыс. руб.",
      employment: ["Рестораны", "Кафе", "Отели", "Кейтеринг", "Столовые", "Частный повар"]
    },
    {
      title: "Механик",
      description: "Работай с современной техникой",
      duration: "3 года",
      level: "Углубленная подготовка",
      demand: "Высокий спрос",
      icon: "Wrench",
      subjects: ["Автомеханика", "Электрооборудование", "Диагностика", "Материаловедение", "Слесарное дело", "ТО и ремонт"],
      skills: ["Диагностика неисправностей", "Ремонт двигателей", "Работа с инструментом", "Чтение схем", "Сварочные работы", "Компьютерная диагностика"],
      salary: "50-120 тыс. руб.",
      employment: ["Автосервисы", "Дилерские центры", "Транспортные компании", "Заводы", "Собственный бизнес", "Автопарки"]
    },
    {
      title: "Экономист",
      description: "Управляй финансами и бизнес-процессами",
      duration: "3.5 года",
      level: "Углубленная подготовка",
      demand: "Средний спрос",
      icon: "TrendingUp",
      subjects: ["Экономическая теория", "Бухучет", "Финансы", "Статистика", "Менеджмент", "1С:Предприятие"],
      skills: ["Финансовый анализ", "Планирование бюджета", "Работа с отчетностью", "Налоговое планирование", "Управление проектами", "Аналитическое мышление"],
      salary: "50-100 тыс. руб.",
      employment: ["Банки", "Консалтинговые фирмы", "Промышленные предприятия", "Государственные организации", "Торговые компании", "Малый бизнес"]
    }
  ];

  const advantages = [
    {
      icon: "Award",
      title: "Аккредитация",
      description: "Государственная лицензия и аккредитация программ"
    },
    {
      icon: "Users",
      title: "Опытные преподаватели",
      description: "Квалифицированные специалисты с практическим опытом"
    },
    {
      icon: "Building",
      title: "Современное оборудование",
      description: "Лаборатории и мастерские с новейшим оборудованием"
    },
    {
      icon: "Briefcase",
      title: "Трудоустройство",
      description: "95% выпускников находят работу в течение 6 месяцев"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white/95 backdrop-blur-sm border-b border-gray-100 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-college-orange to-college-blue rounded-lg flex items-center justify-center">
                <Icon name="GraduationCap" className="text-white" size={24} />
              </div>
              <div>
                <h1 className="text-xl font-bold text-college-dark">ТехКолледж</h1>
                <p className="text-xs text-gray-500">Промышленно-экономический</p>
              </div>
            </div>
            
            <div className="hidden md:flex items-center space-x-6">
              <a href="#about" className="text-gray-700 hover:text-college-orange transition-colors">О колледже</a>
              <a href="#professions" className="text-gray-700 hover:text-college-orange transition-colors">Профессии</a>
              <a href="#admission" className="text-gray-700 hover:text-college-orange transition-colors">Поступление</a>
              <a href="#news" className="text-gray-700 hover:text-college-orange transition-colors">Новости</a>
              <a href="#contacts" className="text-gray-700 hover:text-college-orange transition-colors">Контакты</a>
            </div>

            <Button className="bg-gradient-to-r from-college-orange to-college-blue text-white hover:opacity-90 transition-opacity">
              Подать заявку
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section 
        ref={heroAnimation.ref}
        className={`relative overflow-hidden bg-gradient-to-br from-college-orange via-college-blue to-college-turquoise transition-all duration-1000 transform ${
          heroAnimation.isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-80'
        }`}
      >
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 py-24 md:py-32">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                ПОСТУПАЙ В УВЕРЕННОЕ <span className="text-yellow-300">БУДУЩЕЕ</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 opacity-90">
                Получи востребованную профессию и построй успешную карьеру
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button size="lg" className="bg-white text-college-orange hover:bg-gray-100 font-semibold">
                  <Icon name="FileText" className="mr-2" size={20} />
                  Подать документы
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-college-orange font-semibold">
                  <Icon name="Play" className="mr-2" size={20} />
                  Виртуальный тур
                </Button>
              </div>

              <div className="grid grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold">2000+</div>
                  <div className="text-sm opacity-75">Студентов</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">25+</div>
                  <div className="text-sm opacity-75">Профессий</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">95%</div>
                  <div className="text-sm opacity-75">Трудоустройство</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <img 
                src="/img/b0d10eeb-aa94-4780-9090-cc9a69d030a6.jpg" 
                alt="Современное здание колледжа" 
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg">
                <div className="flex items-center space-x-3">
                  <Icon name="Star" className="text-yellow-500" size={24} />
                  <div>
                    <div className="font-semibold text-college-dark">4.8 из 5</div>
                    <div className="text-sm text-gray-500">Рейтинг выпускников</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section 
        id="about" 
        ref={aboutAnimation.ref}
        className={`py-20 bg-college-gray transition-all duration-1000 transform ${
          aboutAnimation.isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-college-dark mb-4">
              О нашем колледже
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Более 30 лет готовим квалифицированных специалистов для современной экономики
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((advantage, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300 border-0 bg-white">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-r from-college-orange to-college-blue rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={advantage.icon} className="text-white" size={32} />
                  </div>
                  <CardTitle className="text-xl text-college-dark">{advantage.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {advantage.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Professions Section */}
      <section 
        id="professions" 
        ref={professionsAnimation.ref}
        className={`py-20 bg-white transition-all duration-1000 transform ${
          professionsAnimation.isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-college-dark mb-4">
              Популярные профессии
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Выбери направление, которое откроет двери в успешное будущее
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {professions.map((profession, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0 bg-gradient-to-br from-white to-gray-50">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-college-orange to-college-blue rounded-lg flex items-center justify-center">
                      <Icon name={profession.icon} className="text-white" size={24} />
                    </div>
                    <Badge variant="outline" className="bg-college-orange text-white border-college-orange">
                      {profession.demand}
                    </Badge>
                  </div>
                  <CardTitle className="text-2xl text-college-dark">{profession.title}</CardTitle>
                  <CardDescription className="text-base text-gray-600">
                    {profession.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">Срок обучения:</span>
                      <span className="font-medium text-college-dark">{profession.duration}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">Уровень:</span>
                      <span className="font-medium text-college-dark">{profession.level}</span>
                    </div>
                  </div>
                  
                  <Button 
                    onClick={() => {
                      setSelectedProfession(profession);
                      setIsModalOpen(true);
                    }}
                    className="w-full bg-gradient-to-r from-college-orange to-college-blue text-white hover:opacity-90 transition-opacity"
                  >
                    Узнать больше
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Admission Section */}
      <section 
        id="admission" 
        ref={admissionAnimation.ref}
        className={`py-20 bg-gradient-to-r from-college-blue to-college-turquoise transition-all duration-1000 transform ${
          admissionAnimation.isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="text-center text-white mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Поступление в колледж
            </h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Простой процесс поступления — всего несколько шагов до твоего будущего
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center text-white">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Подай документы</h3>
              <p className="opacity-90">Аттестат, паспорт, фотографии и заявление</p>
            </div>
            
            <div className="text-center text-white">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Пройди собеседование</h3>
              <p className="opacity-90">Узнаем о твоих интересах и целях</p>
            </div>
            
            <div className="text-center text-white">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Получи зачисление</h3>
              <p className="opacity-90">Начинай учиться уже с сентября!</p>
            </div>
          </div>

          <div className="text-center">
            <Button size="lg" className="bg-white text-college-blue hover:bg-gray-100 font-semibold">
              <Icon name="FileText" className="mr-2" size={20} />
              Начать поступление
            </Button>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section id="news" className="py-20 bg-college-gray">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-college-dark mb-4">
              Новости и события
            </h2>
            <p className="text-xl text-gray-600">
              Следи за жизнью колледжа
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <Badge className="w-fit bg-college-orange text-white mb-3">15 августа</Badge>
                <CardTitle className="text-xl">День открытых дверей</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Приглашаем всех абитуриентов и их родителей познакомиться с колледжем, преподавателями и студентами.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <Badge className="w-fit bg-college-blue text-white mb-3">10 августа</Badge>
                <CardTitle className="text-xl">Новое оборудование</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  В лаборатории программирования установили современные компьютеры и серверное оборудование.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <Badge className="w-fit bg-college-orange text-white mb-3">5 августа</Badge>
                <CardTitle className="text-xl">Успехи выпускников</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Наши выпускники получили престижные награды на региональном конкурсе профессионального мастерства.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Feedback Section */}
      <section className="py-20 bg-college-gray">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-college-dark mb-4">
              Оставь заявку
            </h2>
            <p className="text-xl text-gray-600">
              Мы поможем с выбором профессии и поступлением
            </p>
          </div>
          
          <FeedbackForm />
        </div>
      </section>

      {/* Contact Section */}
      <section 
        id="contacts" 
        ref={contactAnimation.ref}
        className={`py-20 bg-white transition-all duration-1000 transform ${
          contactAnimation.isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-college-dark mb-4">
              Свяжись с нами
            </h2>
            <p className="text-xl text-gray-600">
              Готовы ответить на все твои вопросы
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-college-orange to-college-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="MapPin" className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-college-dark mb-2">Адрес</h3>
              <p className="text-gray-600">ул. Студенческая, 123<br />г. Москва, 101000</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-college-orange to-college-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Phone" className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-college-dark mb-2">Телефон</h3>
              <p className="text-gray-600">+7 (495) 123-45-67<br />+7 (495) 123-45-68</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-college-orange to-college-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Mail" className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-college-dark mb-2">Email</h3>
              <p className="text-gray-600">info@techcollege.ru<br />admission@techcollege.ru</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-college-dark text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-college-orange to-college-blue rounded-lg flex items-center justify-center">
                  <Icon name="GraduationCap" className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="font-bold">ТехКолледж</h3>
                  <p className="text-xs opacity-75">Промышленно-экономический</p>
                </div>
              </div>
              <p className="text-sm opacity-75 mb-4">
                Готовим специалистов будущего уже более 30 лет
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Обучение</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="opacity-75 hover:opacity-100 transition-opacity">Профессии</a></li>
                <li><a href="#" className="opacity-75 hover:opacity-100 transition-opacity">Программы</a></li>
                <li><a href="#" className="opacity-75 hover:opacity-100 transition-opacity">Расписание</a></li>
                <li><a href="#" className="opacity-75 hover:opacity-100 transition-opacity">Преподаватели</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Студентам</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="opacity-75 hover:opacity-100 transition-opacity">Документы</a></li>
                <li><a href="#" className="opacity-75 hover:opacity-100 transition-opacity">Стипендии</a></li>
                <li><a href="#" className="opacity-75 hover:opacity-100 transition-opacity">Общежитие</a></li>
                <li><a href="#" className="opacity-75 hover:opacity-100 transition-opacity">Карьера</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-sm">
                <li className="opacity-75">ул. Студенческая, 123</li>
                <li className="opacity-75">+7 (495) 123-45-67</li>
                <li><a href="mailto:info@techcollege.ru" className="opacity-75 hover:opacity-100 transition-opacity">info@techcollege.ru</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/20 mt-8 pt-8 text-center text-sm opacity-75">
            <p>&copy; 2024 ТехКолледж. Все права защищены.</p>
          </div>
        </div>
      </footer>
      
      {/* Profession Modal */}
      {selectedProfession && (
        <ProfessionModal 
          profession={selectedProfession}
          isOpen={isModalOpen}
          onClose={() => {
            setIsModalOpen(false);
            setSelectedProfession(null);
          }}
        />
      )}
    </div>
  );
}