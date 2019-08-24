import { ofType } from 'vue-tsx-support'
import {
  Alert,
  Aside,
  Autocomplete,
  Breadcrumb,
  Badge,
  BreadcrumbItem,
  Button,
  ButtonGroup,
  Card,
  Cascader,
  Carousel,
  CarouselItem,
  Checkbox,
  CheckboxButton,
  CheckboxGroup,
  Col,
  Collapse,
  CollapseItem,
  ColorPicker,
  Container,
  DatePicker,
  Dialog,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  Footer,
  Form,
  FormItem,
  Header,
  Input,
  InputNumber,
  Image,
  Main,
  Menu,
  MenuItem,
  MenuItemGroup,
  OptionGroup,
  Pagination,
  Popover,
  Progress,
  Rate,
  Radio,
  RadioButton,
  RadioGroup,
  Row,
  Select,
  Slider,
  Step,
  Steps,
  Submenu,
  Switch,
  Table,
  TableColumn,
  Tabs,
  TabPane,
  Tag,
  Timeline,
  TimelineItem,
  TimePicker,
  TimeSelect,
  Tooltip,
  Transfer,
  Tree,
  Upload,
  Divider,
  Link,
  Icon,
  Calendar,
  Backtop,
  PageHeader,
  Avatar,
  Drawer,
} from 'element-ui'
import { TreeData } from 'element-ui/types/tree'

export const ElAlert = ofType<Partial<Alert>>().convert(Alert)
export const ElAside = ofType<Partial<Aside>>().convert(Aside)
export const ElAutocomplete = ofType<Partial<Autocomplete>>().convert(
  Autocomplete
)
export const ElBadge = ofType<Partial<Badge>>().convert(Badge)
export const ElBreadcrumb = ofType<Partial<Breadcrumb>>().convert(Breadcrumb)

export const ElBreadcrumbItem = ofType<Partial<BreadcrumbItem>>().convert(
  BreadcrumbItem
)

export const ElButton = ofType<Partial<Button>>().convert(Button)

export const ElButtonGroup = ofType<Partial<ButtonGroup>>().convert(ButtonGroup)

export const ElCard = ofType<Partial<Card>>().convert(Card)

export const ElCascader = ofType<Partial<Cascader>>().convert(Cascader)

export const ElCarousel = ofType<Partial<Carousel>>().convert(Carousel)

export const ElCarouselItem = ofType<Partial<CarouselItem>>().convert(
  CarouselItem
)

export const ElCheckbox = ofType<Partial<Checkbox>>().convert(Checkbox)

export const ElCheckboxButton = ofType<Partial<CheckboxButton>>().convert(
  CheckboxButton
)

export const ElCheckboxGroup = ofType<Partial<CheckboxGroup>>().convert(
  CheckboxGroup
)

export const ElCol = ofType<Partial<Col>>().convert(Col)

export const ElCollapse = ofType<Partial<Collapse>>().convert(Collapse)

export const ElCollapseItem = ofType<Partial<CollapseItem>>().convert(
  CollapseItem
)

export const ElColorPicker = ofType<Partial<ColorPicker>>().convert(ColorPicker)

export const ElContainer = ofType<Partial<Container>>().convert(Container)

export const ElDatePicker = ofType<Partial<DatePicker>>().convert(DatePicker)

export const ElDialog = ofType<Partial<Dialog>>().convert(Dialog)

export const ElDropdown = ofType<Partial<Dropdown>>().convert(Dropdown)

export const ElDropdownItem = ofType<Partial<DropdownItem>>().convert(
  DropdownItem
)

export const ElDropdownMenu = ofType<Partial<DropdownMenu>>().convert(
  DropdownMenu
)

export const ElFooter = ofType<Partial<Footer>>().convert(Footer)

export const ElForm = ofType<Partial<Form>>().convert(Form)

export const ElFormItem = ofType<Partial<FormItem>>().convert(FormItem)

export const ElHeader = ofType<Partial<Header>>().convert(Header)

export const ElInput = ofType<Partial<Input>>().convert(Input)

export const ElInputNumber = ofType<Partial<InputNumber>>().convert(InputNumber)

export const ElMain = ofType<Partial<Main>>().convert(Main)

export const ElMenu = ofType<Partial<Menu>>().convert(Menu)

export const ElMenuItem = ofType<Partial<MenuItem>>().convert(MenuItem)

export const ElMenuItemGroup = ofType<Partial<MenuItemGroup>>().convert(
  MenuItemGroup
)

// export const ElOption = ofType<Partial<Option>>().convert(Option)

export const ElOptionGroup = ofType<Partial<OptionGroup>>().convert(OptionGroup)

export const ElPagination = ofType<Partial<Pagination>>().convert(Pagination)

export const ElPopover = ofType<Partial<Popover>>().convert(Popover)

export const ElProgress = ofType<Partial<Progress>>().convert(Progress)

export const ElRate = ofType<Partial<Rate>>().convert(Rate)

export const ElRadio = ofType<Partial<Radio>>().convert(Radio)

export const ElRadioButton = ofType<Partial<RadioButton>>().convert(RadioButton)

export const ElRadioGroup = ofType<Partial<RadioGroup>>().convert(RadioGroup)

export const ElRow = ofType<Partial<Row>>().convert(Row)

export const ElSelect = ofType<Partial<Select>>().convert(Select)

export const ElSlider = ofType<Partial<Slider>>().convert(Slider)

export const ElStep = ofType<Partial<Step>>().convert(Step)

export const ElSteps = ofType<Partial<Steps>>().convert(Steps)

export const ElSubmenu = ofType<Partial<Submenu>>().convert(Submenu)

export const ElSwitch = ofType<Partial<Switch>>().convert(Switch)

export const ElTable = ofType<Partial<Table>>().convert(Table)

export const ElTableColumn = ofType<Partial<TableColumn>>().convert(TableColumn)

export const ElTabs = ofType<Partial<Tabs>>().convert(Tabs)

export const ElTabPane = ofType<Partial<TabPane>>().convert(TabPane)

export const ElTag = ofType<Partial<Tag>>().convert(Tag)

export const ElTimeline = ofType<Partial<Timeline>>().convert(Timeline)

export const ElTimelineItem = ofType<Partial<TimelineItem>>().convert(
  TimelineItem
)

export const ElTimePicker = ofType<Partial<TimePicker>>().convert(TimePicker)

export const ElTimeSelect = ofType<Partial<TimeSelect>>().convert(TimeSelect)

export const ElTooltip = ofType<Partial<Tooltip>>().convert(Tooltip)

export const ElTransfer = ofType<Partial<Transfer>>().convert(Transfer)
/**
 * 传入泛型
 */
export const getElTree = <K extends any = any, D extends any = TreeData>() => {
  return ofType<Partial<Tree<K, D>>>().convert(Transfer)
}

export const ElUpload = ofType<Partial<Upload>>().convert(Upload)

export const ElDivider = ofType<Partial<Divider>>().convert(Divider)

export const ElLink = ofType<Partial<Link>>().convert(Link)

export const ElImage = ofType<Partial<Image>>().convert(Image)

export const ElIcon = ofType<Partial<Icon>>().convert(Icon)

export const ElCalendar = ofType<Partial<Calendar>>().convert(Calendar)

export const ElBacktop = ofType<Partial<Backtop>>().convert(Backtop)

export const ElPageHeader = ofType<Partial<PageHeader>>().convert(PageHeader)

export const ElAvatar = ofType<Partial<Avatar>>().convert(Avatar)
export const ElDrawer = ofType<Partial<Drawer>>().convert(Drawer)
