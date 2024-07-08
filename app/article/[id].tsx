import { View, Text, StyleSheet, Image, Platform, TouchableOpacity } from 'react-native'
import { IconButton } from 'react-native-paper'
import { useLocalSearchParams } from 'expo-router'
import { useSelector } from 'react-redux'
import { RootState } from '@/state/store'
import { useNavigation } from '@react-navigation/native'

const ArticlePage = () => {
  const navigation = useNavigation()
  const { id } = useLocalSearchParams()
  const article = useSelector((state: RootState) => state.articles.list.find(article => article.source.id === id))

  if (!article) {
    return (
      <View style={styles.container}>
        <Text>Article not found</Text>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <IconButton
        icon="arrow-left"
        iconColor="#090909"
        background="#fff"
        size={24}
        onPress={() => navigation.goBack()}
        style={styles.backButton}
      />
      <Image source={{ uri: article.urlToImage }} style={styles.image} />
      <View style={styles.content}>
        <Text style={styles.category}>{article.source.name.toUpperCase()}</Text>
        <Text style={styles.title}>{article.title}</Text>
        <Text style={styles.description}>{article.description}</Text>
      </View>
      <View style={styles.footer}>
        <TouchableOpacity style={styles.shareButton} onPress={() => { }}>
          <Text style={styles.shareButtonText}>Share</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.fullArticleButton} onPress={() => { }}>
          <Text style={styles.fullArticleButtonText}>Full article</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 0,
    backgroundColor: '#fefefe'
  },
  backButton: {
    position: 'absolute',
    top: Platform.OS === 'ios' ? 40 : 20,
    left: 10,
    backgroundColor: '#fefefe',
    zIndex: 10
  },
  image: {
    width: '100%',
    height: 300,
    marginBottom: 20
  },
  content: {
    flex: 1,
    padding: 20
  },
  category: {
    fontSize: 14,
    color: '#888',
    marginBottom: 5
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10
  },
  description: {
    fontSize: 16,
    lineHeight: 24
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 20,
    marginBottom: 20
  },
  shareButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: 'transparent'
  },
  shareButtonText: {
    color: '#6200ee',
    fontSize: 16,
    fontWeight: 'bold'
  },
  fullArticleButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#6200ee',
    borderRadius: 5
  },
  fullArticleButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold'
  }
})

export default ArticlePage
