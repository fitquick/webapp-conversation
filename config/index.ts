import type { AppInfo } from '@/types/app'

export const APP_ID = process.env.NEXT_PUBLIC_APP_ID as string
export const API_KEY = process.env.NEXT_PUBLIC_API_KEY as string
export const API_URL = process.env.NEXT_PUBLIC_API_URL as string

export const APP_INFO: AppInfo = {
  title: 'Chat APP',
  description: '',
  copyright: '',
  privacy_policy: '',
  default_language: 'ja',
}

export const isShowPrompt = true
export const promptTemplate = 'あなたは優秀なアシスタントです。'
export const API_PREFIX = '/api'
export const LOCALE_COOKIE_NAME = 'locale'
export const DEFAULT_VALUE_MAX_LEN = 48
