import * as Styled from './styles';

export type TextComponentProps = {
  children: string;
};

export const TextComponent = ({ children }: TextComponentProps) => {
  return <Styled.Container dangerouslySetInnerHTML={{ __html: children }} />;
};
