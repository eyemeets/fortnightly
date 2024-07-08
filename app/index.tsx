import { useEffect } from 'react'
import { View, Text, StyleSheet, Image, FlatList, ListRenderItem } from 'react-native'
import { Card } from 'react-native-paper'
import { useNavigation } from 'expo-router'
import { useDispatch, useSelector } from 'react-redux'
import { fetchArticles, setCurrentArticle } from '../state/article'
import { RootState, AppDispatch } from '../state/store'
import { Article, RootStackParamList } from '../types/state'
import { StackNavigationProp } from '@react-navigation/stack'
import { getTimeAgo } from '@/utils'

const HomePage = () => {
  const dispatch = useDispatch<AppDispatch>()
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>()
  const { list: articles, status, error } = useSelector((state: RootState) => state.articles)

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchArticles())
    }
  }, [dispatch, status])

  const renderItem: ListRenderItem<Article> = ({ item, index }) => {
    if (index === 0) {
      return (
        <Card style={styles.heroCard} onPress={() => {
          dispatch(setCurrentArticle(item))
          navigation.navigate('article/[id]', { id: item.source.id, title: item.title })
        }}>
          <Card.Cover className="rounded-[5px]" source={{ uri: item.urlToImage }} />
          <Card.Content className="px-3">
            <Text style={styles.timestamp}>{getTimeAgo(item.publishedAt)}</Text>
            <Text style={styles.heroTitle}>{item.title}</Text>
          </Card.Content>
        </Card>
      )
    } else {
      return (
        <Card className="shadow-none rounded-none" style={styles.articleCard} onPress={() => {
          dispatch(setCurrentArticle(item))
          navigation.navigate('article/[id]', { id: item.source.id, title: item.title })
        }}>
          <View className="gap-x-5" style={styles.articleRow}>
            <View style={styles.textContainer}>
              <Text style={styles.timestamp}>{getTimeAgo(item.publishedAt)}</Text>
              <Text style={styles.articleTitle}>{item.title}</Text>
            </View>
            <Image className="rounded-[5px]" source={{ uri: item.urlToImage }} style={styles.articleImage} />
          </View>
        </Card>
      )
    }
  }

  if (status === 'loading') {
    return <Text>Loading...</Text>
  }

  if (status === 'failed') {
    return <Text>Error: {error}</Text>
  }

  return (
    <FlatList
      data={articles}
      renderItem={renderItem}
      keyExtractor={(item) => item.title}
      contentContainerStyle={styles.container}
    />
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f5f5f5'
  },
  heroCard: {
    marginBottom: 0,
    backgroundColor: '#f5f5f5',
    shadowColor: '#f5f5f5',
    shadowOffset: {
      width: 0,
      height: 0
    },
    shadowOpacity: 0,
    shadowRadius: 0,
    elevation: 3,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0'
  },
  heroTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 10
  },
  timestamp: {
    color: '#212121',
    fontSize: 12,
    fontWeight: 'bold',
    marginTop: 5
  },
  articleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  articleCard: {
    display: 'flex',
    marginBottom: 20,
    backgroundColor: '#f5f5f5',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
    padding: 10
  },
  textContainer: {
    flex: 1,
    paddingRight: 0
  },
  articleTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 5
  },
  articleImage: {
    width: 80,
    height: 80
  }
})


export default HomePage
