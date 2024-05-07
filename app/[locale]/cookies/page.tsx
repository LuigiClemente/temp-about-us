import 'css/prism.css'
import 'katex/dist/katex.css'
import ImageAnimation from "../../../components/canvas/ImageAnimation"
import { components } from '@/components/MDXComponents'
import { MDXLayoutRenderer } from 'pliny/mdx-components'
import {  coreContent } from 'pliny/utils/contentlayer'
import { allBlogs, allCookies } from 'contentlayer/generated'
import type {  Cookies, PrivacyPolicy } from 'contentlayer/generated'
import PostSimple from '@/layouts/PostSimple'
import PostLayout from '@/layouts/PostLayout' 
import PostBanner from '@/layouts/PostBanner'
import { Metadata } from 'next'
import siteMetadata from '@/data/siteMetadata'
import ScrollTopAndComment from '@/components/ScrollTopAndComment'
import BackArrow from '@/components/BackArrow'
import SimpleLayout from '@/layouts/SimpleLayout'

export const dynamic = 'force-dynamic';


export default async function Page({ params }: { params: { locale , slug: string[] } }) {

  const post = allCookies.find((p) => p._id.includes(params.locale)) as Cookies

  const jsonLd = post.structuredData
 

  

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <div className="fixed [z-index:0] overflow-hidden top-0 left-0 w-full h-full [user-select:none] pointer-events-none opacity-100 blur-sm">
    <ImageAnimation />
    </div>
    <div className="overflow-hidden fixed [z-index:2] top-0 left-0 w-full h-full [user-select:none] pointer-events-none">
    <ImageAnimation />
    </div>
        <SimpleLayout  >
      <ScrollTopAndComment></ScrollTopAndComment>
    
        <MDXLayoutRenderer code={post.body.code} components={components} toc={post.toc} />
        </SimpleLayout>
      
    </>
  )
}
