import { FooterPc } from '../FooterPc';
import { HeaderPC } from '../Header/Header';

export default function RootPC({children}: {children:any}) {
  return (
    <div className="bg-background">
      <HeaderPC />
      {children}
      <FooterPc />
    </div>
  );
}

