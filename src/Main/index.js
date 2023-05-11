import { CenteredContainer, Container, TaskEmptyContainer, TaskEmptyImage, TasksContainer } from './styles';

import Header from '../components/Header';
import Tasks from '../components/Tasks';
import AddButton from '../components/AddButton';

import { tasks } from '../mocks/tasks';
import DeleteConfirmModal from '../components/DeleteConfirmModal';
import { useState } from 'react';
import NewTaskModal from '../components/NewTaskModal';
import EditTaskModal from '../components/EditTaskModal';

import empty from '../assets/images/task.png';

import { Text } from '../components/Text';
import { ActivityIndicator } from 'react-native';

export default function Main() {
  const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);
  const [isNewTaskModalVisible, setIsNewTaskModalVisible] = useState(false);
  const [isEditTaskModalVisible, setIsEditTaskModalVisible] = useState(false);
  const [taskBeingEdit, setTaskBeingEdit] = useState(null);
  const [tasks, setTaks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  function handleDeleteTask(task) {
    setIsDeleteModalVisible(true);
  }

  function handleConfirmDeleteTask() {
    setIsDeleteModalVisible(false);
  }

  function handleEditTask(task) {
    setIsEditTaskModalVisible(true);
    setTaskBeingEdit(task);
  }

  return (
    <Container>
      <Header />

      {!isLoading && (
        <TasksContainer>
          {tasks.length > 0 ? (
            <Tasks
              onDelete={handleDeleteTask}
              onEditTask={handleEditTask}
              tasks={tasks}
            />
          ) : (
            <TaskEmptyContainer>
              <TaskEmptyImage source={empty} />

              <Text
                size={20}
                opacity={0.8}
                weight="600"
                style={{ marginTop: 16 }}>
                Sem Tarefas
              </Text>
              <Text opacity={0.5} style={{ marginTop: 8 }}>
                Não há tarefas a serem exibidas
              </Text>
            </TaskEmptyContainer>
          )}
        </TasksContainer>
      )}

      {isLoading && (
        <CenteredContainer>
          <ActivityIndicator color="#666" size="large" />
        </CenteredContainer>
      )}

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

      <EditTaskModal
        visible={isEditTaskModalVisible}
        onClose={() => setIsEditTaskModalVisible(false)}
        task={taskBeingEdit}
      />
    </Container >
  );
}