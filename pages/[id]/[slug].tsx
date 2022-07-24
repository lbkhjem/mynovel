import {
  Anchor,
  Breadcrumbs,
  Button,
  Container,
  Divider,
  Grid,
  Group,
  Menu,
  Popover,
  ScrollArea,
  Select,
  SimpleGrid,
  Skeleton,
  TypographyStylesProvider,
} from '@mantine/core';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { ArrowBigRight, ChevronLeft, ChevronRight, List, Settings } from 'tabler-icons-react';
import { getChapterDetails, getNovelDetails } from '../../API/APIManage';
import { GenresListPC } from '../../components/Layout/PC/GenresList/GenresList';
import { HeaderPC } from '../../components/Layout/PC/Header/Header';
import RootPC from '../../components/Layout/PC/Root/indexPc';
import _ from 'lodash';
import { useRouter } from 'next/router';

export default function HomePage({ params, query }: { params: any; query: any }) {
  const [datanovel, setDatanovel] = useState<any>({});
  const [content, setContent] = useState<any>({});
  const [indexChapter, setIndexChapter] = useState<any>('');
  const [loading, setLoading] = useState(false);
  const [itemBreadcumb, setItemBreadcumb] = useState<any>([]);
  const [opened, setOpened] = useState(false);
  const [chapterList, setChapterList] = useState<any>([]);
  const [background, setBackground] = useState<any>('');
  const [family, setFamily] = useState<any>('');
  const [fontSizes, setFontSize] = useState<any>(16);
  const router = useRouter();
  useEffect(() => {
    let bg = localStorage.getItem('background');
    setBackground(bg);
    let font = localStorage.getItem('font');
    setFamily(font);
    let fontsize = localStorage.getItem('fontsize');
    setFontSize(fontsize);
  }, []);
  useEffect(() => {
    if (query?.slug) {
      setLoading(true);
      getNovelDetails(query?.id)
        .then((res: any) => {
          console.log(res);
          if (res?.data?.length > 0) {
            setDatanovel(res?.data[0]);
            setChapterList(res?.data[0]?.chapterlist);
            setLoading(false);
          }
        })
        .catch((e) => {});
      getChapterDetails(query?.id, query?.slug)
        .then((res: any) => {
          console.log(res);
          if (res?.content) {
            setContent(res);
            setLoading(false);
          }
        })
        .catch((e) => {});
    }
  }, [query]);
  console.log(query);
  useEffect(() => {
    if (datanovel.novelsname) {
      const items = [
        { title: 'Home', href: '/' },
        { title: datanovel?.novelsname, href: `/novel/${datanovel?.idnovels}` },
        { title: content?.chaptername, href: `#` },
      ].map((item, index) => (
        <Anchor href={item.href} key={index}>
          {item.title}
        </Anchor>
      ));
      setItemBreadcumb(items);
    }
    if (datanovel?.chapterlist?.length > 0) {
      let currentindex = _.findIndex(datanovel?.chapterlist, function (o: any) {
        return o.value == query?.slug;
      });
      setIndexChapter(currentindex);
    }
  }, [datanovel]);
  const _handleChangeBg = (e: any) => {
    console.log(e);
    setBackground(e);
    localStorage.setItem('background', e);
  };
  const _handleChangeFont = (e: any) => {
    setFamily(e);
    localStorage.setItem('font', e);
  };
  const _handleChangeFontSize = (e: any) => {
    setFontSize(e);
    localStorage.setItem('fontsize', e);
  };
  const _handleChangeChapter = (e: any) => {
    router.push(`/${query.id}/${e}`);
  };
  return (
    <RootPC>
      <div style={{ background: background ? background : '#F4F4F4' }} className="bg-background">
        <div className="w-full bg-white py-2">
          <Container>
            <Skeleton visible={loading}>
              <div className="container flex items-center">
                <Breadcrumbs separator=">">{itemBreadcumb}</Breadcrumbs>
              </div>
            </Skeleton>
          </Container>
        </div>
        <Container>
          <Skeleton visible={loading}>
            <Grid
              columns={24}
              className="container pt-8"
              justify={'space-between'}
              align="flex-start"
            >
              <h2 className="text-36 text-center w-full font-bold text-link">
                {datanovel?.novelsname}
              </h2>
              <h3 className="text-24 text-center w-full font-medium">{content?.chaptername}</h3>
              <div className="flex items-center justify-center w-full">
                {indexChapter > 0 ? (
                  <Link href={`/${query?.id}/${chapterList[indexChapter - 1]?.value}`}>
                    <a>
                      <Button className="bg-link mx-1" leftIcon={<ChevronLeft size={14} />}>
                        Prev Chapter
                      </Button>
                    </a>
                  </Link>
                ) : null}
                <Select
                  // label="Select Chapter"
                  placeholder="Pick one"
                  searchable
                  value={query?.slug}
                  onChange={(e) => _handleChangeChapter(e)}
                  nothingFound="No options"
                  data={chapterList}
                />
                {/* <Button className="bg-link mx-1">
                  <List size={14} />
                </Button> */}
                <Popover
                  opened={opened}
                  onClose={() => setOpened(false)}
                  target={
                    <Button className="bg-link mx-1" onClick={() => setOpened((o) => !o)}>
                      {' '}
                      <Settings size={14} />
                    </Button>
                  }
                  width={360}
                  position="bottom"
                  withArrow
                >
                  <div className="flex flex-col">
                    <div className="flex items-center justify-end py-1">
                      <p className="font-bold text-10">Background</p>
                      <Select
                        style={{ width: 250 }}
                        placeholder="Background"
                        value={background}
                        onChange={(e) => _handleChangeBg(e)}
                        className="mx-2"
                        data={[
                          { value: '#F4F4F4', label: 'Light gray' },
                          { value: '#E8EBEE', label: 'Light blue' },
                          { value: '#F4F4E3', label: 'Light yellow' },
                          { value: '#EAE4D3', label: 'Sepia' },
                          { value: '#D5D8DC', label: 'Dark blue' },
                          { value: '#FAFAC8', label: 'Dark yellow' },
                          { value: '#EFEFAB', label: 'Wood grain' },
                          { value: '#FFFFFF', label: 'White' },
                        ]}
                      />
                    </div>
                    <div className="flex items-center justify-end py-1">
                      <p className="font-bold text-10">Font family</p>
                      <Select
                        style={{ width: 250 }}
                        placeholder="Font family"
                        value={family}
                        onChange={(e) => _handleChangeFont(e)}
                        className="mx-2"
                        data={[
                          { value: '"Lora", sans-serif', label: 'Lora' },
                          { value: '"Nunito", sans-serif', label: 'Nunito' },
                          { value: '"Roboto", sans-serif', label: 'Roboto' },
                          { value: '"Roboto Condensed", sans-serif', label: 'Roboto Condensed' },
                          { value: 'Merriweather, sans-serif', label: 'Merriweather' },
                          { value: 'Noticia Text, sans-serif', label: 'Noticia Text' },
                          { value: 'Times New Roman, sans-serif', label: 'Times New Roman' },
                        ]}
                      />
                    </div>
                    <div className="flex items-center justify-end py-1">
                      <p className="font-bold text-10">Font size</p>
                      <Select
                        style={{ width: 250 }}
                        placeholder="Font size"
                        value={fontSizes}
                        onChange={(e) => _handleChangeFontSize(e)}
                        className="mx-2"
                        data={[
                          { value: '16', label: '16' },
                          { value: '18', label: '18' },
                          { value: '20', label: '20' },
                          { value: '22', label: '22' },
                          { value: '24', label: '24' },
                          { value: '26', label: '26' },
                          { value: '28', label: '28' },
                          { value: '30', label: '30' },
                        ]}
                      />
                    </div>
                  </div>
                </Popover>

                {indexChapter < chapterList?.length - 1 ? (
                  <Link href={`/${query?.id}/${chapterList[indexChapter + 1]?.value}`}>
                    <a>
                      <Button className="bg-link mx-1" rightIcon={<ChevronRight size={14} />}>
                        Next Chapter
                      </Button>
                    </a>
                  </Link>
                ) : null}
              </div>
              <Divider my="sm" className="w-full" />

              <div
                className="relative antialiased text-14 box-cmt text-black w-full"
                style={{ fontSize: fontSizes ? Number(fontSizes) : 16 }}
                dangerouslySetInnerHTML={{
                  __html: content?.content,
                }}
              />

              <Divider my="sm" className="w-full" />
              <div className="flex items-center justify-center w-full my-2">
                {indexChapter > 0 ? (
                  <Link href={`/${query?.id}/${chapterList[indexChapter - 1]?.value}`}>
                    <a>
                      <Button className="bg-link mx-1" leftIcon={<ChevronLeft size={14} />}>
                        Prev Chapter
                      </Button>
                    </a>
                  </Link>
                ) : null}

                {indexChapter < chapterList?.length - 1 ? (
                  <Link href={`/${query?.id}/${chapterList[indexChapter + 1]?.value}`}>
                    <a>
                      <Button className="bg-link mx-1" rightIcon={<ChevronRight size={14} />}>
                        Next Chapter
                      </Button>
                    </a>
                  </Link>
                ) : null}
              </div>
            </Grid>
          </Skeleton>
        </Container>
      </div>
    </RootPC>
  );
}
export async function getServerSideProps({ params, query }: { params: any; query: any }) {
  let productData = [];
  // const res1 = await fetch(`${API_URL}fe/v1/products/${params.id}`)
  // const data = await res1.json()
  return { props: { params, query } };
}
