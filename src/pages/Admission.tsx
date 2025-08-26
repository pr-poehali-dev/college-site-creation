import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import Layout from "@/components/Layout";
import FeedbackForm from "@/components/FeedbackForm";

export default function Admission() {
  const heroAnimation = useScrollAnimation();
  const requirementsAnimation = useScrollAnimation();
  const datesAnimation = useScrollAnimation();
  const programsAnimation = useScrollAnimation();

  const admissionPrograms = [
    {
      title: "На базе 9 классов",
      duration: "3 года 10 месяцев",
      description: "Программы подготовки квалифицированных рабочих, служащих",
      subjects: ["Русский язык", "Математика", "История"],
      places: 150,
      features: ["Получение среднего общего образования", "Профессиональная подготовка", "Государственный диплом"]
    },
    {
      title: "На базе 11 классов", 
      duration: "2 года 10 месяцев",
      description: "Программы подготовки специалистов среднего звена",
      subjects: ["Русский язык", "Математика", "Обществознание"],
      places: 100,
      features: ["Углубленное изучение специальности", "Практика на предприятиях", "Возможность поступления в вуз"]
    }
  ];

  const admissionDates = [
    {
      period: "20 июня - 15 августа",
      title: "Прием документов",
      description: "Подача документов в приемную комиссию",
      icon: "FileText",
      status: "active"
    },
    {
      period: "16 - 20 августа", 
      title: "Рассмотрение заявлений",
      description: "Проверка документов и принятие решений",
      icon: "Search",
      status: "upcoming"
    },
    {
      period: "21 - 25 августа",
      title: "Зачисление",
      description: "Публикация приказов о зачислении",
      icon: "CheckCircle", 
      status: "upcoming"
    },
    {
      period: "1 сентября",
      title: "День знаний",
      description: "Начало учебного года",
      icon: "GraduationCap",
      status: "upcoming"
    }
  ];

  const benefits = [
    {
      title: "Бесплатное обучение",
      description: "Образование за счет государственного бюджета",
      icon: "DollarSign"
    },
    {
      title: "Стипендия",
      description: "Академическая и социальная стипендии",
      icon: "Award"
    },
    {
      title: "Общежитие",
      description: "Места в студенческом общежитии",
      icon: "Home"
    },
    {
      title: "Трудоустройство",
      description: "Помощь в поиске работы после выпуска",
      icon: "Briefcase"
    }
  ];

  return (
    <Layout currentPage="admission">
      {/* Hero Section */}
      <section 
        ref={heroAnimation.ref}
        className={`relative overflow-hidden bg-gradient-to-br from-college-orange via-college-blue to-college-turquoise transition-all duration-1000 transform ${
          heroAnimation.isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-80'
        }`}
      >
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 py-20 md:py-24">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              ПОСТУПЛЕНИЕ В <span className="text-yellow-300">КОЛЛЕДЖ</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto">
              Начни свой путь к успешной карьере уже сегодня
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" className="bg-white text-college-orange hover:bg-gray-100 font-semibold">
                <Icon name="FileText" className="mr-2" size={20} />
                Подать документы
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-college-orange font-semibold">
                <Icon name="Phone" className="mr-2" size={20} />
                Получить консультацию
              </Button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                <div className="text-2xl font-bold">250</div>
                <div className="text-sm opacity-75">Мест для поступления</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                <div className="text-2xl font-bold">25+</div>
                <div className="text-sm opacity-75">Специальностей</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                <div className="text-2xl font-bold">Без ЕГЭ</div>
                <div className="text-sm opacity-75">Поступление</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                <div className="text-2xl font-bold">100%</div>
                <div className="text-sm opacity-75">Бесплатно</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Admission Programs */}
      <section 
        ref={programsAnimation.ref}
        className={`py-20 bg-white transition-all duration-1000 transform ${
          programsAnimation.isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-college-dark mb-4">
              Программы обучения
            </h2>
            <p className="text-xl text-gray-600">
              Выберите программу, которая подходит именно вам
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {admissionPrograms.map((program, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-white to-gray-50">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-4">
                    <Badge className="bg-college-orange text-white">
                      {program.places} мест
                    </Badge>
                    <Badge variant="outline">
                      {program.duration}
                    </Badge>
                  </div>
                  <CardTitle className="text-2xl text-college-dark">{program.title}</CardTitle>
                  <CardDescription className="text-base text-gray-600">
                    {program.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-college-dark mb-2">Вступительные испытания:</h4>
                      <div className="flex flex-wrap gap-2">
                        {program.subjects.map((subject, idx) => (
                          <Badge key={idx} variant="outline">{subject}</Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-college-dark mb-2">Преимущества:</h4>
                      <ul className="space-y-1">
                        {program.features.map((feature, idx) => (
                          <li key={idx} className="text-sm text-gray-600 flex items-center gap-2">
                            <Icon name="Check" className="text-green-500 w-4 h-4" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Button className="w-full bg-gradient-to-r from-college-orange to-college-blue text-white hover:opacity-90 transition-opacity">
                      <Icon name="FileText" className="mr-2" size={16} />
                      Подать документы
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Benefits */}
          <div className="bg-college-gray p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-college-dark mb-6 text-center">Что вы получите</h3>
            <div className="grid md:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-college-orange to-college-blue rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={benefit.icon} className="text-white" size={24} />
                  </div>
                  <h4 className="font-semibold text-college-dark mb-2">{benefit.title}</h4>
                  <p className="text-gray-600 text-sm">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Important Dates */}
      <section 
        ref={datesAnimation.ref}
        className={`py-20 bg-college-gray transition-all duration-1000 transform ${
          datesAnimation.isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-college-dark mb-4">
              Важные даты
            </h2>
            <p className="text-xl text-gray-600">
              График приемной кампании 2024 года
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {admissionDates.map((date, index) => (
              <div key={index} className="flex items-center gap-6 mb-8 last:mb-0">
                <div className={`w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0 ${
                  date.status === 'active' 
                    ? 'bg-gradient-to-r from-college-orange to-college-blue' 
                    : 'bg-gray-300'
                }`}>
                  <Icon name={date.icon} className="text-white" size={24} />
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm flex-1">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-xl font-semibold text-college-dark mb-2">{date.title}</h3>
                      <p className="text-gray-600 mb-1">{date.description}</p>
                      <Badge 
                        variant={date.status === 'active' ? 'default' : 'outline'}
                        className={date.status === 'active' ? 'bg-college-orange text-white' : ''}
                      >
                        {date.period}
                      </Badge>
                    </div>
                    {date.status === 'active' && (
                      <Badge className="bg-green-100 text-green-700 border-green-200">
                        Активно
                      </Badge>
                    )}
                  </div>
                </div>

                {index < admissionDates.length - 1 && (
                  <div className="absolute left-8 mt-16 w-0.5 h-8 bg-gray-300"></div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="bg-white p-6 rounded-xl inline-block shadow-lg">
              <h4 className="font-semibold text-college-dark mb-2">Приемная комиссия работает</h4>
              <p className="text-gray-600 mb-4">
                Понедельник - Пятница: 9:00 - 17:00<br />
                Суббота: 9:00 - 14:00<br />
                Воскресенье: выходной
              </p>
              <Button className="bg-gradient-to-r from-college-orange to-college-blue text-white hover:opacity-90">
                <Icon name="Phone" className="mr-2" size={16} />
                +7 (495) 123-45-67
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section 
        ref={requirementsAnimation.ref}
        className={`py-20 bg-white transition-all duration-1000 transform ${
          requirementsAnimation.isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-college-dark mb-4">
              Требования к поступающим
            </h2>
            <p className="text-xl text-gray-600">
              Все что нужно знать для успешного поступления
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="text-center border-0 bg-gradient-to-br from-white to-gray-50">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-r from-college-orange to-college-blue rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="GraduationCap" className="text-white" size={24} />
                </div>
                <CardTitle className="text-xl text-college-dark">Образование</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Основное общее (9 классов) или среднее общее (11 классов) образование
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center border-0 bg-gradient-to-br from-white to-gray-50">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-r from-college-orange to-college-blue rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Calendar" className="text-white" size={24} />
                </div>
                <CardTitle className="text-xl text-college-dark">Возраст</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  На базе 9 классов: до 35 лет<br />
                  На базе 11 классов: без ограничений
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center border-0 bg-gradient-to-br from-white to-gray-50">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-r from-college-orange to-college-blue rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Heart" className="text-white" size={24} />
                </div>
                <CardTitle className="text-xl text-college-dark">Здоровье</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Медицинская справка установленного образца (форма 086/у)
                </CardDescription>
              </CardContent>
            </Card>
          </div>

          <div className="bg-college-gray p-8 rounded-2xl">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-college-dark mb-4">Льготы при поступлении</h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <Icon name="Shield" className="text-college-orange w-5 h-5" />
                    <span>Дети-сироты и дети, оставшиеся без попечения родителей</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Icon name="Shield" className="text-college-orange w-5 h-5" />
                    <span>Инвалиды I и II групп</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Icon name="Shield" className="text-college-orange w-5 h-5" />
                    <span>Участники и инвалиды боевых действий</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Icon name="Shield" className="text-college-orange w-5 h-5" />
                    <span>Дети из многодетных семей</span>
                  </li>
                </ul>
              </div>
              <div className="text-center">
                <div className="bg-white p-6 rounded-xl">
                  <Icon name="Users" className="text-college-blue mx-auto mb-4" size={48} />
                  <h4 className="font-semibold text-college-dark mb-2">Особые условия</h4>
                  <p className="text-gray-600 text-sm">
                    Льготники зачисляются в пределах 10% от общего количества мест
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application Form Section */}
      <section className="py-20 bg-college-gray">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-college-dark mb-4">
              Подать заявку
            </h2>
            <p className="text-xl text-gray-600">
              Заполните форму, и мы поможем с поступлением
            </p>
          </div>
          
          <FeedbackForm />
        </div>
      </section>
    </Layout>
  );
}