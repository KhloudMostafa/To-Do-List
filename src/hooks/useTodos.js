import { useState, useEffect } from 'react';

export function useTodos() {
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem('my_todos');
    if (saved) return JSON.parse(saved);
    return []; 
  });

  const [filter, setFilter] = useState('All');
  const [scheduleFilter, setScheduleFilter] = useState('Today');

  useEffect(() => {
    localStorage.setItem('my_todos', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (text, priority, dueDate) => {
    const newTask = {
      id: Date.now(),
      text,
      date: dueDate || new Date().toISOString().split('T')[0],
      priority,
      status: 'Todo'
    };
    setTasks([newTask, ...tasks]);
  };

  const editTask = (id, updatedText, updatedPriority, updatedDate) => {
    setTasks(tasks.map(t => 
      t.id === id 
        ? { ...t, text: updatedText, priority: updatedPriority, date: updatedDate } 
        : t
    ));
  };

  const changeTaskStatus = (id, newStatus) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, status: newStatus } : t));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(t => t.id !== id));
  };

  const filteredTasks = tasks.filter(task => {
    if (filter === 'Todo') return task.status === 'Todo';
    if (filter === 'In Progress') return task.status === 'In Progress';
    if (filter === 'Completed') return task.status === 'Completed';
    return true;
  });

  const scheduleTasks = tasks.filter(task => {
    const taskDate = new Date(task.date).setHours(0,0,0,0);
    const today = new Date().setHours(0,0,0,0);
    const tomorrow = new Date(today + 86400000).setHours(0,0,0,0);
    const weekEnd = new Date(today + 7 * 86400000).setHours(0,0,0,0);

    if (scheduleFilter === 'Today') return taskDate === today;
    if (scheduleFilter === 'Tomorrow') return taskDate === tomorrow;
    if (scheduleFilter === 'This week') return taskDate >= today && taskDate <= weekEnd;
    return true;
  });

  return {
    tasks,
    filter,
    setFilter,
    scheduleFilter,
    setScheduleFilter,
    filteredTasks,
    scheduleTasks,
    addTask,
    editTask, 
    changeTaskStatus,
    deleteTask,
    totalTasks: tasks.length,
    completedCount: tasks.filter(t => t.status === 'Completed').length,
    inProgressCount: tasks.filter(t => t.status === 'In Progress').length,
    pendingCount: tasks.filter(t => t.status === 'Todo').length,
  };
}