import { Skeleton, Table } from '@mantine/core';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { Flame } from 'tabler-icons-react';
import { getNovelHotest, getNovelUpdate } from '../../../../API/APIManage';

export function HotestNovelPc() {
  const router = useRouter();
  const [itemOffset, setItemOffset] = useState(Number(router.query?.page));
  const [loading, setLoading] = useState(false);
  const [datanovel, setDatanovel] = useState([]);
  useEffect(() => {
    let params = {
      page: router.query?.page,
    };
    setLoading(true);
    getNovelHotest(params)
      .then((res: any) => {
        setDatanovel(res?.data);
        setLoading(false);
      })
      .catch((e) => {});
  }, [router]);
  useEffect(() => {
    router.push(`/hotnovel/${itemOffset}`);
  }, [itemOffset]);
  const rows = datanovel.map((element: any) => (
    <tr key={element.novelsname}>
      <td>
        <Link href={`/novel/${element?.idnovel}`}>
          <a className="items-center flex font-bold">
            <Image
              src={element?.cover}
              alt="Picture of the author"
              width={64}
              height={93}
              objectFit="contain"
            />
            <p className="px-7">{element.novelsname}</p>
          </a>
        </Link>
      </td>
      <td>{element.lasterchapter}</td>
    </tr>
  ));
  const handlePageClick = (event: any) => {
    setItemOffset(event.selected + 1);
  };
  return (
    <div className="container bg-white my-2 rounded-sm">
      <div className="w-full justify-start px-2 flex py-2">
        <p className="font-bold text-16 flex items-center">
          {' '}
          <Flame />
          HOT NOVELS
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
        className="flex px-2 items-center"
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
