import React from 'react'

import { RegisterShortcutType, ShortcutType } from '~/types'

export type ShortcutOptions = {
  darkMode?: 'media' | 'class'
  /**
   * @default 'body.dark'
   */
  darkClassName?: string

  /**
   * 长按 Command 呼出的时间
   * @default 1000
   */
  holdCommandTimeout?: number

  /**
   * 释放 Command 后的 Guide Panel 停留时间
   * @default 1000
   */
  stayCommandTimeout?: number

  /**
   * Guide 打开事件
   */
  onGuidePanelOpen?: () => any
  /**
   * Guide 关闭事件
   */
  onGuidePanelClose?: () => any
}
export type ShortcutContextValue = {
  shortcuts: ShortcutType[]
  registerShortcut: RegisterShortcutType
  options: ShortcutOptions
}
export const ShortcutContext = React.createContext<ShortcutContextValue>({
  shortcuts: [],
  registerShortcut() {
    return () => {}
  },
  options: {},
})
