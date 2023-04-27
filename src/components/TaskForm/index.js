import { useState } from 'react';
import Button from '../Button';
import { Form, Input } from './styles';

export default function TaskForm({ buttonLabel, onSave }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  return (
    <Form>
      <Input
        placeholder="Título"
        placeholderTextColor="#666"
        value={title}
        onChangeText={setTitle}
      />
      <Input
        placeholder="Descrição"
        placeholderTextColor="#666"
        value={description}
        onChangeText={setDescription}
      />

      <Button
        onPress={() => onSave({ title, description })}
        disabled={title.length === 0 || description.length === 0}
      >
        {buttonLabel}
      </Button>
    </Form>
  );
}