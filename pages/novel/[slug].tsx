import {
  Anchor,
  Badge,
  Blockquote,
  Breadcrumbs,
  Button,
  Container,
  Divider,
  Grid,
  Group,
  Input,
  ScrollArea,
  SimpleGrid,
  Skeleton,
  Table,
  TypographyStylesProvider,
} from '@mantine/core';
import _ from 'lodash';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { ArrowBigRight } from 'tabler-icons-react';
import { getNovelDetails } from '../../API/APIManage';
import { GenresListPC } from '../../components/Layout/PC/GenresList/GenresList';
import { HeaderPC } from '../../components/Layout/PC/Header/Header';
import RootPC from '../../components/Layout/PC/Root/indexPc';

export default function HomePage({ params, query }: { params: any; query: any }) {
  const [datanovel, setDatanovel] = useState<any>({});
  const [itemBreadcumb, setItemBreadcumb] = useState<any>([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState('');
  useEffect(() => {
    if (query?.slug) {
      setLoading(true);
      getNovelDetails(query?.slug)
        .then((res: any) => {
          console.log(res);
          if (res?.data?.length > 0) {
            setDatanovel(res?.data[0]);
            setLoading(false);
          }
        })
        .catch((e) => {});
    }
  }, [query]);
  console.log(search);
  useEffect(() => {
    if (datanovel.novelsname) {
      const items = [
        { title: 'Home', href: '/' },
        { title: datanovel?.novelsname, href: `/novel/${datanovel?.idnovels}` },
      ].map((item, index) => (
        <Anchor href={item.href} key={index}>
          {item.title}
        </Anchor>
      ));
      setItemBreadcumb(items);
    }
  }, [datanovel]);
  return (
    <RootPC>
      <div className="bg-background">
        <div className="w-full bg-white py-2">
          <div className="container flex items-center">
            <Breadcrumbs separator=">">{itemBreadcumb}</Breadcrumbs>
          </div>
        </div>
        <div className="w-full bg-black py-2">
          <Container>
            <Skeleton visible={loading}>
              <Grid columns={24} justify={'space-between'} align="flex-start">
                <Grid.Col span={8} className="flex flex-col items-start pt-8">
                  {datanovel?.cover ? (
                    <Image
                      src={datanovel?.cover}
                      alt={datanovel?.novelsname}
                      width={215}
                      height={322}
                      objectFit="contain"
                    />
                  ) : null}
                </Grid.Col>
                <Grid.Col span={16} className="flex flex-col items-start pt-8">
                  <h2 className="text-36 font-bold text-left w-full text-white">
                    {datanovel?.novelsname}
                  </h2>
                  <p className="text-14 text-white pb-1">{datanovel?.othername}</p>
                  <p className="text-14 text-white py-1">
                    <span className="font-bold text-sm text-white">Author:</span>{' '}
                    {datanovel?.author}
                  </p>
                  <p className="text-14 text-white py-1">Categories</p>
                  <div className="py-1">
                    {datanovel?.genresdata?.map((item: any, index: any) => (
                      <Badge className='mx-1 my-1' key={index}>{item?.genrename}</Badge>
                    ))}
                  </div>
                  <Link href={datanovel?.chapterlist?.length > 0 ? `/${datanovel?.idnovels}/${datanovel?.chapterlist[0]?.value}` : ''}>
                    <a>
                    <Button className="bg-tim my-2">Read Chapter 1</Button>
                    </a>
                  </Link>
                 
                </Grid.Col>
              </Grid>
            </Skeleton>
          </Container>
        </div>
        <Container>
          <div className="bg-white w-full p-2">
            <Divider
              my="xs"
              className="w-full text-24"
              label={<p className="text-24 text-tim">Summary</p>}
            />
            <div
              className="relative antialiased text-justify text-14 box-cmt"
              dangerouslySetInnerHTML={{
                __html: datanovel?.description,
              }}
            />
          </div>
        </Container>
        <Container>
          <div className="bg-white w-full p-2">
            <Divider
              my="xs"
              className="w-full text-24"
              label={<p className="text-24 text-tim">Chapter List</p>}
            />
            <ScrollArea className="w-full bg-white my-2" style={{ height: 500 }}>
              <div className="w-full flex flex-col p-2">
                <Table striped>
                  <thead>
                    <Input
                      placeholder="search chapter..."
                      onChange={(e: any) => setSearch(e.target.value)}
                    />
                  </thead>
                  <tbody>
                    {_.filter(datanovel?.chapterlist, function (o) {
                      return ((o.label).toLowerCase()).search(search.toLowerCase()) !== -1;
                    })?.map((item: any, index: any) => (
                      <tr key={index}>
                        <td>{index}</td>
                        <td>
                          <Link href={`/${datanovel?.idnovels}/${item?.value}`}>
                            <a>
                              <p className="px-4 text-16 py-2">{item?.label}</p>
                            </a>
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </div>
            </ScrollArea>
          </div>
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
