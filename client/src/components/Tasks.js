import React from 'react'

function Tasks() {
  return (
    <div>
        <div class="head-title">
          <div class="left">
            <h1>projects</h1>
            <ul class="breadcrumb">
              <li>
                <a href="#">projects</a>
              </li>
               <li><i class='bx bx-chevron-right' ></i></li>
							<li>
								<a class="active" href="#">react app</a>
							</li> 
            </ul>
          </div>
          <div class="right">
            <a href="#" class="btn-download">
              <i class="bx bx-support"></i>
              <span class="text">staff</span>
            </a>
            <a href="#" class="btn-download">
              <i class="bx bx-plus-circle"></i>
              <span class="text">new task</span>
            </a>
          </div>
        </div>
        <div class="todo">
          <div class="head">
            <h3>Todos</h3>
            <i class="bx bx-plus"></i>
            <i class="bx bx-filter"></i>
          </div>
          <ul class="todo-list">
            <li class="completed">
              <p>Todo List</p>
              <i class="bx bx-dots-vertical-rounded"></i>
            </li>
            <li class="process">
              <p>Todo List</p>
              <i class="bx bx-dots-vertical-rounded"></i>
            </li>
            <li class="not-completed">
              <p>Todo List</p>
              <i class="bx bx-dots-vertical-rounded"></i>
            </li>
            <li class="completed">
              <p>Todo List</p>
              <i class="bx bx-dots-vertical-rounded"></i>
            </li>
            <li class="not-completed">
              <p>Todo List</p>
              <i class="bx bx-dots-vertical-rounded"></i>
            </li>
          </ul>
        </div>
    </div>
  )
}

export default Tasks