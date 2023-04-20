import { Modal } from 'react-native';

import { Text } from '../Text';

import { Overlay, ModalBody, Actions } from './styles';

import Button from '../Button';

export default function DeleteConfirmModal({ visible, onClose, onConfirm }) {
  return (
    <Modal
      visible={visible}
      transparent
      statusBarTranslucent
      animationType="fade"
      onRequestClose={onClose}
    >
      <Overlay>
        <ModalBody>
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
        </ModalBody>
      </Overlay>
    </Modal >
  );
}