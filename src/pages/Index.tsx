import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '@/components/ui/alert-dialog';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [selectedDepartment, setSelectedDepartment] = useState('dispatch');
  const [editingEmployee, setEditingEmployee] = useState<any>(null);
  const [editingSection, setEditingSection] = useState<any>(null);
  const [isAddingEmployee, setIsAddingEmployee] = useState(false);
  const [isAddingSection, setIsAddingSection] = useState(false);
  const [employeeForm, setEmployeeForm] = useState({
    name: '',
    phone: '',
    role: '',
    task: '',
    status: 'active',
    department: 'emergency'
  });
  const [sectionForm, setSectionForm] = useState({
    number: '',
    name: '',
    brigade: 1,
    technician: '',
    phone: '',
    task: ''
  });
  
  // Состояние для управления данными
  const [emergencyTeamState, setEmergencyTeamState] = useState(emergencyTeam);
  const [electricDepartmentState, setElectricDepartmentState] = useState(electricDepartment);
  const [sectionsState, setSectionsState] = useState(sections);

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

  // Первоначальные данные
  const emergencyTeam = [
    { name: 'Ходжаев Окил', phone: '+7 977 936-53-12', role: 'Электрик', status: 'active' },
    { name: 'Хайриев Фармон', phone: '+7 963 272-33-33', role: 'Сварщик', status: 'active' },
    { name: 'Абдурахимов Муратбек', phone: '+7 996 361-68-45', role: 'Техник', status: 'active' },
    { name: 'Раимбергенов Умид', phone: '+7 991 733-00-06', role: 'Техник', status: 'active' }
  ];

  const initialElectricDepartment = [
    { name: 'Ходжаев Окил', phone: '+7 977 936-53-12', role: 'Инженер П/В В и ЦО', task: 'Опрессовка школы 1362 на 1 участке', status: 'working' },
    { name: 'Кузьмин Владимир', phone: '+7 920 240-33-48', role: 'Электромонтёр', task: 'отпуск', status: 'vacation' },
    { name: 'Лазарчук Дмитрий', phone: '+7 965 361-85-34', role: 'Электромонтёр', task: 'ТО на 16-м участке', status: 'working' },
    { name: 'Коломейчук Вадим', phone: '+7 926 218-52-91', role: 'Электромонтёр', task: 'ТО на 12-м участке', status: 'working' },
    { name: 'Толстиков Дмитрий', phone: '+79771361592', role: 'Электромонтёр', task: 'ТО на 10-м участке', status: 'working' },
    { name: 'Сёмин Игорь', phone: '+79296729987', role: 'Электромонтер', task: 'ТО на 17-м участке', status: 'working' }
  ];

  const initialSections = [
    { number: 1, name: 'Преображенка', brigade: 1, technician: 'Горностаев Сергей', phone: '+79150639051', task: 'опрессовка школы 1362' },
    { number: 2, name: 'Черёмушки', brigade: 1, technician: 'Захарченко Григорий', phone: '8 968 359 21 99', task: 'осмотры, заявки' },
    { number: 3, name: 'Академический', brigade: 1, technician: 'Рашидов Озад', phone: '+7 977 157-92-03', task: 'работа на 15-м участке' },
    { number: 4, name: 'Север', brigade: 2, technician: 'Абдурахимов Муратбек', phone: '+7 996 361-68-45', task: 'осмотры, заявки' },
    { number: 5, name: 'Спортивная', brigade: 1, technician: 'Раимбергенов Умид', phone: '+7 991 733-00-06', task: 'осмотры, заявки' },
    { number: 6, name: 'Коммунарка', brigade: 2, technician: 'Панфилов Денис', phone: '+7 901 793 75 28', task: 'осмотры, заявки' },
    { number: 7, name: 'ВДНХ', brigade: 2, technician: 'Гришаков Алексей', phone: '+7 926 869- 52-71', task: 'осмотры, заявки' },
    { number: 8, name: 'Центр', brigade: 2, technician: null, phone: null, task: 'техник отсутствует' },
  ];

  const [selectedDepartment, setSelectedDepartment] = useState('dispatch');
  const [editingEmployee, setEditingEmployee] = useState<any>(null);
  const [editingSection, setEditingSection] = useState<any>(null);
  const [isAddingEmployee, setIsAddingEmployee] = useState(false);
  const [isAddingSection, setIsAddingSection] = useState(false);
  const [employeeForm, setEmployeeForm] = useState({
    name: '',
    phone: '',
    role: '',
    task: '',
    status: 'active',
    department: 'emergency'
  });
  const [sectionForm, setSectionForm] = useState({
    number: '',
    name: '',
    brigade: 1,
    technician: '',
    phone: '',
    task: ''
  });
  
  // Состояние для управления данными
  const [emergencyTeamState, setEmergencyTeamState] = useState(initialEmergencyTeam);
  const [electricDepartmentState, setElectricDepartmentState] = useState(initialElectricDepartment);
  const [sectionsState, setSectionsState] = useState(initialSections);

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

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-800';
      case 'working': return 'bg-blue-100 text-blue-800';
      case 'vacation': return 'bg-orange-100 text-orange-800';
      case 'off': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  // CRUD функции для сотрудников
  const handleAddEmployee = () => {
    const newEmployee = {
      ...employeeForm,
      id: Date.now() // Временный ID
    };
    
    if (employeeForm.department === 'emergency') {
      setEmergencyTeamState([...emergencyTeamState, newEmployee]);
    } else if (employeeForm.department === 'electric') {
      setElectricDepartmentState([...electricDepartmentState, newEmployee]);
    }
    
    setEmployeeForm({
      name: '',
      phone: '',
      role: '',
      task: '',
      status: 'active',
      department: 'emergency'
    });
    setIsAddingEmployee(false);
  };

  const handleEditEmployee = (employee: any, department: string) => {
    setEditingEmployee({ ...employee, department });
    setEmployeeForm({ ...employee, department });
  };

  const handleUpdateEmployee = () => {
    if (editingEmployee.department === 'emergency') {
      setEmergencyTeamState(emergencyTeamState.map(emp => 
        emp === editingEmployee ? { ...employeeForm, id: editingEmployee.id } : emp
      ));
    } else if (editingEmployee.department === 'electric') {
      setElectricDepartmentState(electricDepartmentState.map(emp => 
        emp === editingEmployee ? { ...employeeForm, id: editingEmployee.id } : emp
      ));
    }
    
    setEditingEmployee(null);
    setEmployeeForm({
      name: '',
      phone: '',
      role: '',
      task: '',
      status: 'active',
      department: 'emergency'
    });
  };

  const handleDeleteEmployee = (employee: any, department: string) => {
    if (department === 'emergency') {
      setEmergencyTeamState(emergencyTeamState.filter(emp => emp !== employee));
    } else if (department === 'electric') {
      setElectricDepartmentState(electricDepartmentState.filter(emp => emp !== employee));
    }
  };

  // CRUD функции для участков
  const handleAddSection = () => {
    const newSection = {
      ...sectionForm,
      number: parseInt(sectionForm.number),
      id: Date.now()
    };
    
    setSectionsState([...sectionsState, newSection]);
    setSectionForm({
      number: '',
      name: '',
      brigade: 1,
      technician: '',
      phone: '',
      task: ''
    });
    setIsAddingSection(false);
  };

  const handleEditSection = (section: any) => {
    setEditingSection(section);
    setSectionForm({
      ...section,
      number: section.number.toString()
    });
  };

  const handleUpdateSection = () => {
    const updatedSection = {
      ...sectionForm,
      number: parseInt(sectionForm.number),
      id: editingSection.id
    };
    
    setSectionsState(sectionsState.map(section => 
      section === editingSection ? updatedSection : section
    ));
    
    setEditingSection(null);
    setSectionForm({
      number: '',
      name: '',
      brigade: 1,
      technician: '',
      phone: '',
      task: ''
    });
  };

  const handleDeleteSection = (section: any) => {
    setSectionsState(sectionsState.filter(s => s !== section));
  };

  // Компонент модального окна для редактирования сотрудника
  const EmployeeDialog = ({ employee, isOpen, onClose, isEditing }: any) => (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>{isEditing ? 'Редактировать сотрудника' : 'Добавить сотрудника'}</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <div>
            <Label htmlFor="name">ФИО</Label>
            <Input
              id="name"
              value={employeeForm.name}
              onChange={(e) => setEmployeeForm({...employeeForm, name: e.target.value})}
              placeholder="Введите ФИО"
            />
          </div>
          <div>
            <Label htmlFor="phone">Телефон</Label>
            <Input
              id="phone"
              value={employeeForm.phone}
              onChange={(e) => setEmployeeForm({...employeeForm, phone: e.target.value})}
              placeholder="+7 XXX XXX-XX-XX"
            />
          </div>
          <div>
            <Label htmlFor="role">Должность</Label>
            <Input
              id="role"
              value={employeeForm.role}
              onChange={(e) => setEmployeeForm({...employeeForm, role: e.target.value})}
              placeholder="Должность"
            />
          </div>
          <div>
            <Label htmlFor="task">Текущее задание</Label>
            <Textarea
              id="task"
              value={employeeForm.task}
              onChange={(e) => setEmployeeForm({...employeeForm, task: e.target.value})}
              placeholder="Описание текущего задания"
            />
          </div>
          <div>
            <Label htmlFor="status">Статус</Label>
            <Select value={employeeForm.status} onValueChange={(value) => setEmployeeForm({...employeeForm, status: value})}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="active">Активен</SelectItem>
                <SelectItem value="working">Работает</SelectItem>
                <SelectItem value="vacation">Отпуск</SelectItem>
                <SelectItem value="off">Выходной</SelectItem>
              </SelectContent>
            </Select>
          </div>
          {!isEditing && (
            <div>
              <Label htmlFor="department">Подразделение</Label>
              <Select value={employeeForm.department} onValueChange={(value) => setEmployeeForm({...employeeForm, department: value})}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="emergency">Аварийная группа</SelectItem>
                  <SelectItem value="electric">Электроцех</SelectItem>
                </SelectContent>
              </Select>
            </div>
          )}
          <div className="flex gap-2 justify-end">
            <Button variant="outline" onClick={onClose}>Отмена</Button>
            <Button onClick={isEditing ? handleUpdateEmployee : handleAddEmployee}>
              {isEditing ? 'Сохранить' : 'Добавить'}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );

  // Компонент модального окна для редактирования участка
  const SectionDialog = ({ section, isOpen, onClose, isEditing }: any) => (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>{isEditing ? 'Редактировать участок' : 'Добавить участок'}</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <div>
            <Label htmlFor="number">Номер участка</Label>
            <Input
              id="number"
              type="number"
              value={sectionForm.number}
              onChange={(e) => setSectionForm({...sectionForm, number: e.target.value})}
              placeholder="Номер"
            />
          </div>
          <div>
            <Label htmlFor="sectionName">Название участка</Label>
            <Input
              id="sectionName"
              value={sectionForm.name}
              onChange={(e) => setSectionForm({...sectionForm, name: e.target.value})}
              placeholder="Название участка"
            />
          </div>
          <div>
            <Label htmlFor="brigade">Бригада</Label>
            <Select value={sectionForm.brigade.toString()} onValueChange={(value) => setSectionForm({...sectionForm, brigade: parseInt(value)})}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">Бригада 1</SelectItem>
                <SelectItem value="2">Бригада 2</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label htmlFor="technician">Техник</Label>
            <Input
              id="technician"
              value={sectionForm.technician}
              onChange={(e) => setSectionForm({...sectionForm, technician: e.target.value})}
              placeholder="ФИО техника"
            />
          </div>
          <div>
            <Label htmlFor="sectionPhone">Телефон техника</Label>
            <Input
              id="sectionPhone"
              value={sectionForm.phone}
              onChange={(e) => setSectionForm({...sectionForm, phone: e.target.value})}
              placeholder="+7 XXX XXX-XX-XX"
            />
          </div>
          <div>
            <Label htmlFor="sectionTask">Текущее задание</Label>
            <Textarea
              id="sectionTask"
              value={sectionForm.task}
              onChange={(e) => setSectionForm({...sectionForm, task: e.target.value})}
              placeholder="Описание задания"
            />
          </div>
          <div className="flex gap-2 justify-end">
            <Button variant="outline" onClick={onClose}>Отмена</Button>
            <Button onClick={isEditing ? handleUpdateSection : handleAddSection}>
              {isEditing ? 'Сохранить' : 'Добавить'}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );

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
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Аварийная группа</h3>
              <Button onClick={() => {
                setEmployeeForm({...employeeForm, department: 'emergency'});
                setIsAddingEmployee(true);
              }}>
                <Icon name="Plus" size={16} className="mr-2" />
                Добавить сотрудника
              </Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {emergencyTeamState.map((member, index) => (
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
                    <div className="flex gap-2 mt-3">
                      <Button size="sm" className="flex-1">
                        <Icon name="Phone" size={14} className="mr-1" />
                        Звонок
                      </Button>
                      <Button 
                        size="sm" 
                        variant="outline"
                        onClick={() => handleEditEmployee(member, 'emergency')}
                      >
                        <Icon name="Edit" size={14} />
                      </Button>
                      <AlertDialog>
                        <AlertDialogTrigger asChild>
                          <Button size="sm" variant="destructive">
                            <Icon name="Trash2" size={14} />
                          </Button>
                        </AlertDialogTrigger>
                        <AlertDialogContent>
                          <AlertDialogHeader>
                            <AlertDialogTitle>Удалить сотрудника?</AlertDialogTitle>
                            <AlertDialogDescription>
                              Вы уверены, что хотите удалить {member.name}? Это действие нельзя отменить.
                            </AlertDialogDescription>
                          </AlertDialogHeader>
                          <AlertDialogFooter>
                            <AlertDialogCancel>Отмена</AlertDialogCancel>
                            <AlertDialogAction onClick={() => handleDeleteEmployee(member, 'emergency')}>
                              Удалить
                            </AlertDialogAction>
                          </AlertDialogFooter>
                        </AlertDialogContent>
                      </AlertDialog>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Электроцех */}
          <TabsContent value="electric" className="space-y-4">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Электроцех</h3>
              <Button onClick={() => {
                setEmployeeForm({...employeeForm, department: 'electric'});
                setIsAddingEmployee(true);
              }}>
                <Icon name="Plus" size={16} className="mr-2" />
                Добавить сотрудника
              </Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {electricDepartmentState.map((worker, index) => (
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
                    <div className="text-xs text-slate-700 bg-slate-50 p-2 rounded mb-3">{worker.task}</div>
                    <div className="flex gap-2">
                      <Button size="sm" className="flex-1">
                        <Icon name="Phone" size={14} className="mr-1" />
                        Звонок
                      </Button>
                      <Button 
                        size="sm" 
                        variant="outline"
                        onClick={() => handleEditEmployee(worker, 'electric')}
                      >
                        <Icon name="Edit" size={14} />
                      </Button>
                      <AlertDialog>
                        <AlertDialogTrigger asChild>
                          <Button size="sm" variant="destructive">
                            <Icon name="Trash2" size={14} />
                          </Button>
                        </AlertDialogTrigger>
                        <AlertDialogContent>
                          <AlertDialogHeader>
                            <AlertDialogTitle>Удалить сотрудника?</AlertDialogTitle>
                            <AlertDialogDescription>
                              Вы уверены, что хотите удалить {worker.name}? Это действие нельзя отменить.
                            </AlertDialogDescription>
                          </AlertDialogHeader>
                          <AlertDialogFooter>
                            <AlertDialogCancel>Отмена</AlertDialogCancel>
                            <AlertDialogAction onClick={() => handleDeleteEmployee(worker, 'electric')}>
                              Удалить
                            </AlertDialogAction>
                          </AlertDialogFooter>
                        </AlertDialogContent>
                      </AlertDialog>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Участки */}
          <TabsContent value="sections" className="space-y-4">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Участки</h3>
              <Button onClick={() => setIsAddingSection(true)}>
                <Icon name="Plus" size={16} className="mr-2" />
                Добавить участок
              </Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {sectionsState.map((section, index) => (
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
                        <div className="text-sm text-gray-500 mb-3">Техник отсутствует</div>
                      </div>
                    )}
                    <div className="flex gap-2 mt-3 pt-3 border-t">
                      <Button size="sm" className="flex-1" disabled={!section.technician}>
                        <Icon name="Phone" size={14} className="mr-1" />
                        Звонок
                      </Button>
                      <Button 
                        size="sm" 
                        variant="outline"
                        onClick={() => handleEditSection(section)}
                      >
                        <Icon name="Edit" size={14} />
                      </Button>
                      <AlertDialog>
                        <AlertDialogTrigger asChild>
                          <Button size="sm" variant="destructive">
                            <Icon name="Trash2" size={14} />
                          </Button>
                        </AlertDialogTrigger>
                        <AlertDialogContent>
                          <AlertDialogHeader>
                            <AlertDialogTitle>Удалить участок?</AlertDialogTitle>
                            <AlertDialogDescription>
                              Вы уверены, что хотите удалить участок №{section.number} "{section.name}"? Это действие нельзя отменить.
                            </AlertDialogDescription>
                          </AlertDialogHeader>
                          <AlertDialogFooter>
                            <AlertDialogCancel>Отмена</AlertDialogCancel>
                            <AlertDialogAction onClick={() => handleDeleteSection(section)}>
                              Удалить
                            </AlertDialogAction>
                          </AlertDialogFooter>
                        </AlertDialogContent>
                      </AlertDialog>
                    </div>
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
                  <div className="text-3xl font-bold text-blue-600">{sectionsState.filter(s => s.technician).length}</div>
                  <div className="text-sm text-slate-600">Участков активны</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-green-600">{emergencyTeamState.length + electricDepartmentState.filter(e => e.status !== 'vacation').length}</div>
                  <div className="text-sm text-slate-600">Сотрудников на смене</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-orange-600">{electricDepartmentState.filter(e => e.status === 'vacation').length}</div>
                  <div className="text-sm text-slate-600">В отпуске</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-red-600">{emergencyTeamState.length}</div>
                  <div className="text-sm text-slate-600">Аварийная группа</div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
        
        {/* Модальные окна */}
        <EmployeeDialog 
          employee={editingEmployee}
          isOpen={isAddingEmployee || editingEmployee !== null}
          onClose={() => {
            setIsAddingEmployee(false);
            setEditingEmployee(null);
            setEmployeeForm({
              name: '',
              phone: '',
              role: '',
              task: '',
              status: 'active',
              department: 'emergency'
            });
          }}
          isEditing={editingEmployee !== null}
        />
        
        <SectionDialog 
          section={editingSection}
          isOpen={isAddingSection || editingSection !== null}
          onClose={() => {
            setIsAddingSection(false);
            setEditingSection(null);
            setSectionForm({
              number: '',
              name: '',
              brigade: 1,
              technician: '',
              phone: '',
              task: ''
            });
          }}
          isEditing={editingSection !== null}
        />
      </div>
    </div>
  );
};

export default Index;