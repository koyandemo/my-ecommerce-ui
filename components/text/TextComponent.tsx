"use client";

import styles from './textComponent.module.scss';

interface TextComponentProps {
  mainTxt: string;
  size?: 'sm' | 'md' | 'lg';
  weight?: 'normal' | 'medium' | 'bold';
  transform?: 'capitalize' | 'uppercase' | 'lowercase' | 'none';
  classes?: string;
  cursor?: 'pointer' | 'text';

}

const TextComponent = ({
  mainTxt,
  size = 'md',
  weight = 'normal',
  transform = 'none',
  classes = '',
  cursor = 'text',
}: TextComponentProps) => {

  const cssNames = () => {
    return [
      styles['text'],
      styles[`text-${size}`],
      styles[`text-${weight}`],
      styles[`text-${transform}`],
      styles[`text-${cursor}`],
      classes,
    ].join(' ');
  };

  return (
    <p
      className={cssNames()}
    >
      {mainTxt}
    </p>
  );
};

export default TextComponent;
