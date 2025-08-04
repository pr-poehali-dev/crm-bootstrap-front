import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [selectedDepartment, setSelectedDepartment] = useState('dispatch');

  // Данные диспетчерской службы
  const dispatchService = {
    main: '+7 991 639-62-20',
    dispatcher: {
      name: 'Кипа Елена',
      phone: '+7 991 639-62-80',
      status: 'дежурный'
    },
    sectionDispatcher: {
      name: 'Мельникова Оксана', 
      phone: '+7 991 639-62-01',
      section: '23 участок'
    },
    offDuty: {
      name: 'Ванькова Виктория',
      phone: '+7 991 639-62-90',
      status: 'выходной'
    }
  };

  // Аварийная группа
  const emergencyTeam = [
    { name: 'Ходжаев Окил', phone: '+7 977 936-53-12', role: 'Электрик', status: 'active' },
    { name: 'Хайриев Фармон', phone: '+7 963 272-33-33', role: 'Сварщик', status: 'active' },
    { name: 'Абдурахимов Муратбек', phone: '+7 996 361-68-45', role: 'Техник', status: 'active' },
    { name: 'Раимбергенов Умид', phone: '+7 991 733-00-06', role: 'Техник', status: 'active' }
  ];

  // Электроцех
  const electricDepartment = [
    { name: 'Ходжаев Окил', phone: '+7 977 936-53-12', role: 'Инженер П/В В и ЦО', task: 'Опрессовка школы 1362 на 1 участке', status: 'working' },
    { name: 'Кузьмин Владимир', phone: '+7 920 240-33-48', role: 'Электромонтёр', task: 'отпуск', status: 'vacation' },
    { name: 'Лазарчук Дмитрий', phone: '+7 965 361-85-34', role: 'Электромонтёр', task: 'ТО на 16-м участке', status: 'working' },
    { name: 'Коломейчук Вадим', phone: '+7 926 218-52-91', role: 'Электромонтёр', task: 'ТО на 12-м участке', status: 'working' },
    { name: 'Толстиков Дмитрий', phone: '+79771361592', role: 'Электромонтёр', task: 'ТО на 10-м участке', status: 'working' },
    { name: 'Сёмин Игорь', phone: '+79296729987', role: 'Электромонтер', task: 'ТО на 17-м участке', status: 'working' }
  ];

  // Участки
  const sections = [
    { number: 1, name: 'Преображенка', brigade: 1, technician: 'Горностаев Сергей', phone: '+79150639051', task: 'опрессовка школы 1362' },
    { number: 2, name: 'Черёмушки', brigade: 1, technician: 'Захарченко Григорий', phone: '8 968 359 21 99', task: 'осмотры, заявки' },
    { number: 3, name: 'Академический', brigade: 1, technician: 'Рашидов Озад', phone: '+7 977 157-92-03', task: 'работа на 15-м участке' },
    { number: 4, name: 'Север', brigade: 2, technician: 'Абдурахимов Муратбек', phone: '+7 996 361-68-45', task: 'осмотры, заявки' },
    { number: 5, name: 'Спортивная', brigade: 1, technician: 'Раимбергенов Умид', phone: '+7 991 733-00-06', task: 'осмотры, заявки' },
    { number: 6, name: 'Коммунарка', brigade: 2, technician: 'Панфилов Денис', phone: '+7 901 793 75 28', task: 'осмотры, заявки' },
    { number: 7, name: 'ВДНХ', brigade: 2, technician: 'Гришаков Алексей', phone: '+7 926 869- 52-71', task: 'осмотры, заявки' },
    { number: 8, name: 'Центр', brigade: 2, technician: null, phone: null, task: 'техник отсутствует' },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-800';
      case 'working': return 'bg-blue-100 text-blue-800';
      case 'vacation': return 'bg-orange-100 text-orange-800';
      case 'off': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Заголовок */}
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold text-slate-900">CRM Диспетчерской Службы</h1>
          <p className="text-slate-600">Наряд на 28.07 - Управление персоналом и заданиями</p>
        </div>

        {/* Основная панель управления */}
        <Card className="animate-fade-in">
          <CardHeader className="bg-blue-600 text-white rounded-t-lg">
            <CardTitle className="flex items-center gap-2">
              <Icon name="Phone" size={24} />
              Диспетчерская служба
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-blue-50 p-4 rounded-lg">
                <div className="font-semibold text-blue-900">Главная линия</div>
                <div className="text-xl font-mono text-blue-700">{dispatchService.main}</div>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <div className="font-semibold text-green-900">{dispatchService.dispatcher.name}</div>
                <div className="text-sm text-green-700">Дежурный диспетчер</div>
                <div className="font-mono text-green-700">{dispatchService.dispatcher.phone}</div>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg">
                <div className="font-semibold text-purple-900">{dispatchService.sectionDispatcher.name}</div>
                <div className="text-sm text-purple-700">{dispatchService.sectionDispatcher.section}</div>
                <div className="font-mono text-purple-700">{dispatchService.sectionDispatcher.phone}</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Табы для разных разделов */}
        <Tabs defaultValue="emergency" className="animate-fade-in">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="emergency">Аварийная группа</TabsTrigger>
            <TabsTrigger value="electric">Электроцех</TabsTrigger>
            <TabsTrigger value="sections">Участки</TabsTrigger>
            <TabsTrigger value="stats">Статистика</TabsTrigger>
          </TabsList>

          {/* Аварийная группа */}
          <TabsContent value="emergency" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {emergencyTeam.map((member, index) => (
                <Card key={index} className="hover-scale">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                        <Icon name="Zap" size={20} className="text-red-600" />
                      </div>
                      <div>
                        <div className="font-semibold text-sm">{member.name}</div>
                        <Badge className={getStatusColor(member.status)}>{member.role}</Badge>
                      </div>
                    </div>
                    <div className="text-xs font-mono text-slate-600">{member.phone}</div>
                    <Button size="sm" className="w-full mt-3">
                      <Icon name="Phone" size={16} className="mr-2" />
                      Связаться
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Электроцех */}
          <TabsContent value="electric" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {electricDepartment.map((worker, index) => (
                <Card key={index} className="hover-scale">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center">
                        <Icon name="Wrench" size={20} className="text-yellow-600" />
                      </div>
                      <div className="flex-1">
                        <div className="font-semibold text-sm">{worker.name}</div>
                        <div className="text-xs text-slate-500">{worker.role}</div>
                      </div>
                      <Badge className={getStatusColor(worker.status)}>
                        {worker.status === 'working' ? 'Работает' : worker.status === 'vacation' ? 'Отпуск' : 'Доступен'}
                      </Badge>
                    </div>
                    <div className="text-xs font-mono text-slate-600 mb-2">{worker.phone}</div>
                    <div className="text-xs text-slate-700 bg-slate-50 p-2 rounded">{worker.task}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Участки */}
          <TabsContent value="sections" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {sections.map((section, index) => (
                <Card key={index} className="hover-scale">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                          <span className="text-blue-600 font-bold text-sm">#{section.number}</span>
                        </div>
                        <div>
                          <div className="font-semibold text-sm">{section.name}</div>
                          <Badge variant="outline">Бригада {section.brigade}</Badge>
                        </div>
                      </div>
                    </div>
                    {section.technician ? (
                      <div>
                        <div className="text-sm font-medium">{section.technician}</div>
                        <div className="text-xs font-mono text-slate-600 mb-2">{section.phone}</div>
                        <div className="text-xs text-slate-700 bg-green-50 p-2 rounded">{section.task}</div>
                      </div>
                    ) : (
                      <div className="text-center p-4">
                        <Icon name="UserX" size={24} className="mx-auto text-gray-400 mb-2" />
                        <div className="text-sm text-gray-500">Техник отсутствует</div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Статистика */}
          <TabsContent value="stats" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-blue-600">8</div>
                  <div className="text-sm text-slate-600">Участков активны</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-green-600">14</div>
                  <div className="text-sm text-slate-600">Сотрудников на смене</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-orange-600">1</div>
                  <div className="text-sm text-slate-600">В отпуске</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-red-600">4</div>
                  <div className="text-sm text-slate-600">Аварийная группа</div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Index;