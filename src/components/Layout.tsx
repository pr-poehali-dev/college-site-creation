import { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

interface LayoutProps {
  children: ReactNode;
  currentPage?: string;
}

export default function Layout({ children, currentPage }: LayoutProps) {
  const navItems = [
    { href: "/", label: "Главная", id: "home" },
    { href: "#about", label: "О колледже", id: "about" },
    { href: "#professions", label: "Профессии", id: "professions" },
    { href: "/documents", label: "Документы", id: "documents" },
    { href: "/admission", label: "Поступление", id: "admission" },
    { href: "/news", label: "Новости", id: "news" },
    { href: "#contacts", label: "Контакты", id: "contacts" }
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
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  className={`transition-colors ${
                    currentPage === item.id
                      ? "text-college-orange font-medium"
                      : "text-gray-700 hover:text-college-orange"
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </div>

            <Button className="bg-gradient-to-r from-college-orange to-college-blue text-white hover:opacity-90 transition-opacity">
              Подать заявку
            </Button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      {children}

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
                <li><a href="/documents" className="opacity-75 hover:opacity-100 transition-opacity">Документы</a></li>
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
    </div>
  );
}