import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import Icon from "@/components/ui/icon";
import { useNavigate } from "react-router-dom";
import { useNews, NewsItem } from "@/context/NewsContext";
import { toast } from "sonner";

export default function AdminDashboard() {
  const navigate = useNavigate();
  const { news, addNews, updateNews, deleteNews } = useNews();
  const [currentView, setCurrentView] = useState<'dashboard' | 'add-news' | 'edit-news'>('dashboard');
  const [selectedNews, setSelectedNews] = useState<NewsItem | null>(null);
  
  const [newsForm, setNewsForm] = useState({
    title: '',
    content: '',
    excerpt: '',
    category: '',
    imageUrl: '',
    author: 'Администрация',
    isPublished: true,
    tags: ''
  });

  useEffect(() => {
    const isAuth = localStorage.getItem('adminAuth');
    if (!isAuth) {
      navigate('/admin/login');
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('adminAuth');
    toast.success('Выход выполнен успешно');
    navigate('/admin/login');
  };

  const resetForm = () => {
    setNewsForm({
      title: '',
      content: '',
      excerpt: '',
      category: '',
      imageUrl: '',
      author: 'Администрация',
      isPublished: true,
      tags: ''
    });
  };

  const handleSubmitNews = (e: React.FormEvent) => {
    e.preventDefault();
    
    const newsData = {
      ...newsForm,
      tags: newsForm.tags.split(',').map(tag => tag.trim()).filter(tag => tag.length > 0)
    };

    if (selectedNews) {
      updateNews(selectedNews.id, newsData);
      toast.success('Новость обновлена');
    } else {
      addNews(newsData);
      toast.success('Новость создана');
    }

    resetForm();
    setSelectedNews(null);
    setCurrentView('dashboard');
  };

  const handleEditNews = (newsItem: NewsItem) => {
    setSelectedNews(newsItem);
    setNewsForm({
      title: newsItem.title,
      content: newsItem.content,
      excerpt: newsItem.excerpt,
      category: newsItem.category,
      imageUrl: newsItem.imageUrl || '',
      author: newsItem.author,
      isPublished: newsItem.isPublished,
      tags: newsItem.tags.join(', ')
    });
    setCurrentView('edit-news');
  };

  const handleDeleteNews = (id: string) => {
    if (confirm('Вы уверены, что хотите удалить эту новость?')) {
      deleteNews(id);
      toast.success('Новость удалена');
    }
  };

  const stats = {
    total: news.length,
    published: news.filter(n => n.isPublished).length,
    drafts: news.filter(n => !n.isPublished).length,
    thisWeek: news.filter(n => {
      const newsDate = new Date(n.publishedAt);
      const weekAgo = new Date();
      weekAgo.setDate(weekAgo.getDate() - 7);
      return newsDate >= weekAgo;
    }).length
  };

  if (currentView === 'add-news' || currentView === 'edit-news') {
    return (
      <div className="min-h-screen bg-college-gray p-4">
        <div className="container mx-auto max-w-4xl">
          <div className="mb-6">
            <Button
              variant="ghost"
              onClick={() => {
                setCurrentView('dashboard');
                setSelectedNews(null);
                resetForm();
              }}
              className="mb-4"
            >
              <Icon name="ArrowLeft" className="mr-2" size={16} />
              Назад к панели
            </Button>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-college-dark">
                  {selectedNews ? 'Редактировать новость' : 'Добавить новость'}
                </CardTitle>
                <CardDescription>
                  {selectedNews ? 'Внесите изменения в новость' : 'Заполните форму для создания новости'}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <form onSubmit={handleSubmitNews} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="title">Заголовок</Label>
                      <Input
                        id="title"
                        value={newsForm.title}
                        onChange={(e) => setNewsForm(prev => ({ ...prev, title: e.target.value }))}
                        placeholder="Введите заголовок новости"
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="category">Категория</Label>
                      <Select value={newsForm.category} onValueChange={(value) => setNewsForm(prev => ({ ...prev, category: value }))}>
                        <SelectTrigger>
                          <SelectValue placeholder="Выберите категорию" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="События">События</SelectItem>
                          <SelectItem value="Образование">Образование</SelectItem>
                          <SelectItem value="Достижения">Достижения</SelectItem>
                          <SelectItem value="Объявления">Объявления</SelectItem>
                          <SelectItem value="Новости">Новости</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="excerpt">Краткое описание</Label>
                    <Input
                      id="excerpt"
                      value={newsForm.excerpt}
                      onChange={(e) => setNewsForm(prev => ({ ...prev, excerpt: e.target.value }))}
                      placeholder="Краткое описание для превью"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="content">Содержание</Label>
                    <Textarea
                      id="content"
                      value={newsForm.content}
                      onChange={(e) => setNewsForm(prev => ({ ...prev, content: e.target.value }))}
                      placeholder="Полный текст новости"
                      className="min-h-[200px]"
                      required
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="author">Автор</Label>
                      <Input
                        id="author"
                        value={newsForm.author}
                        onChange={(e) => setNewsForm(prev => ({ ...prev, author: e.target.value }))}
                        placeholder="Имя автора"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="imageUrl">URL изображения</Label>
                      <Input
                        id="imageUrl"
                        value={newsForm.imageUrl}
                        onChange={(e) => setNewsForm(prev => ({ ...prev, imageUrl: e.target.value }))}
                        placeholder="Ссылка на изображение (необязательно)"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="tags">Теги</Label>
                    <Input
                      id="tags"
                      value={newsForm.tags}
                      onChange={(e) => setNewsForm(prev => ({ ...prev, tags: e.target.value }))}
                      placeholder="Теги через запятую: образование, студенты, мероприятие"
                    />
                  </div>

                  <div className="flex items-center space-x-2">
                    <Switch
                      id="published"
                      checked={newsForm.isPublished}
                      onCheckedChange={(checked) => setNewsForm(prev => ({ ...prev, isPublished: checked }))}
                    />
                    <Label htmlFor="published">Опубликовать новость</Label>
                  </div>

                  <div className="flex gap-4">
                    <Button 
                      type="submit" 
                      className="bg-gradient-to-r from-college-orange to-college-blue text-white"
                    >
                      <Icon name="Save" className="mr-2" size={16} />
                      {selectedNews ? 'Обновить' : 'Создать'} новость
                    </Button>
                    
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => {
                        setCurrentView('dashboard');
                        setSelectedNews(null);
                        resetForm();
                      }}
                    >
                      Отмена
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-college-gray">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-gradient-to-r from-college-orange to-college-blue rounded-full flex items-center justify-center">
              <Icon name="Settings" className="text-white" size={20} />
            </div>
            <div>
              <h1 className="text-xl font-bold text-college-dark">Панель администратора</h1>
              <p className="text-sm text-gray-600">Управление контентом сайта</p>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <Button
              onClick={() => navigate('/')}
              variant="outline"
            >
              <Icon name="ExternalLink" className="mr-2" size={16} />
              Сайт колледжа
            </Button>
            
            <Button
              onClick={handleLogout}
              variant="ghost"
              className="text-red-600 hover:text-red-700 hover:bg-red-50"
            >
              <Icon name="LogOut" className="mr-2" size={16} />
              Выйти
            </Button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 mb-1">Всего новостей</p>
                  <p className="text-2xl font-bold text-college-dark">{stats.total}</p>
                </div>
                <div className="w-12 h-12 bg-college-blue/10 rounded-full flex items-center justify-center">
                  <Icon name="FileText" className="text-college-blue" size={24} />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 mb-1">Опубликовано</p>
                  <p className="text-2xl font-bold text-green-600">{stats.published}</p>
                </div>
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <Icon name="CheckCircle" className="text-green-600" size={24} />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 mb-1">Черновики</p>
                  <p className="text-2xl font-bold text-orange-600">{stats.drafts}</p>
                </div>
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                  <Icon name="Edit" className="text-orange-600" size={24} />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 mb-1">За неделю</p>
                  <p className="text-2xl font-bold text-college-orange">{stats.thisWeek}</p>
                </div>
                <div className="w-12 h-12 bg-college-orange/10 rounded-full flex items-center justify-center">
                  <Icon name="TrendingUp" className="text-college-orange" size={24} />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Actions */}
        <div className="mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-xl text-college-dark">Управление новостями</CardTitle>
              <CardDescription>
                Создавайте, редактируйте и публикуйте новости колледжа
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button 
                onClick={() => setCurrentView('add-news')}
                className="bg-gradient-to-r from-college-orange to-college-blue text-white"
              >
                <Icon name="Plus" className="mr-2" size={16} />
                Добавить новость
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* News List */}
        <Card>
          <CardHeader>
            <CardTitle className="text-xl text-college-dark">Все новости</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {news.length === 0 ? (
                <div className="text-center py-8">
                  <Icon name="FileText" className="mx-auto text-gray-400 mb-4" size={48} />
                  <p className="text-gray-500">Новостей пока нет</p>
                  <Button 
                    onClick={() => setCurrentView('add-news')}
                    className="mt-4 bg-gradient-to-r from-college-orange to-college-blue text-white"
                  >
                    Создать первую новость
                  </Button>
                </div>
              ) : (
                news.map((newsItem) => (
                  <div key={newsItem.id} className="border rounded-lg p-4 hover:shadow-sm transition-shadow">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="font-semibold text-college-dark">{newsItem.title}</h3>
                          <Badge variant={newsItem.isPublished ? "default" : "secondary"}>
                            {newsItem.isPublished ? "Опубликовано" : "Черновик"}
                          </Badge>
                          <Badge variant="outline">{newsItem.category}</Badge>
                        </div>
                        
                        <p className="text-gray-600 text-sm mb-2">{newsItem.excerpt}</p>
                        
                        <div className="flex items-center gap-4 text-xs text-gray-500">
                          <span className="flex items-center gap-1">
                            <Icon name="User" size={12} />
                            {newsItem.author}
                          </span>
                          <span className="flex items-center gap-1">
                            <Icon name="Calendar" size={12} />
                            {new Date(newsItem.publishedAt).toLocaleDateString('ru-RU')}
                          </span>
                          {newsItem.tags.length > 0 && (
                            <span className="flex items-center gap-1">
                              <Icon name="Tag" size={12} />
                              {newsItem.tags.slice(0, 2).join(', ')}
                              {newsItem.tags.length > 2 && '...'}
                            </span>
                          )}
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-2 ml-4">
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => handleEditNews(newsItem)}
                        >
                          <Icon name="Edit" size={14} />
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => handleDeleteNews(newsItem.id)}
                          className="text-red-600 hover:text-red-700"
                        >
                          <Icon name="Trash2" size={14} />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}