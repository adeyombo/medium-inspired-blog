import Image from 'next/image'
import Logo from '../static/author.jpg'
import { FiBookmark } from 'react-icons/fi'
import Link from 'next/link';

const styles = {
  wrapper: `flex max-w-[46rem] h-[10rem] items-center gap-[1rem] cursor-pointer`,
  postDetails: `flex flex-[2.5] flex-col`,
  authorContainer: `flex gap-[.4rem]`,
  authorImageContainer: `grid place-items-center rounded-full overflow-hidden h-[1.4rem] w-[1.4rem]`,
  authorImage: 'object-contain',
  authorName: `font-semibold`,
  title: `font-bold text-2xl`,
  briefing: 'text-[#787878]',
  category: `bg-[#F2F3F2] px-3 py-1 rounded-full`,
  articleDetails: `my-2 text-[.8rem]`,
  detailsContainer: `flex items-center justify-between text-[#7a7a7a]`,
  bookmarkContainer: `cursor-pointer`,
  thumbnailContainer: ``
}

const PostCard = () => {
  return (
    <Link href='/post/123'>
      <div className={styles.wrapper}>
        <div className={styles.postDetails}>
          <div className={styles.authorContainer}>
            <div className={styles.authorImageContainer}>
              <Image
                className={styles.authorImage}
                src={Logo}
                width={40}
                height={40}
              />
            </div>
            <div className={styles.authorName}>
              Dale Carnegie
            </div>
          </div>

          <h1 className={styles.title}>How to win friends and influence people</h1>
          <div className={styles.briefing}>Become genuinely interested in other people.</div>
          <div className={styles.detailsContainer}>
            <span className={styles.articleDetails}>Aug 19 • 5 min read • <span className={styles.category}>self development</span></span>
            <span className={styles.bookmarkContainer}>
              <FiBookmark className='h-5 w-5' />
            </span>
          </div>
        </div>
        <div className={styles.thumbnailContainer}>
          <Image
            height={100}
            width={100}
            src={Logo}
          />
        </div>
      </div>
    </Link>
  )
}

export default PostCard