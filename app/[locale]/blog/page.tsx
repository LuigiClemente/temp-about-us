import ListLayout from '@/layouts/ListLayout' // Assuming ListLayout is a generic layout without tags
import { allCoreContent, sortPosts } from 'pliny/utils/contentlayer'
import { allBlogs } from 'contentlayer/generated'
import { genPageMetadata } from 'app/[locale]/seo'

const POSTS_PER_PAGE = 100

export const metadata = genPageMetadata({ title: 'Blog' })

export const dynamic = 'force-dynamic';

export default function BlogPage({params : {locale}}) {
  const posts = allCoreContent(sortPosts(allBlogs))
  console.log({posts , allBlogs})
  const pageNumber = 1
  const initialDisplayPosts = posts.filter((post)=>post.key === locale).slice(
    POSTS_PER_PAGE * (pageNumber - 1),
    POSTS_PER_PAGE * pageNumber
  )
  const pagination = {
    currentPage: pageNumber,
    totalPages: Math.ceil(posts.length / POSTS_PER_PAGE),
  }
 
  return (
    <>


    <ListLayout
      posts={posts.filter((post)=>post.key === locale)}
      initialDisplayPosts={initialDisplayPosts}
      pagination={pagination}
      title="All Posts"
      
    />
    </>
  )
}
