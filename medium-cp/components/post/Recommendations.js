import Image from 'next/image';
import { AiOutlineSearch } from 'react-icons/ai';
import { MdMarkEmailUnread } from 'react-icons/md';
import ReplitLogo from '../../static/replit.png';
import TutorialImg from '../../static/tutorial.jpg';
import CPLogo from '../../static/cp.png';
import Author from '../../static/author.jpg';
import JSLogo from '../../static/jsLogo.png';

const styles = {
  wrapper: `h-screen min-w-[10rem] max-w-[30rem] flex-[1.2] p-[2rem]`,
  accentedButton: `bg-black text-white text-sm rounded-full flex justify-center item-center my-[2rem] py-[.6rem]`,
  searchBar: `flex items-center gap-[.6rem] h-[2.6rem] p-[1rem] border rounded-full`,
  searchInput: `border-none outline-none bg-none w-full`,
  authorContainer: `my-[2rem]`,
  authorProfileImageContainer: `w-[5rem] h-[5rem] overflow-hidden rounded-full`,
  authorName: `font-semibold mb-[.2rem] mt-[1rem]`,
  authorFollowing: `text-[#787878] text-[.9rem]`,
  authorActions: `flex gap-[.6rem] my-[1rem]`,
  authorButton: `bg-[#1A8917] text-white rounded-full px-[.6rem] py-[.4rem] text-sm cursor-pointer`,
  recommendationAuthorProfileImageContainer: `rounded-full overflow-hidden w-[1.4rem] h-[1.4rem]`,
  recommendationAuthorName: `text-sm`,
  recommendationAuthorContainer: `flex items-center gap-[.6rem]`,
  recommendationTitle: `font-bold`,
  recommendationThumbnailContainer: `flex flex-1 items-center justify-center h-[4rem] w-[4rem]`,
  recommendationThumbnail: `object-cover`,
  articleContentWrapper: `flex items-center justify-between my-[1rem] cursor-pointer`,
  articleContent: `flex-[4]`,
}

const Recommendations = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.accentedButton}>Get unlimited access</div>

      <div className={styles.searchBar}>
        <AiOutlineSearch />
        <input
          className={styles.searchInput}
          type='text'
          placeholder='Search'
        />
      </div>

      <div className={styles.authorContainer}>
        <div className={styles.authorProfileImageContainer}>
          <Image
            src={Author}
            width={100}
            height={100}
          />
        </div>
        <div className={styles.authorName}>John Doe</div>
        <div className={styles.authorFollowing}>5M followers</div>
        <div className={styles.authorActions}>
          <button className={styles.authorButton}>Follow</button>
          <button className={styles.authorButton}>
            <MdMarkEmailUnread />
          </button>
        </div>
      </div>

      <div className={styles.recommedationContainer}>
        <div className={styles.title}>More from Medium</div>

        <div className={styles.articlesContainer}>

          {recommendedPosts.map((post) => (
            <div className={styles.articleContentWrapper}>
            <div className={styles.articleContent}>
              <div className={styles.recommendationAuthorContainer}>
                <div className={styles.recommendationAuthorProfileImageContainer}>
                  <Image src={post.author.image} height={100} width={100} />
                </div>
                <div className={styles.recommendationAuthorName}>{post.author.name}</div>
              </div>

              <div className={styles.recommendationTitle}>{post.title}</div>
            </div>

            <div className={styles.recommendationThumbnailContainer}>
              <Image
                className={styles.recommendationThumbnail}
                src={post.image} height={100} width={100}
              />
            </div>

          </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Recommendations

const recommendedPosts = [
  {
    title: `What can you do with Replit?`,
    image: ReplitLogo,
    author: {
      name: `Clever Programmer`,
      image: CPLogo,
    }
  },
  {
    title: `The Ultimate Javascript Course for Beginners by Clever Programmer`,
    image: TutorialImg,
    author: {
      name: `John Doe`,
      image: Author,
    }
  },
  {
    title: `How to Become a Developer in 2022`,
    image: JSLogo,
    author: {
      name: `Clever Programmer`,
      image: CPLogo,
    }
  }
]