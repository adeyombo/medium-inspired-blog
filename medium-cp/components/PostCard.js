import Image from 'next/image'
import Logo from '../static/author.jpg'
import { FiBookmark } from 'react-icons/fi'
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { getDoc, doc } from 'firebase/firestore';
import { db } from '../firebase';

const styles = {
  wrapper: `flex max-w-[46rem] h-[10rem] items-center gap-[1rem] cursor-pointer`,
  postDetails: `flex flex-[2.5] flex-col`,
  authorContainer: `flex gap-[.4rem]`,
  authorImageContainer: `grid place-items-center rounded-full overflow-hidden h-[1.4rem] w-[1.4rem]`,
  authorImage: 'object-contain',
  authorName: `font-semibold`,
  title: `font-bold text-2xl`,
  brief: 'text-[#787878]',
  category: `bg-[#F2F3F2] px-3 py-1 rounded-full`,
  articleDetails: `my-2 text-[.8rem]`,
  detailsContainer: `flex items-center justify-between text-[#7a7a7a]`,
  bookmarkContainer: `cursor-pointer`,
  thumbnailContainer: `flex-1`,
  image: `object-cover`
}

const PostCard = ({ post }) => {
  const [authorData, setAuthorData] = useState(null);

  useEffect(() => {
    const getAuthorData = async () => {
      setAuthorData(
        (await getDoc(doc(db, 'users', post.data.author))).data()
      );
    }
    getAuthorData()
  }, [])

  return (
    <Link href={`/post/${post.id}`}>
      <div className={styles.wrapper}>
        <div className={styles.postDetails}>
          <div className={styles.authorContainer}>
            <div className={styles.authorImageContainer}>
              <Image
                className={styles.authorImage}
                src={`https://res.cloudinary.com/demo/image/fetch/${authorData?.imageUrl}`}
                width={40}
                height={40}
              />
            </div>
            <div className={styles.authorName}>
              {authorData?.name}
            </div>
          </div>

          <h1 className={styles.title}>{post.data.title}</h1>
          <div className={styles.brief}>{post.data.brief}</div>
          <div className={styles.detailsContainer}>
            <span className={styles.articleDetails}>
              {new Date(post.data.postedOn).toLocaleString('en-US', {
                day: 'numeric',
                month: 'short',
              })} • {post.data.postLength} min read • <span className={styles.category}>{post.data.category}</span></span>
            <span className={styles.bookmarkContainer}>
              <FiBookmark className='h-5 w-5' />
            </span>
          </div>
        </div>
        <div className={styles.thumbnailContainer}>
          <Image
            className={styles.image}
            height={100}
            width={100}
            src={`https://res.cloudinary.com/demo/image/fetch/${post.data.bannerImage}`}
          />
        </div>
      </div>
    </Link>
  )
}

export default PostCard