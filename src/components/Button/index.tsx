import React from 'react';
import styles from './Button.module.scss';

interface ButtonProps {
  children: React.ReactNode
  onClick?: ()=> void
}

function Button({ children, onClick }: ButtonProps) {
  return (
    <button onClick={onClick} className={styles.botao} type="submit">
      {children}
    </button>
  );
}

export default Button;
