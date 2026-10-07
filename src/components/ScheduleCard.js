import TaskList from './TaskList';

function ScheduleCard({ scheduleFilter, setScheduleFilter, tasks, onToggle, onDelete }) {
  return (
    <div className="card shadow-sm border-0 p-4 bg-white rounded-4 mt-4">
      <h5 className="card-title fw-semibold mb-3 text-dark">Schedule</h5>
      
      <div className="d-flex gap-2 mb-4 border-bottom pb-3">
        <button 
          className={`btn btn-sm rounded-pill ${scheduleFilter === 'Today' ? 'btn-primary' : 'btn-light border text-secondary'}`}
          onClick={() => setScheduleFilter('Today')}
        >
          <i className="bi bi-calendar-check me-1"></i>Today
        </button>
        <button 
          className={`btn btn-sm rounded-pill ${scheduleFilter === 'Tomorrow' ? 'btn-primary' : 'btn-light border text-secondary'}`}
          onClick={() => setScheduleFilter('Tomorrow')}
        >
          <i className="bi bi-calendar-plus me-1"></i>Tomorrow
        </button>
        <button 
          className={`btn btn-sm rounded-pill ${scheduleFilter === 'This week' ? 'btn-primary' : 'btn-light border text-secondary'}`}
          onClick={() => setScheduleFilter('This week')}
        >
          <i className="bi bi-calendar-week me-1"></i>This week
        </button>
      </div>

      <TaskList tasks={tasks} onToggle={onToggle} onDelete={onDelete} />
    </div>
  );
}

export default ScheduleCard;