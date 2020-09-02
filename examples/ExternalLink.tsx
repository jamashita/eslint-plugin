import React from 'react';

type Props = Readonly<{
  href: string;
  style?: Record<string, string>;
}>;
type State = Readonly<{}>;

export class ExternalLink extends React.Component<Props, State> {
  public shouldComponentUpdate(nextProps: Readonly<Props>): boolean {
    const {
      href,
      style
    } = this.props;

    if (href !== nextProps.href) {
      return true;
    }
    if (style !== nextProps.style) {
      return true;
    }

    return false;
  }

  public render(): React.ReactNode {
    const {
      href,
      style,
      children
    } = this.props;

    return (
      <a style={style} href={href} target='_blank' rel='noopener noreferrer'>
        {children}
      </a>
    );
  }
}
