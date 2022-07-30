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
  SimpleGrid,
} from '@mantine/core';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { AlignCenter, ChevronDown, Flame, Refresh, Search } from 'tabler-icons-react';
import { getNovelHot } from '../../../../API/APIManage';

export function HotNovelMobile() {
  const [datanovel, setDatanovel] = useState([]);
  useEffect(() => {
    getNovelHot({})
      .then((res: any) => {
        setDatanovel(res?.data);
      })
      .catch((e) => {});
  }, []);
  return (
    <div className="container bg-white my-2 rounded-sm">
      <div className="w-full justify-between px-2 flex py-2">
        <p className="font-bold text-16 flex items-center">
          {' '}
          <Flame />
          HOT NOVEL
        </p>
        <Link href="/hotnovel/1">
          <a>
            <p className="font-bold text-16 text-link">SEE MORE</p>
          </a>
        </Link>
      </div>
      <SimpleGrid cols={2}>
        {datanovel?.slice(0, 12).map((item: any, index) => (
          <Link href={`/novel/${item.idnovel}`}>
            <a>
              <div className="w-full max-h-full object-cover block ">
                <div className="w-full relative overflow-hidden">
                  {item?.cover ? (
                    <Image
                      src={item?.cover}
                      alt={item?.novelsname}
                      layout="responsive"
                      width={179}
                      height={261}
                      objectFit="fill"
                    />
                  ) : null}
                  <div className="flex justify-center items-center absolute right-0 left-0 bottom-0 bg-black bg-opacity-60">
                    <h3 className="text-white text-xs text-center font-bold py-2">
                      {item?.novelsname}
                    </h3>
                  </div>
                </div>
              </div>
            </a>
          </Link>
        ))}
      </SimpleGrid>
    </div>
  );
}
