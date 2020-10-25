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
  padding: 5rem 0rem 0rem 0rem;
  width: 60rem;
  height: 100%;
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

  form {
    /* padding: 0rem 2rem; */
    width: 100%;
  }

  .add-tool-item {
    height: 10rem;
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
  }
`;


export const Body = styled.div`
  margin-bottom: 3rem;
`;

export const LoadingArea = styled.div`
  
`;

export const MessageArea = styled.div`
  
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
    color: blue;
    border-bottom: 1px solid blue;
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
    margin-bottom: 2rem;

    svg {
      font-size: 2rem;
      font-weight: bold;
    }
  }

  p {
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
    margin-left: 2rem;
  }
`;

export const ToolTags = styled.div`
  margin-top: 1.5rem;

  span {
    margin-right: 1rem;
    font-weight: bold;
  }
`;
