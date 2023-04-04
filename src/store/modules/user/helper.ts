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
      avatar: 'https://cn-beijing-data.aliyundrive.net/MuzBBg4r%2F157391%2F628b429677908807ac6a4804be65cadd0fc3d62b%2F628b429644bbbde57db74cda91fa3b234db8a7c1?di=bj29&dr=157391&f=63fbfec7dc9e1fe9c63a44ce9ee34228ebbc3d6d&response-content-disposition=attachment%3B%20filename%2A%3DUTF-8%27%27lin.png&security-token=CAIS%2BgF1q6Ft5B2yfSjIr5bTGvbXv6ptgJu8RW3ytXoPNcsZgZCTgzz2IHFPeHJrBeAYt%2FoxmW1X5vwSlq5rR4QAXlDfNUWIIGvKqVHPWZHInuDox55m4cTXNAr%2BIhr%2F29CoEIedZdjBe%2FCrRknZnytou9XTfimjWFrXWv%2Fgy%2BQQDLItUxK%2FcCBNCfpPOwJms7V6D3bKMuu3OROY6Qi5TmgQ41Uh1jgjtPzkkpfFtkGF1GeXkLFF%2B97DRbG%2FdNRpMZtFVNO44fd7bKKp0lQLukMWr%2Fwq3PIdp2ma447NWQlLnzyCMvvJ9OVDFyN0aKEnH7J%2Bq%2FzxhTPrMnpkSlacGoABamm%2FyljcZUadsoR1kTltCiim%2Flb5yASwITzTdfZrlC1aSWh%2FOnT2hvDa82GurI0f1ETJnUGEdbz3gFiwYvYQ3hJT9Pub4chQWuKCWPrmDrfsA2MX%2F9s2wkUO9j9xSEl%2FDPjlnGrXgBKUUcpVZx0St2sOzoUA80Eh3PyUxuQLiLg%3D&u=254808010963075794&x-oss-access-key-id=STS.NUfQLcRuL7YWGKCQzZ9D5nU8a&x-oss-expires=1680610788&x-oss-signature=fQkM5DOTP76x2g8tFIVyd0EFQR9wFpoaA2dl65FclUY%3D&x-oss-signature-version=OSS2',
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
