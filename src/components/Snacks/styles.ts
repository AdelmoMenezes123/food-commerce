import { darken } from 'polished'
import styled from 'styled-components'
export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, auto));
  gap: 1rem;

  @media (max-width: 500px) {
    grid-template-columns: 1fr;
  }

  .snack {
    position: relative;
    background: ${({ theme }) => theme.colors.black};
    padding: 1.75rem 1.5rem;
    border-radius: 4px;
    box-shadow: 2px 4px 0.5rem rgba(0, 0, 0, 0.8);

    span {
      position: absolute;
      top: -0.5rem;
      left: -0.5rem;

      background: ${({ theme }) => theme.colors.red};
      width: 2rem;
      height: 2rem;
      border-radius: 50%;

      display: flex;
      align-items: center;
      justify-content: center;

      font-weight: 500;
      font-size: 1.125rem;
    }

    h2 {
      margin-bottom: 0.75rem;
      font-weight: 700;
      font-size: 1.5rem;
      text-align: center;
    }

    img {
      object-fit: cover;
      width: 100%;
      height: 11.25rem;
      border-radius: 4px;
      margin-bottom: 0.375rem;
    }

    p {
      font-size: 0.875rem;
      line-height: 1.25rem;
    }

    div {
      margin-top: 0.875rem;
      display: flex;
      align-items: center;
      justify-content: space-between;

      strong {
        font-size: 2rem;
        font-weight: 500;
      }

      button {
        background: ${({ theme }) => theme.colors.red};
        width: 3rem;
        height: 3rem;
        border: none;
        border-radius: 50%;

        display: flex;
        align-items: center;
        justify-content: center;

        svg {
          stroke: ${({ theme }) => theme.colors.white};
          width: 1.5rem;
          height: 1.5rem;
        }

        &:hover {
          background: ${darken(0.1, '#AA2424')};
        }
      }
    }
  }
`
