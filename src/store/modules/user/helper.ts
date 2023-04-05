import { ss } from '@/utils/storage'

const LOCAL_NAME = 'userStorage'

export interface UserInfo {
  avatar: string
  name: string
  description: string
}

export interface UserState {
  userInfo: UserInfo
}

export function defaultSetting(): UserState {
  return {
    userInfo: {
      avatar: 'https://pan.kyhin.com/d/aliyun/x86_soft/lin.png?sign=whJVdi0V0Oh_DqjZ6JKmIr3Hwi_lX3BTD4OMiUO_qR4=:0',
      name: 'Kyhin Assistant',
      description: 'Power by chatGPT',
    },
  }
}

export function getLocalState(): UserState {
  const localSetting: UserState | undefined = ss.get(LOCAL_NAME)
  return { ...defaultSetting(), ...localSetting }
}

export function setLocalState(setting: UserState): void {
  ss.set(LOCAL_NAME, setting)
}
