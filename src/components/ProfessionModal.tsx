import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

interface ProfessionModalProps {
  profession: {
    title: string;
    description: string;
    duration: string;
    level: string;
    demand: string;
    icon: string;
    subjects: string[];
    skills: string[];
    salary: string;
    employment: string[];
  };
  isOpen: boolean;
  onClose: () => void;
}

export default function ProfessionModal({ profession, isOpen, onClose }: ProfessionModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-4 text-2xl">
            <div className="w-12 h-12 bg-gradient-to-r from-college-orange to-college-blue rounded-lg flex items-center justify-center">
              <Icon name={profession.icon} className="text-white" size={24} />
            </div>
            {profession.title}
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6">
          <p className="text-lg text-gray-600">{profession.description}</p>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-college-dark">Основная информация</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <span className="font-medium">Срок обучения:</span>
                  <Badge variant="outline">{profession.duration}</Badge>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <span className="font-medium">Уровень подготовки:</span>
                  <Badge variant="outline">{profession.level}</Badge>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <span className="font-medium">Спрос на рынке:</span>
                  <Badge className="bg-college-orange text-white">{profession.demand}</Badge>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <span className="font-medium">Средняя зарплата:</span>
                  <Badge className="bg-college-blue text-white">{profession.salary}</Badge>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-college-dark">Изучаемые предметы</h3>
              <div className="flex flex-wrap gap-2">
                {profession.subjects.map((subject, index) => (
                  <Badge key={index} variant="outline" className="text-sm">
                    {subject}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-college-dark">Ключевые навыки</h3>
            <div className="grid md:grid-cols-2 gap-3">
              {profession.skills.map((skill, index) => (
                <div key={index} className="flex items-center gap-2">
                  <Icon name="Check" className="text-green-500 w-4 h-4" />
                  <span className="text-gray-700">{skill}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-college-dark">Где можно работать</h3>
            <div className="grid md:grid-cols-2 gap-3">
              {profession.employment.map((place, index) => (
                <div key={index} className="flex items-center gap-2">
                  <Icon name="MapPin" className="text-college-blue w-4 h-4" />
                  <span className="text-gray-700">{place}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex gap-4 pt-4">
            <Button className="flex-1 bg-gradient-to-r from-college-orange to-college-blue text-white hover:opacity-90">
              <Icon name="FileText" className="mr-2" size={16} />
              Подать документы
            </Button>
            <Button variant="outline" className="flex-1">
              <Icon name="Phone" className="mr-2" size={16} />
              Записаться на консультацию
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}