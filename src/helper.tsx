interface Dictionary<T> {
  [key: string]: T
}
import * as Style from 'csstype'
import * as React from 'react'
/**
 * 指令不能写在这里面
 */

interface ElementOptions<
  Attrs extends HTMLElement = HTMLDivElement,
  On extends Dictionary<Function> = Dictionary<Function>
> {
  /**
   * normal HTML attributes
   */
  attrs?: Partial<Attrs>
  /**
   * DOM props
   */
  domProps?: Partial<DOMProps>
  /**
   * Event handlers are nested under "on", though
     modifiers such as in v-on:keyup.enter are not
     supported. You'll have to manually check the
     keyCode in the handler instead.
   */
  on?: On
  /**
   * class is a special module, same API as `v-bind:class`
   */
  class?: Dictionary<boolean>
  /**
   * style is also same as `v-bind:style`
   */
  style?: Style.Properties
  /**
   * other special top-level properties
   */
  key?: string
  ref?: string
  /**
   * assign the `ref` is used on elements/components with v-for
   */
  refInFor?: boolean
}

interface DOMProps {
  innerHTML: string
}

interface ComponentOptions<
  Props extends object = {},
  On extends Dictionary<Function> = Dictionary<Function>
> extends ElementOptions<HTMLDivElement, On> {
  /**
   * Component props
   */
  props?: Partial<Props>
  /**
   * For components only. Allows you to listen to
     native events, rather than events emitted from
     the component using vm.$emit.
   */
  nativeOn?: Partial<Record<keyof HTMLElementEventMap, Function>>
  slot?: string
}

/**
 * 组件属性
 */
export const componentOptions = <
  Props extends object = {},
  On extends Dictionary<Function> = Dictionary<Function>
>(
  options: ComponentOptions<Props, On> = {}
) => {
  return options
}
/**
 * 原生 html 标签
 */
export const elementOptions = <
  Attrs extends HTMLElement = HTMLDivElement,
  On extends Dictionary<Function> = Dictionary<Function>
>(
  options: ElementOptions<Attrs, On> = {}
) => {
  return options
}

// const el = document.createElement('div')
