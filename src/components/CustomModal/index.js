import { Modal } from 'react-native';

import { Overlay, ModalBody } from './styles';

export default function CustomModal({ visible, onClose, children }) {
  return (
    <Modal
      visible={visible}
      transparent
      statusBarTranslucent
      animationType="fade"
      onRequestClose={onClose}
    >
      <Overlay behavior="padding">
        <ModalBody>
          {children}
        </ModalBody>
      </Overlay>
    </Modal>
  );
}