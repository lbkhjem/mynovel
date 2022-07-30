import { createMedia } from '@artsy/fresnel';
import { Anchor, Breadcrumbs, Grid } from '@mantine/core';
import { useEffect, useState } from 'react';
import { ArrowBigRight } from 'tabler-icons-react';
import { getNovelUpdate } from '../../API/APIManage';
import { HotestNovelMobile } from '../../components/Layout/Mobile/HotestNovel';
import RootMobile from '../../components/Layout/Mobile/Root/indexMobile';
import { GenresListPC } from '../../components/Layout/PC/GenresList/GenresList';
import { HotestNovelPc } from '../../components/Layout/PC/HotestNovel';
import { LastestNovelPc } from '../../components/Layout/PC/LastestNovel';
import RootPC from '../../components/Layout/PC/Root/indexPc';
const { MediaContextProvider, Media } = createMedia({
  // breakpoints values can be either strings or integers
  breakpoints: {
    sm: 0,
    md: 768,
    lg: 1024,
    xl: 1192,
  },
});
export default function HotNovel() {
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
      </Media>
      <Media lessThan="lg">
    <RootMobile>
      <div className="bg-background">
        <div className="w-full bg-white py-2">
          <div className="container flex items-center px-2">
            <Breadcrumbs separator=">">
              <Anchor href={'/'}>Home</Anchor>
              <Anchor>Hot novel</Anchor>
            </Breadcrumbs>
          </div>
        </div>
        <Grid columns={24} className="container " justify={'space-between'} align="flex-start">
          <Grid.Col span={24} className="flex items-center ">
            <HotestNovelMobile />
          </Grid.Col>
         
        </Grid>
      </div>
    </RootMobile>
    </Media>
    </MediaContextProvider>
  );
}
