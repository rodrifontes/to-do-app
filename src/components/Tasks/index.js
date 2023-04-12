import { Text } from '../Text';

import { Task, TaskAction, TaskDescription, TaskFooter, TaskHeader, TaskIcon, TaskStatus } from './styles';

import pending from '../../assets/images/pending.png';
import excluir from '../../assets/images/delete.png';
import edit from '../../assets/images/edit.png';


export default function Tasks() {
  return (
    <Task>
      <TaskHeader>
        <Text size={18} weight="600">Estudar React Native</Text>
      </TaskHeader>

      <TaskDescription>
        <Text opacity={0.5}>Fazer a atividade passada na ultima aula</Text>
      </TaskDescription>

      <TaskFooter>
        <TaskStatus>
          <TaskIcon source={pending} />
          <Text color="#E620AE">Pendente</Text>
        </TaskStatus>
        <TaskAction>
          <TaskIcon source={edit} />
          <TaskIcon source={excluir} />
        </TaskAction>
      </TaskFooter>
    </Task>
  );
}