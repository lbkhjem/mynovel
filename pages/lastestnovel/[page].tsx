import { Anchor, Breadcrumbs, Grid } from '@mantine/core';
import { useEffect, useState } from 'react';
import { ArrowBigRight } from 'tabler-icons-react';
import { getNovelUpdate } from '../../API/APIManage';
import { GenresListPC } from '../../components/Layout/PC/GenresList/GenresList';
import { LastestNovelPc } from '../../components/Layout/PC/LastestNovel';
import RootPC from '../../components/Layout/PC/Root/indexPc';
import { createMedia } from '@artsy/fresnel';
import RootMobile from '../../components/Layout/Mobile/Root/indexMobile';
import { LastestNovelMobile } from '../../components/Layout/Mobile/LastestNovel';

const { MediaContextProvider, Media } = createMedia({
  // breakpoints values can be either strings or integers
  breakpoints: {
    sm: 0,
    md: 768,
    lg: 1024,
    xl: 1192,
  },
});
export default function LastesNovel() {
  const [datanovel, setDatanovel] = useState([]);
  
  return (
    <MediaContextProvider>
    <Media greaterThanOrEqual="lg">
    <RootPC>
      <div className="bg-background">
        <div className="w-full bg-white py-2">
          <div className="container flex items-center">
            <Breadcrumbs separator=">">
              <Anchor href={'/'}>Home</Anchor>
              <Anchor>Lastest novel</Anchor>
            </Breadcrumbs>
          </div>
        </div>
        <Grid columns={24} className="container " justify={'space-between'} align="flex-start">
          <Grid.Col span={18} className="flex items-center ">
            <LastestNovelPc />
          </Grid.Col>
          <Grid.Col span={6} className="flex items-center">
            <GenresListPC data={[]} />
          </Grid.Col>
        </Grid>
      </div>
    </RootPC>
    </Media>
    <Media lessThan="lg">
    <RootMobile>
      <div className="bg-background">
        <div className="w-full bg-white py-2">
          <div className="container flex items-center px-2">
            <Breadcrumbs separator=">">
              <Anchor href={'/'}>Home</Anchor>
              <Anchor>Lastest novel</Anchor>
            </Breadcrumbs>
          </div>
        </div>
        <Grid columns={24} className="container " justify={'space-between'} align="flex-start">
          <Grid.Col span={24} className="flex items-center ">
            <LastestNovelMobile />
          </Grid.Col>
          {/* <Grid.Col span={6} className="flex items-center">
            <GenresListPC data={[]} />
          </Grid.Col> */}
        </Grid>
      </div>
    </RootMobile>
    </Media>
    </MediaContextProvider>
   
  );
}
