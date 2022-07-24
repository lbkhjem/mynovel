import { Title, Text, Anchor, Container, Menu, Button, Grid, Input } from '@mantine/core';
import Image from 'next/image';
import Link from 'next/link';
import { AlignCenter, ChevronDown, Search } from 'tabler-icons-react';
import useStyles from './Header.styles';

export function HeaderPC() {
  const { classes } = useStyles();

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

          <Menu
            control={
              <Button color="white" rightIcon={<ChevronDown />} leftIcon={<AlignCenter />}>
                <span className="text-white">Novel list</span>
              </Button>
            }
          >
            <Menu.Label>
              <Link href={'/lastestnovel/1'}>
                <a>Lastest Release</a>
              </Link>
            </Menu.Label>
            <Menu.Label>
              <Link href={'/hotnovel/1'}>
                <a>Hot Novel</a>
              </Link>
            </Menu.Label>
            <Menu.Label>
              <Link href={'/completed/1'}>
                <a>Completed Novel</a>
              </Link>
            </Menu.Label>
          </Menu>
          <Menu
            control={
              <Button color="white" rightIcon={<ChevronDown />} leftIcon={<AlignCenter />}>
                <span className="text-white">Genres</span>
              </Button>
            }
          >
            <Menu.Label>Application</Menu.Label>
          </Menu>
        </Grid.Col>
        <Grid.Col span={8}>
          <Input
            placeholder="Search..."
            //   rightSectionWidth={70}
            styles={{ rightSection: { pointerEvents: 'none' } }}
            rightSection={<Search />}
          />
        </Grid.Col>
      </Grid>
    </div>
  );
}
