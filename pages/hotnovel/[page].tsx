import { Anchor, Breadcrumbs, Grid } from '@mantine/core';
import { useEffect, useState } from 'react';
import { ArrowBigRight } from 'tabler-icons-react';
import { getNovelUpdate } from '../../API/APIManage';
import { GenresListPC } from '../../components/Layout/PC/GenresList/GenresList';
import { HotestNovelPc } from '../../components/Layout/PC/HotestNovel';
import { LastestNovelPc } from '../../components/Layout/PC/LastestNovel';
import RootPC from '../../components/Layout/PC/Root/indexPc';

export default function HotNovel() {
  const [datanovel, setDatanovel] = useState([]);
  
  return (
    <RootPC>
      <div className="bg-background">
        <div className="w-full bg-white py-2">
          <div className="container flex items-center">
            <Breadcrumbs separator=">">
              <Anchor href={'/'}>Home</Anchor>
              <Anchor>Hot novel</Anchor>
            </Breadcrumbs>
          </div>
        </div>
        <Grid columns={24} className="container " justify={'space-between'} align="flex-start">
          <Grid.Col span={18} className="flex items-center ">
            <HotestNovelPc />
          </Grid.Col>
          <Grid.Col span={6} className="flex items-center">
            <GenresListPC data={[]} />
          </Grid.Col>
        </Grid>
      </div>
    </RootPC>
  );
}
