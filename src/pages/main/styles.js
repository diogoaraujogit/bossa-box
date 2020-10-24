import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  justify-content: center;
  background-color: ##DEDCE1;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5rem 0rem 0rem 0rem;
  width: 60rem;
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
  border: 1px solid red;
  background-color: #ffffff;
`;


export const Body = styled.div`
  
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

  &:hover {
    box-shadow: 0px 20px 25px #0000001A;
  }
`;

export const ToolHeader = styled.div`
  
`;

export const ToolTags = styled.div`
  
`;
