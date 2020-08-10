import {Injectable} from '@angular/core';
import {Category} from '../model/Category';
import {TestData} from '../Data/TestData';
import {Task} from '../model/Task';

@Injectable({
  providedIn: 'root'
})
export class DataHandlerService {
  private task: any;

  constructor() {
  }

  getCategories(): Category[] {
    return TestData.categories;
  }

  getTasks(): Task[] {
    return TestData.tasks;
  }

  getTasksByCategory(category: Category): Task[] {
    const tasks = TestData.tasks.filter(value => this.task.category === category);
    return tasks;
  }
}
