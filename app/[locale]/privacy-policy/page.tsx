import 'css/prism.css'
import 'katex/dist/katex.css'

import { components } from '@/components/MDXComponents'
import { MDXLayoutRenderer } from 'pliny/mdx-components'
import {  coreContent } from 'pliny/utils/contentlayer'
import { allBlogs, allPrivacyPolicies } from 'contentlayer/generated'
import type {  PrivacyPolicy } from 'contentlayer/generated'
import PostSimple from '@/layouts/PostSimple'
import PostLayout from '@/layouts/PostLayout' 
import PostBanner from '@/layouts/PostBanner'
import { Metadata } from 'next'
import siteMetadata from '@/data/siteMetadata'
import ScrollTopAndComment from '@/components/ScrollTopAndComment'
import BackArrow from '@/components/BackArrow'
import SimpleLayout from '@/layouts/SimpleLayout'

import PrivacyAnimation from '@/components/canvas/PrivacyAnimation'
export const dynamic = 'force-dynamic';


export default async function Page({ params }: { params: { locale , slug: string[] } }) {

  const post = allPrivacyPolicies.find((p) => p._id.includes(params.locale)) as PrivacyPolicy

  const jsonLd = post.structuredData
 

  

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
       <div className="pointer-events-none fixed left-0 top-0 h-full w-full overflow-hidden opacity-100 blur-sm [user-select:none] [z-index:0]">
          <PrivacyAnimation />
        </div>
        <div className="pointer-events-none fixed left-0 top-0 h-full w-full overflow-hidden [user-select:none] [z-index:2]">
          <PrivacyAnimation />
        </div>
        <SimpleLayout  >
      <ScrollTopAndComment></ScrollTopAndComment>
    
        <MDXLayoutRenderer code={post.body.code} components={components} toc={post.toc} />
        </SimpleLayout>
      
    </>
  )
}
