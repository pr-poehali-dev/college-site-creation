import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Icon from "@/components/ui/icon";

export default function FeedbackForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    profession: "",
    message: ""
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
    setFormData({
      name: "",
      phone: "",
      email: "",
      profession: "",
      message: ""
    });
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  if (isSubmitted) {
    return (
      <Card className="max-w-md mx-auto">
        <CardContent className="p-8 text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Icon name="Check" className="text-green-600" size={32} />
          </div>
          <h3 className="text-xl font-semibold text-college-dark mb-2">Заявка отправлена!</h3>
          <p className="text-gray-600">Мы свяжемся с вами в ближайшее время</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl text-center text-college-dark">
          Оставить заявку
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Input
              placeholder="Ваше имя"
              value={formData.name}
              onChange={(e) => handleChange("name", e.target.value)}
              required
            />
          </div>
          
          <div>
            <Input
              type="tel"
              placeholder="Телефон"
              value={formData.phone}
              onChange={(e) => handleChange("phone", e.target.value)}
              required
            />
          </div>
          
          <div>
            <Input
              type="email"
              placeholder="Email (необязательно)"
              value={formData.email}
              onChange={(e) => handleChange("email", e.target.value)}
            />
          </div>
          
          <div>
            <Select onValueChange={(value) => handleChange("profession", value)}>
              <SelectTrigger>
                <SelectValue placeholder="Интересующая профессия" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="programmer">Программист</SelectItem>
                <SelectItem value="designer">Дизайнер</SelectItem>
                <SelectItem value="nurse">Медсестра</SelectItem>
                <SelectItem value="chef">Повар</SelectItem>
                <SelectItem value="mechanic">Механик</SelectItem>
                <SelectItem value="economist">Экономист</SelectItem>
                <SelectItem value="other">Другое</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div>
            <Textarea
              placeholder="Ваш вопрос или комментарий (необязательно)"
              value={formData.message}
              onChange={(e) => handleChange("message", e.target.value)}
              rows={3}
            />
          </div>
          
          <Button 
            type="submit" 
            className="w-full bg-gradient-to-r from-college-orange to-college-blue text-white hover:opacity-90 transition-opacity"
          >
            <Icon name="Send" className="mr-2" size={16} />
            Отправить заявку
          </Button>
          
          <p className="text-xs text-gray-500 text-center">
            Нажимая кнопку, вы соглашаетесь с обработкой персональных данных
          </p>
        </form>
      </CardContent>
    </Card>
  );
}