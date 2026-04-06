import { useState, useEffect, useRef, useContext } from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Input,
  Textarea,
  Select,
  VStack,
} from '@chakra-ui/react';
import { TaskContext } from '../../context/TaskContext';

const EditTaskModal = ({ isOpen, onClose, task }) => {
  const { updateTask } = useContext(TaskContext);
  const [formData, setFormData] = useState(task || {});
  const inputRef = useRef(null);

  useEffect(() => {
    if (task) {
      setFormData(task);
    }
  }, [task]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const handleChanges = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    updateTask(formData);
    onClose();
  };
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Edit Task</ModalHeader>
        <ModalBody>
          <VStack spacing='4'>
            <Input
              ref={inputRef}
              name='title'
              value={formData.title || ''}
              onChange={handleChanges}
            />
            <Textarea
              name='description'
              value={formData.description || ''}
              onChange={handleChanges}
            />
            <Select
              name='priority'
              value={formData.priority || ''}
              onChange={handleChanges}
            >
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </Select>
          </VStack>
        </ModalBody>
        <ModalFooter>
          <Button mr='3' onClick={onClose}>
            Cancel
          </Button>
          <Button colorScheme='teal' onClick={handleSubmit}>
            Save
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default EditTaskModal;
