import { Container, TasksContainer } from './styles';

import Header from '../components/Header';
import Tasks from '../components/Tasks';
import AddButton from '../components/AddButton';

import { tasks } from '../mocks/tasks';

export default function Main() {
  return (
    <Container>
      <Header />

      <TasksContainer>
        <Tasks tasks={tasks} />
      </TasksContainer>

      <AddButton onPress={() => alert("Chamar modal de criação de tarefa")} />
    </Container>
  );
}