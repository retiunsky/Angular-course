// Тестовые данные в виде массивов (заменяют таблицы бд)

import {Category} from '../model/Category';
import {Priority} from '../model/Priority';
import {Task} from '../model/Task';

export class TestData {
  static categories: Category[] = [
    {id: 1, title: 'Работа'},
    {id: 2, title: 'Семья'},
    {id: 3, title: 'Учеба'},
    {id: 4, title: 'Отдых'},
    {id: 5, title: 'Спорт'},
    {id: 6, title: 'Еда'},
    {id: 7, title: 'Финансы'},
    {id: 8, title: 'Гаджеты'},
    {id: 9, title: 'Здоровье'},
    {id: 10, title: 'Автомобиль'},
    {id: 11, title: 'Ремонт'}
  ];

  static priorities: Priority[] = [
    {id: 1, title: 'Низкий', color: '#e5e5e5'},
    {id: 2, title: 'Средний', color: '#85D1B2'},
    {id: 3, title: 'Высокий', color: '#F1828D'},
    {id: 4, title: 'Очень срочно', color: '#F1128D'}
  ];
  // не забыть - индексация приоритетов и категорий начинается с нуля
  static tasks: Task[] = [
    {
      id: 1,
      title: 'Заправить бензин',
      priority: TestData.priorities[2],
      completed: false,
      category: TestData.categories[9],
      date: new Date('2020-04-10')
    },

    {
      id: 2,
      title: 'Передать отчет руководству',
      priority: TestData.priorities[0],
      completed: false,
      category: TestData.categories[0],
      date: new Date('2020-04-01')
    },

    {
      id: 3,
      title: 'Убраться в комнате',
      priority: TestData.priorities[2],
      completed: true,
      category: TestData.categories[1],
    },

    {
      id: 4,
      title: 'Сходить в парк',
      priority: TestData.priorities[1],
      completed: false,
      category: TestData.categories[1],
      date: new Date('2020-08-17')
    },

    {
      id: 5,
      title: 'Найти учебник',
      completed: false,
      category: TestData.categories[2],
    },

    {
      id: 6,
      title: 'Сходить на семинар',
      priority: TestData.priorities[1],
      completed: true,
      category: TestData.categories[2],
      date: new Date('2020-06-11')
    },

    {
      id: 7,
      title: 'Найти билеты в турцию',
      priority: TestData.priorities[2],
      completed: false,
      category: TestData.categories[3],
    },

    {
      id: 8,
      title: 'Приготовить ужин',
      completed: false,
      category: TestData.categories[5],
    },

    {
      id: 9,
      title: 'Подтянуться',
      priority: TestData.priorities[2],
      completed: false,
      category: TestData.categories[4],
      date: new Date('2020-03-12')
    },

    {
      id: 10,
      title: 'Пробежать 10000м',
      priority: TestData.priorities[0],
      completed: true,
      category: TestData.categories[4],
    },

    {
      id: 11,
      title: 'Организовать детский праздник',
      completed: false,
    },

    {
      id: 12,
      title: 'Сходить на лекцию джава',
      priority: TestData.priorities[1],
      completed: false,
      category: TestData.categories[2],
    },

    {
      id: 13,
      title: 'Купить продукты',
      priority: TestData.priorities[2],
      completed: false,
      category: TestData.categories[5],
      date: new Date('2020-05-11')
    },

    {
      id: 14,
      title: 'Провести собрание',
      completed: true,
      category: TestData.categories[0],
    },


    {
      id: 15,
      title: 'Сдать экзамен по джава',
      priority: TestData.priorities[2],
      completed: true,
    },


    {
      id: 16,
      title: 'Положить 1000 грн на депозит',
      priority: TestData.priorities[3],
      completed: false,
      category: TestData.categories[6],
    },

    {
      id: 17,
      title: 'Попросить аванс',
      priority: TestData.priorities[2],
      completed: false,
      category: TestData.categories[6],
    },

    {
      id: 18,
      title: 'Сдать анализы',
      priority: TestData.priorities[3],
      completed: false,
      category: TestData.categories[8],
      date: new Date('2020-12-11')
    },

    {
      id: 19,
      title: 'Сравнить новый айпед с галакситаб',
      priority: TestData.priorities[0],
      completed: false,
      category: TestData.categories[7],
      date: new Date('2020-10-11')
    },

    {
      id: 20,
      title: 'Футбол с сотрудниками',
      priority: TestData.priorities[0],
      completed: false,
      category: TestData.categories[4],
      date: new Date('2020-03-17')
    },
  ];

}
