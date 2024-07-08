import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
dayjs.extend(relativeTime)

export const getTimeAgo = (timestamp: string) => {
  return dayjs(timestamp).fromNow()
}

export function generateRandomId(): string {
  return Math.random().toString(36).substring(2, 9) + Date.now().toString(36)
}
