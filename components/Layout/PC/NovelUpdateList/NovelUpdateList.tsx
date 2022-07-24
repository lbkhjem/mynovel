import { Title, Text, Anchor, Container, Menu, Button, Grid, Input, Table } from '@mantine/core';
import Image from 'next/image';
import Link from 'next/link';
import { AlignCenter, ChevronDown, Refresh, Search } from 'tabler-icons-react';
import useStyles from './NovelUpdateList.styles';

export function NovelUpdateListPC({ data }: { data: any }) {
  const { classes } = useStyles();
  const rows = data.map((element: any) => (
    <tr key={element.novelsname}>
      <td>
        <Link href={`/novel/${element?.idnovel}`}>
          <a className="items-center flex font-bold">
            <Image
              src={element?.cover}
              alt="Picture of the author"
              width={50}
              height={48}
              objectFit="contain"
            />
            {element.novelsname}
          </a>
        </Link>
      </td>
      <td>{element.lasterchapter}</td>
    </tr>
  ));
  return (
    <div className="container bg-white my-2 rounded-sm">
      <div className="w-full justify-between px-2 flex py-2">
        <p className="font-bold text-16 flex items-center">
          {' '}
          <Refresh />
          LATEST RELEASE NOVELS
        </p>
        <Link href="/lastestnovel/1">
          <a>
            <p className="font-bold text-16 text-link">SEE MORE</p>
          </a>
        </Link>
      </div>
      <Table>
        <thead>
          <tr>
            <th>Novel name</th>
            <th>New chapter</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </Table>
    </div>
  );
}
