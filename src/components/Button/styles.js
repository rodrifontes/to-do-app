import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  background: ${(props) => props.disabled ? '#999' : props.primary ? '#FA824C' : '#FFFFFF'};
  padding: 14px 24px;
  border-radius: 12px;
  border-width: 1px;
  border-color: ${(props) => props.disabled ? '#999' : '#FA824C'};
  align-items: center;
  justify-content: center;
`;