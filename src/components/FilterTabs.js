function FilterTabs({ filter, setFilter }) {
  return (
    <div className="d-flex gap-2 mb-4 border-bottom pb-3 flex-wrap">
      <button 
        className={`btn btn-sm rounded-pill ${filter === 'Todo' ? 'btn-primary' : 'btn-light border text-secondary'}`}
        onClick={() => setFilter('Todo')}
      >
        <i className="bi bi-list-task me-1"></i>Todo
      </button>
      <button 
        className={`btn btn-sm rounded-pill ${filter === 'In Progress' ? 'btn-primary' : 'btn-light border text-secondary'}`}
        onClick={() => setFilter('In Progress')}
      >
        <i className="bi bi-arrow-repeat me-1"></i>In Progress
      </button>
      <button 
        className={`btn btn-sm rounded-pill ${filter === 'Completed' ? 'btn-primary' : 'btn-light border text-secondary'}`}
        onClick={() => setFilter('Completed')}
      >
        <i className="bi bi-check2-all me-1"></i>Completed
      </button>
      <button 
        className={`btn btn-sm rounded-pill ${filter === 'All' ? 'btn-primary' : 'btn-light border text-secondary'}`}
        onClick={() => setFilter('All')}
      >
        <i className="bi bi-grid-fill me-1"></i>All
      </button>
    </div>
  );
}

export default FilterTabs;