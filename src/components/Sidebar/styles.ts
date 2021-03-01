import styled, { css } from 'styled-components';
import { HiOutlineLightBulb } from 'react-icons/hi';

interface LightSwitchProps {
  activeTheme: string;
}

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding-top: 2rem;
  width: 7rem;

  img {
    margin: 2rem;
  }

  div {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    svg {
      ${({ theme }) => css`
        margin: 1rem 2rem;
        color: ${theme.colors.text};
        transition: color 0.2s;

        &:first-child {
          color: ${theme.colors.purple};
        }

        &:hover {
          color: ${theme.colors.purple};
        }
      `}
    }
  }
`;

export const LightSwitch = styled(HiOutlineLightBulb)<LightSwitchProps>`
  cursor: pointer;

  ${({ activeTheme }) =>
    css`
      &:hover {
        color: ${activeTheme === 'dark'
          ? '#ffff00 !important'
          : '#252525 !important'};

        transition: color 0.4s;
      }
    `}
`;
