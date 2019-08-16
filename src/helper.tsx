interface Dictionary<T> {
  [key: string]: T
}
import * as Style from 'csstype'
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
  attrs?: Partial<ExcludeSubType<Attrs, Function>>
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
  On extends Dictionary<Function> = Dictionary<Function>,
  Attrs extends HTMLElement = HTMLDivElement
> extends ElementOptions<Attrs, On> {
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
  On extends Dictionary<Function> = Dictionary<Function>,
  Attrs extends HTMLElement = HTMLDivElement
>(
  options: ComponentOptions<Props, On, Attrs> = {}
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
export type SubType<Base, Condition> = Pick<
  Base,
  { [Key in keyof Base]: Base[Key] extends Condition ? Key : never }[keyof Base]
>

export type ExcludeSubType<Base, Condition> = Pick<
  Base,
  { [Key in keyof Base]: Base[Key] extends Condition ? never : Key }[keyof Base]
>
