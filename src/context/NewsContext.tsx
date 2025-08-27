import React, { createContext, useContext, useState, useEffect } from 'react';

export interface NewsItem {
  id: string;
  title: string;
  content: string;
  excerpt: string;
  category: string;
  imageUrl?: string;
  author: string;
  publishedAt: string;
  isPublished: boolean;
  tags: string[];
}

interface NewsContextType {
  news: NewsItem[];
  addNews: (news: Omit<NewsItem, 'id' | 'publishedAt'>) => void;
  updateNews: (id: string, news: Partial<NewsItem>) => void;
  deleteNews: (id: string) => void;
  getNewsById: (id: string) => NewsItem | undefined;
  getPublishedNews: () => NewsItem[];
}

const NewsContext = createContext<NewsContextType | undefined>(undefined);

const defaultNews: NewsItem[] = [
  {
    id: '1',
    title: 'День открытых дверей 2024',
    content: 'Приглашаем всех желающих посетить наш колледж в рамках Дня открытых дверей. Вы сможете познакомиться с преподавателями, посетить аудитории и лаборатории, узнать о специальностях и условиях поступления.',
    excerpt: 'Приглашаем на День открытых дверей - познакомьтесь с колледжем и специальностями',
    category: 'События',
    imageUrl: '/img/open-door-day.jpg',
    author: 'Администрация',
    publishedAt: '2024-08-20',
    isPublished: true,
    tags: ['поступление', 'мероприятие', 'знакомство']
  },
  {
    id: '2',
    title: 'Новая специальность: Веб-разработка',
    content: 'С нового учебного года в нашем колледже открывается новая специальность "Веб-разработка". Студенты изучат современные технологии программирования, дизайна интерфейсов и создания веб-приложений.',
    excerpt: 'Открываем новую специальность по веб-разработке с изучением современных технологий',
    category: 'Образование',
    imageUrl: '/img/web-development.jpg',
    author: 'Учебная часть',
    publishedAt: '2024-08-18',
    isPublished: true,
    tags: ['образование', 'специальность', 'технологии']
  },
  {
    id: '3',
    title: 'Победа в региональном конкурсе',
    content: 'Студенты нашего колледжа заняли первое место в региональном конкурсе профессионального мастерства по специальности "Информационные системы". Поздравляем наших талантливых учащихся!',
    excerpt: 'Наши студенты заняли 1 место в региональном конкурсе профмастерства',
    category: 'Достижения',
    imageUrl: '/img/competition-win.jpg',
    author: 'Пресс-служба',
    publishedAt: '2024-08-15',
    isPublished: true,
    tags: ['достижения', 'конкурс', 'студенты']
  }
];

export function NewsProvider({ children }: { children: React.ReactNode }) {
  const [news, setNews] = useState<NewsItem[]>([]);

  useEffect(() => {
    const savedNews = localStorage.getItem('collegeNews');
    if (savedNews) {
      setNews(JSON.parse(savedNews));
    } else {
      setNews(defaultNews);
      localStorage.setItem('collegeNews', JSON.stringify(defaultNews));
    }
  }, []);

  const saveToStorage = (newsData: NewsItem[]) => {
    localStorage.setItem('collegeNews', JSON.stringify(newsData));
  };

  const addNews = (newsData: Omit<NewsItem, 'id' | 'publishedAt'>) => {
    const newNews: NewsItem = {
      ...newsData,
      id: Date.now().toString(),
      publishedAt: new Date().toISOString().split('T')[0]
    };
    const updatedNews = [newNews, ...news];
    setNews(updatedNews);
    saveToStorage(updatedNews);
  };

  const updateNews = (id: string, updatedData: Partial<NewsItem>) => {
    const updatedNews = news.map(item =>
      item.id === id ? { ...item, ...updatedData } : item
    );
    setNews(updatedNews);
    saveToStorage(updatedNews);
  };

  const deleteNews = (id: string) => {
    const updatedNews = news.filter(item => item.id !== id);
    setNews(updatedNews);
    saveToStorage(updatedNews);
  };

  const getNewsById = (id: string) => {
    return news.find(item => item.id === id);
  };

  const getPublishedNews = () => {
    return news
      .filter(item => item.isPublished)
      .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
  };

  return (
    <NewsContext.Provider value={{
      news,
      addNews,
      updateNews,
      deleteNews,
      getNewsById,
      getPublishedNews
    }}>
      {children}
    </NewsContext.Provider>
  );
}

export function useNews() {
  const context = useContext(NewsContext);
  if (context === undefined) {
    throw new Error('useNews must be used within a NewsProvider');
  }
  return context;
}