import React from 'react';
import styled from 'styled-components';
import { useTheme } from '../context/ThemeContext';

interface FormProps {
  buttonText: string;
  showTitle?: boolean;
  showCheckbox?: boolean;
}

const FormWrapper = styled.div`
  flex: 1;
  width: 50%;
  box-sizing: border-box;
`;

const FormStyled = styled.form`
  background-color: white;
  padding: 20px;
  border-radius: ${props => props.theme.borderRadius};
  box-shadow: ${props => props.theme.shadow};
  width: 300px;
  height: 300px;
  animation: slideUp 0.5s ease-out;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: auto;
`;

const FormInput = styled.input`
  width: 100%;
  padding: 12px;
  margin-bottom: 15px;
  border: 2px solid #ccc;
  border-radius: 8px;
  font-size: 1em;
  color: #333;
  background-color: #f0f0f0;
  transition: border-color 0.3s ease;
  box-sizing: border-box;
  flex-grow: 1;

  &:focus {
    border-color: #4a90e2;
    outline: none;
  }
`;

const FormButton = styled.button`
  width: 100%;
  padding: 12px;
  background-color: ${props => props.theme.primaryColor};
  border: none;
  border-radius: 8px;
  color: black;
  font-weight: 700;
  font-size: 1em;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
  flex-grow: 0;

  &:hover {
    background-color: #e5941a;
    transform: translateY(-2px);
  }
`;

const Form: React.FC<FormProps> = ({ buttonText, showTitle, showCheckbox }) => {
  const theme = useTheme();

  return (
    <FormWrapper className="form-wrapper">
      {showTitle && <h3 className="form-wrapper__title">Записаться</h3>}
      <FormStyled className="form-wrapper__form" theme={theme}>
        <FormInput className="form-wrapper__input" type="text" placeholder="Ваше имя" />
        {showCheckbox && (
          <div className="form-wrapper__checkbox">
            <input type="checkbox" id="checkbox" />
            <label htmlFor="checkbox">Согласен с условиями</label>
          </div>
        )}
        <FormButton className="form-wrapper__button" theme={theme}>{buttonText}</FormButton>
      </FormStyled>
    </FormWrapper>
  );
};

export default Form;
