import styled from 'styled-components';

export const ContactsItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  font-size: 32px;
`;

export const ButtonDelete = styled.button`
  padding: 8px 16px;
  border: none;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  background-color: white;
  border-radius: 4px;
  cursor: pointer;
  text-transform: uppercase;
  font-weight: 700;
  transition: all 0.2s ease-out;
  &:hover {
    background-color: teal;
    color: white;
  }
`;
