import { Title, Text, Anchor, Container, Menu, Button, Grid, Input, Table } from '@mantine/core';
import Image from 'next/image';
import Link from 'next/link';
import { AlignCenter, ChevronDown, Refresh, Search } from 'tabler-icons-react';
import useStyles from './NovelUpdateList.styles';

export function NovelUpdateListMobile({ data }: { data: any }) {
  const { classes } = useStyles();
  const rows = data.map((element: any) => (
    <tr key={element.novelsname} className='w-full'>
      <td className='w-3/5'>
        <Link href={`/novel/${element?.idnovel}`}>
          <a className="items-center flex justify-start w-full font-bold">
            <Image
              src={element?.cover}
              alt="Picture of the author"
              width={50}
              height={48}
              // layout='fixed'
              objectFit="contain"
              
            />
            <Text size="sm" className='w-2/3' lineClamp={2}>
            {element.novelsname}
            </Text>
            
          </a>
        </Link>
      </td>
      <td className='w-2/5'>
      <Text size="sm" lineClamp={2}>{element.lasterchapter}</Text></td>
    </tr>
  ));
  return (
    <div className="container bg-white my-2 rounded-sm">
      <div className="w-full justify-between px-2 flex py-2">
        <p className="font-bold text-16 flex items-center">
          {' '}
          <Refresh />
          <Text
            component="span"
            align="center"
            variant="gradient"
            gradient={{ from: 'indigo', to: 'cyan', deg: 45 }}
            size="sm"
            weight={700}
            style={{ fontFamily: 'Greycliff CF, sans-serif' }}
          >
            LATEST RELEASE NOVELS
          </Text>
        </p>
        <Link href="/lastestnovel/1">
          <a>
            <p className="font-bold text-14 text-link">SEE MORE</p>
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
