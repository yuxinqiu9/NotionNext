import { siteConfig } from '@/lib/config'
import SocialButton from '@/themes/fukasawa/components/SocialButton'
import { Logo } from './Logo'
import { SVGFooterCircleBG } from './svg/SVGFooterCircleBG'


export const Footer = () => {
  return (
    <footer className='bg-white py-4'>
      <div className='container mx-auto text-center text-black-500 text-xs'>
        &copy; {new Date().getFullYear()} {siteConfig('FOOTER_COPYRIGHT')}
      </div>
    </footer>
  )
}
