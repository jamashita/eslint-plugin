import React, { FC, PropsWithChildren, ReactElement } from 'react';

type Props = Readonly<{
  href: string;
  style?: Record<string, string>;
}>;

export const ExternalLink: FC<Props> = ({ href, style, children }: PropsWithChildren<Props>): ReactElement => {
  return (
    <a style={style} href={href} target='_blank' rel='noopener noreferrer'>
      {children}
    </a>
  );
};
