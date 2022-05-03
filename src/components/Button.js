import styled from "styled-components"
import { Link } from "gatsby"

export const Button = styled(Link)`
  background: ${({ main }) => (main ? "red" : "green")};
  white-space: nowrap;
  padding: ${({ big }) => (big ? "16px 40px" : "10px 32px")};
  color: white;
  font-size: ${({ big }) => (big ? "20px" : "16px")};
  outline: none;
  border: none;
  min-width: 100px;
  cursor: pointer;
  text-decoration: none;
  transition: 0.3s !important;
  border-radius: ${({ round }) => (round ? "50px" : "none")};
  margin-right: 25px;

  &:hover {
    background: ${({ main }) => (main ? "green" : "red")};
    transform: translateY(-2px);
  }
`
