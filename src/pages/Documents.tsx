import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import Layout from "@/components/Layout";

export default function Documents() {
  const heroAnimation = useScrollAnimation();
  const requiredDocsAnimation = useScrollAnimation();
  const processAnimation = useScrollAnimation();
  const downloadAnimation = useScrollAnimation();

  const requiredDocuments = [
    {
      title: "Аттестат об основном общем образовании",
      description: "Оригинал аттестата за 9 класс",
      icon: "FileText",
      required: true,
      note: "Обязательный документ для поступления"
    },
    {
      title: "Паспорт гражданина РФ",
      description: "Копия всех заполненных страниц",
      icon: "IdCard",
      required: true,
      note: "Оригинал для сверки при подаче"
    },
    {
      title: "СНИЛС",
      description: "Страховое свидетельство обязательного пенсионного страхования",
      icon: "CreditCard",
      required: true,
      note: "Копия документа"
    },
    {
      title: "Фотографии",
      description: "6 фотографий размером 3х4 см",
      icon: "Camera",
      required: true,
      note: "Матовые, цветные или черно-белые"
    },
    {
      title: "Медицинская справка",
      description: "Справка о состоянии здоровья (форма 086/у)",
      icon: "Heart",
      required: true,
      note: "Действительна в течение 6 месяцев"
    },
    {
      title: "Заявление о приеме",
      description: "Заполняется при подаче документов",
      icon: "Edit",
      required: true,
      note: "Бланк предоставляется в приемной комиссии"
    }
  ];

  const additionalDocuments = [
    {
      title: "Справка о доходах родителей",
      description: "Для получения социальной стипендии",
      icon: "Receipt",
      required: false
    },
    {
      title: "Документы льготной категории",
      description: "Удостоверения, справки о льготах",
      icon: "Shield",
      required: false
    },
    {
      title: "Результаты ГИА",
      description: "Свидетельство о результатах ОГЭ",
      icon: "Award",
      required: false
    }
  ];

  const admissionSteps = [
    {
      step: 1,
      title: "Подача документов",
      description: "Принесите полный пакет документов в приемную комиссию",
      period: "с 20 июня по 15 августа",
      icon: "FileText"
    },
    {
      step: 2,
      title: "Рассмотрение заявления",
      description: "Приемная комиссия проверяет документы и принимает решение",
      period: "до 20 августа",
      icon: "Search"
    },
    {
      step: 3,
      title: "Зачисление",
      description: "Публикация приказа о зачислении и оформление студенческих документов",
      period: "до 25 августа",
      icon: "CheckCircle"
    }
  ];

  const downloadableDocuments = [
    {
      title: "Бланк заявления о приеме",
      description: "PDF формат, можно заполнить заранее",
      size: "245 КБ",
      format: "PDF",
      icon: "Download"
    },
    {
      title: "Список необходимых документов",
      description: "Полный перечень с пояснениями",
      size: "128 КБ", 
      format: "PDF",
      icon: "List"
    },
    {
      title: "Правила приема",
      description: "Подробная информация о процедуре поступления",
      size: "512 КБ",
      format: "PDF", 
      icon: "BookOpen"
    },
    {
      title: "Договор об оказании образовательных услуг",
      description: "Образец договора для ознакомления",
      size: "328 КБ",
      format: "PDF",
      icon: "FileText"
    }
  ];

  return (
    <Layout currentPage="documents">
      {/* Hero Section */}
      <section 
        ref={heroAnimation.ref}
        className={`relative overflow-hidden bg-gradient-to-br from-college-orange via-college-blue to-college-turquoise transition-all duration-1000 transform ${
          heroAnimation.isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-80'
        }`}
      >
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 py-20 md:py-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                ДОКУМЕНТЫ ДЛЯ <span className="text-yellow-300">ПОСТУПЛЕНИЯ</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 opacity-90">
                Полный список необходимых документов и пошаговая инструкция
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-white text-college-orange hover:bg-gray-100 font-semibold">
                  <Icon name="Download" className="mr-2" size={20} />
                  Скачать список
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-college-orange font-semibold">
                  <Icon name="Phone" className="mr-2" size={20} />
                  Задать вопрос
                </Button>
              </div>
            </div>

            <div className="relative">
              <img 
                src="/img/1856b014-2d4e-4b0c-965f-61e6f9297820.jpg"
                alt="Документы для поступления" 
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-xl shadow-lg">
                <div className="text-center">
                  <Icon name="Calendar" className="text-college-orange mx-auto mb-2" size={24} />
                  <div className="font-semibold text-college-dark">До 15 августа</div>
                  <div className="text-sm text-gray-500">Прием документов</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Required Documents Section */}
      <section 
        ref={requiredDocsAnimation.ref}
        className={`py-20 bg-white transition-all duration-1000 transform ${
          requiredDocsAnimation.isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-college-dark mb-4">
              Обязательные документы
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Эти документы необходимо предоставить для рассмотрения заявления о поступлении
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {requiredDocuments.map((doc, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 border-0 bg-gradient-to-br from-white to-gray-50">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-college-orange to-college-blue rounded-lg flex items-center justify-center">
                      <Icon name={doc.icon} className="text-white" size={24} />
                    </div>
                    <Badge className="bg-red-100 text-red-700 border-red-200">
                      Обязательно
                    </Badge>
                  </div>
                  <CardTitle className="text-lg text-college-dark">{doc.title}</CardTitle>
                  <CardDescription className="text-gray-600">
                    {doc.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-blue-50 p-3 rounded-lg">
                    <p className="text-sm text-blue-800">
                      <Icon name="Info" className="inline mr-1" size={16} />
                      {doc.note}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-college-gray p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-college-dark mb-6">Дополнительные документы</h3>
            <div className="grid md:grid-cols-3 gap-4">
              {additionalDocuments.map((doc, index) => (
                <div key={index} className="bg-white p-4 rounded-lg">
                  <div className="flex items-center gap-3 mb-2">
                    <Icon name={doc.icon} className="text-college-blue" size={20} />
                    <h4 className="font-semibold text-college-dark">{doc.title}</h4>
                  </div>
                  <p className="text-sm text-gray-600">{doc.description}</p>
                  <Badge variant="outline" className="mt-2">Необязательно</Badge>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Admission Process Section */}
      <section 
        ref={processAnimation.ref}
        className={`py-20 bg-college-gray transition-all duration-1000 transform ${
          processAnimation.isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-college-dark mb-4">
              Процесс поступления
            </h2>
            <p className="text-xl text-gray-600">
              Три простых шага до зачисления в колледж
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {admissionSteps.map((stepData, index) => (
              <Card key={index} className="text-center hover:shadow-xl transition-all duration-300 border-0 bg-white relative">
                <CardHeader className="pb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-college-orange to-college-blue rounded-full flex items-center justify-center mx-auto mb-4 relative">
                    <Icon name={stepData.icon} className="text-white" size={28} />
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
                      <span className="text-sm font-bold text-college-dark">{stepData.step}</span>
                    </div>
                  </div>
                  <CardTitle className="text-xl text-college-dark">{stepData.title}</CardTitle>
                  <Badge variant="outline" className="mx-auto">{stepData.period}</Badge>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {stepData.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="bg-white p-6 rounded-xl inline-block shadow-lg">
              <div className="flex items-center gap-4">
                <Icon name="MapPin" className="text-college-orange" size={24} />
                <div className="text-left">
                  <h4 className="font-semibold text-college-dark">Приемная комиссия</h4>
                  <p className="text-gray-600">ул. Студенческая, 123, каб. 101</p>
                  <p className="text-sm text-gray-500">Пн-Пт: 9:00-17:00, Сб: 9:00-14:00</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Downloadable Documents Section */}
      <section 
        ref={downloadAnimation.ref}
        className={`py-20 bg-white transition-all duration-1000 transform ${
          downloadAnimation.isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-college-dark mb-4">
              Документы для скачивания
            </h2>
            <p className="text-xl text-gray-600">
              Подготовьтесь к поступлению заранее
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {downloadableDocuments.map((doc, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 border-0 bg-gradient-to-br from-white to-gray-50">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-college-orange to-college-blue rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name={doc.icon} className="text-white" size={24} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="font-semibold text-college-dark">{doc.title}</h3>
                        <div className="text-right">
                          <Badge variant="outline">{doc.format}</Badge>
                          <p className="text-xs text-gray-500 mt-1">{doc.size}</p>
                        </div>
                      </div>
                      <p className="text-gray-600 text-sm mb-4">{doc.description}</p>
                      <Button size="sm" className="bg-gradient-to-r from-college-orange to-college-blue text-white hover:opacity-90">
                        <Icon name="Download" className="mr-2" size={16} />
                        Скачать
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="bg-college-gray p-8 rounded-2xl max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-college-dark mb-4">Нужна помощь?</h3>
              <p className="text-gray-600 mb-6">
                Если у вас остались вопросы по документам или процедуре поступления, 
                обращайтесь в приемную комиссию или звоните по телефону
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-gradient-to-r from-college-orange to-college-blue text-white hover:opacity-90">
                  <Icon name="Phone" className="mr-2" size={20} />
                  +7 (495) 123-45-67
                </Button>
                <Button size="lg" variant="outline">
                  <Icon name="MessageCircle" className="mr-2" size={20} />
                  Онлайн консультация
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}