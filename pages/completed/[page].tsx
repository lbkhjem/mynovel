import { createMedia } from '@artsy/fresnel';
import { Anchor, Breadcrumbs, Grid } from '@mantine/core';
import { useState } from 'react';
import { CompletedNovelMobile } from '../../components/Layout/Mobile/CompletedNovel';
import RootMobile from '../../components/Layout/Mobile/Root/indexMobile';
import { CompletedNovelPc } from '../../components/Layout/PC/CompletedNovel';
import { GenresListPC } from '../../components/Layout/PC/GenresList/GenresList';
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
export default function CompletedNovel() {
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
      </Media>
      <Media lessThan="lg">
    <RootMobile>
      <div className="bg-background">
        <div className="w-full bg-white py-2">
          <div className="container flex items-center px-2">
            <Breadcrumbs separator=">">
              <Anchor href={'/'}>Home</Anchor>
              <Anchor>Completed novel</Anchor>
            </Breadcrumbs>
          </div>
        </div>
        <Grid columns={24} className="container " justify={'space-between'} align="flex-start">
          <Grid.Col span={24} className="flex items-center ">
            <CompletedNovelMobile />
          </Grid.Col>
         
        </Grid>
      </div>
    </RootMobile>
    </Media>
    </MediaContextProvider>
  );
}
