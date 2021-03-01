import { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';

import { Container, LightSwitch } from './styles';

const Sidebar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <Container>
      <LightSwitch activeTheme={theme} onClick={toggleTheme} size={42} />
    </Container>
  );
};

export default Sidebar;
