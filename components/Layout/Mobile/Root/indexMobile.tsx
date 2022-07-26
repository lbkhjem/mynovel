// import { FooterPc } from '../FooterPc';
import { FooterMobile } from '../Footer';
import { HeaderMobile } from '../Header';

export default function RootMobile({ children }: { children: any }) {
  return (
    <div className="bg-background">
      <HeaderMobile />
      {children}
      <FooterMobile />
    </div>
  );
}
