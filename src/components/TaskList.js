import TaskItem from './TaskItem';

function TaskList({ tasks, onChangeStatus, onDelete }) {
  if (tasks.length === 0) {
    return (
      <div className="text-center text-muted py-4">
        No tasks found in this section.
      </div>
    );
  }

  return (
    <div className="table-responsive">
      <table className="table table-hover align-middle mb-0">
        <thead className="table-light">
          <tr className="fs-7 text-secondary">
            <th scope="col" style={{ width: '130px' }}>Status</th>
            <th scope="col">Task</th>
            <th scope="col">Date</th>
            <th scope="col">Priority</th>
            <th scope="col" style={{ width: '50px' }}></th>
          </tr>
        </thead>
        <tbody>
          {tasks.map(task => (
            <TaskItem 
              key={task.id} 
              task={task} 
              onChangeStatus={onChangeStatus} 
              onDelete={onDelete} 
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TaskList;