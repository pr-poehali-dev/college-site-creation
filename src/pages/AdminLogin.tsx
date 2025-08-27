import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Icon from "@/components/ui/icon";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

export default function AdminLogin() {
  const [credentials, setCredentials] = useState({
    username: "",
    password: ""
  });
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Простая проверка логина/пароля (в реальном проекте - через API)
    if (credentials.username === "admin" && credentials.password === "admin123") {
      localStorage.setItem("adminAuth", "true");
      toast.success("Вход выполнен успешно");
      navigate("/admin/dashboard");
    } else {
      toast.error("Неверный логин или пароль");
    }
    
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-college-orange via-college-blue to-college-turquoise flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/20"></div>
      
      <Card className="w-full max-w-md relative z-10 shadow-2xl border-0">
        <CardHeader className="text-center pb-6">
          <div className="w-16 h-16 bg-gradient-to-r from-college-orange to-college-blue rounded-full flex items-center justify-center mx-auto mb-4">
            <Icon name="Shield" className="text-white" size={28} />
          </div>
          <CardTitle className="text-2xl font-bold text-college-dark">
            Административная панель
          </CardTitle>
          <CardDescription className="text-base">
            Вход для администратора колледжа
          </CardDescription>
        </CardHeader>
        
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="username" className="text-sm font-medium text-college-dark">
                Логин
              </Label>
              <div className="relative">
                <Icon name="User" className="absolute left-3 top-3 text-gray-400" size={18} />
                <Input
                  id="username"
                  type="text"
                  placeholder="Введите логин"
                  value={credentials.username}
                  onChange={(e) => setCredentials(prev => ({ ...prev, username: e.target.value }))}
                  className="pl-10 h-12 border-gray-200 focus:border-college-orange"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="password" className="text-sm font-medium text-college-dark">
                Пароль
              </Label>
              <div className="relative">
                <Icon name="Lock" className="absolute left-3 top-3 text-gray-400" size={18} />
                <Input
                  id="password"
                  type="password"
                  placeholder="Введите пароль"
                  value={credentials.password}
                  onChange={(e) => setCredentials(prev => ({ ...prev, password: e.target.value }))}
                  className="pl-10 h-12 border-gray-200 focus:border-college-orange"
                  required
                />
              </div>
            </div>

            <Button 
              type="submit" 
              className="w-full h-12 bg-gradient-to-r from-college-orange to-college-blue text-white hover:opacity-90 transition-opacity font-semibold mt-6"
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <Icon name="Loader2" className="mr-2 animate-spin" size={18} />
                  Вход...
                </>
              ) : (
                <>
                  <Icon name="LogIn" className="mr-2" size={18} />
                  Войти в систему
                </>
              )}
            </Button>
          </form>

          <div className="mt-6 p-4 bg-gray-50 rounded-lg">
            <p className="text-sm text-gray-600 text-center mb-2">
              <Icon name="Info" className="inline mr-1" size={16} />
              Тестовые данные для входа:
            </p>
            <div className="text-xs text-gray-500 text-center space-y-1">
              <div><strong>Логин:</strong> admin</div>
              <div><strong>Пароль:</strong> admin123</div>
            </div>
          </div>

          <div className="mt-6 text-center">
            <Button
              variant="ghost"
              onClick={() => navigate("/")}
              className="text-college-blue hover:text-college-orange"
            >
              <Icon name="ArrowLeft" className="mr-2" size={16} />
              Вернуться на сайт
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}