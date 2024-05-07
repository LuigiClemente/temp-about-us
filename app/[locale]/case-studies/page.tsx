import React from 'react'
import { allCaseStudies  } from 'contentlayer/generated'
import { genPageMetadata } from '../seo'
import Link from 'next/link'

export const metadata = genPageMetadata({ title: 'Case Study' })


const Page = ({params : {locale}}) => {
  console.log({allCaseStudies})
  const caseStudyWithLocales = allCaseStudies.filter((caseStudy)=>caseStudy.key === locale);
  return (
  <>
  <div className='custom-container-sm   '>
  <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-20">
          {caseStudyWithLocales.map((study) => (
        
           <div className='border-text-grey border-2 p-10 rounded-lg'>
           <div>
           <Link href={study.url as string} target='_blank' className='green-color' >

           <h3 className='text-3xl'>{study.title}</h3>
           </Link>
            <p className='text-text-grey text-xl my-5'>{study.summary}</p>
            </div>
            <div>
              <span className='text-xl'>
                {formatDate(study.date)}
              </span>
              </div>
           </div>
          ))}
        </div>
  </div>
  </>
  )
}

export default Page


function formatDate(propDate) {
  const date = new Date(propDate)
  const nth = (day) => {
    if (day > 3 && day < 21) return 'th';
    switch (day % 10) {
      case 1: return "st";
      case 2: return "nd";
      case 3: return "rd";
      default: return "th";
    }
  }

  const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const day = date.getDate();
  const monthIndex = date.getMonth();
  const year = date.getFullYear();

  return `${day}${nth(day)} ${monthNames[monthIndex]} ${year}`;
}
