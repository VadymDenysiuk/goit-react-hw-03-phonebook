import styled from 'styled-components';

export const Form = styled.form``;

export const Label = styled.label`
  display: block;
  color: #212121;
  margin-bottom: 6px;
`;
export const Input = styled.input`
  display: block;
  width: 150px;
  border: 1px solid rgba(33, 33, 33, 0.2);
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
export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  /*   margin: 0 auto; */
  border-radius: 4px;
  min-width: 200px;
  height: 50px;
  color: #ffffff;
  background-color: #2196f3;
  font-family: inherit;
  font-weight: 700;
  font-size: 16px;
  line-height: 1.87;
  cursor: pointer;
  border: none;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    background-color: #188ce8;
  }
`;
