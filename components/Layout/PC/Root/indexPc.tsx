import {
  Anchor,
  Breadcrumbs,
  Button,
  Container,
  Divider,
  Grid,
  Group,
  ScrollArea,
  SimpleGrid,
  Skeleton,
} from '@mantine/core';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { ArrowBigRight, ChevronLeft, ChevronRight, List, Settings } from 'tabler-icons-react';
import { FooterPc } from '../FooterPc';
import { HeaderPC } from '../Header/Header';

export default function RootPC({children}) {
  return (
    <div className="bg-background">
      <HeaderPC />
      {children}
      <FooterPc />
    </div>
  );
}

