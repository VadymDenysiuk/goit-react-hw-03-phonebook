import styled from 'styled-components';

export const Input = styled.input`
  width: 150px;
  border: 1px solid rgba(33, 33, 33, 0.2);
  margin-left: 5px;
  border-radius: 4px;
  padding: 12px 25px;
  outline: none;
  cursor: pointer;
  transition: border 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:focus,
  &:hover {
    border: 1px solid #2196f3;
  }
`;
