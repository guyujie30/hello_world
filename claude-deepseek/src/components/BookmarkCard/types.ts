/**
 * BookmarkCard 组件类型定义
 */

export interface BookmarkCardProps {
  /** 书签标题 */
  title: string;
  /** 书签 URL */
  url: string;
  /** 书签描述 */
  description?: string;
  /** 标签列表 */
  tags?: string[];
  /** 点击卡片的回调 */
  onClick?: (url: string) => void;
  /** 自定义类名 */
  className?: string;
}
