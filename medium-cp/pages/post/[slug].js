import ReadersNav from '../../components/post/ReadersNav'
import Recommendations from '../../components/post/Recommendations'
import ArticleMain from '../../components/post/ArticleMain'

const styles = {
  content: `flex`
}

const Post = () => {
  return (
    <div className={styles.content}>
      <ReadersNav />
      <ArticleMain />
      <Recommendations />
    </div>
  )
}

export default Post