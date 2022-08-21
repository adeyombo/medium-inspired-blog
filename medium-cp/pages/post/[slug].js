import ReadersNav from '../../components/post/ReadersNav'
import Recommendations from '../../components/post/Recommendations'

const styles = {
  content: `flex`
}

const Post = () => {
  return (
    <div className={styles.content}>
      <ReadersNav />
      <div>Article main will go here...</div>
      <Recommendations />
    </div>
  )
}

export default Post