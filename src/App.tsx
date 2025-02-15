import { FC, useState } from 'react';
import InputField from './InputField';

import './style.css';

export const App: FC<{ name: string }> = ({ name }) => {
  const [newField, setNewField] = useState([{ name: 'Subject', id: 1 }]);
  const handleAdd = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault;
    setNewField((prev) => [
      ...prev,
      { name: `subject${prev.length + 1}`, id: prev.length + 1 },
    ]);
  };

  console.log(newField);
  return (
    <div>
      <form>
        {newField.map((value) => (
          <InputField name={value.name} key={value.id} />
        ))}
        <button onClick={handleAdd}>Add</button>
        <h1>Hello {name}!</h1>
        <p>Start editing to see some magic happen :)</p>
      </form>
    </div>
  );
};
