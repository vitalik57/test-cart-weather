import styled from "styled-components";
export const MainStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 20px;
  .form {
    display: flex;
    align-items: left;
    justify-content: left;
  }
  .main__input {
    /* width: 587px; */
    margin-right: 20px;
    opacity: 0.7;
    box-sizing: border-box;
    outline: none;
    border-radius: 16px;
    padding: 10px 10px;
    color: #5b5b5b;
    border: 3px solid #c1c1c1;
    margin-top: 8px;
    font-size: 16px;
    line-height: 20px;
    @media (min-width: 768px) {
      padding: 10px 15px;
    }
  }
  ul {
    padding: 0;
  }
  .main__button {
    :hover {
      background: #fff;
    }
    margin-top: 20px;
    align-items: center;
    background: rgba(255, 255, 255, 0.5);
    border: none;
    border-radius: 20px;
    display: flex;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    justify-content: center;
    line-height: 15px;
    /* margin-right: 9px; */
    /* padding: 6px 40px; */
    padding: 10px;
    text-align: center;
    text-transform: uppercase;
  }
  .form__input:focus {
    border: 1px solid #87d78b;
  }
`;
