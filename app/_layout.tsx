import { Stack } from 'expo-router'
import { Provider as PaperProvider } from 'react-native-paper'
import { Provider as ReduxProvider } from 'react-redux'
import store from '../state/store'

const Layout = () => {
  return (
    <ReduxProvider store={store}>
      <PaperProvider>
        <Stack>
          <Stack.Screen name="index" options={{ title: 'Fortnightly News' }} />
          <Stack.Screen name="article/[id]" options={{ headerShown: false }} />
        </Stack>
      </PaperProvider>
    </ReduxProvider>
  )
}

export default Layout
