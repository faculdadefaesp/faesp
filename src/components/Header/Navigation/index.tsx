import React from 'react';
import Image from 'next/image'
import Link from 'next/link'
import Logo  from '../../../assets/Logo.svg'
import { Links } from '../Menu';


export function Navigation() {
  return (
      <>
        <div>
            <div>
                <Link href="/">
                    <a>
                        <Image
                          src={Logo}
                          alt="Faculdade Evangélica de Sao Paulo"
                          height={91}
                          width={104} />
                    </a>
                </Link>
            </div>
            <div>
                <Links />
            </div>
        </div>
      </>
  )
}
