import styled from 'styled-components/native';

export const Task = styled.View`
  margin: 24px 20px 0;
  padding: 24px;
  border-width: 1px;
  border-color: #EEEEEE;
  border-radius: 12px;
  gap: 24px;
`;

export const TaskHeader = styled.View``;

export const TaskDescription = styled.View``;

export const TaskFooter = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const TaskStatus = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 8px;
`;

export const TaskIcon = styled.Image`
  width: 16px;
  height: 16px;
  resize-mode: contain;
`;

export const TaskAction = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
`;