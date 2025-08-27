import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useNews } from "@/context/NewsContext";

export default function NewsSection() {
  const { getPublishedNews } = useNews();
  const animation = useScrollAnimation();
  const news = getPublishedNews().slice(0, 3);

  if (news.length === 0) return null;

  return (
    <section 
      ref={animation.ref}
      className={`py-20 bg-white transition-all duration-1000 transform ${
        animation.isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-college-dark mb-4">
            Новости колледжа
          </h2>
          <p className="text-xl text-gray-600">
            Актуальные события и достижения нашего учебного заведения
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {news.map((item, index) => (
            <Card key={item.id} className="group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-white to-gray-50 overflow-hidden">
              {item.imageUrl && (
                <div className="aspect-video relative overflow-hidden">
                  <img 
                    src={item.imageUrl} 
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                    }}
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-college-orange text-white">
                      {item.category}
                    </Badge>
                  </div>
                </div>
              )}
              
              <CardHeader className="pb-4">
                {!item.imageUrl && (
                  <div className="mb-4">
                    <Badge className="bg-college-orange text-white">
                      {item.category}
                    </Badge>
                  </div>
                )}
                
                <CardTitle className="text-lg text-college-dark line-clamp-2">
                  {item.title}
                </CardTitle>
                
                <CardDescription className="text-gray-600 line-clamp-3">
                  {item.excerpt}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="pt-0">
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center gap-2">
                    <Icon name="User" size={14} />
                    <span>{item.author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="Calendar" size={14} />
                    <span>{new Date(item.publishedAt).toLocaleDateString('ru-RU')}</span>
                  </div>
                </div>

                {item.tags.length > 0 && (
                  <div className="flex flex-wrap gap-1 mb-4">
                    {item.tags.slice(0, 3).map((tag, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                )}

                <Button 
                  variant="ghost" 
                  className="w-full text-college-blue hover:text-college-orange hover:bg-gray-100"
                >
                  Читать далее
                  <Icon name="ArrowRight" className="ml-2" size={16} />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-college-orange to-college-blue text-white hover:opacity-90 transition-opacity"
          >
            <Icon name="Newspaper" className="mr-2" size={18} />
            Все новости
          </Button>
        </div>
      </div>
    </section>
  );
}