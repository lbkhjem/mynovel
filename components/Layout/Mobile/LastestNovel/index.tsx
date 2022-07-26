import {
  Title,
  Text,
  Anchor,
  Container,
  Menu,
  Button,
  Grid,
  Input,
  Table,
  Skeleton,
} from '@mantine/core';
import Image from 'next/image';
import Link from 'next/link';
import { AlignCenter, ChevronDown, Refresh, Search } from 'tabler-icons-react';
import ReactPaginate from 'react-paginate';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getNovelUpdate } from '../../../../API/APIManage';

export function LastestNovelMobile() {
  const router = useRouter();
  const [itemOffset, setItemOffset] = useState(Number(router.query?.page));
  const [loading, setLoading] = useState(false);
  const [datanovel, setDatanovel] = useState([]);
  useEffect(() => {
    let params = {
      page: router.query?.page,
    };
    setLoading(true);
    getNovelUpdate(params)
      .then((res: any) => {
        setDatanovel(res?.data);
        setLoading(false);
      })
      .catch((e) => {});
  }, [router]);
  useEffect(() => {
    router.push(`/lastestnovel/${itemOffset}`);
  }, [itemOffset]);
  const rows = datanovel.map((element: any) => (
    <tr key={element.novelsname}>
      <tr key={element.novelsname} className="w-full">
        <td className="w-3/5">
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
              <Text size="sm" className="w-2/3" lineClamp={2}>
                {element.novelsname}
              </Text>
            </a>
          </Link>
        </td>
        <td className="w-2/5">
          <Text size="sm" lineClamp={2}>
            {element.lasterchapter}
          </Text>
        </td>
      </tr>
    </tr>
  ));
  const handlePageClick = (event: any) => {
    setItemOffset(event.selected + 1);
  };
  return (
    <div className="container bg-white my-2 w-full rounded-sm">
      <div className="w-full justify-start px-2 flex py-2">
        <p className="font-bold text-16 flex items-center">
          {' '}
          <Refresh />
          LATEST RELEASE NOVELS
        </p>
        {/* <p className="font-bold text-16 text-link">SEE MORE</p> */}
      </div>
      <Skeleton visible={loading}>
        <Table>
          <thead>
            <tr>
              <th>Novel name</th>
              <th>New chapter</th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </Table>
      </Skeleton>

      <ReactPaginate
        breakLabel="..."
        nextLabel=">"
        className="flex px-2 items-center w-full overflow-hidden"
        pageClassName="font-bold bg-white p-2 border-border border-1 rounded"
        onPageChange={handlePageClick}
        initialPage={itemOffset}
        pageRangeDisplayed={10}
        pageCount={2164}
        previousLabel="<"
        activeClassName="text-white font-bold bg-link p-2"
        // renderOnZeroPageCount={null}
      />
    </div>
  );
}
