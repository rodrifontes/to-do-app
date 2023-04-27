import { Text } from '../Text';

import { Actions } from './styles';

import Button from '../Button';

import CustomModal from '../CustomModal';

export default function DeleteConfirmModal({ visible, onClose, onConfirm }) {
  return (
    <CustomModal
      visible={visible}
      onClose={onClose}
    >
      <Text
        size={18}
        weight="600"
      >
        Tem certeza que deseja remover a tarefa?
      </Text>
      <Text opacity={0.5} style={{ marginTop: 4 }}>
        Essa ação não podera ser desfeita
      </Text>

      <Actions>
        <Button primary={false} onPress={onClose}>Cancelar</Button>
        <Button onPress={onConfirm}>Confirmar</Button>
      </Actions>
    </CustomModal>
  );
}