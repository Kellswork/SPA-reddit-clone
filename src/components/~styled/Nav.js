import styled from "styled-components";

export const NavContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
  margin: 0 auto;
  .search-box {
    box-sizing: border-box;
    max-width: 580px;
    width: 100%;
    margin: 0 auto;
  }
  input {
    width: 100%;
    height: 24px;
    padding: 10px 20px;
    background-color: #f6f7f8;
    border: 1px solid #f6f7f8;
    border-radius: 10px;
    font-size: 16px;
    &:hover,
    &:focus {
      background: white;
      border: 1px solid #dae0e6;
    }
    &::placeholder {
        color:#b7babd;
    }
  }
`;
