import Author from '../../static/author.jpg';
import { AiFillPlayCircle } from 'react-icons/ai';
import Image from 'next/image'
import { IoLogoTwitter } from 'react-icons/io'
import { FaFacebook } from 'react-icons/fa'
import { GrLinkedin } from 'react-icons/gr'
import { HiOutlineLink } from 'react-icons/hi'
import { BiBookmarks } from 'react-icons/bi'
import { FiMoreHorizontal } from 'react-icons/fi'
import BannerImage from '../../static/banner.png'

const styles = {
  wrapper: `flex items-center justify-center border-l border-r flex-[3]`,
  content: `h-screen w-full overflow-scroll p-[2rem]`,
  postHeaderContainer: `flex justify-between items-center mt-[2.2rem] mb-[1.2rem]`,
  authorContainer: `flex gap-[1rem] `,
  authorProfileImageContainer: `h-[3rem] w-[3rem] grid center rounded-full overflow-hidden`,
  image: `object-cover`,
  column: `flex-1 flex flex-col justify-center`,
  postDetails: `flex gap-[.2rem] text-[#787878]`,
  listenButton: `flex items-center gap-[.2rem] text-[#1A8917]`,
  socials: `flex gap-[1rem] text-[#787878] cursor-pointer`,
  space: `w-[.5rem]`,
  bannerContainer: `h-[18rem] w-full grid center overflow-hidden mb-[2rem]`,
  articleMainContainer: `flex flex-col gap-[1rem]`,
}

const Articlemain = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <div className={styles.postHeaderContainer}>
          <div className={styles.authorContainer}>
            <div className={styles.authorProfileImageContainer}>
              <Image
                src={Author}
                className={styles.image}
                width={100}
                height={100}
              />
            </div>

            <div className={styles.column}>
              <div>John Doe</div>
              <div className={styles.postDetails}>
                <span>Aug 20 • 5 min read • </span><span className={styles.listenButton}><AiFillPlayCircle /> Listen</span>
              </div>
            </div>
          </div>

          <div className={styles.socials}>
            <IoLogoTwitter />
            <FaFacebook />
            <GrLinkedin />
            <HiOutlineLink />
            <div className={styles.space} />
            <BiBookmarks />
            <FiMoreHorizontal />
          </div>
        </div>

        <div className={styles.articleMainContainer}>
          <div className={styles.bannerContainer}>
            <Image
              className={styles.image}
              src={BannerImage}
              height={100}
              width={100}
            />
          </div>
        
        </div>
      </div>
    </div>
  )
}

export default Articlemain