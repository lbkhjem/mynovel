import { Anchor, Breadcrumbs, Grid } from '@mantine/core';
import { useState } from 'react';
import { CompletedNovelPc } from '../../components/Layout/PC/CompletedNovel';
import { GenresListPC } from '../../components/Layout/PC/GenresList/GenresList';
import RootPC from '../../components/Layout/PC/Root/indexPc';

export default function CompletedNovel() {
  const [datanovel, setDatanovel] = useState([]);

  return (
    <RootPC>
      <div className="bg-background">
        <div className="w-full bg-white py-2">
          <div className="container flex items-center">
            <Breadcrumbs separator=">">
              <Anchor href={'/'}>Home</Anchor>
              <Anchor>Completed novel</Anchor>
            </Breadcrumbs>
          </div>
        </div>
        <Grid columns={24} className="container " justify={'space-between'} align="flex-start">
          <Grid.Col span={18} className="flex items-center ">
            <CompletedNovelPc />
          </Grid.Col>
          <Grid.Col span={6} className="flex items-center">
            <GenresListPC data={[]} />
          </Grid.Col>
        </Grid>
      </div>
    </RootPC>
  );
}
