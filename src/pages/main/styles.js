import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  justify-content: center;
  background-color: #DEDCE1;
  overflow-y: auto; 
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5rem 2rem 0rem 2rem;
  width: 64rem;
  height: 100%;

  @media(max-width: 600px) {
    width: 100%;
  }

`;

export const Header = styled.div`
  color: #170C3A;
  margin-bottom: 3rem;

  h1 {
    font-size: 4.2rem;
    font-weight: 600;
  }

  h4 {
    font-size: 2.6rem; 
    font-weight: 600;
  }
`;

export const Actions = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;

  @media(max-width: 600px) {
    flex-direction: column;
  }

  > button {
    background: #365DF0 0% 0% no-repeat padding-box;
    border-radius: 5px;
    border: none;
    color: #FFFFFF;
    width: 10rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 3rem;
    justify-content: center;
    font-weight: 600;
    transition: background 0.2s;

    &:hover{
      background-color: #2F55CC;
    }

    svg {
      font-size: 2.5rem;
    }
  }
`;

export const Search = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  color: #170C3A;

  @media(max-width: 600px) {
    flex-direction: column;
  }


  > div {
    display: flex;
    flex-direction: row;
    align-items: center;
    

    svg {
      height: 2rem;
      width: 3rem;
      margin-right: -3rem;
      z-index: 1
    }

    input {
      background: #F5F4F6 0% 0% no-repeat padding-box;
      border: 1px solid #EBEAED;
      border-radius: 5px;
      padding: 0rem 3rem;
      height: 3rem;
      width: 20rem;
      font-size: 1.4rem;  
      margin-right: 2rem;
      color: #170C3A;
    }
  }

    .MuiTypography-body1 {
      font-size: 1.6rem;
      color: #170C3A;
    }

    .MuiCheckbox-colorSecondary.Mui-checked {
      color: #365DF0;
    }

`;

export const AddTool = styled.div`
  padding: 2rem;
  color: #170C3A;
  width: 100%;

  .add-tool-header {
    font-size: 2rem;
    font-weight: 600;
    display: flex;
    align-items: center;  
    margin-bottom: 2rem;

    svg {
      font-size: 2rem;
      font-weight: bold;
    }
  }

  .form-error {
    display: flex;
    width: 100%;
    justify-content: center;
    height: 2rem;
    margin-bottom: 1rem;
    color: #F95E5A
  }

  form {
    /* padding: 0rem 2rem; */
    width: 100%;
  }

  .add-tool-item {
    height: 10rem;

    p {
      color: #F95E5A;
      text-align: end;
    }
  }

  .description {
    height: 14rem;
  }

  input, textarea {
    background: #F5F4F6 0% 0% no-repeat padding-box;
    border: 1px solid #EBEAED;
    border-radius: 5px;
    padding: 0rem 1rem;
    height: 3rem;
    width: 100%;
    font-size: 1.4rem;  
    color: #170C3A;
  } 

  .input-error {
    background-color: #FEEFEE;
    color: #F95E5A;
    border-color: #F95E5A;
  }

  textarea {
    resize: none;
    height: 7rem;
    padding: 1rem;
  }

  h4 {
    margin-bottom: 1rem;
  }

  .buttons {
    display: flex;
    justify-content: flex-end;
  }

  button {
    background: #365DF0 0% 0% no-repeat padding-box;
    border-radius: 5px;
    border: none;
    color: #FFFFFF;
    width: 10rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 3rem;
    justify-content: center;
    font-weight: 600;
    transition: background 0.2s;

    &:hover{
      background-color: #2F55CC;
    }

    &:disabled {
      cursor: not-allowed;
      background-color: #2F55CC;
    }


  }
`;


export const Body = styled.div`
  margin-bottom: 3rem;
`;

export const LoadingArea = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;


  .MuiCircularProgress-root {
    width: 4rem !important;
    height: 4rem !important;
    margin-left: 1rem;
  }

  .MuiCircularProgress-svg {
    color: #365DF0;
    opacity: 1;
    width: 4rem;
    height: 4rem;
  }
`;

export const MessageArea = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  font-weight: bold;
  color: #170C3A;
`;

export const Tools = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Tool = styled.div`
  background: #FFFFFF 0% 0% no-repeat padding-box;
  box-shadow: 0px 5px 7px #0000000D;
  border: 1px solid #EBEAED;
  border-radius: 5px;
  margin-bottom: 2.5rem;
  padding: 1rem;
  transition: box-shadow 0.5s;
  color: #170C3A;

  &:hover {
    box-shadow: 0px 20px 25px #0000001A;
  }
`;

export const ToolHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;

  a {
    color: #170C3A;
    border-bottom: 1px solid #170C3A;
    font-weight: 600;
  }

  > div {
    display: flex;
    flex-direction: row;
    align-items: center;
    cursor: pointer;

    svg {
      font-size: 2rem;
    }
  }
`;

export const RemoveTool = styled.div`
  padding: 2rem;
  color: #170C3A;
  width: 100%;

  .add-tool-header {
    font-size: 2rem;
    font-weight: 600;
    display: flex;
    align-items: center;  
    margin-bottom: 1rem;

    svg {
      font-size: 2rem;
      font-weight: bold;
    }
  }

  .remove-error {
    display: flex;
    width: 100%;
    justify-content: center;
    margin-bottom: 1rem;
    color: #F95E5A
  }


  p {
    margin-bottom: 1rem;
  }

  span {
    font-weight: 600;
  }

  .buttons {
    display: flex;
    justify-content: flex-end;
  }

  button {
    background-color: ${props => props.deleting? '#CC4C4C' : '#F95E5A'} ;
    border-radius: 5px;
    border: none;
    color: #FFFFFF;
    width: 10rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 3rem;
    justify-content: center;
    font-weight: 600;
    margin-left: 2rem;
    transition: background 0.2s;

    &:hover{
      background-color: #CC4C4C;
    }

    &:disabled {
      cursor: not-allowed;
    }

    &:first-child {
      background-color: #FEEFEE;
      color: #F95E5A;

      &:hover{
      background-color: #FCD7D6;
    }
    }
  }
`;

export const ToolTags = styled.div`
  margin-top: 1.5rem;
  word-break: break-all;

  span {
    margin-right: 1rem;
    font-weight: bold;
  }
`;
