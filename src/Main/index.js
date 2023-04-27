import { Container, TasksContainer } from './styles';

import Header from '../components/Header';
import Tasks from '../components/Tasks';
import AddButton from '../components/AddButton';

import { tasks } from '../mocks/tasks';
import DeleteConfirmModal from '../components/DeleteConfirmModal';
import { useState } from 'react';
import NewTaskModal from '../components/NewTaskModal';

export default function Main() {
  const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);
  const [isNewTaskModalVisible, setIsNewTaskModalVisible] = useState(false);

  function handleDeleteTask(task) {
    setIsDeleteModalVisible(true);
  }

  function handleConfirmDeleteTask() {
    setIsDeleteModalVisible(false);
  }

  return (
    <Container>
      <Header />

      <TasksContainer>
        <Tasks
          onDelete={handleDeleteTask}
          tasks={tasks}
        />
      </TasksContainer>

      <AddButton onPress={() => setIsNewTaskModalVisible(true)} />

      <DeleteConfirmModal
        visible={isDeleteModalVisible}
        onClose={() => setIsDeleteModalVisible(false)}
        onConfirm={handleConfirmDeleteTask}
      />

      <NewTaskModal
        visible={isNewTaskModalVisible}
        onClose={() => setIsNewTaskModalVisible(false)}
        onSave={() => alert('Salvar')}
      />
    </Container>
  );
}