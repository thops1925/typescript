import React, { useState } from 'react';

interface Iperson {
  name: 'John';
  age: 30;
}

const Person: React.FC = () => {
  const [todo, setTodo] = useState<string>('');
  const [todoResult, setTodoResult] = useState<string>([]);
  const todoOnchange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodo(e.target.value);
  };
  const submitTodo = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();

    setTodoResult([...todo, person]);
  };
  console.log(todoResult);
  return (
    <div>
      <input onChange={todoOnchange} />
      <button onClick={submitTodo}>Add</button>
      <p>{todoResult}</p>
    </div>
  );
};

export default Person;
