/* eslint-disable no-unreachable */
import { useGlobal } from '@/lib/global'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useCallback, useEffect, useState } from 'react'
import { DarkModeButton } from './DarkModeButton'
import { Logo } from './Logo'
import { MenuList } from './MenuList'

/**
 * 顶部导航栏
 */
export const Header = props => {
  const router = useRouter()
  const { isDarkMode } = useGlobal()
  const [buttonTextColor, setColor] = useState(
    router.route === '/' ? 'text-white' : ''
  )

  useEffect(() => {
    if (isDarkMode || router.route === '/') {
      setColor('text-white')
    } else {
      setColor('')
    }
    // ======= Sticky
    window.addEventListener('scroll', navBarScollListener)
    return () => {
      window.removeEventListener('scroll', navBarScollListener)
    }
  }, [[isDarkMode]])

  // 滚动监听
  const throttleMs = 200
  const navBarScollListener = useCallback(
    throttle(() => {
      const ud_header = document.querySelector('.ud-header')
      const scrollY = window.scrollY
      if (scrollY > 0) {
        ud_header?.classList?.add('sticky')
      } else {
        ud_header?.classList?.remove('sticky')
      }
    }, throttleMs)
  )

  return (
    <>
      {/* <!-- ====== Navbar Section Start --> */}
      <div className='ud-header absolute left-0 top-0 z-40 flex w-full items-center bg-transparent'>
        <div className='container'>
          <div className='relative -mx-4 flex items-center justify-between'>
            {/* Logo */}
            <Logo />

            <div className='flex w-full items-center justify-between px-4'>
              {/* 中间菜单 */}
              <MenuList {...props} />

              {/* 右侧功能 */}
              <div className='flex items-center gap-4 justify-end pr-16 lg:pr-0'>
                {/* 深色模式切换 */}
                <DarkModeButton />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- ====== Navbar Section End --> */}
    </>
  )
}
