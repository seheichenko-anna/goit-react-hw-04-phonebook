import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const SearchWrapper = styled.label`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const SearchInput = styled.input`
  padding: 8px 16px;
`;

export const ButtonAdd = styled.button`
  margin-top: 10px;
  padding: 8px 16px;
  border: none;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  background-color: #fff;
  border-radius: 4px;
  cursor: pointer;
  text-transform: uppercase;
  font-weight: 700;
  transition: all 0.2s ease-out;
  align-self: center;
  &:hover {
    background-color: teal;
    color: white;
  }
`;
