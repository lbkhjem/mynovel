import {
  Title,
  Text,
  Anchor,
  Container,
  Menu,
  Button,
  Grid,
  Input,
  Table,
  SimpleGrid,
} from '@mantine/core';
import Image from 'next/image';
import { AlignCenter, ChevronDown, CircleCheck, List, Refresh, Search } from 'tabler-icons-react';
import useStyles from './Genres.styles';
const datagenres = [
  {
    name: 'Action',
    color: 'black',
    link: '/',
  },
  {
    name: 'Adventure',
    color: 'black',
    link: '/',
  },
  {
    name: 'Business',
    color: 'black',
    link: '/',
  },
  {
    name: 'Chinese',
    color: 'black',
    link: '/',
  },
  {
    name: 'Comedy',
    color: 'black',
    link: '/',
  },
];

export function GenresListPC({ data }: { data: any }) {
  const { classes } = useStyles();

  return (
    <div className="container bg-white my-2 rounded-sm">
      <div className="w-full justify-start px-2 flex py-2">
        <p className="font-bold text-16 flex items-center">
          {' '}
          <List />
          GENRES
        </p>
        {/* <p className='font-bold text-16 text-link'>SEE MORE</p> */}
      </div>
      <SimpleGrid className='divide-x py-2' cols={2}>
        {datagenres?.map((item, index) => (
          <div className="justify-start px-2 text-sm font-bold flex items-center">
            <CircleCheck size={18} />
            {item.name}</div>
        ))}
      </SimpleGrid>
    </div>
  );
}
