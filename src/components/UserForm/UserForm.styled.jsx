import styled from '@emotion/styled';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Container = styled.div`
  max-width: 600px;
  margin: 48px auto;
`;

export const Field = styled.input`
  width: 100%;
  padding: 8px;
`;

export const Message = styled.p`
  color: ${({ variant }) => (variant === 'error' ? 'red' : 'green')};
`;

export const Button = styled.button`
  width: 100%;
  padding: 8px;
`;
