import { useTodos } from './hooks/useTodos';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import FilterTabs from './components/FilterTabs';
import TaskList from './components/TaskList';
import ScheduleCard from './components/ScheduleCard';
import './App.css';

function App() {
  const {
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
    totalTasks,
    completedCount,
    inProgressCount,
    pendingCount
  } = useTodos();

  return (
    <div className="min-vh-100 bg-light-subtle d-flex flex-column align-items-center py-5 px-3">
      <Header />

      <div className="w-100 max-w-lg d-flex gap-4 flex-wrap flex-lg-nowrap">
        <Sidebar 
          onAddTask={addTask}
          totalTasks={totalTasks}
          completedCount={completedCount}
          inProgressCount={inProgressCount}
          pendingCount={pendingCount}
        />

        <div className="flex-grow-1 w-100">
          <div className="card shadow-sm border-0 p-4 bg-white rounded-4">
            <h5 className="card-title fw-semibold mb-3 text-dark">Todo List</h5>
            
            <FilterTabs filter={filter} setFilter={setFilter} />

            <TaskList 
              tasks={filteredTasks} 
              onChangeStatus={changeTaskStatus} 
              onDelete={deleteTask} 
              onEdit={editTask}
            />
          </div>

          <ScheduleCard 
            scheduleFilter={scheduleFilter}
            setScheduleFilter={setScheduleFilter}
            tasks={scheduleTasks}
            onChangeStatus={changeTaskStatus}
            onDelete={deleteTask}
            onEdit={editTask}
          />
        </div>
      </div>
    </div>
  );
}

export default App;