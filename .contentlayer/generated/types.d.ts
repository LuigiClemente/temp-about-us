// NOTE This file is auto-generated by Contentlayer

import type { Markdown, MDX, ImageFieldData, IsoDateTimeString } from 'contentlayer2/core'
import * as Local from 'contentlayer2/source-files'

export { isType } from 'contentlayer2/client'

export type { Markdown, MDX, ImageFieldData, IsoDateTimeString }

/** Document types */
export type Blog = {
  /** File path relative to `contentDirPath` */
  _id: string
  _raw: Local.RawDocumentData
  type: 'Blog'
  title: string
  date: IsoDateTimeString
  tags: string[]
  lastmod?: IsoDateTimeString | undefined
  draft?: boolean | undefined
  summary?: string | undefined
  images?: any | undefined
  authors?: string[] | undefined
  layout?: string | undefined
  bibliography?: string | undefined
  canonicalUrl?: string | undefined
  key: string
  /** MDX file body */
  body: MDX
  readingTime: json
  slug: string
  path: string
  filePath: string
  toc: string
  structuredData: json
}

export type CaseStudy = {
  /** File path relative to `contentDirPath` */
  _id: string
  _raw: Local.RawDocumentData
  type: 'CaseStudy'
  title: string
  date: IsoDateTimeString
  summary?: string | undefined
  key: string
  url: string
  /** MDX file body */
  body: MDX
  readingTime: json
  slug: string
  path: string
  filePath: string
  toc: string
  structuredData: json
}

export type Cookies = {
  /** File path relative to `contentDirPath` */
  _id: string
  _raw: Local.RawDocumentData
  type: 'Cookies'
  /** MDX file body */
  body: MDX
  readingTime: json
  slug: string
  path: string
  filePath: string
  toc: string
  structuredData: json
}

export type PrivacyPolicy = {
  /** File path relative to `contentDirPath` */
  _id: string
  _raw: Local.RawDocumentData
  type: 'PrivacyPolicy'
  /** MDX file body */
  body: MDX
  readingTime: json
  slug: string
  path: string
  filePath: string
  toc: string
  structuredData: json
}  

/** Nested types */
  

/** Helper types */

export type AllTypes = DocumentTypes | NestedTypes
export type AllTypeNames = DocumentTypeNames | NestedTypeNames

export type DocumentTypes = Blog | CaseStudy | Cookies | PrivacyPolicy
export type DocumentTypeNames = 'Blog' | 'CaseStudy' | 'Cookies' | 'PrivacyPolicy'

export type NestedTypes = never
export type NestedTypeNames = never

export type DataExports = {
  allDocuments: DocumentTypes[]
  allBlogs: Blog[]
  allCaseStudies: CaseStudy[]
  allPrivacyPolicies: PrivacyPolicy[]
  allCookies: Cookies[]
}


export interface ContentlayerGenTypes {
  documentTypes: DocumentTypes
  documentTypeMap: DocumentTypeMap
  documentTypeNames: DocumentTypeNames
  nestedTypes: NestedTypes
  nestedTypeMap: NestedTypeMap
  nestedTypeNames: NestedTypeNames
  allTypeNames: AllTypeNames
  dataExports: DataExports
}

declare global {
  interface ContentlayerGen extends ContentlayerGenTypes {}
}

export type DocumentTypeMap = {
  Blog: Blog
  CaseStudy: CaseStudy
  Cookies: Cookies
  PrivacyPolicy: PrivacyPolicy
}

export type NestedTypeMap = {

}

 