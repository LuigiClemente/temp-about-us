'use client'

import 'react-responsive-modal/styles.css'
import classNames from 'classnames'
import Image from 'next/image'

import { createSharedPathnamesNavigation } from 'next-intl/navigation'
import { useState, useTransition } from 'react'
import { CiCircleInfo, CiGlobe } from 'react-icons/ci'
import { Popover } from 'react-tiny-popover'
import { languages, locales } from '../../utils/languages'
// import { useLocale } from "next-intl";
// import { useParams, usePathname, useRouter } from "next/navigation";
import { useLocale, useTranslations } from 'next-intl'
import Modal from 'react-responsive-modal'
import CookiesModal from '../CookiesModal/CookiesModal'
import ScrollTopAndComment from '../ScrollTopAndComment'
import { IMAGE_URL } from 'utils/image_url'
import { routes } from 'utils/routes'

export const Navigation = ({
  section,
  navOpen,
  langOpen,
  setLangOpen,
  setNavOpen,
  isHovered,
  setIsHovered,
  isLangBtnHovered,
  setIsLangBtnHovered,
  cookiesData,
}: {
  section: 'light' | 'dark'
  navOpen: boolean
  langOpen: boolean
  setLangOpen: any
  setNavOpen: any
  isHovered: any
  setIsHovered: any
  setIsLangBtnHovered: any
  isLangBtnHovered: any
  cookiesData: any
}) => {
  const [isPending, startTransition] = useTransition()
  const { Link, useRouter, usePathname, redirect } = createSharedPathnamesNavigation({ locales })
  const localActive = useLocale()
  const t = useTranslations('Index')
  const router = useRouter()
  const pathName = usePathname()
  const [selectedLanguage, setSelectedLanguage] = useState(localActive)
  const [openModal, setOpenModal] = useState(true)
  const changeLanguage = (newLocale) => {
    let newPathName = routes[newLocale]['about-us']

    console.log({ newPathName })

    // Use a full path for redirection to avoid locale prefix issues
    document.cookie = `NEXT_LOCALE=${newLocale}; path=/; max-age=31536000; samesite=lax`

    router.push(`${newPathName}`)
  }

  return (
    <>
      <nav
        className={
          'custom-container pointer-events-none absolute left-1/2  mx-auto flex w-full -translate-x-1/2 items-center justify-between pl-[8px] pr-[10px] ' +
          section
        }
      >
        <div className="relative -translate-x-[8px] font-extrabold text-black">
          <Image
            alt="logo"
            height={70}
            width={120}
            loader={({ src }) => src}
            objectFit="contain"
            onClick={() => router.push(`${routes[localActive]['home']}`)}
            className=" pointer-events-auto h-[110px] w-[120px] cursor-pointer object-contain 2xl:h-[100px] 2xl:w-[150px]"
            src={`${IMAGE_URL}/assets/${section === 'dark' ? 'day' : 'night'}/logo.webp`}
          ></Image>
          <div
            className={`absolute top-0   z-20 h-full w-full cursor-pointer rounded-full`}

            // onClick={()=>{}}
          ></div>
        </div>

        <div className="pointer-events-auto flex items-center  gap-10 ">
          <>
            <Popover
              isOpen={langOpen}
              positions={['left', 'top']}
              padding={10}
              onClickOutside={() => setLangOpen(false)}
              content={({ position, nudgedLeft, nudgedTop }) => (
                <div className="languages-box">
                  {languages.map((lang) => (
                    <div
                      key={lang.code}
                      className={`language ${selectedLanguage === lang.code ? 'selected' : ''}`}
                      onClick={() => changeLanguage(lang.code)}
                    >
                      <span>{lang.label}</span>
                      <svg
                        height="1em"
                        viewBox="0 0 24 24"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          clipRule="evenodd"
                          d="M20.54 7.225 9.58 18.185l-6.12-6.12 1.415-1.414 4.705 4.706 9.546-9.546z"
                        ></path>
                      </svg>
                    </div>
                  ))}
                </div>
              )}
            >
              <div
                className={`lang-btn relative  cursor-pointer ${isLangBtnHovered ? 'hovered' : ''}`}
                onClick={() => setLangOpen(!langOpen)}
              >
                <div
                  className="inner-lang-btn absolute z-20 h-full w-full cursor-pointer"
                  onMouseEnter={() => {
                    setIsLangBtnHovered(true)
                  }}
                  onMouseLeave={() => setIsLangBtnHovered(false)}
                  onClick={() => setLangOpen(!langOpen)}
                ></div>

                <CiGlobe color={section === 'light' ? '#ffffff' : '#000000'} />
              </div>
            </Popover>
            <div
              className={`relative ${section === 'light' ? 'light' : 'dark'} hamburger-container  ${navOpen ? 'navOpen' : ''}`}
            >
              <div
                className={`extra-nav absolute  z-20 h-full w-full rounded-full duration-[800ms]`}
                onMouseEnter={() => {
                  setIsHovered(true)
                }}
                onMouseLeave={() => setIsHovered(false)}
                onClick={() => setNavOpen(!navOpen)}
              ></div>
              <button className={` menu__icon  ${isHovered || navOpen ? 'hovered-class' : ''}`}>
                <span></span>
                <span></span>
              </button>
            </div>
          </>

          <CookiesModal
            cookiesData={cookiesData}
            modalIsOpen={openModal}
            setModalIsOpen={setOpenModal}
          ></CookiesModal>

          <div className={classNames('navigation', section)}>
            <input
              type="checkbox"
              className="navigation__checkbox"
              checked={navOpen}
              id="navi-toggle"
            />

            <div className={`navigation__background ${navOpen ? 'navOpen' : ''}`}>&nbsp;</div>

            <nav className="navigation__nav">
              <div className="custom-container flex min-h-[130px] items-center justify-between">
                <div></div>
                <div
                  className={`relative ${section === 'light' ? 'light' : 'dark'} hamburger-container mr-[29px] ${navOpen ? 'navOpen' : ''}`}
                >
                  <div
                    className={`extra-nav absolute  z-20 h-20 w-20 rounded-full duration-[800ms]`}
                    onMouseEnter={() => {
                      setIsHovered(true)
                    }}
                    onMouseLeave={() => setIsHovered(false)}
                    onClick={() => setNavOpen(!navOpen)}
                  ></div>
                  <button
                    className={` menu__icon   ${isHovered || navOpen ? 'hovered-class' : ''}`}
                  >
                    <span></span>
                    <span></span>
                  </button>
                </div>
              </div>
              {/* <ul className="navigation__list flex select-none flex-col">
                <Link href="/" className="navigation__item !mx-auto inline-block w-max ">
                  <span className="navigation__link">{t('Home')}</span>
                </Link>
                <span
                  onClick={() => {
                    setOpenModal(!openModal)
                    setNavOpen(false)
                  }}
                  className="navigation__item !mx-auto inline-block w-max cursor-pointer"
                >
                  <span className="navigation__link">{t('About_Us')}</span>
                </span>
                <Link
                  href="/case-studies"
                  className="navigation__item  !mx-auto inline-block  w-max "
                >
                  <span className="navigation__link">{t('Our_Studies')}</span>
                </Link>
                <Link href="/blog" className="navigation__item !mx-auto inline-block w-max">
                  <span className="navigation__link">{t('Terms_of_Service')}</span>
                </Link>
                <Link href="/cookies" className="navigation__item !mx-auto inline-block w-max">
                  <span className="navigation__link">{t('Cookies_Policy')}</span>
                </Link>
                <Link
                  href="/privacy-policy"
                  className="navigation__item !mx-auto inline-block w-max"
                >
                  <span className="navigation__link">{t('Privacy_Policy')}</span>
                </Link>
            </ul> */}
              <ul className="navigation__list flex select-none flex-col">
                <button
                  onClick={() => router.push(routes[selectedLanguage]['home'])}
                  className="navigation__item !mx-auto inline-block w-max cursor-pointer"
                >
                  <span className="navigation__link">{t('Home')}</span>
                </button>
                <button
                  onClick={() => {
                    setOpenModal(!openModal)
                    setNavOpen(false)
                  }}
                  className="navigation__item !mx-auto inline-block w-max cursor-pointer"
                >
                  <span className="navigation__link">{t('About_Us')}</span>
                </button>
                <button
                  onClick={() => router.push(routes[selectedLanguage]['our-studies'])}
                  className="navigation__item !mx-auto inline-block w-max cursor-pointer"
                >
                  <span className="navigation__link">{t('Our_Studies')}</span>
                </button>
                <button
                  onClick={() => router.push(routes[selectedLanguage]['terms-of-use'])}
                  className="navigation__item !mx-auto inline-block w-max cursor-pointer"
                >
                  <span className="navigation__link">{t('Terms_of_Service')}</span>
                </button>
                <button
                  onClick={() => router.push(routes[selectedLanguage]['cookies'])}
                  className="navigation__item !mx-auto inline-block w-max cursor-pointer"
                >
                  <span className="navigation__link">{t('Cookies_Policy')}</span>
                </button>
                <button
                  onClick={() => router.push(routes[selectedLanguage]['privacy'])}
                  className="navigation__item !mx-auto inline-block w-max cursor-pointer"
                >
                  <span className="navigation__link">{t('Privacy_Policy')}</span>
                </button>
              </ul>
            </nav>
          </div>
        </div>
      </nav>
      {/* {openModal && <ScrollTopAndComment></ScrollTopAndComment>} */}
    </>
  )
}
