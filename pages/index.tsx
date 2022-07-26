import { Welcome } from '../components/Welcome/Welcome';
import { createMedia } from '@artsy/fresnel';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import { HeaderPC } from '../components/Layout/PC/Header/Header';
import { ArrowBigRight } from 'tabler-icons-react';
import { useEffect, useState } from 'react';
import { getNovelUpdate } from '../API/APIManage';
import { NovelUpdateListPC } from '../components/Layout/PC/NovelUpdateList/NovelUpdateList';
import { Grid, MediaQuery } from '@mantine/core';
import { GenresListPC } from '../components/Layout/PC/GenresList/GenresList';
import RootPC from '../components/Layout/PC/Root/indexPc';
import { HotNovelPc } from '../components/Layout/PC/Hotnovel';
import RootMobile from '../components/Layout/Mobile/Root/indexMobile';
import { HotNovelMobile } from '../components/Layout/Mobile/Hotnovel';
import { NovelUpdateListMobile } from '../components/Layout/Mobile/NovelUpdateList/NovelUpdateList';
const { MediaContextProvider, Media } = createMedia({
  // breakpoints values can be either strings or integers
  breakpoints: {
    sm: 0,
    md: 768,
    lg: 1024,
    xl: 1192,
  },
});
export default function HomePage() {
  const [datanovel, setDatanovel] = useState([]);
  useEffect(() => {
    getNovelUpdate({})
      .then((res: any) => {
        setDatanovel(res?.data);
      })
      .catch((e) => {});
  }, []);
  return (
    <MediaContextProvider>
      <Media greaterThanOrEqual="lg">
        <RootPC>
          <div className="bg-background">
            <div className="w-full bg-white py-2">
              <div className="container flex items-center">
                <ArrowBigRight />
                <p className="text-bold text-sm px-2">
                  Read Books Online Free & Free Novels Online
                </p>
              </div>
            </div>
            <Grid columns={24} className="container " justify={'space-between'} align="flex-start">
              <Grid.Col span={24} className="flex items-center ">
                <HotNovelPc />
              </Grid.Col>
              <Grid.Col span={18} className="flex items-center ">
                <NovelUpdateListPC data={datanovel} />
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
              <div className="container flex items-center">
                <ArrowBigRight />
                <p className="text-bold text-sm px-2">
                  Read Books Online Free & Free Novels Online
                </p>
              </div>
            </div>
            <Grid columns={24} className="container " justify={'space-between'} align="flex-start">
              <Grid.Col span={24} className="flex items-center ">
                <HotNovelMobile />
              </Grid.Col>
              <Grid.Col span={24} className="flex items-center ">
                <NovelUpdateListMobile data={datanovel} />
              </Grid.Col>
            </Grid>
          </div>
        </RootMobile>
      </Media>
    </MediaContextProvider>
  );
}
