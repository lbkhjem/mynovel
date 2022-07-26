import {
  Title,
  Text,
  Anchor,
  Container,
  Menu,
  Button,
  Grid,
  Input,
  ActionIcon,
} from '@mantine/core';
import Image from 'next/image';
import Link from 'next/link';
import { AlignCenter, ChevronDown, Search, SearchOff } from 'tabler-icons-react';

export function HeaderMobile() {
  return (
    <div className="bg-header w-full">
      <Grid
        columns={24}
        className="container items-center"
        justify={'space-between'}
        align="center"
      >
        <Grid.Col span={12} className="flex items-center">
          <Link href={'/'}>
            <a>
              <Image
                src={require('../../../../images/logo.png')}
                alt="Picture of the author"
                width={197}
                height={48}
                objectFit="contain"
              />
            </a>
          </Link>
        </Grid.Col>
        <Grid.Col span={8} className='flex items-center justify-end'>
          <ActionIcon color="blue" className='mx-4' variant="filled">
            <Search />
          </ActionIcon>
          <ActionIcon color="white"  variant="filled">
            <svg
              className="MuiSvgIcon-root MuiSvgIcon-fontSizeLarge"
              focusable="false"
              viewBox="0 0 24 24"
              aria-hidden="true"
              style={{ color: 'white' }}
            >
              <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path>
            </svg>
          </ActionIcon>
        </Grid.Col>
      </Grid>
    </div>
  );
}
