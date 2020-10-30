import React, { FC } from 'react';

type Props = Readonly<{
  href: string;
  style?: {
    [key: string]: string;
  };
}>;

export const ExternalLink: FC<Props> = ({ href, style, children }) => {
  return (
    <a style={style} href={href} target='_blank' rel='noopener noreferrer'>
      {children}
    </a>
  );
};
