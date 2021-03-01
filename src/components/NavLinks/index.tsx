import * as Styled from './styles';
import { MenuLink, MenuLinkProps } from '../MenuLink';

export type NavLinksProps = {
  links?: MenuLinkProps[];
};

export const NavLinks = ({ links = [] }: NavLinksProps) => {
  return (
    <Styled.Container aria-label="Main menu">
      {links.map((link) => (
        <MenuLink key={link.link} {...link} />
      ))}
    </Styled.Container>
  );
};
